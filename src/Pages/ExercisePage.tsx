import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Description } from '../Components/ExercisePage/Description';
import { ExerciseTitle } from '../Components/Shared/ExerciseTitle';
import { Solution } from '../Components/ExercisePage/Solution';
import { Exercise, Query } from '../Datatypes/datatypes';
import { ScrollableList } from '../Components/Shared/ScrollableList';
import { createQueryListElements } from '../Util/createQueryListElements';
import { Breadcrumbs } from '../Components/ExercisePage/Breadcrumbs';
const EXERCISE_PAGE_BREADCRUMB = 'Exercise Page';

interface IVerifierResult {
  queryResults: Map<string, boolean>;
  hasSyntaxError: boolean;
}

export const ExercisePage = () => {
  const [exercise, setExercise] = useState<Exercise | undefined>();
  const [verifierResult, setVerifierResult] = useState<IVerifierResult>();
  const [queries, setQueries] = useState<Query[]>([]);
  const [file, setFile] = useState<File>();

  const { exerciseID } = useParams();

  /**
   * Any time the exerciseID changes, fetch the related exercises.
   * Happens initially when the value is taken from the url.
   */
  useEffect(() => {
    if (!exerciseID) return;
    fetch(`/api/v1/exercises/${exerciseID}`)
      .then(async (res) => await res.json())
      .then((data) => {
        setExercise(data);
      });
  }, [exerciseID]);

  /**
   * Any time the verifierResult changes, create a list
   */
  useEffect(() => {
    if (!verifierResult) return;
    setQueries([]);

    // For each query that has been through the verifier, we build a list of
    // objects with the query and its success/failure
    for (const [key, value] of Object.entries(verifierResult.queryResults)) {
      setQueries((prev) => [...prev, { query: key, result: value }]);
    }
  }, [verifierResult]);

  /**
   * A click on the 'verify queries' button triggers a verification.
   */
  const handleVerifyClick = async () => {
    if (!exercise || !file) return;
    setQueries(exercise.queries);

    const body = {
      solution: await file.text(),
      queries: exercise.queries,
    };

    fetch('/api/v1/verifiers/verifyta', {
      body: JSON.stringify(body),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(async (response) => {
        return await response.json();
      })
      .then((data) => {
        setVerifierResult(data);
      })
      .catch((error) => console.log(error));
  };

  /**
   * A click on 'submit solution' triggers a submission
   */
  const handleSubmitClick = async () => {
    if (!exercise || !file) return;

    const body = {
      solution: await file.text(),
    };

    fetch(`/api/v1/exercises/${exerciseID}/submissions`, {
      body: JSON.stringify(body),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(async (response) => {
        return await response.json();
      })
      .then((data) => {
        toast.success('Solution Submitted');
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Submission Failed');
      });
  };

  let navigate = useNavigate();
  const routeToStatistics = () => {
    navigate(`statistics/`);
  };

  return (
    <>
      {!exercise && <p>loading...</p>}
      {!!exercise && (
        <div className="bg-[#050C1B] h-screen">
          <>
            <div className="grid grid-rows-2 grid-cols-6 text-white">
              <div className="col-start-1 col-span-2 pl-10 text-white">
                <ExerciseTitle
                  title={exercise.title}
                  breadcrumb={EXERCISE_PAGE_BREADCRUMB}
                />
                <Breadcrumbs />
                <Description description={exercise.description} />
                <div className='pt-5'>
                  <button
                    onClick={routeToStatistics}
                    className="text-sm bg-transparent hover:bg-blue-500 text-white hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded"
                  >
                    View statistics
                  </button>
                </div>
              </div>

              <div className="grid col-start-3 col-span-2 pt-20">
                <Solution file={file} setFile={setFile} />
              </div>

              <div className="grid content-center col-start-5 col-span-2 pr-10">
                <div className="bg-[#111827]">
                  <h3 className="">
                    {' '}
                    <b>Queries</b>
                  </h3>
                  <ScrollableList
                    createDisplayElements={createQueryListElements}
                    elements={!!verifierResult ? queries : exercise.queries}
                  />
                </div>

                <div className='pt-5 grid grid-cols-2 grid-rows-1 gap-x-8 gap-y-4'>
                  <div className='grid'>
                  <button
                    onClick={handleVerifyClick}
                    className="text-xl bg-transparent hover:bg-blue-500 text-white hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded"
                  >
                    Run queries
                  </button>
                  </div>

                  <div className='grid'>
                  <button
                    onClick={handleSubmitClick}
                    className="text-xl bg-transparent hover:bg-blue-500 text-white hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded"
                  >
                    Submit solution
                  </button>
                  </div>
                </div>
              </div>

              <Toaster />
            </div>
          </>
        </div>
      )}
    </>
  );
};

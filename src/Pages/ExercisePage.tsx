import { useParams } from 'react-router-dom';
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
  // React Hooks --------------
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
   * Any time the verifierResult changes, update the queries results (success/failure)
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


  // Custom functions (not hooks) --------------

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

  

  return (
    <>
      {!exercise && <p>loading...</p>}
      {!!exercise && (
        <>
          <ExerciseTitle
            title={exercise.title}
            breadcrumb={EXERCISE_PAGE_BREADCRUMB}
          />
          <Breadcrumbs />
          <div className="w-full flex flex-row h-4/6">
            <Description description={exercise.description} />
            <Solution file={file} setFile={setFile} />
            <div className="flex w-2/6 h-4/6 pr-6 pb-6 pl-6 flex-col">
              <h3 className="flex p-0 m-0 mb-2 font-light">Queries</h3>
              <ScrollableList
                className="h-64"
                createDisplayElements={createQueryListElements}
                elements={!!verifierResult ? queries : exercise.queries}
              />
              <div className="flex flex-row relative">
                <button
                  onClick={handleVerifyClick}
                  className="fixed flex right-28 bottom-1"
                >
                  Run queries
                </button>
                <button
                  onClick={handleSubmitClick}
                  className="fixed flex right-1 bottom-1"
                >
                  Submit solution
                </button>
              </div>
            </div>
          </div>
          <Toaster />
        </>
      )}
    </>
  );
};

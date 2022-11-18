import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Description } from '../Components/ExercisePage/Description';
import { ExerciseTitle } from '../Components/Shared/ExerciseTitle';
import { Solution } from '../Components/ExercisePage/Solution';
import { Exercise } from '../Datatypes/datatypes';
import { ScrollableList } from '../Components/Shared/ScrollableList';
import { createQueryListElements } from '../Util/createQueryListElements';

const EXERCISE_PAGE_BREADCRUMB = 'Exercise Page';

export const ExercisePage = () => {
  const [exercise, setExercise] = useState<Exercise | undefined>();
  const [queriesResult, setQueriesResult] = useState();
  const [file, setFile] = useState<File>();

  const { exerciseID } = useParams();

  useEffect(() => {
    if (!exerciseID) return;
    fetch(`/api/v1/exercises/${exerciseID}`)
      .then(async (res) => await res.json())
      .then((data) => {
        setExercise(data);
      });
  }, [exerciseID]);

  const handleVerifyClick = async () => {
    if (!exercise || !file) return;

    console.log(exercise.queries);
    
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
        console.log(response);
        return await response.json();
      })
      .then((data) => {
        console.log(data);
        setQueriesResult(data);
      })
      .catch((error) => console.log(error));
    console.log(queriesResult);
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
          <div className="w-full flex flex-row h-4/6">
            <Description description={exercise.description} />
            <Solution file={file} setFile={setFile} />
            <div className="flex w-2/6 h-4/6 pr-6 pb-6 pl-6 flex-col">
              <h3 className="flex p-0 m-0 mb-2 font-light">Queries</h3>
              <ScrollableList
                className="h-64"
                createDisplayElements={createQueryListElements}
                elements={!!queriesResult ? queriesResult : exercise.queries}
              />
              <div className="flex flex-row relative">
                <button
                  onClick={handleVerifyClick}
                  className="fixed flex right-28 bottom-1"
                >
                  Run queries
                </button>
                <button className="fixed flex right-1 bottom-1">
                  Submit solution
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

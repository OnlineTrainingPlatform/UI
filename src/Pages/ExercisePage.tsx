import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Description } from '../Components/ExercisePage/Description';
import { ExerciseTitle } from '../Components/Shared/ExerciseTitle';
import { Queries } from '../Components/ExercisePage/Queries';
import { Solution } from '../Components/ExercisePage/Solution';
import { Exercise } from '../Datatypes/datatypes';

const EXERCISE_PAGE_BREADCRUMB = 'Exercise Page';

export const ExercisePage = () => {
  const [exercise, setExercise] = useState<Exercise | undefined>();
  const { exerciseID } = useParams();

  useEffect(() => {
    if (!exerciseID) return;
    fetch(`/api/v1/exercises/${exerciseID}`)
      .then(async (res) => await res.json())
      .then((data) => {
        setExercise(data);
      });
    console.log(exerciseID);
  }, [exerciseID]);

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
            <Solution />
            <Queries />
          </div>
        </>
      )}
    </>
  );
};

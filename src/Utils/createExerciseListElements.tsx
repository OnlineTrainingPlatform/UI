import { ExerciseListElement } from '../Components/LandingPage/ExerciseListElement';
import { Exercise } from '../Datatypes/datatypes';
import { useGetAllExercises } from '../Hooks/getAllExercises';

export const createExerciseListElements = (exercises: Exercise[]) => {
  if (!exercises) {
    return [<></>];
  }
  return !!exercises
    ? exercises.map((exercise) => {
        return (
          <ExerciseListElement
            title={exercise.title}
            description={exercise.description}
          />
        );
      })
    : [<ExerciseListElement title="Loading" description="Loading" />];
};

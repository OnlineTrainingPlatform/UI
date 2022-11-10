import { ExerciseListElement } from '../Components/LandingPage/ExerciseListElement';
import { Exercise } from '../Datatypes/datatypes';

/**
 * Creates JSX elements of type ExerciseListElement from exercises
 * @param exercises list of exercises fetched from the Exercises microservice
 * @returns list of JSX elements
 */
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

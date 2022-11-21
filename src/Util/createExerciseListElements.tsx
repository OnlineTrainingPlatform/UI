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
            key={exercise.id}
            title={exercise.title}
            description={exercise.description}
            exerciseID={exercise.id}
          />
        );
      })
    : [
        <ExerciseListElement
          key="loading"
          title="Loading"
          description="Loading"
          exerciseID="loading"
        />,
      ];
};

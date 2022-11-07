import { ScrollableList } from '../Components/Shared/ScrollableList';
import { useGetAllExercises } from '../Hooks/getAllExercises';
import { createExerciseListElements } from '../Utils/createExerciseListElements';

export const LandingPage = () => {
  const exercises = useGetAllExercises();

  return (
    <>
      <div className="grid grid-cols-2 divide-x flex-wrap">
        <div className="pt-10 ml-4 mr-8">
          <h1 className="font-mono">YourPAAL</h1>
          <h3 className="border-solid font-mono border-t-0 border-l-0 border-r-0 border-b-2 pb-2">
            Your UPPAAl online training and assesment platform
          </h3>
        </div>
        <div className="pt-10">
          <h3>Exercises</h3>
          <ScrollableList
            createDisplayElements={createExerciseListElements}
            elements={exercises}
          />
        </div>
      </div>
    </>
  );
};

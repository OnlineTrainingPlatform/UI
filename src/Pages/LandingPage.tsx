import { ExerciseListElement } from '../Components/LandingPage/ExerciseListElement';
import { ScrollableList } from '../Components/Shared/ScrollableList';
export const LandingPage = () => {
  const listView = [
    <ExerciseListElement
      title="Beginner Transitions"
      description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula"
    />,
    <ExerciseListElement
      title="Intermediate Transitions"
      description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula"
    />,
    <ExerciseListElement
      title="Beginner Locations"
      description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula"
    />,
    <ExerciseListElement
      title="Intermediate Transitions"
      description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula"
    />,
    <ExerciseListElement
      title="Beginner Transitions"
      description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula"
    />,
    <ExerciseListElement
      title="Intermediate Transitions"
      description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula"
    />,
  ];
  return (
    <>
      <div className="grid grid-cols-2 divide-x flex-wrap">
        <div className="pt-10 ml-4 mr-8">
          <h1 className="font-mono">YourPAAL</h1>
          <h3 className="border-solid font-mono border-t-0 border-l-0 border-r-0 border-b-2 pb-2">Your UPPAAl online training and assesment platform</h3>
        </div>
        <div className="pt-10">
          <h3>Exercises</h3>
          <ScrollableList displayList={listView} />
        </div>
      </div>
    </>
  );
};

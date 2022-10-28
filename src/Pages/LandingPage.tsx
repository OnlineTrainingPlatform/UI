import { ExerciseListElement } from '../Components/LandingPage/ExerciseListElement';
import { ScrollableList } from '../Components/Shared/ScrollableList';
export const LandingPage = () => {
  const listView = [
    <ExerciseListElement exercise="Beginner Transitions" description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula" />,
    <ExerciseListElement exercise="Intermediate Transitions" description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula" />,
    <ExerciseListElement exercise="Beginner Locations" description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula" />,
    <ExerciseListElement exercise="Intermediate Transitions" description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula" />,
    <ExerciseListElement exercise="Beginner Transitions" description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula" />,
    <ExerciseListElement exercise="Intermediate Transitions" description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula" />
  ];
  return (
    <>
      <div className="grid grid-cols-2 divide-x flex-wrap">
      <div className="pt-10">
      <h1>YourPAAL</h1>
      <h3>Your UPPAAl online training and assesment platform</h3>
      </div>
      <div className="pt-10">
          <h3>Exercises</h3>
          <ScrollableList displayList={listView}/>
      </div>
      </div>
    </>
  );
};

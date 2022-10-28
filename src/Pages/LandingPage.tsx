import { ExerciseListElement } from '../Components/LandingPage/ExerciseListElement';
import { ScrollableList } from '../Components/Shared/ScrollableList';
export const LandingPage = () => {
  const listView = [
    <ExerciseListElement exercise="a" />,
    <ExerciseListElement exercise="b" />,
    <ExerciseListElement exercise="b" />,
    <ExerciseListElement exercise="b" />,
  ];
  return (
    <>
      <div className="grid grid-cols-2 divide-x">
        <div className="pt-10">
          <h1>YourPAAL</h1>
          <h3>Your UPPAAl online training and assesment platform</h3>
        </div>
        <div className="mt-10 pt-10 inline-flex">
          <ul>
            <ScrollableList displayList={listView} />
            <ScrollableList displayList={listView} />
          </ul>
        </div>
      </div>
    </>
  );
};

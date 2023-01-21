import { ScrollableList } from '../Components/Shared/ScrollableList';
import { createExerciseListElements } from '../Util/createExerciseListElements';
import { useEffect, useState } from 'react';
import { Exercise } from '../Datatypes/datatypes';

export const LandingPage = () => {
  const [exercises, setExercises] = useState<Exercise[]>();

  useEffect(() => {
    fetch('api/v1/exercises')
      .then(async (res) => await res.json())
      .then((data) => {
        setExercises(data);
      });
  }, []);

  return (
    <>
      <div className="grid grid-rows-2 grid-cols-6 flex-wrap text-white">
        <div className="col-start-2 col-span-4 row-span-2 bg-[#111827] pl-10">
          <h1 className="">YourPAAL</h1>
          <h3>Your UPPAAl online training and assesment platform</h3>
        </div>
        <div className="col-start-2 col-span-4 bg-[#111827] pl-10">
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

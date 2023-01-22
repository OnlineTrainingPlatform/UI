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
    <div className="bg-[#050C1B] grid grid-cols-6 grid-rows-6 text-white gap-10 h-screen">
      <>
        <div className="grid col-start-2 col-end-6 row-start-1 row-end-2 bg-[#111827] pl-10">
          <div>
            <h1>YourPAAL</h1>
            <h3 className="pb-10">
              Your UPPAAl online training and assesment platform
            </h3>
          </div>
        </div>

        <div className="grid col-start-2 col-end-6 row-start-2 row-end-6  bg-[#111827] pl-10">
          <h3>Exercises</h3>
          <ScrollableList
            className="h-5/5"
            createDisplayElements={createExerciseListElements}
            elements={exercises}
          />
        </div>
      </>
    </div>
  );
};

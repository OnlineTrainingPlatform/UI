import { useState } from 'react';
import { Exercise } from '../Datatypes/datatypes';
import { createExerciseListElements } from '../Utils/createExerciseListElements';

const URL_API = 'localhost:8000';

export const useGetAllExercises = () => {
  const [exercises, setExercises] = useState<Exercise[] | undefined>();
  // fetch(`http://${URL_API}/api/v1/exercises`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setExercises(data);
  //   })
  //   .catch((e) => {
  //     console.error(e);
  //   });
  if (!exercises){
    setExercises([{id:"0", title:"Beginner Transitions", description:"Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula"}, {id:"1", title:"Intermediate Transitions", description:"Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula"}, {id:"2", title:"Advanced Transitions", description:"Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula"}, {id:"2", title:"Advanced Transitions", description:"Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula"}]);
  }
  return exercises;
};

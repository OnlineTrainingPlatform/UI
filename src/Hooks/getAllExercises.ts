import { useState } from 'react';
import { Exercise } from '../Datatypes/datatypes';

const URL_API = 'localhost:8000';

export const useGetAllExercises = () => {
  const [exercises, setExercises] = useState<Exercise | undefined>();

  fetch(`http://${URL_API}/api/v1/exercises`)
    .then((res) => res.json())
    .then((data) => {
      setExercises(data);
    })
    .catch((e) => {
      console.error(e);
    });
  return exercises;
};

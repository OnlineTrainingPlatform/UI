import { useState } from 'react';
import { Exercise } from '../Datatypes/datatypes';

const URL_API = 'localhost:8000';

export const useGetExerciseByID = async (id: string | undefined) => {
  const [response, setResponse] = useState<Exercise>();

  if (!id) return undefined;

  fetch(`http://${URL_API}/api/v1/exercises/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setResponse(data);
    })
    .catch((e) => {
      console.error(e);
    });

  return response;
};

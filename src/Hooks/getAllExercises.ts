import { useState } from 'react';
import { Exercise } from '../Datatypes/datatypes';
import { createExerciseListElements } from '../Utils/createExerciseListElements';

const URL_API = 'localhost:8000';

export const useGetAllExercises = () => {
  const [exercises, setExercises] = useState<Exercise[] | undefined>();
  if (!exercises) {
    setExercises([
      {
        id: '0',
        title: 'Beginner Transitions',
        description:
          'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula',
        queries: [],
      },
      {
        id: '1',
        title: 'Intermediate Transitions',
        description:
          'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula',
        queries: [],
      },
      {
        id: '2',
        title: 'Advanced Transitions',
        description:
          'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula',
        queries: [],
      },
      {
        id: '2',
        title: 'Advanced Transitions',
        description:
          'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fermentum ligula',
        queries: [],
      },
    ]);
  }
  return exercises;
};

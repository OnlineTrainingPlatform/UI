import { useState } from 'react';
import { QueryListElement } from '../Components/ExercisePage/QueryListElement';

export const useGetAllQueries = () => {
  const [queries, setQueries] = useState<JSX.Element[]>();

  if (!queries) {
    setQueries([
      <QueryListElement query="A<> B.deadlock -> C.deadlock" result={true} />,
      <QueryListElement query="A[] B.final -> C.final_state" result={true} />,
      <QueryListElement query="A<> B.deadlock -> C.deadlock" result={false} />,
      <QueryListElement query="A[] B.final -> C.final_state" result={true} />,
      <QueryListElement query="A<> B.deadlock -> C.deadlock" result={true} />,
      <QueryListElement query="A[] B.final -> C.final_state" result={true} />,
      <QueryListElement query="A<> B.deadlock -> C.deadlock" result={true} />,
      <QueryListElement query="A[] B.final -> C.final_state" result={true} />,
      <QueryListElement query="A<> B.deadlock -> C.deadlock" result={true} />,
      <QueryListElement query="A[] B.final -> C.final_state" result={true} />,
      <QueryListElement query="A<> B.deadlock -> C.deadlock" result={true} />,
      <QueryListElement query="A[] B.final -> C.final_state" result={true} />,
      <QueryListElement query="A<> B.deadlock -> C.deadlock" result={true} />,
      <QueryListElement query="A[] B.final -> C.final_state" result={true} />,
  ])}

  return queries;
};

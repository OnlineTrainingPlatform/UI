import { useState } from 'react';

/**
 * React Hook that is in charge of fetching queries from a single exercise id
 * @param id an exercise ID
 * @returns a list of queries
 */
export const useGetQueriesByID = (id: string) => {
  const [queries, setQueries] = useState<object[]>();

  if (!queries) {
    setQueries([
      { query: 'A<> B.deadlock -> C.deadlock', result: true },
      { query: 'A[] B.final -> C.final_state', result: false },
      { query: 'A<> B.deadlock -> C.deadlock', result: true },
      { query: 'A[] B.final -> C.final_state', result: false },
      { query: 'A<> B.deadlock -> C.deadlock', result: true },
      { query: 'A[] B.final -> C.final_state', result: false },
      { query: 'A<> B.deadlock -> C.deadlock', result: true },
      { query: 'A[] B.final -> C.final_state', result: false },
      { query: 'A<> B.deadlock -> C.deadlock', result: true },
      { query: 'A[] B.final -> C.final_state', result: false },
      { query: 'A<> B.deadlock -> C.deadlock', result: true },
      { query: 'A[] B.final -> C.final_state', result: false },
      { query: 'A<> B.deadlock -> C.deadlock', result: true },
      { query: 'A[] B.final -> C.final_state', result: false },
    ]);
  }

  return queries;
};

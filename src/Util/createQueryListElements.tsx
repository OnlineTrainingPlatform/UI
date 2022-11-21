import { QueryListElement } from '../Components/ExercisePage/QueryListElement';
import { Query } from '../Datatypes/datatypes';

/**
 * Creates JSX elements of type QueryListElement from queries
 * @param queries list of queries fetched from the Submissions microservice
 */
export const createQueryListElements = (queries: Query[]) => {
  if (!queries) {
    return [<></>];
  }
  return queries.map((elem: Query) => {
    return (
      <QueryListElement
        key={elem.query}
        query={elem.query}
        result={!!elem.result ? elem.result : false}
      />
    );
  });
};

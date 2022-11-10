import { QueryListElement } from '../Components/ExercisePage/QueryListElement';
import { Query } from '../Datatypes/datatypes';


/**
 * Creates JSX elements of type QueryListElement from queries
 * @param queries list of queries fetched from the Submissions microservice
 * @returns list of JSX elements
 */
export const createQueryListElements = (queries: Query[]) => {
  if (!queries) {
    return [<></>];
  }
  return queries.map((elem: Query) => {
    return (
      <QueryListElement
        query={elem.query}
        result={!!elem.result ? elem.result : false}
      />
    );
  });
};

import { QueryListElement } from '../Components/ExercisePage/QueryListElement';
import { Query } from '../Datatypes/datatypes';

export const createQueryListElements = (queries: any[]) => {
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

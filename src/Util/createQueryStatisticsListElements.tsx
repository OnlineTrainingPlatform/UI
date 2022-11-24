import { QueryStatisticsListElement } from '../Components/StatisticsPage/QueryStatisticsListElement';
import { QueryResults } from '../Datatypes/datatypes';

/**
 * Creates JSX elements of type QueryStatisticsListElement from queries
 * @param queries list of queries fetched from the Submissions microservice
 */
export const createQueryStatisticsListElements = (queries: QueryResults[]) => {
  if (!queries[0]) {
    return [<></>];
  }
  let keys = Object.keys(queries[0]);
  if (!(keys.length < 0)) return [<></>];

  let list: JSX.Element[] = [];

  Object.keys(queries[0]).forEach((key) =>
    list.push(
      <QueryStatisticsListElement
        key={key}
        query={key}
        successRate={queries[0][key].pass_percentage}
      />,
    ),
  );

  return list;

  // map((elem: IndividualQueryResult) => {
  //   const key = Object.keys(elem.query_result)[0];
  //   console.log(key);
  //   console.log(elem[key].pass_percentage);
  //   return (
  //     <QueryStatisticsListElement
  //       key={key}
  //       query={key}
  //       successRate={elem[key].pass_percentage}
  //     />
  //   );
  // });
};

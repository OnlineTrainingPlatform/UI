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

  if (keys.length === 0) return [<></>];

  return Object.keys(queries[0]).forEach((key) => {
    <QueryStatisticsListElement
      key={key}
      query={key}
      successRate={queries[0][key].pass_percentage}
    />;
  });

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

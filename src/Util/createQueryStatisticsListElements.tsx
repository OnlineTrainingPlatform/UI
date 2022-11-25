import { QueryStatisticsListElement } from '../Components/StatisticsPage/QueryStatisticsListElement';
import { QueryStatistics } from '../Datatypes/datatypes';

/**
 * Creates JSX elements of type QueryStatisticsListElement from queries
 * @param queries list of queries fetched from the Submissions microservice
 */
export const createQueryStatisticsListElements = (
  queries: QueryStatistics[],
) => {
  if (!queries[0]) {
    return [<></>];
  }
  let keys = Object.keys(queries[0].query_result);

  if (keys.length < 0) {
    console.log('Second return');
    return [<></>];
  }

  let list: JSX.Element[] = [];

  Object.keys(queries[0].query_result).forEach((key) => {
    let currentQuery = queries[0].query_result;
    list.push(
      <QueryStatisticsListElement
        key={key}
        query={key}
        passed={currentQuery[key].passes}
        total={currentQuery[key].total}
        successRate={currentQuery[key].pass_percentage}
      />,
    );
  });

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

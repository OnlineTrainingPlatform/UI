import { QueryStatisticsListElement } from '../Components/StatisticsPage/QueryStatisticsListElement';
import { QueryStats } from '../Datatypes/datatypes';

/**
 * Creates JSX elements of type QueryStatisticsListElement from queries
 * @param queries list of queries fetched from the Submissions microservice
 * @returns list of JSX elements
 */
export const createQueryStatisticsListElements = (queries: QueryStats[]) => {
  if (!queries) {
    return [<></>];
  }
  return queries.map((elem: QueryStats) => {
    return (
      <QueryStatisticsListElement
        query={elem.query}
        successRate={elem.successRate}
      />
    );
  });
};

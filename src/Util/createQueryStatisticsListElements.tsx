import { QueryStatisticsListElement } from '../Components/StatisticsPage/QueryStatisticsListElement';

export const createQueryStatisticsListElements = (queries: any[]) => {
  if (!queries) {
    return [<></>];
  }
  return queries.map((elem: any) => {
    return (
      <QueryStatisticsListElement
        query={elem.query}
        querySuccessRate={elem.querySuccessRate}
      />
    );
  });
};

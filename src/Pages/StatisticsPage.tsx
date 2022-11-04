import { useParams } from 'react-router-dom';
import { ExerciseTitle } from '../Components/Shared/ExerciseTitle';
import { ScrollableList } from '../Components/Shared/ScrollableList';
import { HandInTimeStatistics } from '../Components/StatisticsPage/HandInTimeStatistics';
import { PassedStatistics } from '../Components/StatisticsPage/PassedStatistics';
import { QueryStatisticsListElement } from '../Components/StatisticsPage/QueryStatisticsListElement';

const STATISTICS_PAGE_BREADCRUMB = 'Statistics Page';

export const StatisticsPage = () => {
  const { statisticsID } = useParams();

  const statisticsList = [
    <QueryStatisticsListElement queryStatistic="A<> P.start" />,
    <QueryStatisticsListElement queryStatistic="A<> P.end" />,
  ];
  return (
    <>
      <ExerciseTitle
        title={statisticsID}
        breadcrumb={STATISTICS_PAGE_BREADCRUMB}
      />
      {/* <ScrollableList displayList={statisticsList} /> */}
      <PassedStatistics />
      <HandInTimeStatistics />
    </>
  );
};

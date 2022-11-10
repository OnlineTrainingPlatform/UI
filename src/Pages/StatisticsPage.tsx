import { ExerciseTitle } from '../Components/Shared/ExerciseTitle';
import { ScrollableList } from '../Components/Shared/ScrollableList';
import { HandInTimeStatistics } from '../Components/StatisticsPage/HandInTimeStatistics';
import { PassedStatistics } from '../Components/StatisticsPage/PassedStatistics';
import { createQueryStatisticsListElements } from '../Util/createQueryStatisticsListElements';

const STATISTICS_PAGE_BREADCRUMB = 'Statistics Page';

export const StatisticsPage = () => {
  // const { statisticsID } = useParams();
  const exercise = {title: "Title of the exercise"};
  // const queries = useGetQueriesByID(statisticsID);
  const queries = [
    { query: 'A<> B.deadlock -> C.deadlock', querySuccessRate: 15 },
    { query: 'A<> B.deadlock == C.deadlock', querySuccessRate: 17 },
    { query: 'A<> B.deadlock -> C.deadlock', querySuccessRate: 100 },
    { query: 'A<> B.deadlock == C.deadlock', querySuccessRate: 17 },
    { query: 'A<> B.deadlock == C.deadlock', querySuccessRate: 17 },
    { query: 'A<> B.deadlock == C.deadlock', querySuccessRate: 17 },
  ];

  return (
    <>
      <ExerciseTitle
        title={exercise.title}
        breadcrumb={STATISTICS_PAGE_BREADCRUMB}
      />
      <div className="w-full flex flex-row h-5/6">
        <ScrollableList
          className="w-1/2"
          createDisplayElements={createQueryStatisticsListElements}
          elements={queries}
        />
        <div className="flex flex-col ml-24">
          <PassedStatistics />
          <HandInTimeStatistics />
        </div>
      </div>
    </>
  );
};

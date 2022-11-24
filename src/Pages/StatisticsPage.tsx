import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ExerciseTitle } from '../Components/Shared/ExerciseTitle';
import { ScrollableList } from '../Components/Shared/ScrollableList';
import { HandInTimeStatistics } from '../Components/StatisticsPage/HandInTimeStatistics';
import { PassedStatistics } from '../Components/StatisticsPage/PassedStatistics';
import { QueryStatistics } from '../Datatypes/datatypes';
import { createQueryStatisticsListElements } from '../Util/createQueryStatisticsListElements';

const STATISTICS_PAGE_BREADCRUMB = 'Statistics Page';

export const StatisticsPage = () => {
  const [queries, setQueries] = useState<QueryStatistics[]>();
  const exercise = { title: 'Title of the exercise' };

  const statisticsID = useParams();

  useEffect(() => {
    fetch(`api/v1/exercises/${statisticsID}/statistics`)
      .then(async (res) => await res.json())
      .then((data: QueryStatistics) => {
        setQueries([data]);
      });
  }, [statisticsID]);

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

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ExerciseTitle } from '../Components/Shared/ExerciseTitle';
import { ScrollableList } from '../Components/Shared/ScrollableList';
import { HandInTimeStatistics } from '../Components/StatisticsPage/HandInTimeStatistics';
import { PassedStatistics } from '../Components/StatisticsPage/PassedStatistics';
import { Exercise, QueryStatistics } from '../Datatypes/datatypes';
import { createQueryStatisticsListElements } from '../Util/createQueryStatisticsListElements';
import { Breadcrumbs } from '../Components/StatisticsPage/Breadcrumbs';

const STATISTICS_PAGE_BREADCRUMB = 'Statistics Page';

export const StatisticsPage = () => {
  const [exercise, setExercise] = useState<Exercise | undefined>();
  const [queries, setQueries] = useState<QueryStatistics[]>([
    {
      query_result: {
        'N/A': {
          passes: 0,
          fails: 0,
          total: 0,
          pass_percentage: 0,
        },
      },
      average_time: 0,
      passed_total: {
        passed: 0,
        total: 0,
      },
    },
  ]);

  const urlParam = useParams();

  useEffect(() => {
    fetch(`/api/v1/exercises/${urlParam.exerciseID}/statistics`)
      .then(async (res) => {
        return await res.json();
      })
      .then((data: QueryStatistics) => {
        setQueries([data]);
      });
  }, [urlParam]);

  useEffect(() => {
    if (!urlParam.exerciseID) return;
    fetch(`/api/v1/exercises/${urlParam.exerciseID}`)
      .then(async (res) => await res.json())
      .then((data) => {
        setExercise(data);
      });
  }, [urlParam.exerciseID]);

  return (
    <>
      <div className="text-white">
        <ExerciseTitle
          title={exercise && exercise.title}
          breadcrumb={STATISTICS_PAGE_BREADCRUMB}
        />
        <Breadcrumbs />
      </div>

      <div className="w-full flex flex-row h-5/6 text-white">
        <ScrollableList
          className="w-1/2"
          createDisplayElements={createQueryStatisticsListElements}
          elements={queries}
        />
        <div className="flex flex-col ml-24 w-64 text-center">
          <PassedStatistics
            passed={!!queries[0] ? queries[0].passed_total.passed : 0}
            total_passed={!!queries ? queries[0].passed_total.total : 0}
          />
          <HandInTimeStatistics
            handinTime={!!queries[0] ? queries[0].average_time : 0}
          />
        </div>
      </div>
    </>
  );
};

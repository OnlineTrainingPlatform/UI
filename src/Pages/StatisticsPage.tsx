import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ExerciseTitle } from '../Components/Shared/ExerciseTitle';
import { ScrollableList } from '../Components/Shared/ScrollableList';
import { HandInTimeStatistics } from '../Components/StatisticsPage/HandInTimeStatistics';
import { PassedStatistics } from '../Components/StatisticsPage/PassedStatistics';
import { QueryStatistics, Exercise } from '../Datatypes/datatypes';
import { createQueryStatisticsListElements } from '../Util/createQueryStatisticsListElements';

const STATISTICS_PAGE_BREADCRUMB = 'Statistics Page';

export const StatisticsPage = () => {
  // React Hooks --------------
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

  /**
   * fetch the exercise that is supposed to be shown.
   */
  useEffect(() => {
    if (!urlParam.exerciseID) return;
    fetch(`/api/v1/exercises/${urlParam.exerciseID}`)
      .then(async (res) => await res.json())
      .then((data) => {
        setExercise(data);
      });
  }, [urlParam]);

  /**
   * fetch the statistics for this exercise.
   */
  useEffect(() => {
    fetch(`/api/v1/exercises/${urlParam.exerciseID}/statistics`)
      .then(async (res) => {
        return await res.json();
      })
      .then((data: QueryStatistics) => {
        setQueries([data]);
      });
  }, [urlParam]);

  return (
    <>
      <ExerciseTitle
        title={!!exercise ? exercise.title : 'loading...'}
        breadcrumb={STATISTICS_PAGE_BREADCRUMB}
      />
      <div className="w-full flex flex-row h-5/6">
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

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
    <div className='bg-[#050C1B] h-screen grid grid-rows-4 grid-cols-6 text-white pl-10'>
    <>
      <div className="grid col-start-1 col-end-2 text-white">
        <div className='grid col-start-1'>
          <ExerciseTitle
            title={exercise && exercise.title}
            breadcrumb={STATISTICS_PAGE_BREADCRUMB}
          />
          <Breadcrumbs />

        </div>
      </div>

      <div className='grid col-start-1 col-end-4'>
          <ScrollableList
            className="h-5/5"
            createDisplayElements={createQueryStatisticsListElements}
            elements={queries}
          />
        </div>

      <div className="grid col-start-4 col-end-6 row-start-2 gap-4 text-center text-white ">
        <div className="grid col-start-5 h-48 w-48">
          <PassedStatistics
            passed={!!queries[0] ? queries[0].passed_total.passed : 0}
            total_passed={!!queries ? queries[0].passed_total.total : 0}
          />
        </div>

        <div className='grid col-start-6 h-48 w-48'>
          <HandInTimeStatistics
            handinTime={!!queries[0] ? queries[0].average_time : 0}
          />
        </div>
      </div>
    </>
    </div>
  );
};

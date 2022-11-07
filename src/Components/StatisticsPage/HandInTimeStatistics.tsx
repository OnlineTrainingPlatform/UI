import dayjs from 'dayjs';

export const HandInTimeStatistics = () => {
  const today = dayjs().format('HH:MM');
  return (
    <div className="border-solid mt-6">
      <div className="w-full p-auto text-center">
        <h3>Average hand in time</h3>
        <h1>{today.toString()}</h1>
      </div>
    </div>
  );
};

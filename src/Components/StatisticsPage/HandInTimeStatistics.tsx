import dayjs from 'dayjs';

type Props = {
  handinTime: number;
};

export const HandInTimeStatistics: React.FC<Props> = ({ handinTime }) => {
  return (
    <div className="border-solid">
      <div className="text-center">
        <h3>Average hand in time</h3>
        <h1>{handinTime === 0 ? 'N/A' : dayjs(handinTime).format('HH:mm')}</h1>
      </div>
    </div>
  );
};

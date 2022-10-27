type Props = { queryStatistic: string };
export const QueryStatisticsListElement = ({ queryStatistic }: Props) => {
  return (
    <div>
      <p>{queryStatistic}</p>
    </div>
  );
};

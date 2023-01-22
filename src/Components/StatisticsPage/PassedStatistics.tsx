type Props = {
  passed: number;
  total_passed: number;
};

export const PassedStatistics: React.FC<Props> = ({ passed, total_passed }) => {
  return (
    <div className="border-solid">
      <div className="">
        <h2>
          {total_passed === 0
            ? 'N/A'
            : `${passed} Passed / ${total_passed} Total`}
        </h2>
      </div>
    </div>
  );
};

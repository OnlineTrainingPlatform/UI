import { CaretDown, CaretRight, Check, HashStraight, X } from 'phosphor-react';
import { useState } from 'react';

interface Props {
  query: string;
  successRate: number;
}

/**
 * Component that renders a query statistic on the Statistics Page
 * @returns HTML
 */
export const QueryStatisticsListElement: React.FC<Props> = ({
  query,
  successRate,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <div
        className={`border-solid flex flex-row m-2 ${
          expanded ? 'mb-0' : 'mb-6'
        }`}
      >
        <div className="flex w-4/6">
          <p className="pl-10">{query}</p>
        </div>
        <div className="flex w-1/6">
          <p className="pl-3">{successRate}%</p>
        </div>
        <div
          className="border-0 border-l-2 border-solid flex w-1/6 right-0 relative"
          onClick={handleClick}
        >
          <div className="relative w-full">
            {expanded ? (
              <CaretDown size={20} className="absolute top-4 right-11" />
            ) : (
              <CaretRight size={20} className="absolute top-4 right-11" />
            )}
          </div>
        </div>
      </div>
      {expanded && (
        <div className="m-2 mt-0 mb-6 h-20 ">
          <div className="border-solid border-1 border-t-0 h-20 flex flex-col overflow-auto">
            <div className="flex">
              <Check size={12} className="my-[10px] mx-2" />
              <p className="p-0 leading-3 my-3">{`${successRate} Successes`}</p>
            </div>
            <div className="flex">
              <X size={12} className="my-[10px] mx-2" />
              <p className="p-0 leading-3 my-3">{`${successRate} Failures`}</p>
            </div>
            <div className="flex">
              <HashStraight size={12} className="my-[10px] mx-2" />
              <p className="p-0 leading-3 my-3">{`${
                successRate + successRate
              } Total Attempts`}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

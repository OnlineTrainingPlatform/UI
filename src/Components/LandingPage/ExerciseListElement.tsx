import { ChartBar, Play } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

type Props = { title: string; description: string; exerciseID: string };

/**
 * Component that renders a single exercise on the landing page
 */
export const ExerciseListElement: React.FC<Props> = ({
  title,
  description,
  exerciseID,
}) => {
  let navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    navigate(`exercises/${exerciseID}/${e.currentTarget.id}`);
  };

  return (
    <div className="space-x-12 p-1 border-solid grid grid-cols-2 divide-x">
      <div className="px-2">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="space-x-4 pl-10 pt-12">
        <button
          id=""
          type="button"
          title="Go to exercises"
          onClick={handleClick}
          className="bg-white hover:bg-gray-100 text-gray-800"
        >
          <Play size={32} />
        </button>
        <button
          id="statistics"
          title="Go to statsistics"
          onClick={handleClick}
          className="bg-white hover:bg-gray-100 text-gray-800"
        >
          <ChartBar size={32} />
        </button>
      </div>
    </div>
  );
};

import { ChartBar, Play } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';
type Props = { exercise: string; description: string };
export const ExerciseListElement = ({ exercise, description }: Props) => {
  let navigate = useNavigate();
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.id === 'exercise'
      ? navigate('exercise')
      : navigate('statistics');
  };
  return (
    <div className="p-1 border-solid grid grid-cols-2 divide-x">
      <div>
        <h4>{exercise}</h4>
        <p>{description}</p>
      </div>
      <div className="space-x-4">
        <button
          type="button"
          id="exercise"
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

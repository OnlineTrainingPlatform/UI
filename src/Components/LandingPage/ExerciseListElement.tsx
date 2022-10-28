import {ChartBar, Play} from 'phosphor-react';
type Props = { exercise: string, description:string };
export const ExerciseListElement = ({ exercise, description }: Props) => {
const handleClick = () => {
  console.log("Click!")
}
  return (
          <div className="p-1 border-solid grid grid-cols-2 divide-x">
            <div>
              <h4>{exercise}</h4>
              <p>{description}</p>
            </div>
            <div className="space-x-4">
            <button onClick={handleClick} className="bg-white hover:bg-gray-100 text-gray-800"><Play size={32} /></button>
            <button onClick={handleClick} className="bg-white hover:bg-gray-100 text-gray-800"><ChartBar size={32} /></button>
            </div>
          </div>
      );
}

import { FileArrowUp, Plus } from 'phosphor-react';
import { Dispatch, SetStateAction, useRef } from 'react';

interface Props {
  file: File | undefined;
  setFile: Dispatch<SetStateAction<File | undefined>>;
}

/**
 * JSX.Element that renders the solution upload button
 * @param file a state variable that stores the locally selected file
 * @param setFile a setter function for the file state, above
 */
export const Solution = ({ file, setFile }: Props) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!hiddenFileInput.current) {
      return undefined;
    }
    hiddenFileInput.current.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return undefined;
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  return (
    <div className="flex w-1/6 h-4/6 p-6">
      <div
        className="w-32 h-32 border-dotted mt-10 m-auto hover:bg-slate-300 text-center relative"
        onClick={handleClick}
      >
        {!file ? (
          <Plus size={32} className="absolute top-12 right-12" />
        ) : (
          <FileArrowUp size={32} className="absolute top-12 right-12" />
        )}
        <input
          className="hidden"
          type="file"
          accept=".xml"
          ref={hiddenFileInput}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

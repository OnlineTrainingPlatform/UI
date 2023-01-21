import { FileArrowUp, Plus, Trash } from 'phosphor-react';
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
    const file = e.target.files[0];
    if (!file.name.endsWith('.xml')) {
      alert('Only XML files are allowed');
      return;
    }
    setFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!e.dataTransfer.files) return;
    const file = e.dataTransfer.files[0];
    if (!file.name.endsWith('.xml')) {
      alert('Only XML files are allowed');
      return;
    }
    setFile(file);
  };

  return (
    <div>
      <div className="grid place-items-center">Upload solution here</div>
      <div
        className="w-32 h-32 border-dotted mt-5 m-auto hover:bg-blue-500 text-center relative"
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
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
      <div className="grid place-items-center">
        {file && (
          <div>
            <span className="text-xl">{file.name}</span>
          </div>
        )}
      </div>
    </div>
  );
};

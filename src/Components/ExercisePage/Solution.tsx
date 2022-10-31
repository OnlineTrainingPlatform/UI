import { FileArrowUp, Plus } from 'phosphor-react';
import { useRef } from 'react';

export const Solution = () => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (hiddenFileInput.current === null) return undefined;
    hiddenFileInput.current.click();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return undefined;
    console.log(e.target.files[0]);
  };

  return (
    <div className="flex w-1/6 h-4/6 p-6">
      <div
        className="w-32 h-32 border-dotted mt-10 m-auto hover:bg-slate-300 text-center relative"
        onClick={handleClick}
      >
        {hiddenFileInput.current?.files && <Plus size={32} className='absolute top-12 right-12'/>}
        {!hiddenFileInput.current?.files && <FileArrowUp size={32} className='absolute top-12 right-12'/>}
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

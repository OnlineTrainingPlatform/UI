import { Check, X } from 'phosphor-react';

interface Props {
  query: string;
  result: boolean | undefined;
}

/**
 * Component that renders a single query and its result.
 * @returns HTML
 */
export const QueryListElement = ({ query, result }: Props) => {
  if (result == undefined) {
    return (
      <div className="border-solid border-blue-500 mb-2 flex flex-row relative text-center content-center ...">
        <div className=" pl-2 w-5/6 text-left border-0 border-r-2 border-solid border-blue-500 text-2xl ">
          <div className="pt-2">{query}</div>
        </div>

        <div className="w-1/6">
          <p>...</p>
        </div>
      </div>
    );
  } else if (result == false) {
    return (
      <div className="border-solid border-blue-500 mb-2 flex flex-row relative text-center content-center ...">
        <div className=" pl-2 w-5/6 text-left border-0 border-r-2 border-solid border-blue-500 text-2xl ">
          <div className="pt-6">{query}</div>
        </div>

        <div className="w-1/6 pb-6 pt-6">
          <X className="bg-red-500 rounded-full text-white text-2xl" />
        </div>
      </div>
    );
  } else if (result == true) {
    return (
      <div className="border-solid border-blue-500 mb-2 flex flex-row relative text-center content-center ...">
        <div className=" pl-2 w-5/6 text-left border-0 border-r-2 border-solid border-blue-500 text-2xl ">
          <div className="pt-6">{query}</div>
        </div>

        <div className="w-1/6 pb-6 pt-6">
          <Check className="bg-green-500 rounded-full text-white text-2xl" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="border-solid border-blue-500 mb-2 flex flex-row relative text-center content-center ...">
        <div className=" pl-2 w-5/6 text-left border-0 border-r-2 border-solid border-blue-500 text-2xl ">
          <div className="pt-2">{query}</div>
        </div>

        <div className=" w-1/6">
          <p> ... </p>
        </div>
      </div>
    );
  }
};

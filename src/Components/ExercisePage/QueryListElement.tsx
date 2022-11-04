import { Check, X } from 'phosphor-react';

interface Props {
  query: string;
  result: boolean;
}

export const QueryListElement = ({ query, result }: Props) => {
  return (
    <div className="border-solid border-gray-700 mb-1 bg-gray-200 flex flex-row relative w-full pl-2 h-8 text-center">
      <div className="w-5/6 pt-[0.4rem] text-left overflow-x-auto  border-0 border-r-2 border-solid border-gray-700 font-light text-sm font-mono">
        {query}
      </div>
      <div className="m-auto w-1/6">
        {result ? (
          <Check className="bg-green-500 rounded-full text-white" />
        ) : (
          <X className="bg-red-500 rounded-full text-white" />
        )}
      </div>
    </div>
  );
};

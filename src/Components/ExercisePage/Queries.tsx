import { useGetAllQueries } from '../../Hooks/getAllQueries';
import { ScrollableList } from '../Shared/ScrollableList';
export const Queries = () => {
  const queryList = useGetAllQueries();
  return (
    <div className="flex w-2/6 h-4/6 pr-6 pb-6 pl-6 flex-col">
      <h3 className="flex p-0 m-0 mb-2">Queries</h3>
      {/* <ScrollableList
        displayList={!!queryList ? queryList : [<p>Loading...</p>]}
      /> */}
      <div className="flex flex-row relative">
        <button className="fixed flex right-28 bottom-1">Run queries</button>
        <button className="fixed flex right-1 bottom-1">Submit solution</button>
      </div>
    </div>
  );
};

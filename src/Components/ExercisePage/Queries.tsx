import { useGetQueriesByID } from '../../Hooks/getQueriesByID';
import { createQueryListElements } from '../../Util/createQueryListElements';
import { ScrollableList } from '../Shared/ScrollableList';
export const Queries = () => {
  const queryList = useGetQueriesByID('id');
  return (
    <div className="flex w-2/6 h-4/6 pr-6 pb-6 pl-6 flex-col">
      <h3 className="flex p-0 m-0 mb-2 font-light">Queries</h3>
      <ScrollableList
        className="h-64"
        createDisplayElements={createQueryListElements}
        elements={queryList}
      />
      <div className="flex flex-row relative">
        <button className="fixed flex right-28 bottom-1">Run queries</button>
        <button className="fixed flex right-1 bottom-1">Submit solution</button>
      </div>
    </div>
  );
};

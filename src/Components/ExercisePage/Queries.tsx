import { ScrollableList } from '../Shared/ScrollableList';
import { QueryListElement } from './QueryListElement';
export const Queries = () => {
  const queryList = [
    <QueryListElement query="A<> B.deadlock -> C.deadlock" result={true} />,
    <QueryListElement query="A[] B.final -> C.final_state" result={true} />,
    <QueryListElement query="A<> B.deadlock -> C.deadlock" result={false} />,
    <QueryListElement query="A[] B.final -> C.final_state" result={true} />,
    <QueryListElement query="A<> B.deadlock -> C.deadlock" result={true} />,
    <QueryListElement query="A[] B.final -> C.final_state" result={true} />,
    <QueryListElement query="A<> B.deadlock -> C.deadlock" result={true} />,
    <QueryListElement query="A[] B.final -> C.final_state" result={true} />,
    <QueryListElement query="A<> B.deadlock -> C.deadlock" result={true} />,
    <QueryListElement query="A[] B.final -> C.final_state" result={true} />,
    <QueryListElement query="A<> B.deadlock -> C.deadlock" result={true} />,
    <QueryListElement query="A[] B.final -> C.final_state" result={true} />,
    <QueryListElement query="A<> B.deadlock -> C.deadlock" result={true} />,
    <QueryListElement query="A[] B.final -> C.final_state" result={true} />,
  ];
  return (
    <div className="flex w-2/6 h-4/6 pr-6 pb-6 pl-6 flex-col">
      <h3 className="flex p-0 m-0 mb-2">Queries</h3>
      <ScrollableList displayList={queryList} />
      <div className="flex flex-row relative">
        <button className="fixed flex right-28 bottom-1">Run queries</button>
        <button className="fixed flex right-1 bottom-1">Submit solution</button>
      </div>
    </div>
  );
};

import { ScrollableList } from "../ScrollableList"
import { QueryListElemnt as QueryListElement } from "./QueryListElement"
export const Queries = () =>
{
    const queryList = [<QueryListElement query="b"/>, <QueryListElement query="c"/>]
    return (<>
        <h1>Queries</h1>
        <ScrollableList displayList={queryList}/>
    </>)
}
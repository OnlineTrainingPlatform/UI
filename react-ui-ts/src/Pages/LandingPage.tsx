import { ExerciseListElement } from "../Components/LandingPage/ExerciseListElement"
import {ScrollableList} from "../Components/ScrollableList"
export const LandingPage = () => {
    const listView = [<ExerciseListElement exercise="a"/>, <ExerciseListElement exercise="b"/>]
    return (<>
        <h1>YourPAAL</h1>
        <ScrollableList displayList={listView}/>
    </>
    

    )
}
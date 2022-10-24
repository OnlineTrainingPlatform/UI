import { ExerciseTitle } from "../Components/ExercisePage/ExerciseTitle"
import { ScrollableList } from "../Components/ScrollableList"
import { HandInTimeStatistics } from "../Components/StatisticsPage/HandInTimeStatistics"
import { PassedStatistics } from "../Components/StatisticsPage/PassedStatistics"
import { QueryStatisticsListElement } from "../Components/StatisticsPage/QueryStatisticsListElement"

export const StatisticsPage = () => {
    const statisticsList = [<QueryStatisticsListElement queryStatistic="A<> P.start"/>, <QueryStatisticsListElement queryStatistic="A<> P.end"/>]
    return (<>
    <ExerciseTitle/>
    <ScrollableList displayList={statisticsList}/>
    <PassedStatistics/>
    <HandInTimeStatistics/>
    
    </>) 
   
}
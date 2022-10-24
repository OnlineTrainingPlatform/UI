import { Description } from "../Components/ExercisePage/Description"
import { ExerciseTitle } from "../Components/ExercisePage/ExerciseTitle"
import { Queries } from "../Components/ExercisePage/Queries"
import { Solution } from "../Components/ExercisePage/Solution"

export const ExercisePage = () => {
    return (
        <>
            <ExerciseTitle/>
            <Description/>
            <Solution />
            <Queries />
        </>
    )
}
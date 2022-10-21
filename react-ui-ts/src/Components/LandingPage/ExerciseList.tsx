import { ExerciseListElement } from "./ExerciseListElement"
export const ExerciseList = () => {
    const exerciseList: string[] = ["jakob", "fatima"]
    return (<>
        {exerciseList.map((exercise: string) => { 
            return (<ExerciseListElement exercise={exercise} />)
            
        })}
    </>

    )
}
// import { useParams } from 'react-router-dom';
// import { useGetExerciseByID } from '../Hooks/getExerciseByID';
import { Description } from '../Components/ExercisePage/Description';
import { ExerciseTitle } from '../Components/Shared/ExerciseTitle';
import { Queries } from '../Components/ExercisePage/Queries';
import { Solution } from '../Components/ExercisePage/Solution';
import { Exercise } from '../Datatypes/datatypes';

const EXERCISE_PAGE_BREADCRUMB = 'Exercise Page';

export const ExercisePage = () => {
  // const { exerciseID } = useParams();
  // const exercise = useGetExerciseByID(exerciseID);
  const exercise: Exercise = {
    id: 'erghq4tjq309g4qnrognq',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius posuere arcu, quis auctor sapien mattis vitae. Sed velit neque, congue sed lobortis eu, commodo vel turpis. Curabitur aliquet ac lorem at tincidunt. Nunc hendrerit dolor purus, ullamcorper hendrerit nisi imperdiet sed. Etiam tempor elit at turpis ullamcorper ultricies porta eget arcu. Maecenas efficitur nibh et imperdiet ullamcorper. Vivamus pharetra vehicula massa, eget blandit augue rhoncus id. Maecenas vitae enim facilisis, euismod purus nec, dapibus enim. Morbi porta erat dictum eros mattis, sit amet tempor risus sodales. Donec nec venenatis ligula. Morbi lobortis rhoncus tincidunt. Curabitur faucibus consectetur tincidunt. Vestibulum et efficitur tellus. Ut vitae blandit ligula. Vivamus posuere ut ipsum in eleifend. Suspendisse potenti, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius posuere arcu, quis auctor sapien mattis vitae. Sed velit neque, congue sed lobortis eu, commodo vel turpis. Curabitur aliquet ac lorem at tincidunt. Nunc hendrerit dolor purus, ullamcorper hendrerit nisi imperdiet sed. Etiam tempor elit at turpis ullamcorper ultricies porta eget arcu. Maecenas efficitur nibh et imperdiet ullamcorper. \n \n Vivamus pharetra vehicula massa, eget blandit augue rhoncus id. Maecenas vitae enim facilisis, euismod purus nec, dapibus enim. Morbi porta erat dictum eros mattis, sit amet tempor risus sodales. Donec nec venenatis ligula. Morbi lobortis rhoncus tincidunt. Curabitur faucibus consectetur tincidunt. Vestibulum et efficitur tellus. Ut vitae blandit ligula. Vivamus posuere ut ipsum in eleifend. Suspendisse potenti, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius posuere arcu, quis auctor sapien mattis vitae. Sed velit neque, congue sed lobortis eu, commodo vel turpis. Curabitur aliquet ac lorem at tincidunt. Nunc hendrerit dolor purus, ullamcorper hendrerit nisi imperdiet sed. Etiam tempor elit at turpis ullamcorper ultricies porta eget arcu. Maecenas efficitur nibh et imperdiet ullamcorper. Vivamus pharetra vehicula massa, eget blandit augue rhoncus id. Maecenas vitae enim facilisis, euismod purus nec, dapibus enim. Morbi porta erat dictum eros mattis, sit amet tempor risus sodales. Donec nec venenatis ligula. Morbi lobortis rhoncus tincidunt. Curabitur faucibus consectetur tincidunt. Vestibulum et efficitur tellus. Ut vitae blandit ligula. Vivamus posuere ut ipsum in eleifend. Suspendisse potenti, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius posuere arcu, quis auctor sapien mattis vitae. Sed velit neque, congue sed lobortis eu, commodo vel turpis. Curabitur aliquet ac lorem at tincidunt. Nunc hendrerit dolor purus, ullamcorper hendrerit nisi imperdiet sed. Etiam tempor elit at turpis ullamcorper ultricies porta eget arcu. Maecenas efficitur nibh et imperdiet ullamcorper. \n \n Vivamus pharetra vehicula massa, eget blandit augue rhoncus id. Maecenas vitae enim facilisis, euismod purus nec, dapibus enim. Morbi porta erat dictum eros mattis, sit amet tempor risus sodales. Donec nec venenatis ligula. Morbi lobortis rhoncus tincidunt. Curabitur faucibus consectetur tincidunt. Vestibulum et efficitur tellus. Ut vitae blandit ligula. Vivamus posuere ut ipsum in eleifend. Suspendisse potenti',
    title: 'Advanced Transitions III',
    queries: [
      { query: 'A<> P.start -> P.end' },
      { query: 'B[] A[1] && B[2] --> C[3]' },
    ],
  };

  return (
    <>
      {!exercise && <p>loading...</p>}
      {!!exercise && (
        <>
          <ExerciseTitle
            title={exercise.title}
            breadcrumb={EXERCISE_PAGE_BREADCRUMB}
          />
          <div className="w-full flex flex-row h-4/6">
            <Description description={exercise.description} />
            <Solution />
            <Queries />
          </div>
        </>
      )}
    </>
  );
};

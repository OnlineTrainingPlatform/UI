interface Props {
  title: string | undefined; // undefined allowed only because useParams does not guarantee a string.
  breadcrumb: string;
}

export const ExerciseTitle = ({ title, breadcrumb }: Props) => {
  return (
    <>
      <h1 className="font-medium">{!title ? 'loading' : title}</h1>
      <h3 className="font-light">{breadcrumb}</h3>
    </>
  );
};

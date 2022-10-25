type Props = { query: string };
export const QueryListElement = ({ query }: Props) => {
  return (
    <div>
      <p>{query}</p>
    </div>
  );
};

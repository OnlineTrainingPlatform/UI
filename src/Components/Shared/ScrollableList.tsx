type Props = {
  displayList: JSX.Element[];
};
export const ScrollableList = ({ displayList }: Props) => {
  return (
    <>
      {displayList.map((displayElement: JSX.Element) => {
        return displayElement;
      })}
    </>
  );
};

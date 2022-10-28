type Props = {
  displayList: JSX.Element[];
};
export const ScrollableList = ({ displayList }: Props) => {
  return (
    <div className="font-mono mr-10 border-solid flex flex-col overflow-y-auto h-80">
      {displayList.map((displayElement: JSX.Element) => {
        return displayElement;
      })}
    </div>
  );
};

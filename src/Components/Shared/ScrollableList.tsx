type Props = {
  className?: string;
  createDisplayElements: (elems: object[]) => JSX.Element[];
  elements: object[];
};
export const ScrollableList: React.FC<Props> = ({
  className,
  createDisplayElements,
  elements,
}: Props) => {
  const list: JSX.Element[] = createDisplayElements(elements);
  return (
    <div
      className={`font-mono mr-10 border-solid flex flex-col overflow-y-auto h-3/5 ${className}`}
    >
      {list.map((displayElement: JSX.Element) => {
        return displayElement;
      })}
    </div>
  );
};

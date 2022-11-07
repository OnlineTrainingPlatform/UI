type Props = {
  className?: string;
  createDisplayElements: (elems: any[]) => JSX.Element[];
  elements: object[] | undefined;
};
export const ScrollableList: React.FC<Props> = ({
  className,
  createDisplayElements,
  elements,
}: Props) => {
  if (!elements) {
    return null;
  }
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

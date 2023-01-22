type Props = {
  className?: string;
  createDisplayElements: (elems: any[]) => JSX.Element[];
  elements: object[] | undefined;
};

/**
 * A generic component that renders a list of elements.
 * @param className optional, adds tailwind css to list
 * @param createDisplayElements  function that builds the JSX Element to be rendered
 * @param elements list of elements to be built from.
 */
export const ScrollableList: React.FC<Props> = ({
  className,
  createDisplayElements,
  elements,
}) => {
  if (!elements) {
    return null;
  }
  const list: JSX.Element[] = createDisplayElements(elements);

  return (
    <div className={`mr-10 flex flex-col overflow-y-auto h-5/5 ${className}`}>
      {list.map((displayElement: JSX.Element) => {
        return <div key={displayElement.key}>{displayElement}</div>;
      })}
    </div>
  );
};

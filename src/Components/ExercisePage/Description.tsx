interface Props {
  description: string;
}

export const Description = ({ description }: Props) => {
  return (
    <div className="flex w-2/6 h-4/6 p-2 border-solid border-gray-700  bg-gray-200 overflow-y-auto">
      <p className="p-0 m-0">{description}</p>
    </div>
  );
};

interface Props {
  description: string;
}

export const Description = ({ description }: Props) => {
  return (
    <div className="bg-[#111827] overflow-y-auto">
      <p className="">{description}</p>
    </div>
  );
};

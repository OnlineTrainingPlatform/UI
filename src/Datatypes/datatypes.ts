export type Exercise = {
  id: string;
  title: string;
  description: string;
  queries: Query[];
};

type Query = {
  query: string;
};

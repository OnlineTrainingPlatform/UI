export type Exercise = {
  id: string;
  title: string;
  description: string;
  queries: Query[];
};

export type Query = {
  query: string;
  result?: boolean;
  successRate?: number;
};

export type Exercise = {
  id: string;
  title: string;
  description: string;
  queries: Query[];
};

export type Query = {
  query: string;
  result?: boolean;
};

export type QueryStats = Query & { successRate: number };

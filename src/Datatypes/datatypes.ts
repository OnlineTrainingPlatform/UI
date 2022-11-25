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

export type QueryStatistics = {
  query_result: QueryResults;
  average_time: number;
  passed_total: {
    passed: number;
    total: number;
  };
};

export type QueryResults = {
  [key: string]: IndividualQueryResult;
};

export interface IndividualQueryResult {
  passes: number;
  fails: number;
  total: number;
  pass_percentage: number;
}

export interface Page {
  limit: number;
  offset: number;
  sort: string;
  direction: string;
  total?: number;
}

import type { Sale } from './Sale';

export type SalesState = {
  sales: Sale[];
  error: string | null;
  loading: boolean;

};

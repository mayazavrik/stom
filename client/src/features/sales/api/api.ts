/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { Sale, SaleId} from '../types/Sale';

export const fetchSales = async (): Promise<Sale[]> => {
  const res = await fetch('/api/sales');

  if (res.status >= 400) {
    throw new Error(res.statusText);
  }
  return res.json();
};
export async function fetchAddSale(sale: Sale): Promise<Sale> {
  const res = await fetch('/api/sales', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({  img: sale.img, text: sale.text }),
  });
  return res.json();
}

export const fetchDeleteSale=async(id: number): Promise< SaleId > => {
  const res = await fetch(`/api/sales/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}

export async function fetchUpdSale(sale: Sale): Promise<Sale> {
  const res = await fetch(`/api/sales/${sale.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ img: sale.img, text: sale.text }),
  });
  return res.json();
}





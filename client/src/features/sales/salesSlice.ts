import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { SalesState } from './types/State';

import * as api from './api/api';
import type { Sale} from './types/Sale';

const initialState: SalesState = {
  sales: [],
  error: null,
  loading: true,

};

export const loadSales = createAsyncThunk('sales/load', () => api.fetchSales());
export const addSales = createAsyncThunk('sales/add', (sale: Sale) =>
  api.fetchAddSale(sale),
);
// export const changeSales = createAsyncThunk('sales/change', (sale: Sale) =>
//   api.fetchUpdSale(sale),
// );
export const deleteSale = createAsyncThunk('sales/delete', (id: number) =>
  api.fetchDeleteSale(id),
);
export const updateSale = createAsyncThunk('sales/upd', (sale: Sale) =>
  api.fetchUpdSale(sale),
);


const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSales.fulfilled, (state, action) => {
        state.sales = action.payload;
      })
      .addCase(loadSales.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(loadSales.pending, (state) => {
        state.loading = true;
      })
      .addCase(addSales.fulfilled, (state, action) => {
        state.sales.push(action.payload);
      })
  
      .addCase(addSales.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(addSales.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteSale.fulfilled, (state, action) => {
        state.sales = state.sales.filter((sale) => sale.id !== action.payload);
      })
      
      // .addCase(deleteSale.rejected, (state, action) => {
      //   state.error = action.error.message ? action.error.message : null;
      // })
      // .addCase(deleteSale.pending, (state) => {
      //   state.loading = true;
      // })
      .addCase(updateSale.fulfilled, (state, action) => {
        state.sales = state.sales.map((sale) =>
        sale.id === action.payload.id ? (sale = action.payload) : sale,
        );
      })
  
      
  },
});

export const { stopLoading } = salesSlice.actions;
export default salesSlice.reducer;

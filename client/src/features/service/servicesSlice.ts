import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type {  Sale, SaleId, ServiceCard, ServiceId, ServicesState } from './types/type';
import * as api from './api/api';
import { fetchDeleteOneService, fetchUpdateStatus } from '../personalArea/api';
import type { Service } from '../LogReg/type';


const initialState: ServicesState = {
  services: [],
  error: null,
  loading: true,
  
};

export const loadServices = createAsyncThunk('services/load', () => api.fetchServices());

// export const addSales = createAsyncThunk('sales/add', (sale: Sale) =>
//   api.fetchAddSale(sale),
// );
// // export const changeSales = createAsyncThunk('sales/change', (sale: Sale) =>
// //   api.fetchUpdSale(sale),
// // );
// export const deleteSale = createAsyncThunk('/sales/delete', (saleId: SaleId) =>
//   api.fetchDeleteSale(saleId),
// );
// export const updateSale = createAsyncThunk('/sales/upd', (sale: Sale) =>
//   api.fetchUpdSale(sale),
// );
export const addService = createAsyncThunk('services/add', (service: ServiceCard) =>
  api.fetchAddService(service),
);
export const upStatusService = createAsyncThunk('update/status', (service: ServiceCard) =>
  fetchUpdateStatus(service),
);
export const deleteOneService = createAsyncThunk('services/delete', (id: number) =>
  fetchDeleteOneService(id),
);

export const changeService = createAsyncThunk('services/change', (service: ServiceCard) =>
  api.fetchServiceChange(service),
);
export const addComments = createAsyncThunk('comments/add', (comment: CommentData) =>
  api.fetchAddComments(comment),
);
export const deleteComment = createAsyncThunk('comments/delete', (id: number) =>
  api.fetchDeleteComments(id),
);

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
 
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadServices.fulfilled, (state, action) => {
        state.services = action.payload;
      })
      .addCase(loadServices.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(loadServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(addService.fulfilled, (state, action) => {
        state.services.push(action.payload);
      })
      .addCase(changeService.fulfilled, (state, action) => {
        state.services = state.services.map((service) =>
        service.id === action.payload.id ? (service = action.payload) : service,
        );
      })
  
      .addCase(upStatusService.fulfilled, (state, action) => {
        if (action.payload.message === 'success') {
          state.services = state.services.map((el) =>
            el.id === action.payload.service.id ? (el = action.payload.service) : el,
          );
        }
      })
      .addCase(upStatusService.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(deleteOneService.fulfilled, (state, action) => {
        state.services = state.services.filter((service) => service.id !== action.payload);
      })
      .addCase(addComments.fulfilled, (state, action) => {
        if (!action.payload.rate) {
          state.services.forEach((service) =>
            service.id === action.payload.comment.service_id
              ? (service.Comments = [...service.Comments, action.payload.comment])
              : service,
          );
        } else {
          state.services.forEach((service) =>
            service.id === action.payload.comment.service_id
              ? (service.Comments = [...service.Comments, action.payload.comment])
              : service,
          );
          state.services.forEach((service) =>
            service.id === action.payload.comment.service_id
              ? (service.Rates = [...service.Rates, action.payload.rate])
              : service,
          );
        }
      })
      .addCase(addComments.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(addComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.services = state.services.map((service) =>
          service.id === action.payload.service_id
            ? {
                ...service,
                Comments: service.Comments.filter(
                  (comment) => comment.id !== action.payload.comment_id,
                ),
              }
            : service,
        );
     
      })
    
  },
});
export const { stopLoading } = servicesSlice.actions;
export default servicesSlice.reducer;

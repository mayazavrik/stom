import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { DoctorId, DoctorCard, DoctorsState } from './types/types';
import * as api from './api/api';
import { fetchDeleteOneDoctor} from '../personalArea/api';



const initialState: DoctorsState = {
  doctors: [],
  error: null,
  loading: true,
  
};

export const loadDoctors = createAsyncThunk('doctors/load', () => api.fetchDoctors());

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
export const addDoctor = createAsyncThunk('doctors/add', (doctor: DoctorCard) =>
  api.fetchAddDoctor(doctor),
);

// export const deleteDoctor = createAsyncThunk('doctors/delete', (id: number) =>
//   api.fetchDoctorRemove(id),

// );
export const deleteOneDoctor= createAsyncThunk<DoctorId, number>('doctors/delete', (id: number) =>
  fetchDeleteOneDoctor(id),
);

export const changeDoctor = createAsyncThunk('doctors/change', (doctor: DoctorCard) =>
  api.fetchDoctorChange(doctor),
);
// export const addComments = createAsyncThunk('comments/add', (comment: CommentData) =>
//   api.fetchAddComments(comment),
// );
// export const deleteComment = createAsyncThunk('comments/delete', (id: number) =>
//   api.fetchDeleteComments(id),
// );

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
 
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadDoctors.fulfilled, (state, action) => {
        state.doctors = action.payload;
      })
      .addCase(loadDoctors.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(loadDoctors.pending, (state) => {
        state.loading = true;
      })
      .addCase(addDoctor.fulfilled, (state, action) => {
        state.doctors.push(action.payload);
      })
      .addCase(changeDoctor.fulfilled, (state, action) => {
        state.doctors = state.doctors.map((doctor) =>
          doctor.id === action.payload.id ? (doctor = action.payload) : doctor,
        );
      })
  
      .addCase(deleteOneDoctor.fulfilled, (state, action) => {
        state.doctors = state.doctors.filter((doctor) => doctor.id !== action.payload);
      })
      // .addCase(addComments.fulfilled, (state, action) => {
      //   if (!action.payload.rate) {
      //     state.services.forEach((service) =>
      //       service.id === action.payload.comment.service_id
      //         ? (service.Comments = [...service.Comments, action.payload.comment])
      //         : service,
      //     );
      //   } else {
      //     state.services.forEach((service) =>
      //       service.id === action.payload.comment.service_id
      //         ? (service.Comments = [...service.Comments, action.payload.comment])
      //         : service,
      //     );
      //     state.services.forEach((service) =>
      //       service.id === action.payload.comment.service_id
      //         ? (service.Rates = [...service.Rates, action.payload.rate])
      //         : service,
      //     );
      //   }
      // })
      // .addCase(addComments.rejected, (state, action) => {
      //   state.error = action.error.message ? action.error.message : null;
      // })
      // .addCase(addComments.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(deleteComment.fulfilled, (state, action) => {
      //   state.services = state.services.map((service) =>
      //     service.id === action.payload.service_id
      //       ? {
      //           ...service,
      //           Comments: service.Comments.filter(
      //             (comment) => comment.id !== action.payload.comment_id,
      //           ),
      //         }
      //       : service,
      //   );
     
      // })
    
  },
});
export const { stopLoading } = doctorsSlice.actions;
export default doctorsSlice.reducer;

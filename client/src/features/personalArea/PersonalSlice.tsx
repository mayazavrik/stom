import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { AuthState, Service } from '../LogReg/type';
import { fetchUpdatePhoto } from './api';

export const updatePhoto = createAsyncThunk('update/photo', (obj: Service) =>
  fetchUpdatePhoto(obj),
);

// export const upStatusService = createAsyncThunk('update/status', (id: Service) =>
//   fetchUpdateStatus(id),
// );
// export const deleteOneService = createAsyncThunk('update/status', (id: Service) =>
//   fetchDeleteOne(id),
// );

const initialState: AuthState = {
  user: undefined,
  service: undefined,
  error: null,
};

const personSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updatePhoto.rejected, (state, action) => {
      state.error = action.error.message ? action.error.message : null;
    });
    // .addCase(upStatusService.fulfilled, (state, action) => {
    //   console.log(action.payload);
    //   console.log(state.service);

    //   if (action.payload.message === 'success') {
    //     state.service = action.payload.service;
    //   }
    // })

    // .addCase(upStatusService.rejected, (state, action) => {
    //   state.error = action.error.message ? action.error.message : null;
    // });
  },
});

export default personSlice.reducer;

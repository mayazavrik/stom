/* eslint-disable @typescript-eslint/default-param-last */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchCheckUser,
  fetchLogOut,
  fetchSignIn,

} from './api/api';
import type { AuthState,  User } from './type';


const initialState: AuthState = {
  user: undefined,
  error: null,
};

export const checkUser = createAsyncThunk('auth/check', () => fetchCheckUser());





export const signIn = createAsyncThunk('auth/signin', (user: User) => fetchSignIn(user));



export const logOut = createAsyncThunk('auth/logout', () => fetchLogOut());

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload.user;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })

    


  

      .addCase(signIn.fulfilled, (state, action) => {
        if (action.payload.message === 'succes') {
          state.user = action.payload.user;
        } else {
          console.log(action.payload.message);
        }
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })

    
   
  
      .addCase(logOut.fulfilled, (state) => {
    
        state.user = undefined;
        state.error = '';
      })
 
  
  },
});

export default authSlice.reducer;

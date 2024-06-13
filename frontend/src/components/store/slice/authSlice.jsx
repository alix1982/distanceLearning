import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from '../apiSlice';

export const authUser = createAsyncThunk('auth/authUser', async (data) => {
  try {
      const response = await login(data);
      // console.log(response);
      return response.data;
  } catch (e) {
      console.log(e);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthAdmin: false,
    isAuth:false,
    // errors: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.isAuth = false;
      state.isAuthAdmin = false;
    },
  },
    extraReducers: (builder) => {
        builder.addCase(authUser.pending, (state) => {
          // console.log('pending');
        });
        builder.addCase(authUser.rejected, (state) => {
          // console.log('rejected');
        });
        builder.addCase(authUser.fulfilled, (state, action) => {
          // console.log(action.payload);
          action.payload?.message === 'That right!' ? state.isAuthAdmin = true : state.isAuthAdmin = false;
          action.payload?.message === 'Всё верно!' ? state.isAuth = true : state.isAuth = false
          action.payload?.token && localStorage.setItem('token', action.payload.token)
        });
    },
})

export const { logout } = authSlice.actions

export default authSlice.reducer

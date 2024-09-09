import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { programmsFront } from '../../share/constantProgramm';
// import { login } from '../apiSlice';

// export const authUser = createAsyncThunk('auth/authUser', async (data) => {
//   try {
//       const response = await login(data);
//       // console.log(response);
//       return response.data;
//   } catch (e) {
//       console.log(e);
//   }
// });

export const programmUserSlice = createSlice({
  name: 'programmUser',
  initialState: {
    // groupUserStudy: {},
    // isStartThema: false,
    // isEndThema: false,
    
    // blockUserStudy: 1,
    // isAuth:false,
    // errors: null,
  },
  reducers: {
    // setProgramm: (state, action) => {
    //   state.groupUserStudy = action.payload;
    //   // state.programmGroupFront = programmsFront.find((item)=> item.name === action.payload.programm.name)
    // //   state.isAuthAdmin = false;
    // },
    // setBlock: (state, action) => {
    //   state.blockUserStudy = action.payload+1;
    // //   state.isAuthAdmin = false;
    // },
    // setIsStartThema: (state, action) => {
    //   // console.log(action.payload)
    //   state.isStartThema = action.payload;
    // },
    // setIsEndThema: (state, action) => {
    //   state.isEndThema = action.payload;
    // },
    // setIsThemaReset: (state) => {
    //   state.isEndThema = false;
    //   state.isStartThema = false;
    // }
  },
    // extraReducers: (builder) => {
    //     builder.addCase(authUser.pending, (state) => {
    //       console.log('pending');
    //     });
    //     builder.addCase(authUser.rejected, (state) => {
    //       console.log('rejected');
    //     });
    //     builder.addCase(authUser.fulfilled, (state, action) => {
    //       // console.log(action.payload);
    //       action.payload?.message === 'That right!' ? state.isAuthAdmin = true : state.isAuthAdmin = false;
    //       action.payload?.message === 'Всё верно!' ? state.isAuth = true : state.isAuth = false
    //       action.payload?.token && localStorage.setItem('token', action.payload.token)
    //     });
    // },
})

// export const { setProgramm, setBlock, setIsThemaReset } = programmUserSlice.actions

export default programmUserSlice.reducer

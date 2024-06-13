import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postUserAdmin, deleteUserAdmin, patchUserAdminProgramm, getUserAdmin, patchUserProgramm, getUserData } from '../apiSlice';

export const sendingUserAdmin = createAsyncThunk('user/sendingUserAdmin', async (data) => {
  try {
      const response = await postUserAdmin(data);
      return response.data;
  } catch (e) {
      console.log(e);
  }
});

export const receivingUsers = createAsyncThunk('user/receivingUsers', async () => {
  try {
      const response = await getUserAdmin();
      return response.data;
  } catch (e) {
      console.log(e);
  }
});

export const removeUser = createAsyncThunk('user/removeUser', async (id) => {
  try {
      const response = await deleteUserAdmin(id);
      return response;
  } catch (e) {
      console.log(e);
  }
});

export const updateUserAdminProgramm = createAsyncThunk('user/updateUserAdminProgramm', async (data) => {
  try {
      const response = await patchUserAdminProgramm(data);
      return response.data;
  } catch (e) {
      console.log(e);
  }
});

export const updateUserProgramm = createAsyncThunk('user/updateUserProgramm', async (data) => {
  try {
      console.log(data)
      const response = await patchUserProgramm(data);
      return response.data;
  } catch (e) {
      console.log(e);
  }
});

export const receivingUser = createAsyncThunk('user/receivingUser', async () => {
  try {
      const response = await getUserData();
      return response.data;
  } catch (e) {
      console.log(e);
  }
});
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    userData: {
      user: {
        programm: {
          programm1:{
            block1:{
              thema1: null,
              thema2: null,
              thema3: null
            },
            block2:{
              thema1: null,
              thema2: null,
              thema3: null
            },
            block3:{
              thema1: null,
              thema2: null,
              thema3: null
            },
          },
          programm2:{
            block1:{
              thema1: null,
              thema2: null,
              thema3: null
            },
            block2:{
              thema1: null,
              thema2: null,
              thema3: null
            },
            block3:{
              thema1: null,
              thema2: null,
              thema3: null
            },
          },
          programm3:{
            block1:{
              thema1: null,
              thema2: null,
              thema3: null
            },
            block2:{
              thema1: null,
              thema2: null,
              thema3: null
            },
            block3:{
              thema1: null,
              thema2: null,
              thema3: null
            },
          },
        }
      },
    },
    // userQuestionnaire: {}
    // errors: null,
  },
  reducers: {
    // increment: (state) => {

    //   state.value += 1
    // },
  },
    extraReducers: (builder) => {
        builder.addCase(sendingUserAdmin.pending, (state) => {
          // console.log('pending');
        });
        builder.addCase(sendingUserAdmin.rejected, (state) => {
          console.log('rejected');
        });
        builder.addCase(sendingUserAdmin.fulfilled, (state, action) => {
          // console.log('fulfilled');
          // state.doctorCertificatesLoading = 'done';
          // state.certificates = action.payload.data;
        });
        builder.addCase(receivingUsers.pending, (state) => {
          // console.log('pending');
        });
        builder.addCase(receivingUsers.rejected, (state) => {
          console.log('rejected');
        });
        builder.addCase(receivingUsers.fulfilled, (state, action) => {
          // console.log(action.payload);
          state.users = action.payload;
        });
        builder.addCase(removeUser.pending, (state) => {
          // console.log('pending');
        });
        builder.addCase(removeUser.rejected, (state) => {
          console.log('rejected');
        });
        builder.addCase(removeUser.fulfilled, (state, action) => {
          console.log(action.payload);
          // state.questionnaires = action.payload;
        });

        builder.addCase(receivingUser.pending, (state) => {
          // console.log('pending');
        });
        builder.addCase(receivingUser.rejected, (state) => {
          console.log('rejected');
        });
        builder.addCase(receivingUser.fulfilled, (state, action) => {
          console.log(action.payload);
          state.userData = action.payload;
        });
    },
})

export const { increment } = userSlice.actions

export default userSlice.reducer

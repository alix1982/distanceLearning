import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postUserAdmin, deleteUser, patchUser, getUserAdmin, getUserData } from '../apiSlice';

export const sendingUserAdmin = createAsyncThunk('user/sendingUserAdmin', async (data) => {
  try {
      const response = await postUserAdmin(data);
      return response;
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

export const removeUser = createAsyncThunk('questionnaire/removeUser', async (id) => {
  try {
      const response = await deleteUser(id);
      return response;
  } catch (e) {
      console.log(e);
  }
});

export const updateUserProgramm = createAsyncThunk('questionnaire/updateUserProgramm', async (data) => {
  try {
      const response = await patchUser(data);
      return response;
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
    userData: {},
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
          console.log('pending');
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
          console.log('pending');
        });
        builder.addCase(receivingUsers.rejected, (state) => {
          console.log('rejected');
        });
        builder.addCase(receivingUsers.fulfilled, (state, action) => {
          // console.log(action.payload);
          state.users = action.payload;
        });
        builder.addCase(removeUser.pending, (state) => {
          console.log('pending');
        });
        builder.addCase(removeUser.rejected, (state) => {
          console.log('rejected');
        });
        builder.addCase(removeUser.fulfilled, (state, action) => {
          console.log(action.payload);
          // state.questionnaires = action.payload;
        });

        builder.addCase(receivingUser.pending, (state) => {
          console.log('pending');
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

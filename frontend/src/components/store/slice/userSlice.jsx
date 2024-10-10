import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  postUserAdmin,
  deleteUserAdmin,
  getUserAdmin,
  patchUserProgramm,
  getUserData,
  patchUserAdminGroup,
  patchUserAdminDelGroup,
  getGroupsUser
} from '../apiSlice';

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

export const updateUserAdminGroup = createAsyncThunk('user/updateUserAdminGroup', async (data) => {
  try {
      const response = await patchUserAdminGroup(data);
      return response.data;
  } catch (e) {
      console.log(e);
  }
});

export const updateUserAdminDeleteGroup = createAsyncThunk('user/updateUserAdminDeleteGroup', async (data) => {
  try {
      const response = await patchUserAdminDelGroup(data);
      return response.data;
  } catch (e) {
      console.log(e);
  }
});

export const updateUserProgramm = createAsyncThunk('user/updateUserProgramm', async (data) => {
      const response = await patchUserProgramm(data);
      console.log(response.data)
      return response.data;
});

export const receivingUser = createAsyncThunk('user/receivingUser', async () => {
  try {
      const response = await getUserData();
      return response.data;
  } catch (e) {
      console.log(e);
  }
});
export const receivingGroupsUser = createAsyncThunk('user/receivingGroup', async () => {
  try {
      const response = await getGroupsUser();
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
    groupUserStudy: {},
    groups: {},
    isStartThema: false,
    isEndThema: false,
    isLoadingGroupsUser: false,
    // userQuestionnaire: {}
    // errors: null,
  },
  reducers: {
    setProgramm: (state, action) => {
      state.groupUserStudy = action.payload;
    },
    // setBlock: (state, action) => {
    //   state.blockUserStudy = action.payload+1;
    // //   state.isAuthAdmin = false;
    // },
    setIsStartThema: (state, action) => {
      // console.log(action.payload)
      state.isStartThema = action.payload;
    },
    setIsEndThema: (state, action) => {
      state.isEndThema = action.payload;
    },
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
          // console.log(action.payload);
          // state.questionnaires = action.payload;
        });

        builder.addCase(receivingUser.pending, (state) => {
          // console.log('pending');
        });
        builder.addCase(receivingUser.rejected, (state) => {
          console.log('rejected');
        });
        builder.addCase(receivingUser.fulfilled, (state, action) => {
          // console.log(action.payload);
          state.userData = action.payload;
        });
        builder.addCase(updateUserProgramm.pending, (state) => {
          // console.log('pending');
        });
        builder.addCase(updateUserProgramm.rejected, (state) => {
          console.log('rejected');
        });
        builder.addCase(updateUserProgramm.fulfilled, (state, action) => {
          console.log(action.payload);
          state.groupUserStudy = action.payload.userGroup;
        });
        builder.addCase(receivingGroupsUser.pending, (state) => {
          // console.log('pending');
          state.isLoadingGroupsUser = true;
        });
        builder.addCase(receivingGroupsUser.rejected, (state) => {
          console.log('rejected');
          state.isLoadingGroupsUser = false;
        });
        builder.addCase(receivingGroupsUser.fulfilled, (state, action) => {
          // console.log(action.payload);
          state.isLoadingGroupsUser = false;
          state.groups = action.payload;
        });
    },
})
export const { setProgramm, setIsStartThema, setIsEndThema } = userSlice.actions

export default userSlice.reducer

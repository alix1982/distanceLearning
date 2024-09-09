import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteGroup, getGroupAdmin, postGroupAdmin } from '../apiSlice';

export const sendingGroupAdmin = createAsyncThunk('group/sendingGroupAdmin', async (data) => {
  const dataRequest = {
    name: data.nameGroup,
    dateStart: Math.floor(new Date(data.dateStart).getTime() / 1000),
    dateEnd: Math.floor(new Date(data.dateEnd).getTime() / 1000),
    programmName: data.programm
  }
  const response = await postGroupAdmin(dataRequest);
  return response.data;
});

export const receivingGroups = createAsyncThunk('group/receivingGroups', async () => {
  const response = await getGroupAdmin();
  return response.data;
});

export const removeGroup = createAsyncThunk('group/removeGroup', async (id) => {
      const response = await deleteGroup(id);
      return response.data;
});

export const groupSlice = createSlice({
  name: 'group',
  initialState: {
    groups: [],
    groupCard: {},
    errorMes: '',
    
    isLoadingGroups: false,
    errorReceivingGroups: '',

    isLoadingCreateGroupAdmin: false,
    errorCreateGroupAdmin: '',

    isLoadingDeleteGroup: false,
    errorDeleteGroup: '',
  },
  reducers: {
    setGroupCard: (state, action) => {
      state.groupCard = action.payload;
    }
  },
    extraReducers: (builder) => {
        //создание программы админ
        builder.addCase(sendingGroupAdmin.pending, (state) => {
          // state.errorMes = '';
          state.errorCreateGroupAdmin = '';
          state.isLoadingCreateGroupAdmin = true;
        });
        builder.addCase(sendingGroupAdmin.rejected, (state, action) => {
          // state.errorMes = action.payload.message;
          state.isLoadingCreateGroupAdmin = false;
          state.errorCreateGroupAdmin = 'Ошибка создания!';
        });
        builder.addCase(sendingGroupAdmin.fulfilled, (state, action) => {
          // state.errorMes = '';
          state.isLoadingCreateGroupAdmin = false;
          state.errorCreateGroupAdmin = '';
          state.groupCard = action.payload;
          // console.log(action.payload)
        });

        // запрос списка программ
        builder.addCase(receivingGroups.pending, (state) => {
          // state.errorMes = '';
          state.errorReceivingGroups = '';
          state.isLoadingGroups = true;
        });
        builder.addCase(receivingGroups.rejected, (state, action) => {
          // state.errorMes = action.payload.message;
          state.isLoadingGroups = false;
          state.errorReceivingGroups = 'Ошибка загрузки!';
        });
        builder.addCase(receivingGroups.fulfilled, (state, action) => {
          // state.errorMes = '';
          state.isLoadingGroups = false;
          state.errorReceivingGroups = '';
          state.groups = action.payload;
          if (state.groupCard?._id) {
            state.groupCard = state.groups.find((item)=>item._id === state.groupCard._id)
          }
        });

        //удаление программы
        builder.addCase(removeGroup.pending, (state) => {
          // state.errorMes = '';
          state.errorDeleteGroup = '';
          state.isLoadingDeleteGroup = true;
        });
        builder.addCase(removeGroup.rejected, (state, action) => {
          // state.errorMes = action.payload.message;
          state.isLoadingDeleteGroup = false;
          state.errorDeleteGroup = 'Ошибка удаления!';
        });
        builder.addCase(removeGroup.fulfilled, (state, action) => {
          // state.errorMes = '';
          state.isLoadingDeleteGroup = false;
          state.errorDeleteGroup = '';
        });
    },
})

export const { setGroupCard } = groupSlice.actions

export default groupSlice.reducer

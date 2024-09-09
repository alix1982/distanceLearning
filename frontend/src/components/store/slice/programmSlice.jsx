import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteProgramm, getProgrammAdmin, postProgrammAdmin } from '../apiSlice';
// import { deleteProgramm } from '../apiSlice';

export const sendingProgrammAdmin = createAsyncThunk('programm/sendingProgrammAdmin', async (data) => {
  const thCountRequest = data.countThemes.split(',', data.countBlocks).map((item)=>Number(item))
  const dataRequest = {
    name: data.nameProgramm,
    blockCount: Number(data.countBlocks),
    themaCount: thCountRequest
  }
  const response = await postProgrammAdmin(dataRequest);
  return response.data;
});

export const receivingProgramms = createAsyncThunk('programm/receivingProgramms', async () => {
  const response = await getProgrammAdmin();
  return response.data;
});

export const removeProgramm = createAsyncThunk('programm/removeProgramm', async (id) => {
      const response = await deleteProgramm(id);
      return response;
});

export const programmSlice = createSlice({
  name: 'programm',
  initialState: {
    programms: [],
    programmCard: {},
    errorMes: '',
    
    isLoadingProgramms: false,
    errorReceivingProgramms: '',

    isLoadingCreateProgrammAdmin: false,
    errorCreateProgrammAdmin: '',

    isLoadingDeleteProgramm: false,
    errorDeleteProgramm: '',
  },
  reducers: {
    setProgrammCard: (state, action) => {
      state.programmCard = action.payload;
    }
  },
    extraReducers: (builder) => {
        //создание программы админ
        builder.addCase(sendingProgrammAdmin.pending, (state) => {
          // state.errorMes = '';
          state.errorCreateProgrammAdmin = '';
          state.isLoadingCreateProgrammAdmin = true;
        });
        builder.addCase(sendingProgrammAdmin.rejected, (state, action) => {
          // state.errorMes = action.payload.message;
          state.isLoadingCreateProgrammAdmin = false;
          state.errorCreateProgrammAdmin = 'Ошибка создания!';
        });
        builder.addCase(sendingProgrammAdmin.fulfilled, (state, action) => {
          // state.errorMes = '';
          state.isLoadingCreateProgrammAdmin = false;
          state.errorCreateProgrammAdmin = '';
          state.programmCard = action.payload;
          // console.log(action.payload)
        });

        // запрос списка программ
        builder.addCase(receivingProgramms.pending, (state) => {
          // state.errorMes = '';
          state.errorReceivingProgramms = '';
          state.isLoadingProgramms = true;
        });
        builder.addCase(receivingProgramms.rejected, (state, action) => {
          // state.errorMes = action.payload.message;
          state.isLoadingProgramms = false;
          state.errorReceivingProgramms = 'Ошибка загрузки!';
        });
        builder.addCase(receivingProgramms.fulfilled, (state, action) => {
          // state.errorMes = '';
          state.isLoadingProgramms = false;
          state.errorReceivingProgramms = '';
          state.programms = action.payload;
          if (state.programmCard?._id) {
            state.programmCard = state.programms.find((item)=>item._id === state.programmCard._id)
          }
        });

        //удаление программы
        builder.addCase(removeProgramm.pending, (state) => {
          // state.errorMes = '';
          state.errorDeleteProgramm = '';
          state.isLoadingDeleteProgramm = true;
        });
        builder.addCase(removeProgramm.rejected, (state, action) => {
          // state.errorMes = action.payload.message;
          state.isLoadingDeleteProgramm = false;
          state.errorDeleteProgramm = 'Ошибка удаления!';
        });
        builder.addCase(removeProgramm.fulfilled, (state, action) => {
          // state.errorMes = '';
          state.isLoadingDeleteProgramm = false;
          state.errorDeleteProgramm = '';
        });
    },
})

export const { setProgrammCard } = programmSlice.actions

export default programmSlice.reducer

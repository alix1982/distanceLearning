import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    postQuestion,
  postQuestionnaire,
 } from '../apiSlice';

export const sendingQuestionnaire = createAsyncThunk('questionnaire/sendingQuestionnaire', async (data) => {
  // try {
      const response = await postQuestionnaire(data);
      return response;
  // } catch (e) {
  //     console.log(e);
  // }
});

export const sendingQuestion = createAsyncThunk('questionnaire/sendingQuestion', async (data) => {
    // try {
        const response = await postQuestion(data);
        return response;
    // } catch (e) {
    //     console.log(e);
    // }
  });

export const noAutorizationSlice = createSlice({
  name: 'noAutorization',
  initialState: {
    isLoadingQuestion: false,
    mesQuestion: '',
    errorQuestion: '',

    isLoadingQuestionnaire: false,
    mesQuestionnaire: '',
    errorQuestionnaire: ''
  },
  reducers: {
    setErrorQuestion: (state, action) => {
      state.mesQuestionnaire = '';
      state.errorQuestion = '';
    },
    setErrorQuestionnaire: (state, action) => {
      state.mesQuestionnaire = '';
      state.errorQuestionnaire = '';

    },
  },
    extraReducers: (builder) => {
        //создание анкеты
        builder.addCase(sendingQuestionnaire.pending, (state) => {
          state.isLoadingQuestionnaire = true;
          state.errorQuestionnaire = ''
        });
        builder.addCase(sendingQuestionnaire.rejected, (state, action) => {
          state.isLoadingQuestionnaire = false;
          state.errorQuestionnaire = 'Ошибка отправки'
        });
        builder.addCase(sendingQuestionnaire.fulfilled, (state, action) => {
          state.isLoadingQuestionnaire = false;
          state.errorQuestionnaire = ''
          state.mesQuestionnaire = action.payload.message
        });

        //оправка письма с вопросом
        builder.addCase(sendingQuestion.pending, (state) => {
          state.isLoadingQuestion = true;
          state.errorQuestion = ''
        });
        builder.addCase(sendingQuestion.rejected, (state, action) => {
          state.isLoadingQuestion = false;
          state.errorQuestion = 'Ошибка отправки'
        });
        builder.addCase(sendingQuestion.fulfilled, (state, action) => {
          state.isLoadingQuestion = false;
          state.errorQuestion = '';
          state.mesQuestion = action.payload.message

        });
    },
})

export const { setErrorQuestion, setErrorQuestionnaire } = noAutorizationSlice.actions

export default noAutorizationSlice.reducer

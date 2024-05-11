import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  // postQuestionnaire,
  postQuestionnaireAdmin,
  getQuestionnaire,
  deleteQuestionnaire,
  patchQuestionnaireAdmin,
  patchQuestionnaireAdminModeration } from '../apiSlice';

export const sendingQuestionnaireAdmin = createAsyncThunk('questionnaire/sendingQuestionnaireAdmin', async (data) => {
  // try {
      const response = await postQuestionnaireAdmin(data);
      return response;
  // } catch (e) {
  //     console.log(e);
  // }
});

export const receivingQuestionnaires = createAsyncThunk('questionnaire/receivingQuestionnaires', async () => {
  // try {
      const response = await getQuestionnaire();
      return response.data;
  // } catch (e) {
  //     console.log(e);
  // }
});

export const setQuestionnaireAdmin = createAsyncThunk('questionnaire/setQuestionnaireAdmin', async (data) => {
  // try {
      const response = await patchQuestionnaireAdmin(data);
      return response;
  // } catch (e) {
  //     console.log(e);
  // }
});

export const setModerationQuestionnaireAdmin = createAsyncThunk('questionnaire/setModerationQuestionnaireAdmin', async (data) => {
  // try {
    const response = await patchQuestionnaireAdminModeration(data);
    return response;
  // } catch (e) {
  //   console.log(e);
  //   return e.response.data
  // } 
});

export const removeQuestionnaire = createAsyncThunk('questionnaire/removeQuestionnaire', async (id) => {
  // try {
      const response = await deleteQuestionnaire(id);
      return response;
  // } catch (e) {
  //     console.log(e);
  // }
});

export const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState: {
    questionnaires: [],
    isLoadingQuestionnaires: false,
    errorReceivingQuestionnaires: '',

    questionnaireCard: {},

    isModarationState: false,
    isLoadingModaration: false,
    errorModaration: '',

    isLoadingFixQuestionnaire: false,
    errorFixQuestionnaire: '',

    isLoadingDeleteCard: false,
    errorDeleteCard: '',

    isLoadingCreateAdmin: false,
    errorCreateAdmin: '',
    // errorMes: '',
  },
  reducers: {
    setQuestionnaireCard: (state, action) => {
      state.questionnaireCard = action.payload;
      // state.isModarationState = action.payload.isModeration
    },
    setIsModerationState: (state, action) => {
      state.isModarationState = action.payload;
    },
  },
    extraReducers: (builder) => {
        //создание анкеты админ
        builder.addCase(sendingQuestionnaireAdmin.pending, (state) => {
          // state.errorMes = '';
          state.errorCreateAdmin = '';
          state.isLoadingCreateAdmin = true;
        });
        builder.addCase(sendingQuestionnaireAdmin.rejected, (state, action) => {
          // state.errorMes = action.payload.message;
          state.isLoadingCreateAdmin = false;
          state.errorCreateAdmin = 'Ошибка создания!';
        });
        builder.addCase(sendingQuestionnaireAdmin.fulfilled, (state, action) => {
          // state.errorMes = '';
          state.isLoadingCreateAdmin = false;
          state.errorCreateAdmin = '';
          state.questionnaireCard = action.payload;
          // console.log(action.payload)
        });

        // запрос списка анкет
        builder.addCase(receivingQuestionnaires.pending, (state) => {
          // state.errorMes = '';
          state.errorReceivingQuestionnaires = '';
          state.isLoadingQuestionnaires = true;
        });
        builder.addCase(receivingQuestionnaires.rejected, (state, action) => {
          // state.errorMes = action.payload.message;
          state.isLoadingQuestionnaires = false;
          state.errorReceivingQuestionnaires = 'Ошибка загрузки!';
        });
        builder.addCase(receivingQuestionnaires.fulfilled, (state, action) => {
          // state.errorMes = '';
          state.isLoadingQuestionnaires = false;
          state.errorReceivingQuestionnaires = '';
          state.questionnaires = action.payload;
          if (state.questionnaireCard?._id) {
            state.questionnaireCard = state.questionnaires.find((item)=>item._id === state.questionnaireCard._id)
          }
          // if (state.questionnaireCard?.snils) {
          //   state.questionnaireCard = state.questionnaires.find((item)=>item.snils === state.questionnaireCard.snils)
          // };
        });

        // изменение анкеты админ
        builder.addCase(setQuestionnaireAdmin.pending, (state) => {
          // state.errorMes = '';
          state.errorFixQuestionnaire = '';
          state.isLoadingFixQuestionnaire = true; 
        });
        builder.addCase(setQuestionnaireAdmin.rejected, (state, action) => {
          // state.errorMes = action.payload.message;
          state.isLoadingFixQuestionnaire = false;
          state.errorFixQuestionnaire = 'Ошибка изменения!';
        });
        builder.addCase(setQuestionnaireAdmin.fulfilled, (state, action) => {
          // state.errorMes = '';
          state.isLoadingFixQuestionnaire = false;
          state.errorFixQuestionnaire = '';
        });

        // запрос модерации
        builder.addCase(setModerationQuestionnaireAdmin.pending, (state) => {
          // state.errorMes = '';
          state.errorModaration = '';
          state.isLoadingModaration = true; 
        });
        builder.addCase(setModerationQuestionnaireAdmin.rejected, (state, action) => {
          // state.errorMes = action.payload.message;
          // console.log(action);
          state.isLoadingModaration = false;
          state.errorModaration = 'Ошибка проверки!';
        });
        builder.addCase(setModerationQuestionnaireAdmin.fulfilled, (state, action) => {
          // state.errorMes = '';
          // state.errorModaration = action.payload.message;
          console.log(action.payload.message)

          state.isLoadingModaration = false;
          state.errorModaration = '';
        });
        
        //удаление анкеты
        builder.addCase(removeQuestionnaire.pending, (state) => {
          // state.errorMes = '';
          state.errorDeleteCard = '';
          state.isLoadingDeleteCard = true;
        });
        builder.addCase(removeQuestionnaire.rejected, (state, action) => {
          // state.errorMes = action.payload.message;
          state.isLoadingDeleteCard = false;
          state.errorDeleteCard = 'Ошибка удаления!';
        });
        builder.addCase(removeQuestionnaire.fulfilled, (state, action) => {
          // state.errorMes = '';
          state.isLoadingDeleteCard = false;
          state.errorDeleteCard = '';
        });
    },
})

export const { setQuestionnaireCard, setIsModerationState } = questionnaireSlice.actions

export default questionnaireSlice.reducer

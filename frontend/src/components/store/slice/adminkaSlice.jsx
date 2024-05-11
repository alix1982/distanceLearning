// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { postQuestionnaire } from '../apiSlice';

// export const sendingQuestionnaire = createAsyncThunk('questionnaire/sendingQuestionnaire', async (data) => {
//   try {
//       const response = postQuestionnaire(data);
//       return response;
//   } catch (e) {
//       console.log(e);
//   }
// });

// export const questionnaireSlice = createSlice({
//   name: 'questionnaire',
//   initialState: {
//     // errors: null,
//   },
//   reducers: {
//     // increment: (state) => {

//     //   state.value += 1
//     // },
//   },
//     extraReducers: (builder) => {
//         builder.addCase(sendingQuestionnaire.pending, (state) => {
//           console.log('pending');
//           // state.doctorCertificatesLoading = 'start';
//         });
//         builder.addCase(sendingQuestionnaire.rejected, (state) => {
//           console.log('rejected');

//           // state.doctorCertificatesLoading = 'error';
//         });
//         builder.addCase(sendingQuestionnaire.fulfilled, (state, action) => {
//           console.log('fulfilled');
//           // state.doctorCertificatesLoading = 'done';
//           // state.certificates = action.payload.data;
//         });
//     },
// })

// export const { increment } = questionnaireSlice.actions

// export default questionnaireSlice.reducer

import { configureStore } from '@reduxjs/toolkit'
import questionnaireSlice from './slice/questionnaireSlice'
import authSlice from './slice/authSlice'
import userSlice from './slice/userSlice'
import noAutorizationSlice from './slice/noAutorizationSlice'

export const store = configureStore({
    reducer: {
        questionnaireSlice,
        authSlice,
        userSlice,
        noAutorizationSlice,
    },  
})
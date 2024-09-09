import { configureStore } from '@reduxjs/toolkit'
import questionnaireSlice from './slice/questionnaireSlice'
import authSlice from './slice/authSlice'
import userSlice from './slice/userSlice'
import noAutorizationSlice from './slice/noAutorizationSlice'
// import programmUserSlice from './slice/programmUserSlice'
import programmSlice from './slice/programmSlice'
import groupSlice from './slice/groupSlice'

export const store = configureStore({
    reducer: {
        questionnaireSlice,
        authSlice,
        userSlice,
        noAutorizationSlice,
        // programmUserSlice,
        programmSlice,
        groupSlice
    },  
})
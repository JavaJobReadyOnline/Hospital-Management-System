import { configureStore } from '@reduxjs/toolkit'
import patientReducer from '../components/patient/patientSlice'

export const store = configureStore({
    reducer:{
        patients:patientReducer
    }
})
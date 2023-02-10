import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const GET_ALL_PATIENTS = 'http://localhost:8080/patient/all'
const POST_NEW_PATIENTS = 'http://localhost:8080/patient/create'
const DELETE_PATIENTS = 'http://localhost:8080/patient/delete/'

export const fetchPatients = createAsyncThunk('patients/fetchPatients', async ()=>{
    const response = await axios.get(GET_ALL_PATIENTS)
    return response.data
})

export const addNewPatient = createAsyncThunk('patients/addNewPatient',async(initialPatient)=>{
    const response = await axios.post(POST_NEW_PATIENTS,initialPatient)
    return response.data
})

export const updatePatient = createAsyncThunk('patients/updatePatient',async(initialPatient)=>{
    const response = await axios.post(POST_NEW_PATIENTS,initialPatient)
    return response.data
})

export const deletePatient = createAsyncThunk('patients/deletePatient',async(patientId)=>{
    const response = await axios.delete(`${DELETE_PATIENTS}${patientId}`)
    return response.data
})

const initialState = {
    patients:[],
    status:'idle',
    error:null
}

export const patientSlice = createSlice({
    name:'patientSlice',
    initialState,
    reducers:{
        addPatient:{
            reducer(state,action){
                state.push(action.payload)          
            },
            prepare(id,firstname,lastname,address,description,gender,age,start_date,end_date){
                return {
                    payload:{
                        id,
                        firstname,
                        lastname,
                        address,
                        description,
                        gender,
                        age,
                        start_date,
                        end_date
                  }
              }
            }
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchPatients.pending,(state,action)=>{
            state.status = 'loading'
        })
        .addCase(fetchPatients.fulfilled,(state,action)=>{
            state.status = 'succeed'
            state.patients = action.payload
        })
        .addCase(fetchPatients.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(addNewPatient.fulfilled,(state,action)=>{
            state.patients.push(action.payload)
        })
        .addCase(updatePatient.fulfilled,(state,action)=>{
            const patient = action.payload
            const patients = state.patients.filter(p => p.id !== patient.id)
            state.patients = [patient,...patients]
        })
        .addCase(deletePatient.fulfilled,(state,action)=>{
            const patientId = action.payload
            const patients = state.patients.filter(p => p.id !== patientId)
            state.patients = patients
        })
    }
})

export const selectAllPatients = state => state.patients.patients
export const getPatientStatus = state => state.patients.status
export const getPatientError = state => state.patients.error

export const findById = (state,patientId) => state.patients.patients.find(
    patient => patient.id === patientId)

export const {addPatient} = patientSlice.actions
export default patientSlice.reducer
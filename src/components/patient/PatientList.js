
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import PatientPage from "./PatientPage"
import { selectAllPatients,getPatientError,getPatientStatus,fetchPatients } from'./patientSlice'
import './PatientPage.style.css'

function PatientList(){

    const patients = useSelector(selectAllPatients)
    const patientStatus = useSelector(getPatientStatus)
    const error = useSelector(getPatientError)

    const dispatch = useDispatch();

    useEffect(()=>{
        if(patientStatus === 'idle'){
            dispatch(fetchPatients())
        }
    },[patientStatus,dispatch])

    let content;

        if(patientStatus === 'loading'){
            content = (<p>Loading....</p>)
        }

        if(patientStatus === 'succeed'){
            content =   patients.map( patientList => <PatientPage
                id={patientList.id}
                firstname={patientList.firstname}
                lastname={patientList.lastname}
                address={patientList.address}
                description={patientList.description}
                gender={patientList.gender}
                age={patientList.age}
                start_date={patientList.start_date}
                end_date={patientList.end_date}
            />
            )
        }

        if(patientStatus === 'fail'){
            content = (<p>{error}</p>)
        }


  
    
   return content
   
}
export default PatientList
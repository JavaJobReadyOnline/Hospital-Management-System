import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { addNewPatient,findById,updatePatient } from "./patientSlice"
import { useParams,useNavigate } from "react-router-dom"

function EditPatientForm(props){

    const { patientId }= useParams()
    const patient = useSelector((state) => findById(state,Number(patientId)))
    const navigate = useNavigate()

    const [id,setId]=useState(patient?.id)
    const [firstname,setFirstName]=useState(patient?.firstname)
    const [lastname,setLastName]=useState(patient?.lastname)
    const [address,setAddress]=useState(patient?.address)
    const [description,setDescription]=useState(patient?.description)
    const [gender,setGender]=useState(patient?.gender)
    const [age,setAge]=useState(patient?.age)
    const [start_date,setStartDate]=useState(patient?.start_date)
    const [end_date,setEndDate]=useState(patient?.end_date)
    const [addRequestStatus,setAddRequestStatus]=useState('idle')
   
    
    const onFirstNameInputChange = e => setFirstName(e.target.value)
    const onLastNameInputChange = e => setLastName(e.target.value)
    const onAddressInputChange = e => setAddress(e.target.value)
    const onDescriptionInputChange = e => setDescription(e.target.value)
    const onGenderInputChange = e => setGender(e.target.value)
    const onAgeInputChange = e => setAge(e.target.value)
    const onStartDateInputChange = e => setStartDate(e.target.value)
    const onEndDateInputChange = e => setEndDate(e.target.value)
    
    const dispatch = useDispatch()

    const canSave = [firstname,lastname,address,description,gender,age,start_date,end_date]
    .every(Boolean) && addRequestStatus === 'idle'

    const isEdit = props.mode === 'edit'

    const onPatientSubmit = e =>{
        e.preventDefault()

        if(canSave){
        setAddRequestStatus('pending')

        try{
        dispatch(
            isEdit?
            updatePatient({
                id,
                firstname,
                lastname,
                address,
                description,
                gender,
                age,
                start_date,
                end_date
            }):
            addNewPatient({
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
             )).unwrap()

             navigate('/patientdashboard')
        }catch(error){
            console.log(error)
        }finally{
            setAddRequestStatus('idle')
            setId('')
            setFirstName('')
            setLastName('')
            setAddress('')
            setDescription('')
            setAge('')
            setStartDate('')
            setEndDate('')
        }
    }
       

    }

    return(
       
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Edit Patient Information</h5>
                    <hr />
                    <form onSubmit={onPatientSubmit}>
                        <div className="form-group">
                           
                            <input 
                            className="form-control form-control-lg " 
                            placeholder="patient ID"
                            value={id}
                            disabled={isEdit}
                            />
                            <br />


                            <input 
                            type="text" 
                            className="form-control form-control-lg " 
                            placeholder="firstname"
                            value={firstname}
                            onChange={onFirstNameInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                            type="text" 
                            className="form-control form-control-lg " 
                            placeholder="lastname"
                            value={lastname}
                            onChange={onLastNameInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="address"
                            value={address}
                            onChange={onAddressInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                            type="text" 
                            className="form-control form-control-lg " 
                            placeholder="description" 
                            value={description}
                            onChange={onDescriptionInputChange}
                           
                            />
                        </div>
                        <div className="form-group">
                            <input 
                            type="text" 
                            className="form-control form-control-lg " 
                            placeholder="gender"
                            value={gender}
                            onChange={onGenderInputChange}
                            />
                        </div>
                       
                        <div className="form-group">
                            <input 
                            type="text" 
                            className="form-control form-control-lg " 
                            placeholder="age"
                            value={age}
                            onChange={onAgeInputChange}
                            />
                        </div>                      
                        <div className="form-group">
                            <input 
                            type="date" 
                            className="form-control form-control-lg"
                            value={start_date}
                            onChange={onStartDateInputChange}
                              />
                        </div>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input 
                            type="date" 
                            className="form-control form-control-lg" 
                            value={end_date}
                            onChange={onEndDateInputChange}
                            />
                        </div>

                        <input 
                        type="submit" 
                        className="btn btn-primary btn-block mt-4"  
                        value={isEdit?'Update':'Save'}
                        disabled = {!canSave}
                        />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default EditPatientForm
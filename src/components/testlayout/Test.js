

import { useDispatch } from 'react-redux'
import { deletePatient } from '../patient/patientSlice'
import { useState } from "react"
import ConfirmModal from '../utility/ConfirmModal'
import Backdrop from '../utility/Backdrop'
import './Test.css'
import CreatePatientButton from '../patient/CreatePatientButton'

function Test(props){

    const dispatch = useDispatch()
    const [isModalOpen,setModalOpen] = useState(false)
    function deleteHandler(){
        setModalOpen(true);
    }
    function backdropHandler(){
        setModalOpen(false);
      }
    function cancelHandler() {
        setModalOpen(false);
    }
    function ConfirmHandler(){
        dispatch(deletePatient(props.id)).unwrap()
        setModalOpen(false);
    }
    return(


        <div>

       <article className="article-header">
         <header>
           <h1>Patients</h1>
         </header>
       </article>

 
       <table>
         <tr>
           <th>Id</th>
           <th>Name</th>
           <th>Address</th>
           <th>Description</th>
           <th>Gender</th>
           <th>Age</th>
           <th>Start Date</th>
           <th>End Date</th> 
           <th>Action</th>  
           <th><CreatePatientButton /></th>
         </tr>        
         
                <tbody>
                    <td>{props.id}</td>
                    <td>{`${props.firstname} ${props.lastname}`}</td>
                    <td>{props.address}</td>
                    <td>{props.description}</td>
                    <td>{props.gender}</td>
                    <td>{props.age}</td>
                    <td>{props.start_date}</td>
                    <td>{props.end_date}</td>                  
                    <td>
                        <div>
                            <input
                                type="button"
                                value="Edit"
                                onClick={`/edit-patient/${props.id}`}
                            />
                            <input
                                type="button"
                                value="Delete"
                                onClick={deleteHandler}
                            />
                        </div>
                    </td>
             </tbody>
                )
        
       </table>
    
       {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={ConfirmHandler}/>}
       {isModalOpen && <Backdrop onBackdrop={backdropHandler}/>}
     </div>

    

  

    )
}

export default Test






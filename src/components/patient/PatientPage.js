
import { useDispatch } from 'react-redux'
import { deletePatient } from './patientSlice'
import { useState } from "react"
import ConfirmModal from '../utility/ConfirmModal'
import Backdrop from '../utility/Backdrop'
import './PatientPage.style.css'
import { MdEdit,MdOutlineDelete } from "react-icons/md";
import { Link } from 'react-router-dom'

function PatientPage(props){

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
           {/* <article className="article-header">        
             <header>
               <h1>Patients</h1>
             </header>
           </article>
           <br />
           <button>Create New Patient <CreatePatientButton /></button> */}
   
      
           <table>
           
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Description</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Start Date</th>
                        <th>End Date</th> 
                        <th>Action</th>             
                    </thead>       
        
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
                            <Link to={`/edit-patient/${props.id}`}><MdEdit size='25px' /></Link>                           
                          
                            <Link to={deleteHandler}><MdOutlineDelete size='25px' /></Link>                   
                        </td>
                 </tbody>
                    
            
           </table>
        
           {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={ConfirmHandler}/>}
           {isModalOpen && <Backdrop onBackdrop={backdropHandler}/>}
         </div>
    





    //     <div class="projects">
    //     <div class="container">
                          
    //                 <div className="container">
    //                     <div class="card card-body bg-light mb-3">
    //                         <div class="row">
                               
    //                         <p>{props.id}</p>
    //                         <h3>{props.firstname} {props.lastname}</h3>
                            
    //                         <p>{props.address}</p>
    //                         <p>{props.description}</p>
    //                         <p>{props.gender}</p>
    //                         <p>{props.age}</p>
    //                         <span>{props.start_date}</span>
    //                         <span>{props.end_date}</span>

    //                             <div class="col-md-4 d-none d-lg-block">
    //                                 <ul class="list-group">
                                       
    //                                     <Link to={`/edit-patient/${props.id}`}>
    //                                         <li class="list-group-item update">
    //                                             <i class="fa fa-edit pr-1">Update Patient Info</i>
    //                                         </li>
    //                                     </Link>
    //                                     <br />
    //                                     <a onClick={deleteHandler}>
    //                                         <li class="list-group-item delete">
    //                                             <i class="fa fa-minus-circle pr-1">Delete Patient</i>
    //                                         </li>
    //                                     </a>
    //                                 </ul>


    //                         {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={ConfirmHandler}/>}
    //                         {isModalOpen && <Backdrop onBackdrop={backdropHandler}/>}
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
               

               
    //     </div>
    // </div>

    )
}

export default PatientPage
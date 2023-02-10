import PatientList from "./PatientList";
import CreatePatientButton from "./CreatePatientButton"; 

function PatientDashboard(){
    return(
        <div class="container">
            <article className="article-header">        
                <header>
                <h1>Patients</h1>
                </header>
            </article>
           <br />
           <button>Create New Patient <CreatePatientButton /></button> 
           <hr />               
            <PatientList />         
        </div>
    

    )
}

export default PatientDashboard
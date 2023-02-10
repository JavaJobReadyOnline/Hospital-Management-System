
import AdminDashboard from "./components/layout/AdminDashboard"
import AddPatientForm from "./components/patient/AddPatientForm";
import EditPatientForm from "./components/patient/EditPatientForm";
import PatientPage from "./components/patient/PatientPage";
import PatientDashboard from "./components/patient/PatientDashboard";
import { Route,Routes } from "react-router-dom"
import MainNavigation from "./components/layout/MainNavigation";
import Table from "./components/testlayout/Test";
import PatientList from "./components/patient/PatientList";

function App() {
  return ( 
         <div>  
         
         
          <Routes>
             <Route path='/test' element={<Table/>} />
              <Route path='/main' element={<MainNavigation/>} />
              <Route path='/patientpage' element={<PatientPage/>} />
              <Route path='/patientlist' element={<PatientList/>} />
              <Route path='/add-patient' element={<AddPatientForm/>}/>
              <Route path='/edit-patient/:patientId' element={<EditPatientForm mode='edit'/>}/>
              <Route path='/admindashboard' element={<AdminDashboard/>}/>
              <Route path='/patientdashboard' element={<PatientDashboard/>}/>
          </Routes>
         
         </div>
  )
}

export default App;


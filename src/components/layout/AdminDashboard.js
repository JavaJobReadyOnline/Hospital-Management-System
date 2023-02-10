import { Link } from "react-router-dom"
import './Nav.module.css'

let Logo = require('/Users/semoon/Desktop/HospitalReact/react-hospital/src/components/layout/logo.PNG');
function AdminDashboard(){
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-blue">
        <div className="container-fluid">
            <a href="#" className="navbar-brand">
                <img src={Logo} height="80" alt="CoolBrand"></img>
            </a>
           
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                 
                    <Link to='/patientpage' className="nav-item nav-link active">Patient</Link>
                    <Link to='/' className="nav-item nav-link active">Records</Link>
                    <Link to='/' className="nav-item nav-link active">Appointment</Link>
                    
                   
                    
                </div>

               
                
            </div>
        </div>
    </nav>
    );
}

export default AdminDashboard
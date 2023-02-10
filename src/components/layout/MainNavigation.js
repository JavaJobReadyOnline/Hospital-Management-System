import { Link } from "react-router-dom"
import './Nav.module.css'
import { MdOutlineHome,MdPersonAddAlt } from "react-icons/md";


let Logo = require('/Users/semoon/Desktop/HospitalReact/react-hospital/src/components/layout/logo.PNG');
function MainNavigation(){
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-blue">
        <div className="container-fluid">
            <a href="#" className="navbar-brand">
                <img src={Logo} height="80" alt="CoolBrand"></img>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                
                    <Link to='/dashboard' className="nav-item nav-link active"> Home <MdOutlineHome size='20px'/></Link>
                 
                    <Link to='/signup' className="nav-item nav-link active">SingUp<MdPersonAddAlt size='23px'/></Link>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Login</a>
                        <div className="dropdown-menu">
                            <Link to='/admindashboard' className="dropdown-item">Admin</Link>
                            <a href="#" className="dropdown-item">Patient</a>
                            
                        </div>
                    </div>
                     <Link to='/service-page' className="nav-item nav-link active" tabindex="-1">Service</Link>
                    
                </div>

               
                
            </div>
        </div>
    </nav>
    );
}

export default MainNavigation
import React from "react"
import { Link } from "react-router-dom"
import { MdOutlineControlPoint } from "react-icons/md";
function CreatePatientButton(){
return(
    <React.Fragment>
    <Link to='/add-patient'><MdOutlineControlPoint size='30px'/></Link>
    </React.Fragment>
)
}

export default CreatePatientButton
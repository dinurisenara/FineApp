import { useNavigate } from "react-router-dom"
export 
const Selectuser = () =>{
    const navigate = useNavigate();
const citizenlog = () =>{
    navigate('/citizenlogin')
}
const officerlog = () =>{
    navigate('/officerlogin')
}
    return (
    <div>
        <button onClick={citizenlog}>Citizen</button>
        <button onClick={officerlog}>Officer</button>
    </div>)
}
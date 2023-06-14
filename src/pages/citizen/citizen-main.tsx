import { useNavigate } from "react-router-dom"
export 

const CitizenMain = () =>{
    const navigate = useNavigate();
    const paynow = () =>{
        navigate("/payment")
    }
    return(
        <div>
        
        <button onClick={paynow}>Pay Now</button>
        </div>
        )
}
import { useNavigate } from "react-router-dom"
export 

const CitizenMain = () =>{
    const navigate = useNavigate();
    const paynow = () =>{
        navigate("/payment")
    }
    const logout = () =>{
        navigate('/')
    }
    return(
        <div>
        <button onClick={logout}>Log-Out</button>
        <button onClick={paynow}>Pay Now</button>
        </div>
        )
}
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../../config/firebase";
export 

const CitizenMain = () =>{
    const navigate = useNavigate();
    
    const paynow = () =>{
        navigate("/payment")
    }
    const logout = async () => {
        try {
          await signOut (auth);
          console.log(auth?.currentUser?.email)
          navigate('/')
        } catch(err){
          console.error(err)
        }
        
    }
    return(
        <div>
        <button onClick={logout}>Log-Out</button>
        <button onClick={paynow}>Pay Now</button>
        </div>
        )
}
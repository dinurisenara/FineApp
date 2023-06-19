import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { Fine } from "./fine";
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
          navigate('/citizenlogin')
        } catch(err){
          console.error(err)
        }
        
    }
    return(
        <div>
        <button onClick={logout}>Log-Out</button>
        <Fine/>
        <button onClick={paynow}>Pay Now</button>
        </div>
        )
}
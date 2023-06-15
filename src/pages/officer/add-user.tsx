import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword,signOut } from "firebase/auth";
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { auth } from '../../config/firebase';

export 

const Adduser = () =>{
  const navigate = useNavigate();
  const { handleSubmit} = useForm();
  const [email , setEmail] = useState('')
  const [password,setPassword] = useState('')
  const onSubmit = () =>{
    addUSer();
    logout();
    navigate('/officer-main')
    //console.log(auth?.currentUser?.email)
  }
  const addUSer = async () =>{
    try{
   await createUserWithEmailAndPassword(auth,email,password)
    } catch(err){
      console.error(err)
    }
      
  }
  const logout = async () => {
      try {
        await signOut (auth);
      } catch(err){
        console.error(err)
      }
  }
  
    return (
        <div>
           <>
  <h2 className="mainheader_signup">
   ADD USER
  </h2>
  <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="id_signup">Enter email:</label><br />
    <input type="email" id="id_signup" name="id_signup"  onChange={(e) =>setEmail(e.target.value)}/><br />
    <label htmlFor="password_signup">PASSWORD:</label><br />
    <input type="password" id="password_signup" name="password_signup"  onChange={(e) =>setPassword(e.target.value)}/><br />
    <label htmlFor="confirmpassword_signup">CONFIRM PASSWORD:</label><br />
    <input type="password" id="confirmpassword_signup" name="confirmpassword_signup" /><br />
    <input type="submit"></input><br />
  </form>
</>

        </div>
    )
}
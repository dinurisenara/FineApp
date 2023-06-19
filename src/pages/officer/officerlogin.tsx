import { useState } from "react";
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { Navigate, useNavigate } from "react-router-dom";
import { FirebaseApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';


export const LoginOfficer = () => {
  
    const {register , handleSubmit , formState: {errors}} = useForm();
  const navigate = useNavigate();

    const onSubmit = (data: any) => {
        console.log(data)
        navigate('/officer-main')

    };
       
      
        return (
          <form className="form-container" onSubmit={handleSubmit(onSubmit)} >
            <label >Email</label>
            <br />
            <input  id="username" />
            
            <label htmlFor="password">PASSWORD:</label>
            <br />
            <input type="password" id="password"  />
      
           
      
              
      
            <input type="submit" className="button" value="Log-In" />
          </form>
        );
      }
    
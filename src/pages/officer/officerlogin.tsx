import { useState } from "react";
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { Navigate, useNavigate } from "react-router-dom";



export const LoginOfficer = () => {
    const {register , handleSubmit , formState: {errors}} = useForm();
  const navigate = useNavigate();
    
    const onSubmit = (data: any) => {
        console.log(data)
        navigate('/officer-main')

    };
       
      
        return (
          <form className="form-container" onSubmit={handleSubmit(onSubmit)} >
            <label htmlFor="username">Email</label>
            <br />
            <input type="email" id="username" {...register("email")}/>
            
            <label htmlFor="password">PASSWORD:</label>
            <br />
            <input type="password" id="password"  {...register("password")}/>
      
           
      
              
      
            <input type="submit" className="button" value="Log-In" />
          </form>
        );
      }
    
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../../config/firebase";

export const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const resetForm = () => {
    setEmail("");
    setPassword("");
    setErrorMessage(null);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    loginuser();
  };
  
  const loginuser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      auth.currentUser && navigate("/citizen-main");
      console.log(auth?.currentUser?.email);
    } catch (error: any) {
      console.log(error.code);
      // Handle Firebase errors
      if (error.code === "auth/user-not-found") {
        setErrorMessage("Invalid email. Please try again.");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("Invalid password. Please try again.");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Email</label>
      <br />
      <input
        type="email"
        id="username"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">PASSWORD:</label>
      <br />
      <input
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      {errorMessage && <div className="error">{errorMessage}</div>}

      <input type="submit" className="button" value="Log-In" />
    </form>
  );
};

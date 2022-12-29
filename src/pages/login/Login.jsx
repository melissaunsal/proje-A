import "./login.css";
import Register from "../register/Register";
import { BrowserRouter as Router, Switch, Route, useLocation, withRouter } from "react-router-dom";
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from "react-redux";

import { login as loginHandle } from "../../store/auth";
import { useHistory, useEffect } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBVS2avgCYHRGbw56m1CI9Gqzd8_yPT03A",
  authDomain: "projea-62ded.firebaseapp.com",
  projectId: "projea-62ded",
  storageBucket: "projea-62ded.appspot.com",
  messagingSenderId: "352949504931",
  appId: "1:352949504931:web:b023be69040d14c869e816",
  measurementId: "G-KJNLZYRL63"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

  

export const login = async (email, password) => {

  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)

    toast.success('Success')

    return user

  } catch (error) {
    toast.error("error")
  }
}
export const logout = async (email, password) => {
  try {
    const a = await signOut(auth)
    console.log('aa', a)
    return true
  }
  catch (error) {
    toast.error(error.message)
  }
}


export default function Login() {
  const history = useHistory()
  const dispatch = useDispatch()



  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async e => {
    e.preventDefault()
    const user = await login(email, password)


    dispatch(loginHandle(user));
    if (email && password) {
      history.push("/")
    }






  }

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit} >
        <label>Email</label>
        <input className="loginInput" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password..." />
        <button className="loginButton" disable={!email || !password} type="submit " >Login</button>
      </form>

    </div>
  );

}
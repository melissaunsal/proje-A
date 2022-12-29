import "./register.css"
import { initializeApp } from "firebase/app";
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../login/Login";





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
const auth = getAuth();

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    await setDoc(doc(db, "fals", auth.currentUser.uid), {

    });
    toast.success('Success')
    return user
  }
  catch (error) {
    toast.error("Hata!!")
  }
}



export default function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async e => {
    e.preventDefault()
    const user = await register(email, password)
    console.log(user)


  }
  return (

    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input className="registerInput" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password..." />
        <button disable={!email || !password} type="submit " className="registerButton">Register</button>
      </form>
    </div>
  )
}

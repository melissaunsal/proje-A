import React, { useEffect } from 'react'
import "../login/login.css";
import { useState } from 'react';
import toast from 'react-hot-toast';
import { collection, doc, getDoc, getDocs, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { db, storage } from '../login/Login';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { uuidv4 } from '@firebase/util';

function Fal() {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [image, setImage] = useState('')
  const [userFals, setUserFals] = useState([])

  const user = useSelector(state => state.auth.user)

  // let dizi = []
  // useEffect(() => {
  //   onSnapshot(collection(db, "fals"), (querySnapshot) => {
  //     querySnapshot.forEach(element => {
  //       console.log(element.data().approved)
  //       //Check
  //       element?.data().approved?.forEach(element => {
  //         dizi.push(element);
  //         //console.log(element)
  //       });
  //       console.log(dizi)
  //       setUserFals(dizi)
  //     });
  //   });
  // }, [])

  //Inputtan alınan image dosyaası
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };


  const getFals = async () => {
    const querySnapshot = await getDoc(doc(db, "fals", user.uid))
      .then((querySnapshot) => {
        console.log(querySnapshot?.data()?.approved);
        setUserFals(querySnapshot?.data()?.approved);
      })
  }

  useEffect(() => {
    getFals()
  }, [])

  console.log(userFals);

  const handleSubmit = async e => {
    e.preventDefault()


    if (email && name && bio && image) {
      try {

        const imageRef = ref(storage, `images/fals/${user.uid}/${uuidv4()}`);
        uploadBytes(imageRef, image)
          .then(async () => {
            getDownloadURL(imageRef)
              .then(async (url) => {

                // const querySnapshot = await getDoc(doc(db, "fals", user.uid))
                //   .then((querySnapshot) => {
                //     console.log(querySnapshot?.data()?.approved);
                //     setUserFals(querySnapshot?.data()?.approved);
                //   })

                updateDoc(doc(db, "fals", user.uid), {
                  ["approved"]: [
                    ...userFals,
                    {
                      name: name,
                      email: email,
                      bio: bio,
                      file: url,
                    }],


                }, { merge: true });
              })
              .catch((error) => {
                console.log(error.message);
              });
            setImage("");
            setBio("");
            setName("");
            setEmail("");
          })
          .catch((error) => {
            console.log(error.message);
          });

        toast.success('Success')
      } catch (error) {
        console.log(error);
      }
    }
    else {
      toast.error('error')

    }


  }

  return (
    <div className="login">
      <span className="loginTitle">EL FALI- KAHVE FALI</span>
      <form className="loginForm" onSubmit={handleSubmit} >
        <label>Email:</label>
        <input className="loginInput" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email..." />
        <label>ADINIZ:</label>
        <input className="loginInput" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name..." />
        <label>Kendinizi tanıtınız:</label>
        <textarea className="loginInput" type="text" value={bio} onChange={e => setBio(e.target.value)} placeholder="Yaşınız, kariyer durumu, medeni durumunuzu belirtiniz..." />
        <label>Resminiz:</label>
        <input className="loginInput" type="file" onChange={handleImageChange} id="myimg" placeholder="Enter your name..." />
        <button className="loginButton" disable={!email || !name || !bio || !image} type="submit " >E-MAİL İLE CEVAP AL</button>
      </form>

    </div>
  );
}

export default Fal

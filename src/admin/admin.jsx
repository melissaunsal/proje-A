import { collection, doc, Firestore, getDoc, getDocs, onSnapshot } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth, db } from '../pages/login/Login';

function Admin() {

    const [fals, setFals] = useState([])
    let dizi = []
    useEffect(() => {
        onSnapshot(collection(db, "fals"), (querySnapshot) => {
            querySnapshot.forEach(element => {
                console.log(element.data().approved)
                //Check
                element?.data().approved?.forEach(element => {
                    dizi.push(element);
                    //console.log(element)
                });
                console.log(dizi)
                setFals(dizi)
            });
        });
    }, [])
    // console.log(fals);
    return (
        <div >
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Adı Soyadı</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Bio</th>
                        <th scope="col">Fotoğraf</th>
                    </tr>
                </thead>
                <tbody>
                    {

                       fals && fals.map((element, value) => (

                            <tr key={value}>
                                <td scope="row">{element.name}</td>
                                <td>{element.email}</td>
                                <td>{element.bio}</td>
                                <td><img style={{ width: 250 }} src={element.file} alt="" /></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

        </div>

    )
}

export default Admin
import { collection, doc, getDoc, getDocs, onSnapshot } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth, db } from '../pages/login/Login';

function Admin() {

    const [fals, setFals] = useState(false)

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "fals"), (querySnapshot) => {
            const documents = querySnapshot.docs.map((doc) => {
                setFals(doc.data());
            });
        });
        return () => unsub();
    }, [])
    console.log(fals);
    return (
        <div className=''>
            {
                !fals && <h1 className='text-dark'>Loading....</h1>
            }
            {
                fals && <div>

                    {

                        fals?.approved?.map((falItem) => {
                            <p>{falItem}</p>
                        })
                    }
                </div>
            }

        </div>
    )
}

export default Admin

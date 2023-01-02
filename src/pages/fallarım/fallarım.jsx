import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { db } from '../login/Login';

function Fallarım() {

    const user = useSelector(state => state.auth.user)
    const [userFals, setUserFals] = useState([])

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

    return (
        <div>
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

                        userFals && userFals.map((element, value) => (

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

export default Fallarım

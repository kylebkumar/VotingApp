import React, { useState, useEffect, useRef } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { Button } from "react-bootstrap"
import { db } from "../firebase"

export default function Account(){
    const { currentUser } = useAuth() 
    const [data, setData] = useState()
    
    useEffect(() => {
        try{
            db.ref(currentUser && currentUser.email.replace(".", "-")).on('value', (snapshot) => {
            setData(JSON.stringify(snapshot.val()))
            console.log(data)
            });}catch{
                data.current = "You have no appointments."
            }
    }, []);
    return (
        <div>
            Current User: { currentUser && currentUser.email }
            <p>data: { data }</p>
        </div>
    )
}

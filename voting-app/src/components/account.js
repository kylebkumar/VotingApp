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
            setData(snapshot.val())
            });}catch{
                setData({
                    "Appointment1" : {
                        "date" : "You have no appointments.",
                        "location" : "You have no location."
                    }
                })
            }
    }, []);

    return (
        <div>
            Current User: { currentUser && currentUser.email }
            <p>date: { data && data["Appointment1"]["date"] }</p>
            location: { data && data["Appointment1"]["location"] }
        </div>
    )
}

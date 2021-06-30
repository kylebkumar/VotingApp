import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { Button } from "react-bootstrap"
import { db } from "../firebase"

export default function Account(){
    const { currentUser } = useAuth() 
    const [data, setdata] = useState("")
    
    useEffect(() => {{db.ref(currentUser && currentUser.email.replace(".", "-")).on('value', (snapshot) => {
    setdata(snapshot.val());
    })}});

    return (
        <div>
            Current User: { currentUser && currentUser.email }
            date: { JSON.stringify(data) }
        </div>
    )
}

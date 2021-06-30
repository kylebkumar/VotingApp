import React, { useState, useEffect, useRef } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { Button, Card } from "react-bootstrap"
import { db } from "../firebase"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Account(){
    const { currentUser } = useAuth() 
    const [data, setData] = useState()
    const [startDate, setStartDate] = useState(new Date());
    
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
            <p>Current User: { currentUser && currentUser.email }</p>
            <p>Please select a date to make an 
                appointment to vote: { data && data["Appointment1"]["date"] }</p>
            <div style={{ margin: "20px"}}>
                <DatePicker showTimeSelect
                    filterDate={d => {
                        return new Date() < d;
                    }}
                    dateFormat="MMMM d, yyyy h:mmaa"
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    onChange={date => setStartDate(date)}/>
            </div>
            <p>Your Selected Voting Location: { data && data["Appointment1"]["location"] }</p>
        </div>
    )
}

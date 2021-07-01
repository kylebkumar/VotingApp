import React, { useState, useEffect, useRef } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { Button, Card } from "react-bootstrap"
import { db } from "../firebase"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

export default function Account(){
    const { currentUser } = useAuth() 
    const [data, setData] = useState({
        "Appointment1" : {
            "date" : "Loading...",
            "location" : "Loading..."
        }
    })
    // const [startDate, setStartDate] = useState(new Date());
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

    // function setDate(){
    //     if (!currentUser){
    //       alert("Please log in or make an account to save a time to vote at!")
    //     }
    //     else{
    //         var time = {"Appointment1":{"date": moment(startDate).format('MMMM Do YYYY, h:mm:ss a')}}
    //         db.ref(currentUser.email.replace(".", "-")).update(time)
    //     }
    //   }

    return (
        <div style={{paddingTop:"5%", paddingLeft:"30%", alignItems:"center", alignContent:"center"}}>
            <h1>Your Account</h1>
            <Card className="justify-content-center align-items-center w-50">
                <Card.Body className="justify-content-center align-items-center w">
                    <p>Current User: { currentUser && currentUser.email }</p>
                    <p>Password: ******</p>
                    <Button variant="link" href="/forgot-password">Reset Password</Button>
                </Card.Body>
            </Card>
            <h1 style={{paddingTop:"5%"}}>Appointment Information</h1>
            <Card className="justify-content-center align-items-center w-50">
                <Card.Body>
                    <h5 style={{textDecoration:"underline"}}>Appointment 1</h5>
                    <p>Appointment Date: { data && data["Appointment1"]["date"] }</p>
                    <p>Appointment Location: { data && data["Appointment1"]["location"] }</p>
                </Card.Body>
            </Card>
            {/* <p>Please select a date to make an 
                appointment to vote: </p>
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

                    <span style={{ marginLeft:"10px" }}>
                        {<Button className="" variant="primary" 
                        onClick={() => {setDate()}}>Set Appointment Time</Button>}
                    </span>
            </div>
            <p>Your Selected Voting Time: { data && data["Appointment1"]["date"] }</p>
            <p>Your Selected Voting Location: {  data && data["Appointment1"]["location"] }</p> */}
        </div>
    )
}

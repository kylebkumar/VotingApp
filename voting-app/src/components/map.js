import React, { useState, useRef, useEffect } from 'react'
import Iframe from "react-iframe"
import { ReactSearchAutocomplete } from "react-search-autocomplete"
import { Button } from "react-bootstrap"
import { db } from "../firebase"
import { useAuth } from '../contexts/AuthContext'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';



export default function Map() {
   const { currentUser } = useAuth() 
   const [data, setData] = useState()
   const [startDate, setStartDate] = useState(new Date());
   const [selectedItem, setItem] = useState({
      id: 0,
      name: "Cupertino Town Hall",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.9946780463742!2d-122.03092228439377!3d37.318953746025336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb44e74e67871%3A0x33f7b0786703deb5!2sCupertino%20City%20Hall!5e0!3m2!1sen!2sus!4v1625027056597!5m2!1sen!2sus"
   })

   const items = [
      {
        id: 1,
        name: 'Kennedy Middle School',
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.334503056169!2d-122.05304548439382!3d37.31090344648365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4583b7c5b0d%3A0x2016271e26c3ad01!2sJohn%20F.%20Kennedy%20Middle%20School!5e0!3m2!1sen!2sus!4v1625026196551!5m2!1sen!2sus"
      },
      {
        id: 2,
        name: 'Lincoln Elementary School',
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.155520515169!2d-122.05623618439382!3d37.31514364624223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb45b93d21ee5%3A0x1fad01b801a004e5!2sAbraham%20Lincoln%20Elementary%20School!5e0!3m2!1sen!2sus!4v1625026766487!5m2!1sen!2sus"
      },
      {
        id: 3,
        name: 'Monta Vista High School',
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.1618130329052!2d-122.05842818439271!3d37.31499457984582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb45c603f497f%3A0xead757e19654d16b!2sMonta%20Vista%20High%20School!5e0!3m2!1sen!2sus!4v1625032594055!5m2!1sen!2sus"
      },
      {
        id: 4,
        name: 'Quinlann Community Center',
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.7039965946383!2d-122.04438618439247!3d37.32583867984374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb44c402eae63%3A0x12254b555be1023f!2sQuinlan%20Community%20Center!5e0!3m2!1sen!2sus!4v1625032639224!5m2!1sen!2sus"
      },
      {
        id: 5,
        name: 'Regnart Elementary School',
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.6449467331327!2d-122.04999308439301!3d37.30354787984791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4fafddec977%3A0xf669f5aa955180bf!2sWilliam%20Regnart%20Elementary%20School!5e0!3m2!1sen!2sus!4v1625032808330!5m2!1sen!2sus"
      }
    ]

    const handleOnSearch = (string, results) => {
      // onSearch will have as the first callback parameter
      // the string searched and for the second the results.
      console.log(string, results)
    }
  
    const handleOnHover = (result) => {
      // the item hovered
      console.log(result)
    }
  
    const handleOnSelect = (item) => {
      // the item selected
      setItem(item)
    }
  
    const handleOnFocus = () => {
      console.log('Focused')
    }

    function setDate(){
      if (!currentUser){
        alert("Please log in or make an account to save a time to vote at!")
      }
      else{
          var time = {"Appointment1":{"date": moment(startDate).format('MMMM Do YYYY, h:mm:ss a')}}
          db.ref(currentUser.email.replace(".", "-")).update(time)
      }
    }

    function setLocation(){
      if (!currentUser){
        alert("Please log in or make an account to save a location to vote at!")
      }
      else{
      var location = {"Appointment1":{"location":selectedItem.name}}
      db.ref(currentUser.email.replace(".", "-")).update(location)
      }
    }
    
   return(
      <>
         <div style={{alignItems:"center"}}>
         <ReactSearchAutocomplete
               items={items}
               onSearch={handleOnSearch}
               onHover={handleOnHover}
               onSelect={handleOnSelect}
               onFocus={handleOnFocus}
               autoFocus
            />
            <p>Current User: { currentUser && currentUser.email }</p>
            <p>Please select a date to make an 
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
            <p>Your Selected Voting Location: {  data && data["Appointment1"]["location"] }</p>

            <Iframe url= { selectedItem.url } width="500px" height="500px"/>
            <Button className="w-100" variant="primary" onClick={() => {setLocation()}}>Set Location</Button>
         </div>
      </>
   );
}

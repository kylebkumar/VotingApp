import React, { useState, useRef, useEffect } from 'react'
import Iframe from "react-iframe"
import { ReactSearchAutocomplete } from "react-search-autocomplete"
import { Button, Card } from "react-bootstrap"
import { db } from "../firebase"
import { useAuth } from '../contexts/AuthContext'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';



export default function Map() {
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

   const { currentUser } = useAuth() 
   const [data, setData] = useState()
   const [startDate, setStartDate] = useState(null);
   const [selectedItem, setItem] = useState({
      id: 0,
      name: "",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.9946780463742!2d-122.03092228439377!3d37.318953746025336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb44e74e67871%3A0x33f7b0786703deb5!2sCupertino%20City%20Hall!5e0!3m2!1sen!2sus!4v1625027056597!5m2!1sen!2sus"
   })

   const items = [
      {
         id: 1,
         name: 'Quinlann Community Center',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.7039965946383!2d-122.04438618439247!3d37.32583867984374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb44c402eae63%3A0x12254b555be1023f!2sQuinlan%20Community%20Center!5e0!3m2!1sen!2sus!4v1625032639224!5m2!1sen!2sus"
      },
      {
        id: 2,
        name: 'Monta Vista High School',
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.1618130329052!2d-122.05842818439271!3d37.31499457984582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb45c603f497f%3A0xead757e19654d16b!2sMonta%20Vista%20High%20School!5e0!3m2!1sen!2sus!4v1625032594055!5m2!1sen!2sus"
      },
      {
         id: 3,
         name: 'Lynbrook High School',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.7691928358395!2d-122.006907249216!3d37.300603679749585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5433bf5d9e3%3A0x7c976276883c3c10!2sLynbrook%20High%20School!5e0!3m2!1sen!2sus!4v1625190092565!5m2!1sen!2sus" 
       }
       ,
      {
         id: 4,
         name: 'Homestead High School',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.226689568086!2d-122.05191894921485!3d37.33714157974245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb43064ed9e7f%3A0xd31a7a73d2cd845d!2sHomestead%20High%20School!5e0!3m2!1sen!2sus!4v1625190224300!5m2!1sen!2sus" 
      },
      {
         id: 5,
         name: 'Fremont High School',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.535156933001!2d-122.03705574921432!3d37.35351227973931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5d5e8ad2b4b%3A0xfdc0496a27320d2!2sFremont%20High%20School!5e0!3m2!1sen!2sus!4v1625190500854!5m2!1sen!2sus"
      },
      {
         id: 6,
         name: 'Archbishop Mitty High School',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.191433506835!2d-121.99582344921551!3d37.314292879747036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb15c690cba87%3A0xbc7cd238cee5f3bb!2sArchbishop%20Mitty%20High%20School!5e0!3m2!1sen!2sus!4v1625190585118!5m2!1sen!2sus" 
      },
      {
         id: 7,
         name: 'Saint Francis High School',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.8557323183386!2d-122.08853584921384!3d37.3695903797362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb12c54f0dc7d%3A0x1f75f9c2ea008396!2sSt.%20Francis%20High%20School!5e0!3m2!1sen!2sus!4v1625190712199!5m2!1sen!2sus" 
      },
      {
         id: 8,
         name: 'Kennedy Middle School',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.334503056169!2d-122.05304548439382!3d37.31090344648365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4583b7c5b0d%3A0x2016271e26c3ad01!2sJohn%20F.%20Kennedy%20Middle%20School!5e0!3m2!1sen!2sus!4v1625026196551!5m2!1sen!2sus"
       },
       {
         id: 9,
         name: 'Regnart Elementary School',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.6449467331327!2d-122.04999308439301!3d37.30354787984791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4fafddec977%3A0xf669f5aa955180bf!2sWilliam%20Regnart%20Elementary%20School!5e0!3m2!1sen!2sus!4v1625032808330!5m2!1sen!2sus"
       },
       {
         id: 10,
         name: 'Lincoln Elementary School',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.155520515169!2d-122.05623618439382!3d37.31514364624223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb45b93d21ee5%3A0x1fad01b801a004e5!2sAbraham%20Lincoln%20Elementary%20School!5e0!3m2!1sen!2sus!4v1625026766487!5m2!1sen!2sus"
       },
       
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

   //  function setDate(){
   //    if (!currentUser){
   //      alert("Please log in or make an account to save a time to vote at!")
   //    }
   //    else{
   //        var time = {"Appointment1":{"date": moment(startDate).format('MMMM Do YYYY, h:mm:ss a')}}
   //        db.ref(currentUser.email.replace(".", "-")).update(time)
   //    }
   //  }

    function notifySubmission(){
      if(currentUser && selectedItem.name !== "" && startDate !== null){
         alert("You have successfully set an appointment. Congratulations!" +
         " You may view your appointment details on the 'Account' Page.")
      }
      else if(currentUser){
         alert("Please select a location and time to vote at!")
      }
    }

    function writeData(){
      if (!currentUser){
        alert("Please log in or make an account to save a location and time to vote at!")
      }
      else{
      var data = {"Appointment1":{"location":selectedItem.name, "date": moment(startDate).format('MMMM Do YYYY, h:mm:ss a')}}
      db.ref(currentUser.email.replace(".", "-")).update(data)
      }
    }
    
   return(
      <div>
         <Card style={{ marginTop: "2%", marginLeft: "2%", marginBottom: "5%", width: "46%", float:"left" }}>
            <Card.Body>
               <div style={{alignItems:"center"}}>
                  {/* <p>Current User: { currentUser && currentUser.email }</p> */}
                  <p style={{ margin: "20px" }}>
                     Please select a date to make an appointment to vote: 
                  </p>
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
                  {/* <p>Your Selected Voting Time: { moment(startDate).format('MMMM Do YYYY, h:mm:ss a') }</p>
                  <p>Your Selected Voting Location: { selectedItem.name }</p> */}
                  <div style={{ margin: "2%", width: "60%"}}>
                     <ReactSearchAutocomplete
                        style={{  searchIconMargin: "10px 12px 0 11px" }}
                        items={items}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                     />
                  </div>
                  <div style={{ marginTop: "2%", width: "40%", height: "40%" }}>
                     <Iframe url= { selectedItem.url } width="500px" height="500px"/>
                  </div>
                  {/* <div style={{ margin: "2%", width: "20%", height: "40%" }}>
                     <Button className="w-100" variant="primary" onClick={() => {writeData()}}>Set Appointment</Button>
                  </div> */}
               </div>
            </Card.Body>
         </Card>
         <Card style={{ marginTop: "2%", marginRight: "2%", width: "46%", float:"right" }}>
            <Card.Body>
                <div style={{ margin: "2%" }}>
                   <p style={{ height: "20%"}}>
                      Please confirm the date and location information
                      you selected on the left by verifying the details
                      below:
                   </p>
                   <div style={{ marginTop: "20px" }}>
                      Selected Location: { selectedItem.name }
                   </div>
                   <div style={{ marginTop: "20px" }}>
                      Selected Date: { startDate && moment(startDate).format('MMMM Do YYYY, h:mm:ss a') }
                   </div>

                  <Button style={{ marginTop:"20px" }} className="w-20" variant="primary" 
                     onClick={() => {writeData(); notifySubmission()}}>Set Appointment
                  </Button>
               </div>
          </Card.Body>
         </Card>
      </div>
      
   );
}

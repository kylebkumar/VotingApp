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
       {
         id: 11,
         name: 'Cupertino City Hall – Outside City Clerk Office',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.9946780505065!2d-122.03092764934313!3d37.31895374592745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb44e74e67871%3A0x33f7b0786703deb5!2sCupertino%20City%20Hall!5e0!3m2!1sen!2sus!4v1625199506341!5m2!1sen!2sus" 
       },
       {
         id: 12,
         name: 'Los Altos City Hall – Outside City Clerk Office​',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.34611043958!2d-122.11586154934145!3d37.3816463423541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0ee938e72df%3A0xed77705a3dc28627!2sLos%20Altos%20City%20Hall!5e0!3m2!1sen!2sus!4v1625199559135!5m2!1sen!2sus"
       },
       {
         id: 13,
         name: 'Santa Clara County Civic Center – N. San Pedro St. Parking Lot​',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.571843754891!2d-121.90585674934228!3d37.35264394400788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb7fb01c0097%3A0x360e14afee4495ea!2s70%20W%20Hedding%20St%2C%20San%20Jose%2C%20CA%2095110!5e0!3m2!1sen!2sus!4v1625199693964!5m2!1sen!2sus"
       },
       {
         id: 14,
         name: 'Registrar of Voters (@ Bldg. 2 and by the Flagpole)',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.6367431912768!2d-121.8984765493416!3d37.37477134274627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcc74a10e76c3%3A0x4fd736eb096e0c8c!2s1555%20Berger%20Dr%2C%20San%20Jose%2C%20CA%2095112!5e0!3m2!1sen!2sus!4v1625199765618!5m2!1sen!2sus"
       },
       {
         id: 15,
         name: 'San Jose City Hall',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.195099601757!2d-121.88713174934256!3d37.337889544848515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccbc2d700001%3A0x523537201456d257!2sSan%20Jos%C3%A9%20City%20Hall!5e0!3m2!1sen!2sus!4v1625199813521!5m2!1sen!2sus"
       },
       {
         id: 16,
         name: 'Saratoga City Hall',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.1636928536504!2d-122.01698814934454!3d37.267545248853665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e4ac0a1245389%3A0x8ce462c0a4274f46!2sSaratoga%20City%20Hall!5e0!3m2!1sen!2sus!4v1625200599890!5m2!1sen!2sus" 
       },
       {
         id: 17,
         name: 'Santa Clara City Hall',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.4798354675368!2d-121.95655144934224!3d37.354821643883696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fca490e717d87%3A0xe93442b89b5f8a0a!2sCity%20of%20Santa%20Clara!5e0!3m2!1sen!2sus!4v1625199972347!5m2!1sen!2sus" 
       },
       {
         id: 18,
         name: 'Sunnyvale Public Library',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.753490724498!2d-122.04110134934163!3d37.37200934290374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb6f552aec549%3A0xce1cb65c2cc49975!2sSunnyvale%20Public%20Library!5e0!3m2!1sen!2sus!4v1625200015100!5m2!1sen!2sus" 
       },
       {
         id: 19,
         name: 'Bill Graham Civic Auditorium',
         url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5072907448957!2d-122.41953874933067!3d37.77814961963946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809be90f0637%3A0xd558ef250f4addf9!2sBill%20Graham%20Civic%20Auditorium!5e0!3m2!1sen!2sus!4v1625201109085!5m2!1sen!2sus"
       },
       {
         id: 20,
         name: 'Ingleside Police Station - Community Room',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.786523221853!2d-122.4484736493321!3d37.724688422713676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e80191f5a45%3A0x4d18d7bcf45d485d!2sIngleside%20Police%20Station!5e0!3m2!1sen!2sus!4v1625201209742!5m2!1sen!2sus" 
       },
       {
         id: 21,
         name: 'Church - Corpus Christi',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.695072089943!2d-122.43732814933202!3d37.72683472259023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e8881e6b893%3A0x7549b1d17c825a87!2sCorpus%20Christi%20Church!5e0!3m2!1sen!2sus!4v1625201269484!5m2!1sen!2sus" 
       },
       {
         id: 22,
         name: 'Temple United Methodist Church',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.0932056204274!2d-122.47443504933226!3d37.71749002312722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7c4ad690749f%3A0x167533211e4073c6!2sTemple%20United%20Methodist%20Church!5e0!3m2!1sen!2sus!4v1625201328404!5m2!1sen!2sus" 
       },
       {
         id: 23,
         name: 'Jose Ortega Elementary School-Lobby',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.132849494669!2d-122.4689209493324!3d37.71655942318089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7c344ca3fe15%3A0x9a484c2103328a6!2sJose%20Ortega%20Elementary%20School!5e0!3m2!1sen!2sus!4v1625201378299!5m2!1sen!2sus" 
       },
       {
         id: 24,
         name: 'Holloway Terrace',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.907614698362!2d-122.46142304933217!3d37.7218463228771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7dcd4b0e358d%3A0x710f714b085a9e00!2sHolloway%20Terrace!5e0!3m2!1sen!2sus!4v1625201420863!5m2!1sen!2sus"
       },
       {
         id: 25,
         name: 'James Denman Middle School',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.9126079946013!2d-122.44552224933236!3d37.72172912288384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858062df7eb43b%3A0x3e59d4a607cdb163!2sJames%20Denman%20Middle%20School!5e0!3m2!1sen!2sus!4v1625201457706!5m2!1sen!2sus" 
       },
       {
         id: 26,
         name: 'Balboa Baptist Church',
         url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50493.791558578414!2d-122.47650552089839!3d37.72291759999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e81512f8279%3A0x1d18dccf300e00e5!2sBalboa%20Church!5e0!3m2!1sen!2sus!4v1625201512080!5m2!1sen!2sus"
       },
       {
         id: 27,
         name: 'I.T. Bookman Community Center - Multi Purpose Room',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.2203348619764!2d-122.46904204933246!3d37.71450572329894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7c367f2fffff%3A0x87119fb494e18910!2sI.T.%20Bookman%20Community%20Center!5e0!3m2!1sen!2sus!4v1625201566395!5m2!1sen!2sus"
       },
       {
         id: 28,
         name: 'Ocean View Library',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.235806361606!2d-122.46818904933245!3d37.71414252331975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7c368fbdf4b1%3A0x9aadf8946db9a7d2!2sOcean%20View%20Branch%20Library!5e0!3m2!1sen!2sus!4v1625201623345!5m2!1sen!2sus" 
       },
       {
         id: 29,
         name: 'SF Christian Center',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.4545279310864!2d-122.45341934933263!3d37.70900762361483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7c2145b15bd1%3A0x9a0c3a08f00eb227!2sSan%20Francisco%20Christian%20Center!5e0!3m2!1sen!2sus!4v1625201684524!5m2!1sen!2sus" 
       },
       {
         id: 30,
         name: 'City Arts and Tech High School',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.9981949587727!2d-122.42746004933231!3d37.719720222999214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e9319ac10c7%3A0xb4331aea96ba7bc3!2sCity%20Arts%20and%20Tech%20High%20School!5e0!3m2!1sen!2sus!4v1625201750277!5m2!1sen!2sus" 
       },
       {
         id: 31,
         name: 'St Teresa of Avila Catholic Church',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.221217955974!2d-122.39936404933111!3d37.761410820602364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fca3d3079db%3A0xfcdde64e0ea4a133!2sSt%20Teresa%20of%20Avila%20Catholic%20Church!5e0!3m2!1sen!2sus!4v1625202181026!5m2!1sen!2sus"
       },
       {
         id: 32,
         name: 'Potrero Hill Neighborhood House',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.354515273093!2d-122.4029301493313!3d37.75828482078221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fb55abbfd65%3A0x393a7eca2a0bf708!2sPotrero%20Hill%20Neighborhood%20House!5e0!3m2!1sen!2sus!4v1625202241754!5m2!1sen!2sus" 
       },
       {
         id: 33,
         name: 'U C S F Lobby',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.1969624632793!2d-122.39325774933124!3d37.76197962056971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fc81c6aaaab%3A0xec59f2b9b64260eb!2sU%20C%20S%20F%20-%20Lobby!5e0!3m2!1sen!2sus!4v1625202318274!5m2!1sen!2sus" 
       },
       {
         id: 34,
         name: 'Providence Baptist Church - Gym',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.309175657918!2d-122.39183844933196!3d37.7358903220699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7f0f83b3defb%3A0xec1da4571112b0d5!2sProvidence%20Baptist%20Church!5e0!3m2!1sen!2sus!4v1625202386720!5m2!1sen!2sus" 
       },
       {
         id: 35,
         name: 'Joseph Lee Rec Center - Gymnasium',
         url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.3594477398346!2d-122.39187034933185!3d37.734710722137656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7f0ff3439233%3A0xb1bdbc4b05484e54!2sJoseph%20Lee%20Rec%20Center%20-%20Gymnasium!5e0!3m2!1sen!2sus!4v1625202468274!5m2!1sen!2sus" 
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
         <Card style={{ borderColor:"lightBlue", backgroundColor:"ghostWhite", marginTop: "2%", marginLeft: "2%", marginBottom: "5%", width: "45%", float:"left" }}>
            <Card.Body>
               <div style={{alignItems:"center"}}>
                  {/* <p>Current User: { currentUser && currentUser.email }</p> */}
                  <p style={{ fontStyle:"Helvetica", fontSize:"16px", margin: "20px" }}>
                     Please select a date and location to make an appointment to vote: 
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
                     <Iframe url= { selectedItem.url } width="250%" height="500px"/>
                  </div>
                  {/* <div style={{ margin: "2%", width: "20%", height: "40%" }}>
                     <Button className="w-100" variant="primary" onClick={() => {writeData()}}>Set Appointment</Button>
                  </div> */}
               </div>
            </Card.Body>
         </Card>
         {/* <Card style={{ marginTop: "20%", marginRight: "2%", width: "46%", float:"right" }}>
            <Card.Body> */}
            <div style={{ fontFamily: "Helvetica", backgroundColor: "ghostWhite", 
                border: "solid lightBlue 1px", padding:"2%", margin:"2%", width:"45%", height:"712px", float:"right" }} >
                <div style={{ margin: "2%" }}>
                   <p style={{ fontSize:"20px", height: "20%"}}>
                      <em>Please confirm the date and location information
                      you selected on the left by verifying the details
                      below:</em>
                   </p>
                   <hr size="8" width="100%" color="lightBlue" />
                   <div style={{ fontSize:"18px", marginTop: "5vh" }}>
                      <b>Selected Location:</b> { selectedItem.name }
                   </div>
                   <div style={{ fontSize:"18px", marginTop: "20vh" }}>
                   <b>Selected Date:</b> { startDate && moment(startDate).format('MMMM Do YYYY, h:mm:ss a') }
                   </div>

                  <Button style={{ marginTop:"20vh" }} className="w-20" variant="primary" 
                     onClick={() => {writeData(); notifySubmission()}}>Set Appointment
                  </Button>
               </div>
               </div>
          {/* </Card.Body>
         </Card> */}
      </div>
      
   );
}

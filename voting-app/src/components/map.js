import React, { useState, useRef, useEffect } from 'react'
import { Button, Card, Container } from "react-bootstrap"
//import  mapboxgl from 'mapbox-gl';
import "./map-container.css"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Iframe from "react-iframe"

//mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY



export default function Map() {

   const maps = [<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.334503056169!2d-122.05304548439382!3d37.31090344648365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4583b7c5b0d%3A0x2016271e26c3ad01!2sJohn%20F.%20Kennedy%20Middle%20School!5e0!3m2!1sen!2sus!4v1625026196551!5m2!1sen!2sus" width="100%" height="750px"/>, <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.155520515169!2d-122.05623618439382!3d37.31514364624223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb45b93d21ee5%3A0x1fad01b801a004e5!2sAbraham%20Lincoln%20Elementary%20School!5e0!3m2!1sen!2sus!4v1625026766487!5m2!1sen!2sus" width="100%" height="750px"/>]

   const [map, setMap] = useState(<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.9946780463742!2d-122.03092228439377!3d37.318953746025336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb44e74e67871%3A0x33f7b0786703deb5!2sCupertino%20City%20Hall!5e0!3m2!1sen!2sus!4v1625027056597!5m2!1sen!2sus" width="90%" height="750px"/>)

   return(
      <div style={{alignItems:"center"}}>
        { map }
         <Button onClick={()=>setMap(maps[0])}>Update Map</Button>
      </div>
   );
}

import React, { useState, useRef, useEffect } from 'react'
import { Button, Card, Container } from "react-bootstrap"
import mapboxgl from 'mapbox-gl';
import "./map-container.css"
//import Iframe from "react-iframe"

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY

export default function Map() {

  const [userlat, setLat] = useState(0)
  const [userlong, setLong] = useState(0)

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom, setMapZoom] = useState(9);

  useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [userlong, userlat],
        zoom: zoom
      });
    });
  return (
    <Container className="align-items-center" style={{minHeight:"100vh"}}>
      <Button onClick={ getLocation() } variant="primary">Show Location</Button>
      <t>Coords: { userlat }, { userlong }</t>
      <Card ref={mapContainer} className="w-100 align-items-center" style={{minHeight:"50vh"}}/>
    </Container>
  )
  // function updatePos() {
  //   setMapLat({ userlat })
  //   setMapLng({ userlong })
  // }
  function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    setLat(latitude)
    setLong(longitude)
  }

 function errorHandler(err) {
    if(err.code == 1) {
       alert("Error: Access is denied!");
    } else if( err.code == 2) {
       alert("Error: Position is unavailable!");
    }
 }

 function getLocation() {

    if(navigator.geolocation) {
       // timeout at 60000 milliseconds (60 seconds)
       var options = {timeout:60000};
       navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
    } else {
       alert("Sorry, browser does not support geolocation!");
    }
 }
}

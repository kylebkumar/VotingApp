import React, { useState, useRef, useEffect } from 'react'
import { Button } from "react-bootstrap"
import mapboxgl from 'mapbox-gl';
//import Iframe from "react-iframe"

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY

export default function Map() {

  const [userlat, setLat] = useState()
  const [userlong, setLong] = useState()

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setMapLng] = useState(-70.9);
  const [lat, setMapLat] = useState(42.35);
  const [zoom, setMapZoom] = useState(9);

  useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });
    });
  return (
      <div>
        <Button onClick={getLocation()} variant="primary">Get Location</Button>
        <t>Coords: { userlat }, { userlong }</t>
        <div width="100%" height="1000px"ref={mapContainer} className="map-container"/>
      </div>
  )

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

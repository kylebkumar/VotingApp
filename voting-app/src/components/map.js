import React, { useState, useRef, useEffect } from 'react'
import { Button, Card, Container } from "react-bootstrap"
import  mapboxgl from 'mapbox-gl';
import "./map-container.css"
//import Iframe from "react-iframe"

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY


export default function Map() {

   const mapContainer = useRef(null);
   const map = useRef(null);
   const [lng, setLng] = useState(-122.0497);
   const [lat, setLat] = useState(37.3276);
   const [zoom, setZoom] = useState(10);

   // var map = new mapboxgl.Map({
   //    container : 'map', // container id
   //    style : 'mapbox://styles/mapbox/streets-v11',
   //    center : [-96, 37.8], // starting position
   //    zoom : 3 // starting zoom
   //    });
   //    // Add geolocate control to the map.
   //    map.addControl(
   //       new mapboxgl.GeolocateControl({
   //          positionOptions : {
   //          enableHighAccuracy : true
   //       },
   //       trackUserLocation : true
   //       })
   //    );

   useEffect(() => {
   if (map.current) return; // initialize map only once
   map.current = new mapboxgl.Map({
   container: mapContainer.current,
   style: 'mapbox://styles/mapbox/streets-v11',
   center: [lng, lat],
   zoom: zoom
   });
   });

    
   useEffect(() => {
   if (!map.current) return; // wait for map to initialize
   map.current.on('move', () => {
   setLng(map.current.getCenter().lng.toFixed(4));
   setLat(map.current.getCenter().lat.toFixed(4));
   setZoom(map.current.getZoom().toFixed(2));
   });
   });
    
   return (
      
   <div>
      <link href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css" rel="stylesheet" />
      <script src="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js"></script>
      <div id="map"></div>

      

      <div className="sidebar">
      Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />


      <script>
         {/* // TO MAKE THE MAP APPEAR YOU MUST
         // ADD YOUR ACCESS TOKEN FROM
         // https://account.mapbox.com
         mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;
         var map = new mapboxgl.Map({
         container = 'map', // container id
         style = 'mapbox://styles/mapbox/streets-v11',
         center = [-96, 37.8], // starting position
         zoom = 3 // starting zoom
         });
         // Add geolocate control to the map.
         map.addControl(
            new mapboxgl.GeolocateControl({
               positionOptions = {
               enableHighAccuracy : true
            },
            trackUserLocation = true
            })
         ); */}
   </script>

      
   </div>
   );
}

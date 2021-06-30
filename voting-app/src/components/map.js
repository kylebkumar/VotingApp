import React, { useState, useRef, useEffect } from 'react'
import { Button, Card, Container } from "react-bootstrap"
import mapboxgl from 'mapbox-gl';
import "./map-container.css"
//import Iframe from "react-iframe"

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY

export default function Map() {

   const mapContainer = useRef(null);
   const map = useRef(null);
   const [lng, setLng] = useState(-122.0405);
   const [lat, setLat] = useState(37.3209);
   const [zoom, setZoom] = useState(10);
    
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
   <div className="sidebar">
   Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
   </div>
   <div ref={mapContainer} className="map-container" />
   </div>
   );
}

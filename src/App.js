import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import './App.css';
import History from './history';

const Map = () => {
  const mapRef = useRef(null);
  let previousMarker = null;
  const customIcon = new L.Icon({
    iconUrl: require('./icons8-marker-30.png'),
    iconSize: [32, 32], 
    iconAnchor: [16, 32], 
  });

  // Initialize the map and add a base layer
  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([28.6139, 77.2090], 4);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }
  }, []);
  const setLocation = (long, lat) => {
    if (mapRef.current) {
      const newLatLng = [lat, long];
  
      if (previousMarker) {
        mapRef.current.removeLayer(previousMarker);
      }
  
      mapRef.current.setView(newLatLng, 7);
  
      const marker = L.marker(newLatLng, { icon: customIcon }).addTo(mapRef.current);
    
      // const popupContent = `Longitude: ${long}<br>Latitude: ${lat}`;
      // const popup = L.popup({ zIndexOffset: -1 })
      //   .setLatLng(newLatLng)
      //   .setContent(popupContent);
      
      // marker.bindPopup(popup).openPopup();

      previousMarker = marker;
    }
  };
  
  

  return (
    <div className='main'>
      <div id="map"></div>
      <div className="history-container">
        <History location={setLocation} />
      </div>
    </div>
  );
};

export default Map;

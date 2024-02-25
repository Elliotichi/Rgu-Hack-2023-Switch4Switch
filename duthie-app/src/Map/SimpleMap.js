import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markericonpng from "leaflet/dist/images/marker-icon.png"
import { Draggable, icon } from 'leaflet'
import { trail_points } from '../data/points.js';


const SimpleMap = (props) => {
  const mapRef = useRef(null);
  const latitude = 57.13049074585778;
  const longitude = -2.1035564224553425;
  


  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <MapContainer
      center={[latitude, longitude]} 
      zoom={17} 
      ref={mapRef} 
      dragging={true}
      style={{ height: "100vh", width: "100vw" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Additional map layers or components can be added here */}


    {/* Example Marker using JSON data*/}
      <Marker 
      position={[trail_points[0].lat, trail_points[0].long]}
      icon={new icon({ iconUrl: markericonpng, iconsize: [25, 41], iconanchor: [12, 41] })}>
      </Marker>



      <Marker 
      position={[latitude, longitude]}
        eventHandlers={{
          click: (e) => {
            props.setCurrentMarker(3)
          }
        }}
        icon={new icon({ iconUrl: markericonpng, iconsize: [25, 41], iconanchor: [12, 41] })}>

        <Popup>
          WELCOME TO DUTHIE PARK o/ <br />
        </Popup>
      </Marker>

    </MapContainer>
  );
};

export default SimpleMap;
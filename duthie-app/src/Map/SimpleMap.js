import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markericonpng from "leaflet/dist/images/marker-icon.png"
import { icon } from 'leaflet'
import { trail_points } from '../data/points.js';

let markers = [];
const SimpleMap = (props) => {
  const mapRef = useRef(null);
  const latitude = 57.13049074585778;
  const longitude = -2.1035564224553425;
  console.log(trail_points)
  for(var i = 0; i <= trail_points.length; i++){
    if(trail_points[i] == undefined){
      break;
    }
    markers.push(<Marker
      position={[trail_points[i].lat, trail_points[i].long]}
      alt={i}
      eventHandlers={{
        click: (e) => {
          console.table(e);
          console.log("*************************************************************i "+e);
          props.setCurrentMarker(e.sourceTarget.options.alt);
        }
      }}
      icon={new icon({ iconUrl: markericonpng, iconsize: [25, 41], iconanchor: [12, 41] })}>
    </Marker>)
  };
  


  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <MapContainer center={[latitude, longitude]} zoom={17} ref={mapRef} style={{ height: "100vh", width: "100vw" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Additional map layers or components can be added here */}


      {/* Example Marker using JSON data*/}
      {/* <Marker
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
      </Marker> */}
      {markers}

    </MapContainer>
  );
};

export default SimpleMap;
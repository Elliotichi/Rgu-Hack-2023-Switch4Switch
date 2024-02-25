import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, SVGOverlay } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import markericonpng from "leaflet/dist/images/marker-icon.png"
// import markericonpng from "%PUBLIC%/images/marker-icon.png"
import { Draggable, icon } from 'leaflet'
import { trail_points } from '../data/points.js';

const SimpleMap = (props) => {
    const [markers, setMarkers] = useState([]);
    const mapRef = useRef(null);
    const [latitude, setLat] = useState(57.13049074585778);
    const [longitude, setLong] = useState(-2.1035564224553425);    const mapBounds = [
      // North - East
      [57.136261572464484, -2.0953181817566313], 
      // South - West
      [57.126444501476776, -2.1134284570251696]
  ];

    useEffect(() => {
        let m = [];
        for (var i = 0; i <= trail_points.length; i++) {
            if (trail_points[i] == undefined) {
                break;
            }
            m.push(<Marker
                position={[trail_points[i].lat, trail_points[i].long]}
                alt={i}
                eventHandlers={{
                    click: (e) => {
                        console.table(e);
                        console.log("*************************************************************i " + e);
                        props.setCurrentMarker(e.sourceTarget.options.alt);
                    }
                }}
                icon={new icon({ iconUrl: i==props.currentMarker ? "./marker-red.png" : "./marker.png", iconsize: [25, 41], iconanchor: [12, 41] })}>
            </Marker>)
        };

        setMarkers(m);
    }, [props.currentMarker])

    for (var i = 0; i <= trail_points.length; i++) {
        if (trail_points[i] == undefined) {
            break;
        }
        markers.push(<Marker
            position={[trail_points[i].lat, trail_points[i].long]}
            alt={i}
            eventHandlers={{
                click: (e) => {
                    console.table(e);
                    console.log("*************************************************************i " + e);
                    props.setCurrentMarker(e.sourceTarget.options.alt);
                }
            }}
            icon={new icon({ iconUrl: i==props.currentMarker ? "./marker-red.png" : "./marker.png", iconsize: [25, 41], iconanchor: [12, 41] })}>
        </Marker>)
    };



    return (
        // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer
            center={[latitude, longitude]}
            zoom={17}
            ref={mapRef}
            dragging={true}
            maxBounds={mapBounds}
            style={{ height: "100vh", width: "100vw" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <SvgPath bounds={mapBounds}/>
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

function SvgPath(props) {
    return (    <SVGOverlay attributes={{ stroke: 'red' }} bounds={props.bounds}>
    <line x1="300" y1="600" x2="520" y2="520" stroke="black" />
  </SVGOverlay>);
}

export default SimpleMap;
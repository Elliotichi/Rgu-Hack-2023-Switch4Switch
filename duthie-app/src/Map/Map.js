import React from 'react';
import L from 'leaflet'
// import {
//     MapContainer,
//     TileLayer,
//     useMap,
//     Popup,
//     Marker
//   } from 'https://cdn.esm.sh/react-leaflet'



export function Map() {
    var map = L.map('map').setView([51.505, -0.09], 13);

    return (
        <div id="map">
      </div>
    );
}
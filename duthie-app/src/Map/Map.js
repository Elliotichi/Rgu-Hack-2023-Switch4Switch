import React from 'react';
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

export function MapDiv(){
  return (
    <div id="map"></div>
  )
}

export function Map() {
    var map = L.map('map').setView([51.505, -0.09], 13);

    return (
        <div id="map">
      </div>
    );
}
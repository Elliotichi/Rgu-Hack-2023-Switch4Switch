import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {Hello} from './App';
import {Map} from './Map/Map';
import {MapDiv} from './Map/Map';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Hello />
    <MapDiv />
    <Map />
  </React.StrictMode>
);

import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Header } from "../Navigation/Header";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from "@mui/base";
import { MapContainer, TileLayer, Marker, Popup, SVGOverlay } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import '../index.css';
import markericonpng from "leaflet/dist/images/marker-icon.png"
import { Draggable, icon } from 'leaflet'


export function About() {
  return (
    <div style={{ overflowY: "scroll", height: "100%" }}>
      <div className='header'>
        <Header />
      </div>
      <div className="about">
        <Typography variant="h6" className="center margin-bottom">Welcome to Duthie Park!</Typography>
        <div className="about-img-container margin-bottom">
          <img src="./images/9.png" className="about-img"></img>
        </div>
        <div className="margin-bottom">
          <AccordionUsage />
        </div>
        <div className="margin-bottom">
          <AccordionUsage2 />
        </div>
        <div className="margin-bottom">
          <AccordionUsage3 />
        </div>
        <img src="./images/33.png" className="about-img"></img>
      </div>
    </div>
  );
}

function AccordionUsage3() {
  const mapBounds = [
    // North - East
    [57.136261572464484, -2.0953181817566313],
    // South - West
    [57.120444501476776, -2.1134284570251696]
  ];
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Address</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography><p>Duthie Park,
            Polmuir Road,
            Aberdeen,
            AB11 7TH</p></Typography>
          
          {/* Static map for address visual */}
          <MapContainer
            center={[57.13049074585778, -2.1035564224553425]}
            zoom={12}
            ref={useRef(null)}
            dragging={false}
            maxBounds={mapBounds}
            style={{ height: "50vh", width: "80vw", margin:"auto" }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[57.13025285583687, -2.1040299966370393]}
              icon={new icon({ iconUrl: markericonpng, iconsize: [25, 41], iconanchor: [12, 41] })}>
            </Marker>
          </MapContainer>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function AccordionUsage2() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Opening Times</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="aboutText" >Open 24 hours</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
function AccordionUsage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>About!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="margin-bottom aboutText">
            Duthie Park opened in 1883 after it was gifted to the city by Miss Elizabeth Crombie Duthie in 1880 for the ‘wellbeing and recreation of Aberdeen inhabitants'.
          </Typography>
          <Typography className="margin-bottom aboutText">
            Duthie Park is loved by locals and visitors due to its wonderfully restored Victorian features such as the band stand, fountains, and boating ponds. The park also has an astro turf area for ball games and two other play areas; one for younger children and another for the more adventurous child which has been voted best play space in Scotland. The Park Café is also very popular with visitors.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

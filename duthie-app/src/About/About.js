import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React from "react";
import { Header } from "../Navigation/Header";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from "@mui/base";

export function About() {
    return (
        <div style={{overflowY: "scroll", height: "100%"}}>
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
                <div>
                    <AccordionUsage3 />
                </div>
            </div>
        </div>
    );
}

 function AccordionUsage3() {
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
          <Typography className="aboutText">Duthie Park</Typography>
          <Typography className="aboutText">    Polmuir Road</Typography>
          <Typography className="aboutText">     Aberdeen</Typography>
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

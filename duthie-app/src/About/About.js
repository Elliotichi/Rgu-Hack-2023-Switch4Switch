import { Typography } from "@mui/material";
import React from "react";
import { Header } from "../Navigation/Header";

export function About() {
    return (
        <div style={{overflowY: "scroll", height: "100%"}}>
            <div className='header'>
                <Header />
            </div>
            <div className="about">
                <Typography variant="h6" className="center margin-bottom">Welcome to Duthie Park!</Typography>
                <div className="about-img-container">
                <img src="./images/9.png" className="about-img"></img>
                </div>
                <Typography className="margin-bottom aboutText">
                    Duthie Park opened in 1883 after it was gifted to the city by Miss Elizabeth Crombie Duthie in 1880 for the ‘wellbeing and recreation of Aberdeen inhabitants'.
                </Typography>
                <Typography className="margin-bottom aboutText">
                Duthie Park is loved by locals and visitors due to its wonderfully restored Victorian features such as the band stand, fountains, and boating ponds. The park also has an astro turf area for ball games and two other play areas; one for younger children and another for the more adventurous child which has been voted best play space in Scotland. The Park Café is also very popular with visitors.
                </Typography>
                <img src="./images/33.png" className="about-img"></img>
                <Typography variant="h6" className="center margin-bottom">
                    Opening times
                </Typography>
                <Typography className="aboutText" >Open 24 hours</Typography>
                <Typography variant="h6" className="center margin-bottom">
                    Address
                </Typography>
                <Typography className="aboutText">Duthie Park
                Polmuir Road
                Aberdeen</Typography>
            </div>
        </div>
    );
}
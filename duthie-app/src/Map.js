import { Container } from '@mui/system';
import React, { useState } from 'react';
import { CourseList } from './Courses/CourseList';
import { Place } from './Carousel/Place';
import SimpleMap from './Map/SimpleMap';
import {Carousel} from './Carousel/Carousel'
import { Grid } from '@mui/material';
import { Header } from './Navigation/Header';


export function Map() {
    const [currentPlace, setCurrentPlace] = useState(0);
    return (
        <div id="container">
            <div id="above">
                <Container className={"test"}>
                    <Grid
                        className={"test"}
                        container
                        direction="column"
                        justifyContent="space-between"
                        alignItems="stretch">
                        <Grid item>
                        <div className='header'>
                            <Header />
                        </div>
                        <div class="top">
                            <CourseList />
                        </div>
                        </Grid>
                        <Grid item>
                        <div class="bottom">
                            <Carousel  currentCarousel={currentPlace} setCurrentCarousel={setCurrentPlace}/>
                        </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div id="below">
                <SimpleMap currentMarker={currentPlace} setCurrentMarker={setCurrentPlace}/>
            </div>
        // </div>
    );
}

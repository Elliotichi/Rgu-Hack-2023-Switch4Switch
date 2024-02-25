import { Container } from '@mui/system';
import React, { useState } from 'react';
import { CourseList } from './Courses/CourseList';
import { Place } from './Carousel/Place';
import SimpleMap from './Map/SimpleMap';
import {Carousel} from './Carousel/Carousel'


export function Map() {
    const [currentPlace, setCurrentPlace] = useState(0);
    return (
        <div id="container">
            <div id="above">
                <Container>
                    <CourseList />
                    <Carousel  currentCarousel={currentPlace} setCurrentCarousel={setCurrentPlace}/>
                </Container>
            </div>
            <div id="below">
                <SimpleMap currentMarker={currentPlace} setCurrentMarker={setCurrentPlace}/>
            </div>
        </div>
    );
}

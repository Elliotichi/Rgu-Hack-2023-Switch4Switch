import React, { useState } from 'react';
import SimpleMap from './Map/SimpleMap';
import { Container } from '@mui/material';
import { CourseList } from './Courses/CourseList';
import { Place } from './Carousel/Place';
import { Carousel } from './Carousel/Carousel';


export function App() {
    return (
        <div id="container">
            <div id="above">
                <Container>
                    <CourseList />
                    <Place name={"Name"} description={"description"} />
                    <Carousel />
                </Container>
            </div>
            <div id="below">
                <SimpleMap />
            </div>
        </div>
    );
}

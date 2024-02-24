import React, { useState } from 'react';
import SimpleMap from './Map/SimpleMap';
import { Container } from '@mui/material';
import { CourseList } from './Courses/CourseList';
import { Place } from './Place';


export function App() {
    return (
        <div id="container">
            <div id="above">
                <Container>
                    <CourseList />
                    <Place />
                </Container>
            </div>
            <div id="below">
                <SimpleMap />
            </div>
        </div>
    );
}

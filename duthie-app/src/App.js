import React, { useState } from 'react';
import SimpleMap from './Map/SimpleMap';
import { Container } from '@mui/material';
import { CourseList } from './Courses/CourseList';


export function App() {
    return (
        <div id="container">
            <div id="above">
                <Container>
                    <CourseList />
                </Container>
            </div>
            <div id="below">
                <SimpleMap />
            </div>
        </div>
    );
}

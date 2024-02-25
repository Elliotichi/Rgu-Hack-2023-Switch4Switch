import { Container } from '@mui/system';
import React from 'react';
import { CourseList } from './Courses/CourseList';
import { Place } from './Carousel/Place';
import SimpleMap from './Map/SimpleMap';

export function Map() {
    return (
        <div id="container">
            <div id="above">
                <Container>
                    <CourseList />
                    <Place name={"Name"} description={"description"} />
                </Container>
            </div>
            <div id="below">
                <SimpleMap />
            </div>
        </div>
    );
}

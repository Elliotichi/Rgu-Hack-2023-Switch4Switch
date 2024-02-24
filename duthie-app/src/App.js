import React, { useState } from 'react';
import SimpleMap from './Map/SimpleMap';
import { Container } from '@mui/material';
import { CourseList } from './Courses/CourseList';


export function App() {
    return (
        <div>
            <CourseList />
            <SimpleMap />
        </div>
    );
}

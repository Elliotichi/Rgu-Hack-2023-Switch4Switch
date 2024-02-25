import React, { useState } from 'react';
import SimpleMap from './Map/SimpleMap';
import { Container } from '@mui/material';
import { CourseList } from './Courses/CourseList';
import { Place } from './Carousel/Place';
import { Header } from './Navigation/Header';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Map } from './Map';
import { About } from './About/About';

export function App() {
    return (
        <BrowserRouter>
            <Routes >
                <Route path='/' element={ <Map /> } />
                <Route path='/about' element={ <About /> } />
            </Routes>
        </BrowserRouter>
    );
}

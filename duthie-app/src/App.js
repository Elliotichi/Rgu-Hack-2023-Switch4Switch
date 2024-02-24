import React, { useState } from 'react';
import { Container } from '@mui/material';
import { CourseList } from './Courses/CourseList';

function Hello() {
    return (
        <p>Hello world!</p>
    );
}

function App() {
    const [count, setCount] = useState(0);

    return (
        <Container>
            <CourseList />
            <Hello />
            <button onClick={() => setCount(count + 1)}>click to increment</button>
            <p>{count}</p>
        </Container>
    );
}

export default App;

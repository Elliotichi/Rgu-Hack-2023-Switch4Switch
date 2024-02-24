import React, { useState } from 'react';
import { Course } from './Courses/Course';
import { Container } from '@mui/material';

function Hello() {
    return (
        <p>Hello world!</p>
    );
}

function App() {
    const [count, setCount] = useState(0);

    return (
        <Container>
            <Course name={"course"} distance={10} info={"information sudhfui shdi fuishiof iohjfiosdh fiohsdofuosdh iofhisodh fio shiodhfio siohiofiod hiosdhfio siodh fioshiodf iosdiofh shfsio"}/>
            <Hello />
            <button onClick={() => setCount(count + 1)}>click to increment</button>
            <p>{count}</p>
        </Container>
    );
}

export default App;

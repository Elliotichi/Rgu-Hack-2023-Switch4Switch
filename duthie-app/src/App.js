import React, { useState } from 'react';
import SimpleMap from './Map/SimpleMap';

function Hello() {
    return (
        <p>Hello world!</p>
    );
}

export function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Hello />
            <button onClick={() => setCount(count + 1)}>click to increment</button>
            <p>{count}</p>
            <SimpleMap />
        </div>
    );
}

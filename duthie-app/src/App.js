import React, { useState } from 'react';

function Hello() {
    return (
        <p>Hello world!</p>
    );
}

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Hello />
            <button onClick={() => setCount(count + 1)}>click to increment</button>
            <p>{count}</p>
        </div>
    );
}

export default App;

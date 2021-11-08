import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={decrease}>take</button>
            <button onClick={increase}>add</button>
        </>
    );
}

export default Counter;
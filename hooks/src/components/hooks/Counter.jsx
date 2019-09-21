import React, { useState } from "react";

const Counter = () => {

    //console.log('props : ', props);

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <br />
            Hello, welcome you are visting {count} times.
            <button onClick={() => increment()}>+</button>
            <button onClick={() => decrement()}>-</button>
        </div>
    );

}

export default Counter;
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
            <h3>useState hooks demo</h3>
            <p>useState helps to enable state feature in functional components which used to be called stateless component. And state can be shared between functions within the component </p>
            Hello, try the counter which shares the count value between 2 functions.
            <br />
            Counter value: {count}
            <br />
            <button onClick={() => increment()}>+</button>
            <button onClick={() => decrement()}>-</button>
        </div>
    );

}

export default Counter;
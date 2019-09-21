import React, { useState } from 'react'

const CounterView = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            View Count : {count}

        </div>

    );
}


export default CounterView;
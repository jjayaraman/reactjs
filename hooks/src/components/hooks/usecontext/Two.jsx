import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Two = (props) => {
    const context = useContext(UserContext);
    console.log('two ctx : ', context);
    return (
        <div>
            User retrieved from context in the functional component is : {context.name}
        </div>
    );

}

export default Two
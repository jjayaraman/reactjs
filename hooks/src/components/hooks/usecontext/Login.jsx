import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Login = props => {

    console.log('props', props);

    const [user, setUser] = useState({ username: '', email: '' });

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value })
    }

    const handleOnClick = () => {
        // console.log('state ', user);
        console.log(props);

        props.setUserDetails();
    }

    const { setUserDetails } = props;

    return (
        <div>
            <pre>State : {JSON.stringify(user)} </pre>
            <br />

            <label htmlFor='username'>user name</label>
            <input id='username' type="text" value={user.username} onChange={handleOnChange} />
            <br /><br />

            <label htmlFor='email'>email</label>
            <input id='email' type="text" value={user.email} onChange={handleOnChange} />
            <br />

            <button onClick={setUserDetails}>Login</button>
        </div>
    )
}

Login.propTypes = {

}

export default Login

import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Login = props => {

    const [user, setUser] = useState({ username: '', email: '' });

    const { username, email } = user;

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value })
    }

    const handleOnClick = () => {

    }

    return (
        <div>
            <pre>State : {JSON.stringify(user)} </pre>
            <br />

            <label htmlFor='username'>user name</label>
            <input id='username' type="text" value={username} onChange={handleOnChange} />
            <br /><br />

            <label htmlFor='email'>email</label>
            <input id='email' type="text" value={email} onChange={handleOnChange} />
            <br />

            <button onClick={handleOnClick}>Login</button>
        </div>
    )
}

Login.propTypes = {

}

export default Login

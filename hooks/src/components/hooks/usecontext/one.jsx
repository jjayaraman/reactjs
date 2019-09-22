import React, { Component } from 'react'
import UserContext from './../context/UserContext';

export default class One extends Component {

    static contextType = UserContext;

    render() {
        const { name } = this.context;

        return (
            <div>
                user from the context is :  {name}

            </div>
        )
    }
}

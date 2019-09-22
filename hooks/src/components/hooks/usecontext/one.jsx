import React, { Component } from 'react'
import UserContext from '../context/UserContext';

export default class One extends Component {

    static contextType = UserContext;

    render() {
        const { name } = this.context;

        return (
            <div>
                User from the context (using contextType) is :  {name}

            </div>
        )
    }
}

import React, { Component } from 'react'
import { UserList } from '../component/UserList'

export default class User extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <UserList />
            </div>
        )
    }
}

import React, { Component } from 'react'
import { UserList } from '../component/UserList'
import UserService from '../service/UserService'

export default class User extends Component {

    constructor(props) {
        super(props)
        this.userService = new UserService()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.userService.getUsers().then(res => {
            this.setState({ ...this.state, users: res })
        })
    }


    render() {
        return (
            <div>
                <h4>Users</h4>
                <UserList users={this.state.users} />
            </div>
        )
    }
}

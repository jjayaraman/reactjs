import React from 'react'

export const UserList = (props) => {


    return (
        <div id='userList'>
            {props.users.map(u => <li key={u.id}> {u.name} </li>)}
        </div>
    )
}

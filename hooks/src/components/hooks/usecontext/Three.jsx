import React from 'react'
import { UserContextConsumer } from '../context/UserContext'

const Three = () => {
    return (
        <div>
            Context retrived using tags:
            <UserContextConsumer>
                {ctx => {
                    return <div>{ctx.name}</div>
                }}
            </UserContextConsumer>
        </div>
    )
}

export default Three
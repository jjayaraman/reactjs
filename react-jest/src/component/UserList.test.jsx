import React from 'react'
import { shallow } from 'enzyme'
import { UserList } from './UserList'


it('should render', () => {
    let users = []

    const wrapper = shallow(<UserList users={users} />)

    const userList = wrapper.find('#userList')
    expect(userList).toBeTruthy()
    expect(userList).toHaveLength(1)


})

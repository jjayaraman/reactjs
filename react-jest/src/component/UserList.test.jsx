import React from 'react'
import { shallow } from 'enzyme'
import { UserList } from './UserList'


it('should render', () => {

    const wrapper = shallow(<UserList />)
    wrapper.debug()

    const userList = wrapper.find('.userList')

    expect(userList).toHaveLength(1)


})

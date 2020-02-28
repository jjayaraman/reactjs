import React from 'react'
import { shallow } from 'enzyme'
import User from './user'
import { UserList } from '../component/UserList'

it('User should render', () => {

    const wrapper = shallow(<User />)

    expect(wrapper.find(UserList)).toHaveLength(1)

})
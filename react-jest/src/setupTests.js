// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';


// For Testing with Enzyme
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow, render, mount } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

// Global imports for all test files
global.React = React
global.shallow = shallow
global.mount = mount
global.render = render
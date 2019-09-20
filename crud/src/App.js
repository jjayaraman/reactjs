import React from 'react';
import './App.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Login from './components/Login';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';
import ListEmployees from './components/ListEmployees';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavLink from 'react-bootstrap/NavLink';
import ValidateDemo from './components/ValidateDemo';

require('dotenv').config()

function App() {

  return (
    <div>
      <Container>
        {/* <Login></Login> */}
        {/* <CreateEmployee></CreateEmployee> */}
        {/* <EditEmployee></EditEmployee> */}

        <Navbar>
          <Navbar.Brand>React CRUD</Navbar.Brand>
          <Nav>
            <NavDropdown title="Manage Employees">
              <NavDropdown.Item href="/employees">Employees List</NavDropdown.Item>
              <NavDropdown.Item href="/employee-create">Create Employee</NavDropdown.Item>
            </NavDropdown>
            <NavLink href="/validate">Validate Demo</NavLink>
          </Nav>

        </Navbar>
        {/* basename={process.env.REACT_APP_HOME_FODLER || ''} */}
        <Router>
          <Route path="/" exact component={ListEmployees}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/employees" component={ListEmployees} />
          <Route path="/employee/:id" component={EditEmployee}></Route>
          <Route path='/employee-create' component={CreateEmployee}></Route>
          <Route path="/validate" component={ValidateDemo}></Route>
        </Router>


      </Container>
    </div>
  );
}

export default App;

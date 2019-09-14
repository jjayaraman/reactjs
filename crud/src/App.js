import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Login from './components/Login';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';
import ListEmployees from './components/ListEmployees';

function App() {
  return (
    <div>
      <Container>
        {/* <Login></Login> */}
        {/* <CreateEmployee></CreateEmployee> */}
        {/* <EditEmployee></EditEmployee> */}
        <ListEmployees></ListEmployees>
      </Container>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Login from './components/Login';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
  return (
    <div>
      <Container>
        {/* <Login></Login> */}
        <CreateEmployee></CreateEmployee>
        {/* <EditEmployee></EditEmployee> */}
      </Container>
    </div>
  );
}

export default App;

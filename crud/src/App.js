import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Login from './components/Login';
import CreateEmployee from './components/CreateEmployee';

function App() {
  return (
    <div>
      <Container>
        {/* <Login></Login> */}
        <CreateEmployee></CreateEmployee>
      </Container>
    </div>
  );
}

export default App;

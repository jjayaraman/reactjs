import React from 'react';
import './App.css';
import CreateForm from './components/CreateForm';
import { Container } from 'react-bootstrap';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Container>
        {/* <Login></Login> */}
        <CreateForm></CreateForm>
      </Container>
    </div>
  );
}

export default App;

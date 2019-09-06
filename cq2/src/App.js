import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import ListRules from './components/admin/manage-rule/ListRules';
import CreateRule from './components/admin/manage-rule/CreateRule';
import EditRule from './components/admin/manage-rule/EditRule';

import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      {/* <header className="App-header">
      </header> */}

      <Container>
        <Row>
          <Col md={12}> Custom Quotes </Col>
        </Row>
        <Row>
          <Col md={3}>Left Menu</Col>
          <Col md={9}>
            <Container >
              <Switch>
                <Route exact path="/" component={ListRules} />
                <Route path="/create" component={CreateRule} />
                <Route path="/edit" component={EditRule} />
              </Switch>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col md={12}>Footer</Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;

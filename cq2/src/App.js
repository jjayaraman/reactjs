import React from 'react';
import './App.css';

import logo from './assets/images/lgc.jpg';
import { Switch, Route } from 'react-router-dom';
import ListRules from './components/admin/manage-rule/ListRules';
import CreateRule from './components/admin/manage-rule/CreateRule';
import EditRule from './components/admin/manage-rule/EditRule';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from './components/menu/Menu';
import SearchPriceParameters from './components/admin/manage-price-parameter/SearchPriceParameters';

function App() {
  return (
    <div className="App">

      {/* <header className="App-header">
      </header> */}

      <div id="header-logo"><img src={logo} alt="Logo" height="50px" ></img></div>
      <div id="header">Custom Quotation</div>
      <div id="userInfo">Jay Jay</div>
      <div id="leftMenu">
        <Menu></Menu>
      </div>
      <div id="main">

        <Container >
          <Switch>
            <Route exact path="/" component={ListRules} />
            <Route path="/create" component={CreateRule} />
            <Route path="/edit" component={EditRule} />
            <Route path="/admin/price-parameter/search" component={SearchPriceParameters}></Route>
          </Switch>
        </Container>
      </div>
      <div id="footer">
        LGC. All rights reserved. 2019
        </div>
    </div>
  );
}

export default App;

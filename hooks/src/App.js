import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Counter from './components/hooks/usestate/Counter';

import Login from './components/hooks/usecontext/Login';
import One from './components/hooks/usecontext/One';
import Two from './components/hooks/usecontext/Two'

import { UserContextProvider } from './components/hooks/context/UserContext';
import Three from './components/hooks/usecontext/Three';


class App extends React.Component {

  constructor(props) {
    super(props)
    console.log('app props', this.props);
    this.state = {
    }
  }

  user = { 'name': 'jay' };

  // setUserDetails = () => {
  //   console.log('working....');
  // }

  // setUserDetails = (userDetails) => {
  //   this.user = userDetails;
  //   console.log('ud : ', this.user);
  // }

  render() {

    return (
      <div className="App" >
        {/* <Counter></Counter> */}

        < Router >
          <Route exact path="/" component={Login}></Route>
          <Route path="/login" render={(routeProps) => (<Login {...routeProps} {...this.props} setUserDetails={this.setUserDetails} ></Login>)} ></Route>

          <UserContextProvider value={this.user}>
            <Route path="/one" component={One}></Route>
            <Route path="/two" component={Two}></Route>
            <Route path="/three" component={Three}></Route>

            <Route path="/setstate" component={Counter}></Route>
          </UserContextProvider>
        </Router>

      </div >
    );
  }

}

export default App;

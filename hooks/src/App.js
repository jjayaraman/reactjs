import React, { Profiler } from 'react';
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

  logProfile = (id, phase, actualTime, baseTime, startTime, commitTime) => {
    console.log(`${id}'s ${phase} phase:`);
    console.log(`Actual time: ${actualTime}`);
    console.log(`Base time: ${baseTime}`);
    console.log(`Start time: ${startTime}`);
    console.log(`Commit time: ${commitTime}`);
  };

  render() {

    return (
      <div className="App" >
        {/* <Counter></Counter> */}
        <Profiler id="myapp" onRender={this.logProfile}>
          <Router>
            <Route exact path="/" component={Login}></Route>
            <Route path="/login" render={(routeProps) => (<Login {...routeProps} {...this.props} setUserDetails={this.setUserDetails} ></Login>)} ></Route>

            <UserContextProvider value={this.user}>
              <Route path="/one" component={One}></Route>
              <Route path="/two" component={Two}></Route>
              <Route path="/three" component={Three}></Route>

              <Route path="/setstate" component={Counter}></Route>
            </UserContextProvider>
          </Router>
        </Profiler>
      </div >
    );
  }

}

export default App;

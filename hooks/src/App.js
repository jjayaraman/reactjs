import React from 'react';
import './App.css';
import Counter from './components/hooks/usestate/Counter';
import CounterView from './components/hooks/CounterView';
import Login from './components/hooks/usecontext/Login';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <Login></Login>
    </div>
  );
}

export default App;

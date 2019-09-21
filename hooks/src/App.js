import React from 'react';
import './App.css';
import Counter from './components/hooks/Counter';
import CounterView from './components/hooks/CounterView';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <CounterView></CounterView>
    </div>
  );
}

export default App;

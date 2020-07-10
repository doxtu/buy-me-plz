import React from 'react';
import './App.css';

import { HomePage } from './pages/homepage/homepage.component.jsx';
import { Route, Switch } from 'react-router-dom';

const tester = () => (
  <div>
    <h1>hats!!!</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={tester} />
      </Switch>
    </div>
  );
}

export default App;

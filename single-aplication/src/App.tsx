import React from 'react';
import logo from './logo.svg';
import LogIn from './pages/login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LogIn} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;

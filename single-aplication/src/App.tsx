import React from 'react';
import "./styles/global.css"
import logo from './logo.svg';
import LogIn from './pages/login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './pages/register';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;

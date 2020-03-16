import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/index';
import SignInClass from './pages/SignIn';
import SignUpClass from './pages/SignUpPage';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/signin" exact component={SignInClass} />
      <Route path="/signup" exact component={SignUpClass} />
    </Switch>
  );
}

export default App;

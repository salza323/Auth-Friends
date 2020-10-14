import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import FriendsList from './Components/FriendsList';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className='App'>
      <h1> Auth Friends App</h1>
      <NavBar />
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/friends' component={FriendsList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

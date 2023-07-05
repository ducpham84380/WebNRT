import React from 'react';
import './styles/sb-admin-2.min.css';
import './App.css';

import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import  Admin  from './pages/Admin/Admin';
import  Login  from './pages/Account/Login';
import { PrivateRoute } from './components';

function App() {
  return (
    <div className='App' id='wrapper'>
      <Router>
        <Switch>
          <Route path='/login' >
            <Login/>
          </Route>
          <PrivateRoute path='/'>
            <Admin />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

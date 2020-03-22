import React from 'react';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './pages/auth/Login';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/login" render={props => <Login {...props} />} />

          
        </Switch>
      </BrowserRouter>
  );
}

export default App;

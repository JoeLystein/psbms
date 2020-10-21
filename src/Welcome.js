import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Nav from './Nav';
import Contact from './Contact';
import About from './About';
/*import Loginpage from './Loginpage';*/
import Signup from './Signup';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';

function Welcome() {
  return (
    <div className="App">
      <Router> 
        <Nav/>
          <Switch>
            <Route path="/" exact component={Welcome}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/About" component={About}/>
            <Route path="/Signup" component={Signup}/>
          </Switch>
    </Router>

        <h1>Welcome to PSBMS</h1>

    </div>
  );
}

export default Welcome;

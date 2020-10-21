import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Nav from './Nav';
import Contact from './Contact';
import About from './About';
import Loginpage from './Loginpage';
import Signup from './Signup'
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <Router> 
          <Nav/>
            <Switch>
              <Route path="/" exact component={Welcome}/>
              <Route path="/Contact" component={Contact}/>
              <Route path="/About" component={About}/>
              <Route path="/Loginpage" component={Loginpage}/>
              <Route path="/Signup" component={Signup}/>
            </Switch>
      </Router>


    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Nav from './Nav';
import Contact from './Contact';
import About from './About';
import Loginpage from './Loginpage';
import Signup from './Signup';
import {BrowserRouter as Router,Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component {

  render(){
    const DefaultRoutes= () =>{
      return (
        <div className="App">
            <Router> 
              <Nav/>
                <Switch>
                  <Route path="/" exact component={Welcome}/>
                  <Route path="/Contact" component={Contact}/>
                  <Route path="/About" component={About}/>
                  <Route path="/Signup" component={Signup}/>
                  <Route path="/Loginpage" component={Loginpage}/>
                  
                </Switch>
          </Router>
        </div>
      )
  }


  return(
    <Router>
      <Switch>
         
         <Route component={DefaultRoutes}/>
      </Switch>
    </Router>
   
  )
}
}

export default App; 

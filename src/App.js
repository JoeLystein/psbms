import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Nav from './Nav';
import Contact from './Contact';
import About from './About';
import Loginpage from './Loginpage';
import Signup from './Signup'

function App() {
  return (
    <div className="App"> 
        <Nav/>
        <Contact/>
        <About/> 
        <Loginpage/>
        <Signup/>


    </div>
  );
}

export default App;

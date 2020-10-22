import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import { Link } from 'react-router-dom'; 

function Welcome() {
  return (
    <div className="App">
        <h1>Welcome to PSBMS</h1>
        <Link to="./Loginpage">
           <button type="button">
             Login
           </button>
        </Link>

        <Link to='/Signup'>
                <li>Signup</li>
        </Link>


    </div>
  );
}

export default Welcome;

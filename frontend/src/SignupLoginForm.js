import React from 'react';
import Navbar from './components/Navbar';
import { NavBtnLink } from './components/Elements';
import './App.css';



function SignupLoginForm() {
  return (
    <div>
        <Navbar/>
        <div className='Form'>          
            <div className='input-box'>
                <label for="user">Username</label>
                <input type='text'></input>
            </div>
            <div className='input-box'>
                <label for="pass">Password</label>
                <input type='password'></input>
            </div>
            <div className='input-box login-btns'>
                <button className = 'buttons'>Log in</button>
                <button className = 'buttons'>Register</button>
            </div>
        </div>
        {/* hello im login form lol */}
    </div>
  )
}

export default SignupLoginForm

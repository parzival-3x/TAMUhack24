import React from 'react';
import Navbar from './components/Navbar';
import { NavBtnLink } from './components/Elements';
import './App.css';

var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const app = express()
app.get("/",(req,res)=>{
    res.send("Hello from server")
}).listen(3000);
console.log("listening on port 3000")


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
            <div className='input-box'>
                <button className = 'buttons'>Log in</button>
                <button className = 'buttons'>Register</button>
            </div>
        </div>
        {/* hello im login form lol */}
    </div>
  )
}

export default SignupLoginForm

import React, { Component } from 'react'
import loginPic from '../login.jpg'
import '../style/login.css'

const Login = (props) => {
    return (
      <div className="login">
        <img src={loginPic} alt="" />
        <h3>Username</h3>
        <input placeholder="username"></input>
        <h3>Password</h3>
        <input placeholder="password"></input>
        <button onClick={() => props.onClinicClick()}>Login</button>
      </div>
    )
}

export default Login

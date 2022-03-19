import React, { useState } from 'react'
import Nav from '../components/nav'
import axios from "axios"

const LoginPage = () => {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleClick = () => {
        console.log({email,password})
        axios
         .post("/api/auth/login",{email,password})
         .then(res => console.log("It was a success",res))
         .catch(err => console.log(err))
    }

    console.log("Email",email,"Password",password)
    return(
        <div>
            <Nav />
            <div className = "container auth-container center-block m6-top" style= {{border:'1px solid black'}}>
                <div className = "primary-text center-text text-m bold">Login</div>
                <div className = "padding-s">
                    <label htmlFor="demo" className="input-label">Email Address</label>
                    <input type = "email" id = "demo" className = "input-field m2-top full-width" style = {{display:'block',width:'100%'}} placeholder="Please Enter Email Here" value = {email} onChange = {(e) => setEmail(e.target.value)} />
                </div>
                <div className="padding-s flex flex-column">
                    <label htmlFor="demo1" className="input-label">Enter Password</label>
                    <input type = "password" id = "demo1" className = "input-field m2-top full-width" style = {{display:'block',width:'100%'}}  placeholder="Please Enter Password Here" value = {password} onChange = {(e) => setPassword(e.target.value)} />
                </div>
            
    
                <div className = "padding-s-block m2-top flex space-between">
                    <div className="flex gap-m align-center">
                        <input type = "checkbox" />
                        <p>Remember Me</p>
                    </div>
                    <a href="" className = "primary-text">Forgot Password</a>
                </div>

                <button className="btn btn-secondary full-width m2-top" onClick = {handleClick}>Login</button>
                <div className = "m2-top">
                    <a href="signup.html" className = "primary-text">Create New Account?</a>
                </div>
            </div>
        </div>
        
    )
    
}

export default LoginPage
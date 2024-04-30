import React, { useState } from 'react'
import './CSS/LoginSignup.css';

const LoginSignup = () => {
    const[action,setAction]=useState("Sign up");

  return (
    <div className='full'>
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="SignIn"?<div></div>:<div className="input">
                <label className='img'>user name</label>
                <input type="text" placeholder='enter your name'></input>
                
            </div>}
            
            <div className="input">
               <label className='img'>email</label> <input type="email"placeholder='enter your email'></input>
            </div>
            <div className="input">
                <label className='img'>password</label>
                <input type="password" placeholder='password'></input>
            </div>
            <div className="forget-password">Forget password ?<span>Click here</span></div>
            <div className="submit-container">
                <div className={action==="SignIn"?"submit gray":"submit"}onClick={()=>{setAction("Signup")}}>Continue</div>
              
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default LoginSignup

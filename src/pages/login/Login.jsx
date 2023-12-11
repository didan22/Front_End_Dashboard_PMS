import React, { useState } from "react"
import "./login.scss"

export const Login = () => {

  const [action, setAction] = useState("Login");


  return (
    <div className="container-login">
      <div className="header-login">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src="/person.png" alt="" className="icon" />
          <input type="text" placeholder="Name"/>
        </div>}
        
        <div className="input">
        <img src="/email.png" alt="" className="icon" />
          <input type="email" placeholder="Email"/>
        </div>
        <div className="input">
        <img src="/password.png" alt="" className="icon" />
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password ? <span>Click Here!</span></div>}
      
      <div className="submit-container">
        <div className= {action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className= {action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default Login

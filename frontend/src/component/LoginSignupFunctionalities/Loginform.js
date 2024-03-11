import React from 'react'
import { useState } from 'react'
import UserService from '../../Service/UserService'
import { useNavigate } from 'react-router-dom'
import "../../css/xyz.css"
import img from "../../images/logopng.png"
import "../../css/logo.css"
import"../../css/span.css"


export const Loginform = () => {
       const[loginobj,setlogin]=useState({email:"",password:""})
       const Navigate=useNavigate();

     
       
 
function handlechange(event)
{
    let{name,value}=event.target
    setlogin({...loginobj,[name]:value})

}

function validatelogin()
{
  
      
   
 UserService.validatelogin(loginobj)
  .then((result)=>{
    if(result.data.email==loginobj.email)
    {
      sessionStorage.setItem("loginemail",loginobj.email)
      
    Navigate("/dashboard")
    }
  })
  .catch((err)=>
  {
    document.getElementById("err").innerHTML="Please Enter the right credentials"
  })
}

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500&display=swap" rel="stylesheet" />
  
</head>
  return (
    <body style={{
      backgroundColor: "#fee2f8",
      backgroundImage: "linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%)"}}>
    <div >
   
<div className="container-fluid">
  
      <div className="row">
        <div className="col-sm-6 col-md-7 intro-section">
        
          <div className="brand-wrapper">
          
          </div>
        </div>
        <div className="col-sm-6 col-md-5 form-section">
          <div className="login-wrapper">
            <h2 className="login-title">Sign in</h2>
            <form action="#!" data-toggle="validator">
              <div className="form-group">
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" className="form-control" value={loginobj.email} placeholder="Email" onChange={handlechange}  autoFocus/>
              
              </div>
              <div className="form-group mb-3">
                  <label  htmlFor="password" className="sr-only">Password</label>
                <input type="password" name="password" id="password" className="form-control" value={loginobj.password} placeholder="Password" onChange={handlechange} required />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-5">
                <input name="login" id="login" className="btn login-btn" type="button" value="Login" onClick={validatelogin} />
                <a href="#!" className="forgot-password-link">Password?</a>
              </div>
            
            </form>
            <img className="logologin" height="200" src={require("../../images/bglogo.png")} ></img>
            <p className="login-wrapper-footer-text">Need an account? <a href="/signup" className="text-reset">Signup here</a></p>
            
            <span id="err" style={{color:"red",fontFamily:"cursive"}}></span>  
          </div>
        </div>
      </div>
    </div>
    </div>
    </body>

)
  }

  export default Loginform;

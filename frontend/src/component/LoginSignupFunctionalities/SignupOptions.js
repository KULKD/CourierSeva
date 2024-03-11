import React from 'react'
import { Link } from 'react-router-dom'
import "../../css/button.css"
import img from "../../images/logopng.png"
import "../../css/logo.css"

export const SignupOptions = () => {
    
    
    function customer()
    {
       sessionStorage.setItem("user","customer")
    } 
    
    function delievery()
    {
      sessionStorage.setItem("user","delivery")
    }
  return (
    <body style={{textAlign:"center",paddingTop:100,backgroundColor: "#fee2f8",
    backgroundImage: "linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%)"
    
    }}>

     <div >
      <img className="logo" height="100" src={require("../../images/bglogo.png")} ></img>
      <img src={require("../../images/user.gif")}  ></img>
       <div >
         <Link to="/signupuser">
          <span style={{fontFamily:"cursive"}}>Are you a Customer ?</span><br/>
        <button class="custom-btn btn-6" onClick={customer}>Click Here </button>
        </Link>
        </div>
        <img src={require("../../images/delievery.gif")}></img>
        <div>
       <Link to="/signupuser">
        <span style={{fontFamily:"cursive"}}>Are you a Delievery Personnel ?</span><br/>
        <button class="custom-btn btn-6" onClick={delievery}>Click Here</button>
        </Link>
       </div>
        <div>
        </div>
    </div>
    </body>
  )

}

export default  SignupOptions;
import React from 'react'
import "../../css/button.css"
import { NavbarCollapse } from 'flowbite-react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar1 = () => {
  
  const navigator=useNavigate()
    
  function logout()
  {
    sessionStorage.clear()
    navigator("/login")
  }
  return (
    

    <div >
<nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary " style={{backgroundColor: "#cfc7f8",
backgroundImage: " linear-gradient(315deg, #cfc7f8 0%, #ebbba7 74%)"}}>

    <div className="container-fluid">
    
      <button
        data-mdb-collapse-init
        className="navbar-toggler"
        type="button"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        <a className="navbar-brand mt-2 mt-lg-0" href="/dashboard">
          <img
            src={require("../../images/bglogo.png")}
            
            height="80"
            alt="MDB Logo"
            loading="eager"
          />
        </a>
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
          <li className="nav-item">
            <Link to={"/dashboard"}>
          <button data-mdb-ripple-init type="button" className="custom-btn btn-2">
          Home
        </button>
        </Link>
          </li>
          <li className="nav-item">
        
          </li>
          <li className="nav-item">
            <Link to={"/profile"}>
          <button data-mdb-ripple-init type="button" className="custom-btn btn-11">Profile</button>
          </Link>
          </li>
          <li  className='nav-item'>

          </li>
          <li  className='nav-item'>
          
          </li>
          
        </ul>
        
      </div>
      <h3 style={{alignItems:"center",fontFamily:"initial"}}>Hello {sessionStorage.getItem("loginemail")}</h3>
      </div>
      
        <Link to={"/shipment"}>
        <button data-mdb-ripple-init type="button" className="custom-btn btn-3">Ship Now</button>
        </Link>
        <button data-mdb-ripple-init type="button" className="custom-btn btn-5" onClick={()=>logout()}>Logout</button>
       
       
      
    
  
  
  </nav>
  </div>
  
  )
}

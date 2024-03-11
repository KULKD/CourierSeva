import React, { useState } from 'react'
import car from "./car.jpg"
import "../../css/logo.css"
import axios from "axios";
import "../../css/span.css"
import { useNavigate } from 'react-router-dom';



export const SignupForm2 = () => {
  
  const navigate=useNavigate()
  var username=sessionStorage.getItem("username");
  var email=sessionStorage.getItem("email");
  var password=sessionStorage.getItem("password");
  var contact=sessionStorage.getItem("contact");
   const[district,setdistrict]=useState("");
   const[pincode,setpincode]=useState("");
   const[state,setstate]=useState("")
   const[address,sertaddress]=useState("")
   const[firstname,setfirstname]=useState("")
   const[lastname,setlastname]=useState("")
   

  const options = {
    method: 'GET',
    url: 'https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/'+pincode,
    headers: {
      'X-RapidAPI-Key': 'b9ea04e695msh651cf431f07f98bp18abb2jsn9f93d2d4319b',
      'X-RapidAPI-Host': 'india-pincode-with-latitude-and-longitude.p.rapidapi.com'
    }
  };



  async function checkpincode(e)
  {
    e.preventDefault();
      try {

          
          const response = await axios.request(options);
          setdistrict(response.data[0].district);
          setstate(response.data[0].state);

      } catch (error) {
          console.error(error);
      
  }
  
}


function validate(e)
{
  e.preventDefault();
  console.log("hello")
  if(district.trim()==""||pincode.trim()==""||state.trim()==""||address.trim()==""||firstname.trim()==""||lastname.trim()=="")
  {
    e.preventDefault();
    document.getElementById("err1").innerHTML="Do not leave the blank fields !!!"
  }
  else
  {
      
        console.log("inside")
        var outputinfo={username:username,email:email,password:password,contact:contact,district:district,pincode:pincode,state:state,address:address,firstname:firstname,lastname:lastname}
        sessionStorage.clear();
        navigate("/login")
      

  }
}

  
  return (
    <body style={{backgroundColor:"#D9AFD9",
    backgroundImage:"radial-gradient( circle 311px at 8.6% 27.9%,  rgba(62,147,252,0.57) 12.9%, rgba(239,183,192,0.44) 91.2% )"}}>
 <div >
   <img className="logo" height="100" src={require("../../images/bglogo.png")} ></img>

<section className="vh-100" >
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{"borderRadius": "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
              
                <p className="text-center h1 fw-bold mb-4 mx-2 mx-md-6 mt-10">Sign up</p>
              
                <form className="mx-1 mx-md-4">
                <span id='err1'></span>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="address" name="address"  className="form-control" required onChange={(e)=>sertaddress(e.target.value)} />
                      <label className="form-label" htmlFor="address">Address</label>

                    </div>
                  </div>
             
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="pincode" className="form-control" onChange={(e)=>{setpincode(e.target.value)}} required/>
                      <label className="form-label" htmlFor="pincode">Pincode</label><button className='custom-btn btn-6' onClick={(e)=>checkpincode(e)} >Validate</button>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="district">District</label>
                      <input type="text" id="district" className="form-control" readOnly value={district}  />
                      
                    </div>
                   
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="state">State</label>
                      <input type="text" id="state" className="form-control" readOnly value={state} />
                      
                    </div>
                    
                  </div>
                   
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="firstname" className="form-control" required onChange={(e)=>{setfirstname(e.target.value)}} value={firstname}/>
                      <label className="form-label" htmlFor="firstname">Firstname</label>
                    </div>
                  </div>
      
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="lastname" className="form-control" required onChange={(e)=>{setlastname(e.target.value)}} value={lastname}/>
                      <label className="form-label" htmlFor="lastname">Lastname</label>
                    </div>
                  </div>
                  
                   

                  <div className="form-check d-flex justify-content-center mb-5" >
                    
                 
                   <label className="form-check-label" htmlFor="form2Example3">
                    
                    </label>
                 
                    <a href="/terms">Terms of service</a>
                    
                   
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="custom-btn btn-4" onClick={(e)=>validate(e)}>Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src={car}
                  className="img-fluid" alt="Sample image" style={{"borderRadius": "25px"}}  />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
    </body>
  )
}


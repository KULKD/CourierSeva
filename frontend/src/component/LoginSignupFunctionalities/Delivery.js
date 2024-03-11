import React, { useState } from 'react'
import car from "../../images/delivery.jpg"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



export const  Delievery= () => {
    
    var navigate=useNavigate()
    var username=sessionStorage.getItem("username");
    var email=sessionStorage.getItem("email");
    var password=sessionStorage.getItem("password");
    var contact=sessionStorage.getItem("contact");
    const[district,setdistrict]=useState("");
   const[pincode,setpincode]=useState("");
   const[state,setstate]=useState("")
   const[address,sertaddress]=useState("")
   const[adhar,setadhar]=useState("")
   const[vehicle,setvehicle]=useState("")
   
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
  let regex = new RegExp(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/);
  let regexp = new RegExp(/^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/);
  console.log("hello")
  if(district.trim()==""||pincode.trim()==""||state.trim()==""||address.trim()==""||adhar.trim()==""||vehicle.trim()=="")
  {
    e.preventDefault();
    document.getElementById("err1").innerHTML="Do not leave the blank fields !!!"
  }

 //3675 9834 6015
else if(!(regex.test(adhar))) 
    {
       
        document.getElementById("err2").innerHTML="Enter the Valid Adhar No Format should be xxxx yyyy zzzz" 
       
    }
//UP 50 BY 1998
else if(!(regexp.test(vehicle)))
{
    document.getElementById("err3").innerHTML="Enter the Valid Vehicle Number Format should be XX 00 YY 0000" 
   
}


else
{
        
        console.log("inside")
        var outputinfo={username:username,email:email,password:password,contact:contact,district:district,pincode:pincode,state:state,address:address,adhar:adhar.trim(),vehicle_Id:vehicle}
        console.log(outputinfo)
        sessionStorage.clear();
        navigate("/login")
} 

if(regex.test(adhar))
{
    document.getElementById("err2").innerHTML=" "
}

if(regexp.test(vehicle))
{
    document.getElementById("err2").innerHTML=" "
}


  
}




  return (

    <div>

 <div >
   <img className="logo" height="100" src={require("../../images/bglogo.png")} ></img>

  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" >
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
                      <input type="text" id="firstname" className="form-control" required onChange={(e)=>{setadhar(e.target.value)}} value={adhar}/>
                      <label className="form-label" htmlFor="firstname">Adhar no</label>
                      <span id='err2'></span>
                    </div>
                  </div>
      
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="lastname" className="form-control" required onChange={(e)=>{setvehicle(e.target.value)}} value={vehicle}/>
                      <label className="form-label" htmlFor="lastname">Vehicle id</label>
                      <span id='err3'></span>
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

    </div>
    
    </div>
    
  )
}



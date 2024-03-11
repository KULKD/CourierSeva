import React, { useEffect, useState } from 'react'
import car from ".././LoginSignupFunctionalities/car.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { Navbar } from 'flowbite-react'
import { Navbar1 } from './Navbar'


export default function Shipment() {
   
  const navigate=useNavigate()
    const[senders_name,setusername]=useState("")
    const[pickup_address,setemail]=useState("")
    const[pickup_pincode,setpassword]=useState("")
    const[pickup_date,setrepassword]=useState("")
   
   
    function isBefore(date1, date2) {
      return date1 <= date2;
    }
    function validate(e)
    {
     
     
      
     
      const d=new Date();
      let pickup_d=document.getElementById("pickup_date").value
      const pic_d=new Date(pickup_d)
      
      if(senders_name.trim()==""||pickup_address.trim()==""||pickup_pincode.trim()==""||pickup_date.trim()=="")
       { 
        e.preventDefault();
       
        document.getElementById("err5").innerHTML="Do not leave the blank fields !!!"
        
      }
      
     
      else if(isBefore(pic_d,d))
      {
        e.preventDefault();
        console.log("inside date fail")
        document.getElementById("err5").innerHTML="Date Should be Greater than or equal to today"
      }

      else
      {
        
       
       
        
        sessionStorage.setItem("senders_name",senders_name);
        sessionStorage.setItem("pickup_address",pickup_address);
        sessionStorage.setItem("pickup_pincode",pickup_pincode);
        sessionStorage.setItem("pickup_date",pickup_date);
        
        navigate("/shipment2")
       
        }
      }
      
      




  return (
    <div>
         <Navbar1></Navbar1>
        <section class="vh-100" style={{backgroundColor: "#fee2f8",
    backgroundImage: "linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%)"}}>
      
      
  <div class="container h-100" >
    <div class="row d-flex justify-content-center align-items-center h-100" >
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{"border-radius": "25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
               
                <p class="text-center h1 fw-bold mb-4 mx-1 mx-md-5 mt-9">Shipment-I </p>

                <form class="mx-1 mx-md-4">
                <span id="err5"></span>
                
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" name="sender_name" class="form-control" value={senders_name} onChange={(e)=>setusername(e.target.value)}   />
                      <label class="form-label" for="sender_name">Senders Name</label>
                      
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text"  name="pickup_address" class="form-control" onChange={(e)=>setemail(e.target.value)} value={pickup_address}/>
                      <label class="form-label" for="pickup_address">Pickup Address</label>
                      <span id="err2"></span>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    
                    <div class="form-outline flex-fill mb-0">
                    <span id="err3"></span>
                      <input type="text" name="pincode" class="form-control" onChange={(e)=>setpassword(e.target.value)} value={pickup_pincode}/>
                      <label class="form-label" for="pincode">Pickup Pincode</label>
                      <span id="err3"></span>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4" >
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="date" name="pickup_date" id="pickup_date" class="form-control"  onChange={(e)=>setrepassword(e.target.value)} value={pickup_date} />
                      <label class="form-label" for="pickup_date">Pickup Date</label>
                      <span id="err4"></span>
                    </div>
                  </div>
                 
                  
                 <button className='custom-btn btn-11' onClick={(e)=>validate(e)}>Next</button>
                </form>
  
              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src={car}
                  class="img-fluid" alt="Sample image" style={{"borderRadius": "25px"}}  />
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}



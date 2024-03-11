import React, { useState } from 'react'
import { Navbar1 } from './Navbar'
import car from "../../images/payment.gif"
import { getDropdownMenuPlacement } from 'react-bootstrap/esm/DropdownMenu';
import { useEffect } from 'react';

export const Payment = () => {

  const[senders_name,setusername]=useState(" ")
    const[pickup_address,setaddress]=useState(" ")
    const[pickup_pincode,setpincode]=useState(" ")
    const[pickup_date,setpickupdate]=useState(" ")
    const[content,setcontent]=useState(" ")
    const[weight1,setweight1]=useState(" ")
    const[fair,setfair]=useState(0)
   const[recname,setrecname]=useState("")
   const[rec_email,setrecemail]=useState("")
   const[rec_pincode,setrecpincode]=useState("")
   const[recaddress,setrecaddress]=useState("")
   const[recnumber,setrecnumber]=useState("")
  
 
  useEffect(() => {
  
    setusername(sessionStorage.getItem("senders_name"))
    setaddress(sessionStorage.getItem("pickup_address"))
    setpincode(sessionStorage.getItem("pickup_pincode"))
    setpickupdate(sessionStorage.getItem("pickup_date"))
    setcontent(sessionStorage.getItem("content"))
    setweight1(sessionStorage.getItem("weight"))
    setfair(sessionStorage.getItem("fair"))
    setrecaddress(sessionStorage.getItem("recaddress"))
    setrecname(sessionStorage.getItem("recname"))
    setrecemail(sessionStorage.getItem("recemail"))
    setrecnumber(sessionStorage.getItem("recnumber"))
    setrecpincode(sessionStorage.getItem("recpincode"))
  });
  

  





return (

   
    <div  style={{backgroundColor: "#fee2f8",
    backgroundImage: "linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%)"}}>
        <Navbar1></Navbar1>
        <section className="vh-100" style={{backgroundColor: "#fee2f8",
    backgroundImage: "linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%)"}}>
      
      
  <div className="container h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100" >
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{"border-radius": "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
               
                <p className="text-center h2 fw-bold mb-4 mx-3 mx-md-7 mt-9">Shipment Summary </p>

                <form className="mx-1 mx-md-4">
                <span id="err5"></span>
                
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name="sender_name" id="senders_name" className="form-control" readOnly value={senders_name}  />
                      <label className="form-label" for="senders_name">Senders Name</label>
                      
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text"  name="pickup_address" className="form-control" id="pickup_address" value={pickup_address} readOnly />
                      <label className="form-label" for="pickup_address">Pickup Address</label>
                      <span id="err2"></span>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    
                    <div className="form-outline flex-fill mb-0">
                    <span id="err3"></span>
                      <input type="text" name="pincode" className="form-control" readOnly id="pickup_pincode" value={pickup_pincode}  />
                      <label className="form-label" for="pincode">Pickup Pincode</label>
                      <span id="err3"></span>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4" >
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="date" name="pickup_date" id="pickup_date" className="form-control" readOnly value={pickup_date}  />
                      <label className="form-label" for="pickup_date">Pickup Date</label>
                      <span id="err4"></span>
                    </div>
                  </div>
                 
                 
                  <div className="d-flex flex-row align-items-center mb-4" >
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name="pickup_date" id="content" className="form-control" readOnly  value={content}  />
                      <label className="form-label" for="pickup_date">Content Description</label>
                      <span id="err4"></span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4" >
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name="pickup_date" id="weight" className="form-control" readOnly value={weight1}  />
                      <label className="form-label" for="pickup_date">Weight</label>
                      <span id="err4"></span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4" >
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name="pickup_date" id="Fair" className="form-control" readOnly  value={recname} />
                      <label className="form-label" for="pickup_date">Reciever Name</label>
                      <span id="err4"></span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4" >
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name="pickup_date" id="Fair" className="form-control" readOnly  value={recaddress} />
                      <label className="form-label" for="pickup_date">Reciever Address</label>
                      <span id="err4"></span>
                    </div>
                  </div>
                 
                  <div className="d-flex flex-row align-items-center mb-4" >
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name="pickup_date" id="Fair" className="form-control" readOnly  value={rec_pincode} />
                      <label className="form-label" for="pickup_date">Reciever Pincode</label>
                      <span id="err4"></span>
                      </div>
                  </div>
                      <div className="d-flex flex-row align-items-center mb-4" >
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name="pickup_date" id="Fair" className="form-control" readOnly  value={rec_email} />
                      <label className="form-label" for="pickup_date">Reciever Email</label>
                      <span id="err4"></span>
                      </div>
                  </div>
                      <div className="d-flex flex-row align-items-center mb-4" >
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name="pickup_date" id="Fair" className="form-control" readOnly  value={recnumber} />
                      <label className="form-label" for="pickup_date">Reciever Number</label>
                      <span id="err4"></span>
                      
                    </div>
                  </div>
                
                 
                 <button className='custom-btn btn-11' id="rzp-button1" >Pay Now</button>
                 
                </form>
                
          

    
    
            
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






import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar1 } from './Navbar'
import car from ".././LoginSignupFunctionalities/car.jpg"
export const ReciverDetail = () => {
  
    const navigate=useNavigate()
    const[recname,setrecname]=useState("")
    const[recnumber,setrecnumber]=useState("")
    const[rec_email,setrecemail]=useState("")
    const[rec_address,setrecaddress]=useState("")
    const[rec_pincode,setrecpincode]=useState("")
    

    function validate(e)
    {
     
     
      
   
      
      if(recname.trim()==""||rec_address.trim()==""||rec_pincode.trim()==""||rec_email.trim()==""||rec_pincode.trim()=="")
       { 
        e.preventDefault();
        console.log("hello")
        document.getElementById("err5").innerHTML="Do not leave the blank fields !!!"
        
      }
      

      else
      {
        
       
        
        
        sessionStorage.setItem("recname",recname);
        sessionStorage.setItem("recnumber",recnumber);
        sessionStorage.setItem("recemail",rec_email);
        sessionStorage.setItem("recaddress",rec_address);
        sessionStorage.setItem("recpincode",rec_pincode);
        navigate("/payment")
        
       
       
        }
      }
  
    return (
    <div>
         <div>
      <Navbar1></Navbar1>
         <div>
         
       <section class="vh-100" style={{backgroundColor: "#fee2f8",
   backgroundImage: "linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%)"}}>
    
 <div class="container h-100" >
   <div class="row d-flex justify-content-center align-items-center h-100" >
     <div class="col-lg-12 col-xl-11">
       <div class="card text-black" style={{"border-radius": "25px"}}>
         <div class="card-body p-md-5">
           <div class="row justify-content-center">
             <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

               <p class="text-center h2 fw-bold mb-4 mx-1 mx-md-5 mt-9">Reciever Details </p>

               <form class="mx-1 mx-md-4">
               <span id="err5"></span>
               
                 <div class="d-flex flex-row align-items-center mb-4">
                   <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                   <div class="form-outline flex-fill mb-0">
                     <input type="text" name="content" class="form-control" onChange={(e)=>setrecname(e.target.value)} />
                     <label class="form-label" for="content">Reciever name</label>
                     
                   </div>
                 </div>

                 

                 <div class="d-flex flex-row align-items-center mb-4">
                 <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                   
                   <div class="form-outline flex-fill mb-0">
                   <span id="err3"></span>
                     <input type="text" name="contact" id='contact' class="form-control" onChange={(e)=>setrecnumber(e.target.value)}  />
                     <label class="form-label" for="weight">Contact Number</label>
                     
                   </div>
                 </div>
                 

                 <div class="d-flex flex-row align-items-center mb-4" >
                 <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                   <div class="form-outline flex-fill mb-0">
                     <input type="Email" name="fair" id="email" class="form-control" onChange={(e)=>setrecemail(e.target.value)}  />
                     <label class="form-label" for="">Email</label>
                   
                   </div>
                 </div>
                 <div class="d-flex flex-row align-items-center mb-4" >
                 <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                   <div class="form-outline flex-fill mb-0">
                     <input type="text" name="fair" id="address" class="form-control" onChange={(e)=>setrecaddress(e.target.value)}   />
                     <label class="form-label" for="">Address</label>
                   
                   </div>
                 </div>
                 <div class="d-flex flex-row align-items-center mb-4" >
                 <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                   <div class="form-outline flex-fill mb-0">
                     <input type="text" name="fair" id="pincode" class="form-control" onChange={(e)=>setrecpincode(e.target.value)} />
                     <label class="form-label" for="">Pincode</label>
                   
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
    </div>
    </div>
  )
}

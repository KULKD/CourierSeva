import React, { useState } from 'react'
import car from ".././LoginSignupFunctionalities/car.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { Navbar1 } from './Navbar'
export const Shipment2 = () => {

    const navigate=useNavigate()
    const[content,setcontent]=useState("")
    const[weight1,setweight1]=useState("")
    const[fair,setfair]=useState("")
    function calprice(e)
    {
      setweight1(e)
      var weight_cal=parseInt(e)
      console.log(weight_cal)
      if(weight_cal>=1 && weight_cal<=10)
      {
         setfair(weight_cal*100)
      }
      else if(weight_cal>=11 && weight_cal<=30)
      {
        setfair(weight_cal*130)
      }
      else if(weight_cal>=31 && weight_cal<=50)
      {
        setfair(weight_cal*140)
      }

      else if(weight_cal>=51){
        setfair(weight_cal*150)
      }
      else{
        setfair(0)
      }
      
    }
    function validate(e)
    {
     
     
      
   
      
      if(content.trim()==""||weight1.trim()=="")
       { 
        e.preventDefault();
        console.log("hello")
        document.getElementById("err5").innerHTML="Do not leave the blank fields !!!"
        
      }
      

      else
      {
        
       
        
        
        sessionStorage.setItem("content",content);
        sessionStorage.setItem("weight",weight1);
        sessionStorage.setItem("fair",fair);
        
        navigate("/reciver")
        
       
       
        }
      }
      
    







  return (
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

               <p class="text-center h1 fw-bold mb-4 mx-1 mx-md-5 mt-9">Shipment-II </p>

               <form class="mx-1 mx-md-4">
               <span id="err5"></span>
               
                 <div class="d-flex flex-row align-items-center mb-4">
                   <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                   <div class="form-outline flex-fill mb-0">
                     <input type="text" name="content" class="form-control" onChange={(e)=>setcontent(e.target.value)} />
                     <label class="form-label" for="content">Content Dscription</label>
                     
                   </div>
                 </div>

                 

                 <div class="d-flex flex-row align-items-center mb-4">
                   <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                   
                   <div class="form-outline flex-fill mb-0">
                   <span id="err3"></span>
                     <input type="number" name="weight" id='weight' class="form-control" onChange={(e)=>calprice(e.target.value)} />
                     <label class="form-label" for="weight">Weight in Kg</label>
                     
                   </div>
                 </div>
                 

                 <div class="d-flex flex-row align-items-center mb-4" >
                   <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                   <div class="form-outline flex-fill mb-0">
                     <input type="text" name="fair" id="fair" class="form-control" value={fair} readOnly  />
                     <label class="form-label" for="">Expected Fair</label>
                   
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
  )
}

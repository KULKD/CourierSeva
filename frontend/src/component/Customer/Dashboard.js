import React, { useState,useEffect } from 'react'
import { Navbar, Navbar1 } from './Navbar'
import { Footer } from '../Common/Footer'
import manytruck from "../../images/manytruck.jpg"
import truck from "../../images/truck.jpg"
import truck2 from "../../images/truck2.jpg"
import bluetruck from "../../images/bluetruck.jpg"

export const Dashboard = () => {


  const images = [
   manytruck,truck,truck2,bluetruck
   
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
      }, []);




  return (
    
    <div style={{backgroundColor: "#fee2f8",
      backgroundImage:"linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%)"}}>
    
    <Navbar1 ></Navbar1>
    
   <img  src={images[currentImageIndex]} height={1000} width={1520} /> 
    <div className="col-sm-4">
    <div class="cardlogin" style={{backgroundColor: "#fee2f8",
      backgroundImage:"linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%)"}} >
      <div class="card-body">
        <h5 class="card-title">Track Your Order</h5>
    <span><input type='text' id="ordertrack" placeholder='Tracking Id'></input></span>
    
        <a href="#" class="custom-btn btn-9">Track!</a>
      </div>
   </div>
  </div>
<Footer></Footer>
  
    </div>
  )
}

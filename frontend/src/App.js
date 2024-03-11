import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Loginform from "./component/LoginSignupFunctionalities/Loginform"

import { Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import SignupFrom from './component/LoginSignupFunctionalities/SignupFrom';
import { SignupOptions } from './component/LoginSignupFunctionalities/SignupOptions';
import { SignupForm2 } from './component/LoginSignupFunctionalities/SignupForm2';
import { Check } from './component/LoginSignupFunctionalities/Check';
import { Term } from './component/Terms/Term';
import { Delievery } from './component/LoginSignupFunctionalities/Delivery';
import { Dashboard } from './component/Customer/Dashboard';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Shipment from './component/Customer/Shipment';
import { Shipment2 } from './component/Customer/Shipment2';
import { Payment } from './component/Customer/Payment';
import { ReciverDetail } from './component/Customer/ReciverDetail';













function App() {


  return (
    <div>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Loginform></Loginform>}></Route>
      <Route path="/signupuser" element={<SignupFrom></SignupFrom>}></Route>
      <Route path='/signup' element={<SignupOptions></SignupOptions>}></Route>
      <Route path='/signupcustomer' element={<SignupForm2></SignupForm2>}></Route>
      <Route path='/check' element={<Check></Check>}></Route>
      <Route path='/terms' element={<Term></Term>}></Route>
      <Route path='/signupdelievery' element={<Delievery></Delievery>}></Route>
     

      
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/shipment' element={<Shipment></Shipment>}></Route>
      <Route path='/shipment2' element={<Shipment2></Shipment2>}></Route>
      <Route path='/payment' element={<Payment></Payment>}></Route>
      <Route path='/reciver' element={<ReciverDetail></ReciverDetail>}></Route>
      </Routes>
      </div>
  );
}

export default App;

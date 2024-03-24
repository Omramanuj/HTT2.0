import React from 'react';
import MainNavbar from './components/MainNavbar';
import Login from './views/Login';
import Services from './pages/Services';
import Footer from './components/Footer';
import Aboutus from './pages/AboutUs';
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';

import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.css";
import "./assets/demo/demo.css";
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.5.0";
import "./assets/demo/demo.css?v=1.5.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import Appointment from './pages/Appointment';


export default function Client() {
    React.useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
          document.body.classList.remove("index-page");
          document.body.classList.remove("sidebar-collapse");
        };
      },[]);
  return (
    
      <>
      
      <MainNavbar />
        <Routes>
          <Route path="/index" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<Aboutus />} /> 
          <Route path='/appointment' element={<Appointment />} />
          <Route path="*" element={<Navigate to="/index" replace />} />
        </Routes>
      <Footer />
    </>
  )
}

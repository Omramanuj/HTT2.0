import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.css";
import "./assets/demo/demo.css";
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.5.0";
import "./assets/demo/demo.css?v=1.5.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import React from 'react';
import MainNavbar from './components/MainNavbar';


function App() {
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
  });
  return (
    <>
      <BrowserRouter>
      <MainNavbar />
        <Routes>
          <Route path="/index" element={<Home />} />
          {/* <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/login-page" element={<LoginPage />} /> */}

          <Route path="*" element={<Navigate to="/index" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

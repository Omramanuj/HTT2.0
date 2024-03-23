import React from 'react';
import Home from './views/Home'
import MainNavbar from './components/MainNavbar';
import Login from './views/Login';
import { Navigate, Route, Routes } from 'react-router-dom'
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
      });
  return (
    <>
      
      <MainNavbar />
        <Routes>
          <Route path="/index" element={<Home />} />
          {/* <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/profile-page" element={<ProfilePage />} />*/
          <Route path="/login" element={<Login />} /> }

          <Route path="*" element={<Navigate to="/index" replace />} />
        </Routes>
      
    </>
  )
}

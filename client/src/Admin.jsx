import React, { useEffect } from 'react'
import AdminLoginPage from './views/AdminLoginPage'
import { useAuth } from './AdminAuth'
import Activity from './components/Activity';
import { useNavigate } from 'react-router-dom';

import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.css";
import "./assets/demo/demo.css";
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.5.0";
import "./assets/demo/demo.css?v=1.5.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

export default function Admin() {
  const navigate = useNavigate();
    const { IsAdminLoggedIn } = useAuth();
    useEffect(() => {
      if(IsAdminLoggedIn) {
        navigate('/dashboard', { replace: true });
      }
    })
  return (
    <div>
        {IsAdminLoggedIn ? <Activity /> : <AdminLoginPage />}
    </div>
  )
}

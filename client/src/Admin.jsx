import React, { useEffect } from 'react'
import AdminLoginPage from './views/AdminLoginPage'
import { useAuth } from './AdminAuth'
import Activity from './components/Activity';
import { useNavigate } from 'react-router-dom';

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

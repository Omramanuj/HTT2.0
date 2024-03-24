import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [IsAdminLoggedIn, setLoggedIn] = useState(false);
  const [adminDetails, setUserDetails] = useState();

  const isLoggedIn = async () => {
    try {
      if (!localStorage.getItem('adminToken')) {
        console.log("Please Login First!")
      } else {
        const response = await axios.get('http://localhost:5001/admin/login', {
          headers: { Authorization: localStorage.getItem('adminToken') },
        });
        console.log('Admin profile:', response);
        if (response.data) {
          setUserDetails(response.data);
          console.log(adminDetails)
          setLoggedIn(true);
        } else {
          logout();
        }
      }
    } catch (error) {
      console.error('Profile fetch failed', error.response);
    }
  }
  useEffect(() => { isLoggedIn() }, [])

  const adminLogout = () => {
    setLoggedIn(false);
    setUserDetails();
    localStorage.removeItem('adminToken');
    window.location.reload();
  };

  return (
    <AdminAuthContext.Provider value={{ IsAdminLoggedIn, adminDetails, adminLogout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AdminAuthContext);
};

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const ClientAuthContext = createContext();

export const ClientAuthProvider = ({ children }) => {
  const [IsUserLoggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState();

  const isLoggedIn = async () => {
    try {
      if (!localStorage.getItem('clientToken')) {
        console.log("Please Login First!")
      } else {
        const response = await axios.get('http://localhost:5001/users/login', {
          headers: { Authorization: localStorage.getItem('clientToken') },
        });
        console.log('User profile:', response);
        if (response.data) {
          setUserDetails(response.data);
          // console.log(userDetails)
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

  const clientLogout = () => {
    setLoggedIn(false);
    setUserDetails();
    localStorage.removeItem('clientToken');
    window.location.reload();
  };

  return (
    <ClientAuthContext.Provider value={{ IsUserLoggedIn, userDetails, clientLogout }}>
      {children}
    </ClientAuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(ClientAuthContext);
};

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const ClientAuthContext = createContext();
import { usePageVisits } from './PageVisitContext';

export const ClientAuthProvider = ({ children }) => {
  const [IsUserLoggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const { pageVisits } = usePageVisits();

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

  const clientLogout = async () => {

    try {
      // Ensure the userId is correctly obtained from userDetails
      const userId = userDetails.userId; // or whatever key holds the userId in your userDetails object
      
      const response = await axios.post('http://localhost:5001/users/UpdatePagesVisited', {
        userId: userId,
        pageVisited: pageVisits // This key should match your backend expectation
      }, {
        headers: { Authorization: localStorage.getItem('clientToken') },
      });
      console.log('Page visits updated:', response.data);
  
      // Reset page visits here if needed. You might need to add a reset function to your PageVisitsContext and call it here.
    } catch (error) {
      console.error('Error updating page visits:', error.response);
    }

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

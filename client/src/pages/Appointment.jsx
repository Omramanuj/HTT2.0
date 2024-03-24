import React, { useEffect } from 'react'
import { useAuth } from '../ClientAuth'
import { useNavigate } from 'react-router-dom';
import AppointmentForm from './AppointmentForm';
import toast, { Toaster } from 'react-hot-toast';

export default function Appointment() {
    const navigate = useNavigate();
    const {IsUserLoggedIn} = useAuth();
    const dangerNotify = () => toast.error('Please Login First! Before Booking');

    useEffect(() => {
        if(!IsUserLoggedIn) {
            dangerNotify();
            navigate('/login', { replace: true })
        }
    },[])
  return (<>
  <Toaster />
        <AppointmentForm /></>
  )
}

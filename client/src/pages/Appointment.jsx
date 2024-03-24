import React, { useEffect } from 'react'
import { useAuth } from '../ClientAuth'
import { useNavigate } from 'react-router-dom';
import AppointmentForm from './AppointmentForm';

export default function Appointment() {
    const navigate = useNavigate();
    const {IsUserLoggedIn} = useAuth();
    useEffect(() => {
        if(!IsUserLoggedIn) {
            navigate('/login', { replace: true })
        }
    },[])
  return (
        <AppointmentForm />
  )
}

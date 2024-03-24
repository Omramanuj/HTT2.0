import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../adminViews/Dashboard';
import Table from './Table';
import WhatsappService from './WhatsappService';
export default function Content() {
  return (
    
    <div className='w-full'>
        <Routes>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/users' element={<Table />} />
            <Route path='/whatsappservice' element={<WhatsappService />} />
        </Routes>
    </div>
  )
}

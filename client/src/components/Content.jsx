import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../adminViews/Dashboard';
export default function Content() {
  return (
    
    <div className='w-full'>
        <Routes>
            <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
    </div>
  )
}

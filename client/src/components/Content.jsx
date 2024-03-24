import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../adminViews/Dashboard';
import Table from './Table';
export default function Content() {
  return (
    
    <div className='w-full'>
        <Routes>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/users' element={<Table />} />
        </Routes>
    </div>
  )
}

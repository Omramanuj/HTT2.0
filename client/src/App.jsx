import { useState } from 'react'
import './App.css'
import Services from './pages/Services'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
    <Routes>
      <Route path="/services" element={<Services/>}></Route>
    </Routes>

    </>
  )
}

export default App

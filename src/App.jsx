import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import { Route,Router,Routes } from 'react-router'
import Dashboard from './Components/Dashboard'

function App() {
 

  return (
    <>
     

     <Routes>
    
     <Route path="/" element={<Dashboard />} />
     </Routes>



    </>
  )
}

export default App

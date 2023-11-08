import React from 'react'
import Home from './Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Cuisine from './Cuisine'

function Pages() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cuisine/:type" element={<Cuisine/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Pages

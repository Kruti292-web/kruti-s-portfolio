import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
export default function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
     </BrowserRouter>
  )
}

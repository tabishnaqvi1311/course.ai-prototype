import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import About from './Pages/About/About'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/about' element={<About />} />
      {/* <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} /> */}
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default App

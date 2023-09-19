import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Keranjang from './pages/Keranjang'
import Struck from './pages/Struck'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/keranjang' element={<Keranjang />} />
      <Route path='/struck' element={<Struck />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
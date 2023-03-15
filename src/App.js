import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Products from './Products'
import Store from './Store'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/store" element={<Store/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
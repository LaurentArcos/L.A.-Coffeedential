import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../Components/About'
import Home from '../Components/Home'
import Products from '../Components/Products'
import Store from '../Components/Store'
import NotFound from '../Components/NotFound'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

import '../styles/styles.scss'


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
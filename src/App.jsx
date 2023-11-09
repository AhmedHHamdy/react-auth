import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AuthRequired from './components/AuthRequired'
import Products from './pages/Products'
import WhyMakkok from './pages/WhyMakkok'
import Pricing from './pages/Pricing'
import Blogs from './pages/Blogs'
import ContactUs from './pages/ContactUs'
import NotFound from './pages/404'

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='whymakkok' element={<WhyMakkok />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='contact' element={<ContactUs />} />

        <Route path="products" element={<AuthRequired />}>
          <Route index element={<Products />} />
        </Route>

        <Route path="*" element={<NotFound />}/>

      </Route>
      
     </Routes>
    </BrowserRouter>
  )
}

export default App

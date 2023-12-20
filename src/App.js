// import React from 'react'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Nav from "./components/Nav"
import About from "./components/About";
import Login from "./components/Login"
// import Contact from "./components/Contact"
import Foot from "./components/Foot"
import Home from "./components/Home"
import Reg from "./components/Reg"
import Product from "./components/Product"

export default function App() {
  return (
   <BrowserRouter>
   <Nav/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/pro" element={<Product/>}/>
        <Route path="/reg" element={<Reg/>}/>
    </Routes>
    
    <Foot/>
    
   
   
   </BrowserRouter>
  )
}
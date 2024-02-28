import React from 'react';
import { ReactDOM } from 'react-dom';
import {  Routes, Route } from "react-router-dom";
import Layout from './components/Layout/layout';
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import Contact from './pages/Contact/Contact';
import NoPage from "./pages/NoPage";
import Products from './pages/products/Products';
import About from './pages/about/About';

import Accordion from './pages/FAQ/FAQ';
/* The following line can be included in a src/App.scss */

import "./styles/_global.scss"
import SingleProduct from './pages/products/SingleProduct';
function App() {


  return (
    <>
  
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About/>} />
          <Route path="products" element={<Products />} >

            <Route path = ":productId" element ={<SingleProduct/>} />
            
            </Route>
          <Route path="que" element={<Accordion  />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
     
    </>
  )
}

export default App

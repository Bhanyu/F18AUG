import React from 'react';
import ReactDOM from "react-dom/client";
import {  Routes, Route } from "react-router-dom";
import Layout from './components/Layout/layout';
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Products from './pages/Products';
import About from './pages/About';

import Questions from './pages/FAQ';
/* The following line can be included in a src/App.scss */

import "./styles/_global.scss"

function App() {
  

  return (
    <>
  
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About/>} />
          <Route path="products" element={<Products />} />
          <Route path="que" element={<Questions />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
     
    </>
  )
}

export default App

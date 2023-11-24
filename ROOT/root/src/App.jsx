import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import ReactDOM from "react-dom/client";
import {  Routes, Route } from "react-router-dom";
import Common from './components/Layout/layout';
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Header from './components/Layout/Header/header';

 const App = ()=>{
    return(
        <>
        <Common>
<div className="container">
    <div className="innerdata">

      <Blogs>
        HERE IS BLOG SECTION
      </Blogs>
      <Contact>
        YOU CONNECT US BY THIS SECTION
      </Contact>
<NoPage>
    404 NOT FOUND
</NoPage>

    </div>
</div>

        </Common>
        </>
    )
 }

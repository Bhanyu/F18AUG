import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import "./styles/_global.scss"
import Card from "./pages/Card/Card";
import NoPage from './pages/NoPage/nopage';
function App() {
return(
  <>

      <Routes>
        <Route path="/" element={<Cards />}>

       <Route path=":id" element={<Card />}/>
         
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
   

  </>
)
}

export default App

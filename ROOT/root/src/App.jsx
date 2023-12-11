import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import './App.css'

function App() {
    return(
        <>
          <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
        </>
    )
}
export default App
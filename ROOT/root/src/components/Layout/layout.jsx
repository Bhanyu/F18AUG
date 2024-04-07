import React from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import { Outlet ,  Link} from "react-router-dom";
import styles from "../Layout/_layout.module.scss"
const Layout = ()=>{
    return(
        <>
  
  <Header>
        BU HISSE BASLIQDIR
      
        </Header>
 <Outlet/>
 
 <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
<Link to="/blogs">Blog</Link>
<Link to="/*">Nopage</Link>

        <Footer>
            BU HISSE SONDUR
        </Footer>
        </>
    )
}
export default Layout
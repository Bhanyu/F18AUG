

import React from "react";
import {Outlet} from "react-router-dom"; 

import Footer from "../../../../ROOT/root/src/components/Layout/Footer/footer";
import Header from "./Header/header";

function Layout(){
    return(
        <>
        <Header/>
     
        <Outlet/>
   
     
        <Footer/>
        </>
    )
}
export default Layout
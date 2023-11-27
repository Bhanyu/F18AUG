import React from "react";
import { Outlet } from "react-router-dom";

import styles from "../components/_layout.module.scss"
import Card from "../pages/Card/Card";
import Cards from "./Cards/Cards";

const Layout = ()=>{
    return(
        <>
        <div className={styles.container}>
<Outlet/>
        </div>
       
        </>
    )
}
export default Layout
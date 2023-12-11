import React from "react"
import styles from "../Home/_home.module.scss"
import Advertisement from "./Advertisement"
/* The following line can be included in a src/App.scss */
import 'bootstrap/scss/bootstrap.scss';
import Cosmetics from "./Cosmetics";
const Home = ()=>{
    return(
        <>
        <Advertisement/>
    <Cosmetics/>
        </>
   
     
       
    )
}
export default Home
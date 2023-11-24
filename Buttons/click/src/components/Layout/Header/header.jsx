import React from "react";
import styles from "../Header/_header.module.scss"

const Header = ({children})=>{
    return(
        <>
        <header>

         <h3 className={styles.name}>{children}</h3>
        </header>
        </>
    )
}
export default Header
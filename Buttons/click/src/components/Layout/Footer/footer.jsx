import React from "react";
import styles from "../Footer/_footer.module.scss"

const Footer = ({children})=>{
return(
    <>
    <footer>
<h2 className={styles.title}>
    {children}
</h2>

    </footer>
    </>
)    
}
export default Footer
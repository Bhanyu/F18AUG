import React from "react"
import styles from "../Home/_home.module.scss"
const Cosmetics = ()=>{
    return(
        <section id={styles.cosmetics}>
            <div className={styles.container}>
                
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div className={styles.description}>
                                <h3>10 quick tips for <br/> cosmetics care</h3>
                           
                           <a  href="#">SEE MORE</a>
                            </div>
                        </div>
                        <div className={styles.card_differ}>
                            <div className={styles.description}>
                                <h3>10 quick tips for <br/> cosmetics care</h3>
                           
                           <a  href="#">SEE MORE</a>

                            </div>
                        </div>
                    </div>
               
            </div>
        </section>
    )
}
export default Cosmetics
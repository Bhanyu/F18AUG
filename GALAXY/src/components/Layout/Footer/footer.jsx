import React from "react"
import styles from "../Footer/_footer.module.scss"

const Footer = ()=>{
    return(
        <>
        <Footer>
            <div className={styles.container} >
                <div className={`row ${styles.foot_columns}`}>
                    <div className={`col-lg-3`}>
                      <div className={styles.column_data}>
                          <div className={styles.column_head}>
                            <h5>Contact Us</h5>
                        </div>
                        <div className={styles.column_content}>
                            <p>Envato</p>
                            <p>Level 13, 2 Elizabeth</p>
                            <p>Victoria 3000</p>
                            <p>Australia</p>
                        </div>
                      </div>
                    </div>
                    <div className={`col-lg-3`}>
                       <div className={styles.column_data}>
                         <div className={styles.column_head}>
                            <h5>Contact Us</h5>
                        </div>
                        <div className={styles.column_content}>
                            <a>Envato</a>
                            <a>Level 13, 2 Elizabeth</a>
                            <a>Victoria 3000</a>
                            <a>Australia</a>
                        </div>
                       </div>
                    </div>
                     <div className={`col-lg-3`}>
                       <div className={styles.column_data}>
                         <div className={styles.column_head}>
                            <h5>Contact Us</h5>
                        </div>
                        <div className={styles.column_content}>
                            <a>Envato</a>
                            <a>Level 13, 2 Elizabeth</a>
                            <a>Victoria 3000</a>
                            <a>Australia</a>
                        </div>
                       </div>
                    </div>
                      <div className={`col-lg-3`}>
                       <div className={styles.column_data}>
                         <div className={styles.column_head}>
                            <h5>Contact Us</h5>
                        </div>
                        <div className={styles.column_content}>
                            <a>Envato</a>
                            <a>Level 13, 2 Elizabeth</a>
                            <a>Victoria 3000</a>
                            <a>Australia</a>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </Footer>
        
        </>
    )
}
export default Footer
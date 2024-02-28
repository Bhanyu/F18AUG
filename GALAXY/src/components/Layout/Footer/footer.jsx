
import styles from "../Footer/_footer.module.scss"
import 'bootstrap/scss/bootstrap.scss';
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
const Footer = ()=>{
    return(
        <>
        <footer>
            <div className={styles.container} >
                <div className={styles.foot_upper}>
                    <div className={styles.foot_upper_logo}>
                        <a href="#">
                            <img src="	https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/10/cosmetics3.svg" alt="" />
                        </a>
                    </div>
                    <div className={styles.foot_upper_sm}>
                        <ul>
                            <li>
                                <p>
                                Find us here:
                            </p>
 </li>
                            <li>
                                <a href="#">
                                <RiInstagramFill />                                     
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <FaFacebook />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`row ${styles.foot_columns}`}>
                    <div className={`col-lg-3 col-6`}>
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
                    <div className={`col-lg-3 col-6`}>
                       <div className={styles.column_data}>
                         <div className={styles.column_head}>
                            <h5>Contact Us</h5>
                        </div>
                        <div className={styles.column_content}>
                            <a href="# ">Envato</a>
                            <a href="#">Level 13, 2 Elizabeth</a>
                            <a href="#">Victoria 3000</a>
                            <a href="#">Australia</a>
                        </div>
                       </div>
                    </div>
                     <div className={`col-lg-3 col-6`}>
                       <div className={styles.column_data}>
                         <div className={styles.column_head}>
                            <h5>Contact Us</h5>
                        </div>
                        <div className={styles.column_content}>
                            <a href="#">Envato</a>
                            <a href="#">Level 13, 2 Elizabeth</a>
                            <a href="#">Victoria 3000</a>
                            <a href="#">Australia</a>
                        </div>
                       </div>
                    </div>
                      <div className={`col-lg-3 col-6`}>
                       <div className={styles.column_data}>
                         <div className={styles.column_head}>
                            <h5>Contact Us</h5>
                        </div>
                        <div className={styles.column_content}>
                            <a href="#">Envato</a>
                            <a href="#">Level 13, 2 Elizabeth</a>
                            <a href="#">Victoria 3000</a>
                            <a href="#">Australia</a>
                        </div>
                       </div>
                    </div>
                </div>
                <div className={styles.foot_wordpress}>
                  <div className={styles.foot_text}>
                  <p>© 2022 Betheme by <a href="#">Muffin group</a> | All Rights Reserved | Powered by <a href="#">WordPress</a></p>
                  </div>
                  <div className={styles.triangular_link}>
                    <a href="#">
                    <MdKeyboardArrowDown />
                    </a>
                  </div>
                </div>
            </div>
        </footer>
        
        </>
    )
}
export default Footer
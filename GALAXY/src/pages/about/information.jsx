import React from "react";
import styles from "../about/_about.module.scss"

const Information = ()=>{
    return(
        <>
        <section id={styles.crem_data}>
<div className={styles.container}>
    <div className={styles.title}>
        <h2>Quantum pertrore <br />estate vaniare mentre questi apperli</h2>
    </div>
    <div className={styles.first_column}>
        <div className={styles.crem_img}>
            <img src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/10/cosmetics3-about-pic1.webp" alt="" />
        </div>
        <div className={styles.crem_data}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
        </div>
    </div>
    <div className={styles.second_column}>
        <div className={styles.process_rule}>
            <p>Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Solet nullam labore id sed. In saepe aperiam sed, id tamquam labores nec, harum dissentiet ea pri. Alia tincidunt ut nam, ad laoreet platonem persequeris per, usu id delectus comprehensam. Et vidit audire sea, quod voluptaria et sed. Eum ei praesent reformidans, sit id suas maiestatis.</p>
        </div>
        <div className={styles.process_img}>
            <img src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/10/cosmetics3-about-pic2.webp" alt="" />
        </div>
    </div>
    <div className={styles.third_column}>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
</div>
        </section>
        </>
    )
    }
    export default Information
import React from "react"
import styles from "../Home/_home.module.scss"

const Register = ()=>{
    return(
        <>
        <section id={styles.subscribe}>
            <div className = {styles.container}>
                <div className={styles.subscribe_video}>
                    <video autoPlay="true" loop="true" muted="muted" src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/10/cosmetics3-video2.mp4"></video>
                </div>
                <div className={styles.subscribe_square}>
<div className={styles.subscribe_form}>
    <h2>Subscribe for special deals & offers</h2>
   <div className={styles.form_part}>
   <form action="">
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Enter your Email here" />
    </form>
   </div>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
</p>
<div className={styles.submit_btn}>
<button type="submit">SUBSCRIBE</button>
</div>
</div>
<div className={styles.subscribe_img}>
  <div className={styles.backround_img}> <img src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/10/cosmetics3-wrap-bg1.webp" alt="" /></div> 
<div className={styles.wave_img}>
    <img src="https://themes.muffingroup.com/be/cosmetics3/wp-co…nt/uploads/2022/10/cosmetics3-newsletter-pic1.svg" alt="" />
</div>
</div>
                </div>
            </div>
           
        </section>
        <div className={styles.background_overlay}></div>
        </>
    )
}



export  default Register
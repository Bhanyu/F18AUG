import styles from "../Contact/_contact.module.scss";


const Location = ()=>{
    return(
        <>
        <section id={styles.location_section}>
            <div className={styles.video_fon}>
                <video autoPlay="true" muted="muted" loop="true" src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/10/cosmetics3-video2.mp4"></video>
            </div>
<div className={styles.container}>
<div className={styles.slogan_part}>
    <h1>
Feel free to contact us if you need some help or simply have a question to ask.
</h1>
</div>

<div className={styles.images_part}>
    <div className={styles.place_card}>
        <div className={styles.image}>
            <img src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/11/cosmetics3-contact-pic1.webp" alt="" />
        </div>
        <div className={styles.loc_info}>
            <div className={styles.content}>
                <h4>Office Sydney</h4>
                <div className={styles.desc}>
                <p>Level 13, 2 Elizabeth
                    <br />
                    Victoria 3000
                    <br />
                    Australia
                </p>
                <span>Check us on map</span>
            </div>
            </div>
           <div className={styles.loc_icon}>
            <img src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/11/cosmetics3-contact-icon1.svg" alt="" />
           </div>
        </div>
    </div>
    <div className={styles.place_card}>
        <div className={styles.image}>
            <img src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/11/cosmetics3-contact-pic1.webp" alt="" />
        </div>
        <div className={styles.loc_info}>
            <div className={styles.content}>
                <h4>Office Sydney</h4>
                <div className={styles.desc}>
                <p>Level 13, 2 Elizabeth
                    <br />
                    Victoria 3000
                    <br />
                    Australia
                </p>
                <span>Check us on map</span>
            </div>
            </div>
           <div className={styles.loc_icon}>
            <img src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/11/cosmetics3-contact-icon1.svg" alt="" />
           </div>
        </div>
    </div>
</div>
</div>
<div className={styles.image_mask_overlay}></div>
 </section>
        </>
    )
}
export default Location
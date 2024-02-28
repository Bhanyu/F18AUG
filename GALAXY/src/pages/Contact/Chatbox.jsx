
import React from "react";
import styles from "../Contact/_contact.module.scss";
const Chatbox = ()=>{
    return(
        <>
        <section id={styles.chatbox}>
            <div className={styles.container}>
                <div className={styles.consultant_messages}>
                    <div className={styles.consultant_ceos}>
                        <div className={styles.meet_title}>
                            <h2>Meet our consultants</h2>
                        </div>
                        <div className={styles.data_box}>
                            <div className={styles.img_part}>
                                <img src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/11/cosmetics3-contact-pic3.webp" alt="" />
                            </div>
                            <div className={styles.ceo_desc}>
                                <h5>Heather Milan</h5>
                                <div className={styles.info}>
                                    <p>CEO, Consultant</p>
                                    <p className={styles.big}>
                                        <a href="tel:+6138376 6284">+61 (0) 3 8376 6284</a>
                                        <br />
                                        <a href="#">noreply@envato.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.data_box}>
                            <div className={styles.img_part}>
                                <img src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/11/cosmetics3-contact-pic4.webp" alt="" />
                            </div>
                            <div className={styles.ceo_desc}>
                                <h5>Heather Milan</h5>
                                <div className={styles.info}>
                                    <p>CEO, Consultant</p>
                                    <p className={styles.big}>
                                        <a href="tel:+6138376 6284">+61 (0) 3 8376 6284</a>
                                        <br />
                                        <a href="#">noreply@envato.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.message_part}>
                        <div className={styles.message_head}>
                            <h2>Send us a message</h2>
                        </div>
                        <div className={styles.letter_part}>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</p>
                        </div>
                        <div className={styles.form_part}>
                            <form>
                             <div className={styles.inputs}>
                             <input className={styles.name} type="text" placeholder="Name*" size={40} required={true} />
                                <input className={styles.company} type="text" placeholder="Name*" size={40} required={true} />
                                <input className={styles.email} type="text" placeholder="Email*" size={70} required={true} />
                                <input className={styles.phone} type="text" placeholder="Phone*" size={10} required={true} />
                             </div>
                                <textarea name="your-message" id="" cols="40" rows="12" placeholder="Message"></textarea>
                                <button type="submit">CONTACT US</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        <div className={styles.background_overlay}></div>
        </>
    )
}
export default Chatbox
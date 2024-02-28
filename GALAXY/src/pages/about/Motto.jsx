import React from "react";

import styles from "../about/_about.module.scss";

const Motto = () => {
  return (
    <>
      <section id={styles.motto_section}>
        <div className={styles.video_fon}>
          <video
            autoPlay={true}
            muted="muted"
            loop="true"
            src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/10/cosmetics3-video1.mp4"
          ></video>
        </div>
        <div className={styles.container}>
          <div className={styles.slogan_part}>
            <h1>Your are beautiful as you are</h1>
          </div>
          <div className={styles.motto_content}>
            <div className={styles.motto_title}>
              <h5>OUR MOTTO</h5>
            </div>
            <div className={styles.motto_text}>
              <p>
                Non proident, <span>sunt in culpa</span> qui officia deserunt
                mollit anim id est.
              </p>
            </div>
          </div>
          <div className={styles.slogan_img}>
            <img
              src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/10/cosmetics-about-pic3.webp"
              alt=""
            />
          </div>
        </div>
        <div className={styles.image_mask_overlay}></div>
      </section>
    </>
  );
};
export default Motto;

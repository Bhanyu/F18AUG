import React from "react";
import styles from "../Home/_home.module.scss";
const Advertisement = () => {
  return (
    <section id={styles.advertisement}>
      <div className={styles.container}>
        <div className={styles.homepage}>
          <div className={styles.videopart}>
            <video
              autoPlay={true}
              loop={true}
              muted="muted"
              src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/10/cosmetics3-video1.mp4"
            ></video>
          </div>

          <div className={styles.parfumeimg}>
            <img
              src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/11/cosmetics3-section-bg1.webp"
              alt=""
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Natural <br /> Ingradients
            </h1>
            <div className={styles.info}>
              <p className={styles.subtitle}>PALEO TRAE</p>
              <span>
                Non proident, sunt in culpa qui officia deserunt mollit anim id
                est
              </span>
            </div>
            <div className={styles.price}>
              <h4>§23</h4>
              <a href="#">BUY NOW</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Advertisement;


import React from "react";
import styles from "../about/_about.module.scss"

const Founder = () => {
  return (
    <>
      <section id={styles.quality_section}>
        <div className={styles.container}>
       <div className={styles.cosmetic_information}>
       <div className={styles.quality_desc}>
            <div className={styles.content_title}>
              <h4>I was amazed at the quality of the Cosmetics</h4>
            </div>
            <div className={styles.content_desc}>
              <p>
                Habitasse consequat congue scelerisque lectus auctor ut laoreet
                erat quisque leo adipiscing aenean porta ullamcorper ut
                curabitur aliquam velit consectetur diam himenaeos phasellus
                eros curabitur sapien class fermentum nostra etiam proin
                faucibus ultrices erat hendrerit ut nullam at etiam luctus
                facilisis nibh phasellus ut fringilla condimentum mollis semper
                maecenas id magna ut ipsum dui tempus quam metus platea euismod
                pellentesque ipsum velit in viverra condimentum platea sit orci
                condimentum lobortis leo lobortis imperdiet vehicula sem.
              </p>
            </div>
            <div className={styles.signature_part}>
        <img src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/11/cosmetics3-about-sign.svg" alt="" />
            </div>
          </div>
          <div className={styles.image_part}>
            <img src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/10/cosmetics3-about-pic4.webp" alt="" />
          </div>
       </div>
       <div className={styles.browse_products}>
        <div className={styles.logo_img}>
            <img src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/10/cosmetics3-about-icon.svg" alt="" />
        </div>
        <div className={styles.logo_data}>
            <h2>Lorem ipsum dolor mit samet et omnia vaniare quento pestrmimone Browse our products</h2>
        </div>
        <div className={styles.link_part}>
            <a href="#">BROWSE PRODUCTS</a>
        </div>
       </div>
        </div>
      </section>
      <div className={styles.background_overlay}></div>
    </>
  );
};
export default Founder

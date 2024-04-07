import styles from "../Home/_home.module.scss" 
const Categories = () => {
  return (
    <>
      <section id={styles.categories}>
        <div className={styles.container}>
          <div className={styles.popular_catgs}>
            <div className={styles.catgs_title}>
              <h2>Browse popular categories</h2>
            </div>
            <div className={`row ${styles.catgs_symbol}`}>
              <div className={`  col-sm-6 col-lg-2`    }>
                <div className={styles.catgs_icon}>
                  <div className={styles.main_icon}>
                    <img
                      src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/11/cosmetics3-home-icon1.svg"
                      alt=""
                    />
                  </div>
                  <div className={styles.icon_desc}>
                    <h6>Beauty</h6>
                  </div>
                </div>
              </div>
              <div className={`  col-sm-6 col-lg-2`}>
                <div className={styles.catgs_icon}>
                  <div className={styles.main_icon}>
                    <img
                      src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/11/cosmetics3-home-icon1.svg"
                      alt=""
                    />
                  </div>
                  <div className={styles.icon_desc}>
                    <h6>Beauty</h6>
                  </div>
                </div>
              </div>
              <div className={`  col-sm-6 col-lg-2`}>
                <div className={styles.catgs_icon}>
                  <div className={styles.main_icon}>
                    <img
                      src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/11/cosmetics3-home-icon1.svg"
                      alt=""
                    />
                  </div>
                  <div className={styles.icon_desc}>
                    <h6>Beauty</h6>
                  </div>
                </div>
              </div>
              <div className={`  col-sm-6 col-lg-2`}>
                <div className={styles.catgs_icon}>
                  <div className={styles.main_icon}>
                    <img
                      src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/11/cosmetics3-home-icon1.svg"
                      alt=""
                    />
                  </div>
                  <div className={styles.icon_desc}>
                    <h6>Beauty</h6>
                  </div>
                </div>
              </div>
              <div className={` col-sm-6 col-lg-2`}>
                <div className={styles.catgs_icon}>
                  <div className={styles.main_icon}>
                    <img
                      src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/11/cosmetics3-home-icon1.svg"
                      alt=""
                    />
                  </div>
                  <div className={styles.icon_desc}>
                    <h6>Beauty</h6>
                  </div>
                </div>
              </div>
              <div className={`  col-sm-6 col-lg-2`}>
                <div className={styles.catgs_icon}>
                  <div className={styles.main_icon}>
                    <img
                      src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/11/cosmetics3-home-icon1.svg"
                      alt=""
                    />
                  </div>
                  <div className={styles.icon_desc}>
                    <h6>Beauty</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.see_more}>
              <a href="#">SEE MORE</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Categories;

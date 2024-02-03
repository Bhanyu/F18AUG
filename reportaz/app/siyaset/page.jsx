
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import { getNews } from "../libs/news";
import styles from "../siyaset/_siyaset.module.scss";


const Politika = async () => {
  const news = await getNews();






  return (
    <section id={styles.politic_news}>
      <div className={styles.container}>
        <div className={`row ${styles.politic_place}`}>
          <div className={`col-lg-12`}>
            <div className={styles.page_title}>
              <h1>Siyaset</h1>
            </div>
            <div className={styles.filter_news}>
          
              <ul>
                <li>
                  <a href="#">MILLI MECLIS</a>
                </li>
                <li>
                  <a href="#">DAXILI SIYASET</a>
                </li>
                <li>
                  <a href="#">QARABAG</a>
                </li>
                <li>
                  <a href="#">XARICI SIYASET</a>
                </li>
                <li>
                  <a href="#">HERBI</a>
                </li>
                <li>
                  <a href="#">DIASPOR</a>
                </li>
              </ul>
            </div>
            <div className={styles.news_list}>
              <div className={`row ${styles.load_container}`}>
                {news &&
                  news.map((item) => {
                    return (
                      <div  className={`col-lg-3`}>
                        <div className={styles.politic_card}>
                          <div className={styles.politic_img}>
                            <Link href={`/siyaset/${item.id}`}>
                              <img src={item.imgP} alt="" />
                            </Link>
                          </div>
                          <div className={styles.politic_desc}>
                            <Link href={`/siyaset/${item.id}`}>
                              <span>{item.descP}</span>
                            </Link>
                          </div>
                          <div className={styles.pnews_date}>
                            <span>{item.dateP}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Politika;

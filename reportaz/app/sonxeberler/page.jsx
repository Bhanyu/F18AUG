"use client"
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import { getLastNews } from "../libs/news";
import { useEffect, useState } from "react";
import styles from "./_sonxeberler.module.scss";

const LastNews = async () => {
  const lastnews = await getLastNews();
const [filter , setFilter] = useState( lastnews.slice(0,6))
const [scrollY, setScrollY] = useState(0)
useEffect(()=>{
  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  window.addEventListener('scroll', handleScroll);


  return () =>{
    window.removeEventListener('scroll', handleScroll)
  }
},[])

useEffect(()=>{
  const loadMoreCards = () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 200){
      setFilter(prevfilter=>[...prevfilter,{id : prevfilter.length + 1, content: `Card ${prevfilter.length + 1}` }
    ])  
    }
  };

  window.addEventListener('scroll', loadMoreCards);

  return ()=>{
    window.removeEventListener('scroll',loadMoreCards)
  }
}, [filter])

  return (
    <section id={styles.last_news}>
      <div className={styles.container}>
        <div className={`row ${styles.lastnews_place}`}>
          <div className={`col-lg-12`}>
            <div className={styles.page_title}>
              <h1>Son Xeberler</h1>
            </div>
            <div className={styles.datefilter_news}>
              <ul>
                <li>
                  <a href="#">BU GUN </a>
                </li>
                <li>
                  <a href="#">DUNEN</a>
                </li>
                <li>
                  <a href="#">BU HEFTE</a>
                </li>
                <li>
                  <a href="#">BU AY</a>
                </li>
                <li>
                  <a href="#">KECEN HEFTE</a>
                </li>
                <li>
                  <a href="#">KECEN AY</a>
                </li>
              </ul>
            </div>
            <div className={styles.lastnews_list}>
              <div className={`row ${styles.list_container}`}>
                {filter &&
                  filter.map((item) => {
                    return (
                      <div className={`col-lg-12`}>
                        <div className={styles.lastnews_card}>
                          <div className={styles.lastnews_img}>
                            <Link href={`/siyaset/${item.id}`}>
                              <img src={item.imgL} alt="" />
                            </Link>
                          </div>
                          <div className={styles.lastnews_desc}>
                            <Link href={`/siyaset/${item.id}`}>
                              <span>{item.descL}</span>
                            </Link>
                            <div className={styles.pnews_date}>
                              <span>{item.dateL}</span>
                            </div>
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
export default LastNews;

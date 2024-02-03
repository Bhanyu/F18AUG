import styles from "../Home/_home.module.scss" 
import { MdOutlineStar } from "react-icons/md"
import { FaRegStar } from "react-icons/fa";
import { useEffect, useState } from "react";
const Cards = ()=>{
const [parfums , setParfums] = useState(null)
const PARFUM_API = "http://localhost:9000/parfumery" 
async function getParfums() {
    const response = await fetch (PARFUM_API)
    const data = await response.json();
    setParfums(data)
} 

useEffect(() => {getParfums()},[])

    return(
        <>
        <section id={styles.parfumes}>
            <div className={styles.container}>
                <div className={styles.products_box}>
                    <div className={styles.common_title}>
                        <h2>You deserve beautiful skin. Browse and buy our newest products</h2>
                    </div>
                    <div className={`row ${styles.products_cards}`}>
                   {parfums && parfums.map((parfum,id)=>{
                    return(
                     <>
                          <div key={id} className=  {`col-lg-3`  }>
                        <div className={styles.product_card}>
                            <div className={styles.product_img}>
<a href="#"> <img src={parfum.parfum_img} alt="" /></a>
                               
                            </div>
                            <div className={styles.product_desc}>
                                <h6>{parfum.parfum_title}</h6>
                                <div className={styles.star_icons}>
                                <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><FaRegStar /><FaRegStar />
                                </div>
                                <div className={styles.mfn_vr}>
                                    <ul>
                                        <li><a href="#">{parfum.amount}</a></li>
                                        <li><a href="#">{parfum.amount}</a></li>
                                        <li><a href="#">{parfum.amount}</a></li>
                                    </ul>
                                </div>
                                <div className={styles.price}>
                                    <span>{parfum.price}</span>
                                </div>
                            </div>
                        </div>
                    </div></>
                   
                    )
                   })}
                    </div>
                </div>
                <div className={styles.browse_all}>
                    <a href="#">BROWSE ALL</a>
                </div>
            </div>
        </section>
        </>
    )
}
export default Cards;
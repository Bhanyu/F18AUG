
import styles from "../products/_products.module.scss"
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineStar } from "react-icons/md"
import { FaRegStar } from "react-icons/fa";
const Products = ()=>{
    const [cards , setCards] = useState([])
  
    const CARD_API ="http://localhost:8000/parfumery"
    async function getCards(){
        const res = await fetch(CARD_API);
        const data = await res.json();
        setCards(data);
       
    }
    useEffect(()=>{getCards()}, []);





return(
    <>
    <section id={styles.shop_content}>
    <div className={styles.products_header}>
    <div className={styles.head_title}>
            <h1>Shop</h1>
        </div>
<div className={styles.sub_title}>
    <p><a href="#">Home</a><FaAngleRight /><span>Shop</span> </p>
</div>
    </div>
    <div className={styles.container}>
        <div  className={`row ${styles.products_cards}`}>
{cards &&  cards.map((card)=>{
    const{id, parfum_img, parfum_title, amount, price} = card
return(
    <>
    <div key={id} className={`col-lg-4 col-md-6`}>
    <div  className={styles.product_card}>
    <div   className={styles.product_img}>
<Link to = {`${id}`}> <img src={parfum_img} alt="" /></Link>
     </div>
    <div   className={styles.product_desc}>
         <h6  >{parfum_title}</h6>
     <div   className={styles.star_icons}>
     <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><FaRegStar /><FaRegStar />
     </div>
    <div  className={styles.mfn_vr}>
     <ul>
                                        <li  ><a  href="#">{amount}</a></li>
                                        <li  ><a  href="#">{amount}</a></li>
                                        <li  ><a  href="#">{amount}</a></li>
                                    </ul>
                                </div>
                                <div   className={styles.price}>
                                    <span >{price}</span>
                                </div>
                            </div>
                        </div>
    </div>
    </>
)
})}
            
        </div>
    </div>
    </section>
    <div className={styles.background_overlay}></div>
    </>
)
}
export default Products





    





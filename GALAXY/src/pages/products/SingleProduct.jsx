import styles from "../products/_products.module.scss"
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";

import { MdOutlineStar } from "react-icons/md"
import { FaRegStar } from "react-icons/fa";
const SingleProduct = ()=>{
   
  const {productId} = useParams()

  const [card , setCard] = useState(null)
//   const CARD_API =`http://localhost:8000/parfumery/${productId}`
//   async function getCard(){
//       const res = await fetch(CARD_API);
//       const data = await res.json();
//       setCard(data);
//   }
  useEffect(()=>{
    fetch(`http://localhost:8000/parfumery/${productId}`)
    .then(response => response.json())
    .then(data => setCard(data)) }, []);

    // const{id, parfum_img, parfum_title, amount, price} = card
    return(
        <>
        <div className={styles.single_container}></div>
   {card && (
   
      <div key={card.id} className={styles.product_card}>
      <div   className={styles.product_img}>
<a href="#"> <img src={card.parfum_img} alt="" /></a>
         
      </div>
      <div   className={styles.product_desc}>
          <h6  >{card.id + card.parfum_title}</h6>
          <div   className={styles.star_icons}>
          <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><FaRegStar /><FaRegStar />
          </div>
          <div  className={styles.mfn_vr}>
              <ul>
                  <li  ><a  href="#">{card.amount}</a></li>
                  <li  ><a  href="#">{card.amount}</a></li>
                  <li  ><a  href="#">{card.amount}</a></li>
              </ul>
          </div>
          <div   className={styles.price}>
              <span >{card.price}</span>
          </div>
      </div>
  </div>
   )}
        </>
    )
}
export default SingleProduct
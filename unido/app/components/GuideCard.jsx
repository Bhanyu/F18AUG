


"use client";

import React from 'react';

import styles from '../styles/aboutus.module.scss'
import Link from 'next/link';
const GuideCard=({guide})=>{
    return(
     
         <div className={styles.guideInnerCard}>
    
         <Link className={styles.guideLink} href={`/learn/${guide.id}`}>

         <h2 className={styles.guideTitle}>{guide.title}</h2>
           <button className={styles.moveBtn}>{guide.move} </button>
         </Link>
       </div>
    )
}
export default GuideCard
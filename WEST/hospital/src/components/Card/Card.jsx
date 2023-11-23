
import React from "react"
import styles from "../Card/_card.module.scss"

const Card = ({item})=>{
    const {img, name, status, data, link} = item
    return(
        <>
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={img} alt=""/>
            </div>
            <div className={styles.content}>
                <h2>{name}</h2>
                <p>{status}</p>
                <span>{data}</span>
                <a href={link}>{link}</a>
            </div>
        </div>
        </>
    )
}
export default Card
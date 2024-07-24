import styles from "../styles/aboutus.module.scss"
import React from 'react';
export default function Work(){
    return(
        <section id={styles.workAtUnido}>
            <div className={styles.workContainer}>
                <h2 className={styles.workTitle}>Work at Unido</h2>
            </div>
        </section>
    )
}
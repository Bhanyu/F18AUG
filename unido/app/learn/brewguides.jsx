import styles from "../styles/aboutus.module.scss"
import React from 'react';
import GuideCard from "../components/GuideCard";
export default function BrewGuides({guides}){
    return(
        <section id={styles.brewguidesPart}>
              
      <div className={styles.container}>
        <div className={styles.pageGuidesTitle}>
          <h1>Brew Guides</h1>
        </div>
        <div className={styles.BrewGuidesContent}>
        {guides.map((guide)=>{
            return(
             <GuideCard key={guide.id} guide={guide}/>
            )
        })}
         
        </div>
       
      </div>
  
        </section>
     
    )
}

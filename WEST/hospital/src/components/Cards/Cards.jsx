
import React from "react"
import styles from "../Cards/_cards.module.scss"
import Card from "../Card/Card"
const Cards = ()=>{
 
        const innerData=[
            {img:"https://admin.westhospital.az/uploads/images/doctors/artboa-1669296044.webp",name:"Sənəm Abdullayeva", status:"Baş Həkim", data:"  Abdullayeva Sənəm Sarif qızı 14 dekabr 1975-ci ildə Ağstafa rayonunda anadan olmuşdur. Orta məktəbi bitirdikdən sonra 1991-ci ildə Azərbaycan Tibb Universitetinə daxil olmuş və 1997-ci ildə fərqlən", link:"Etrafli"},
            {img:"https://admin.westhospital.az/uploads/images/doctors/artboa-1669296044.webp",name:"Sənəm Abdullayeva", status:"Baş Həkim", data:"  Abdullayeva Sənəm Sarif qızı 14 dekabr 1975-ci ildə Ağstafa rayonunda anadan olmuşdur. Orta məktəbi bitirdikdən sonra 1991-ci ildə Azərbaycan Tibb Universitetinə daxil olmuş və 1997-ci ildə fərqlən",link:"Etrafli"},
            {img:"https://admin.westhospital.az/uploads/images/doctors/artboa-1669296044.webp",name:"Sənəm Abdullayeva", status:"Baş Həkim", data:"  Abdullayeva Sənəm Sarif qızı 14 dekabr 1975-ci ildə Ağstafa rayonunda anadan olmuşdur. Orta məktəbi bitirdikdən sonra 1991-ci ildə Azərbaycan Tibb Universitetinə daxil olmuş və 1997-ci ildə fərqlən",link:"Etrafli"},
            {img:"https://admin.westhospital.az/uploads/images/doctors/artboa-1669296044.webp",name:"Sənəm Abdullayeva", status:"Baş Həkim", data:"  Abdullayeva Sənəm Sarif qızı 14 dekabr 1975-ci ildə Ağstafa rayonunda anadan olmuşdur. Orta məktəbi bitirdikdən sonra 1991-ci ildə Azərbaycan Tibb Universitetinə daxil olmuş və 1997-ci ildə fərqlən",link:"Etrafli"},
            {img:"https://admin.westhospital.az/uploads/images/doctors/artboa-1669296044.webp",name:"Sənəm Abdullayeva", status:"Baş Həkim", data:"  Abdullayeva Sənəm Sarif qızı 14 dekabr 1975-ci ildə Ağstafa rayonunda anadan olmuşdur. Orta məktəbi bitirdikdən sonra 1991-ci ildə Azərbaycan Tibb Universitetinə daxil olmuş və 1997-ci ildə fərqlən",link:"Etrafli"},
            {img:"https://admin.westhospital.az/uploads/images/doctors/artboa-1669296044.webp",name:"Sənəm Abdullayeva", status:"Baş Həkim", data:"  Abdullayeva Sənəm Sarif qızı 14 dekabr 1975-ci ildə Ağstafa rayonunda anadan olmuşdur. Orta məktəbi bitirdikdən sonra 1991-ci ildə Azərbaycan Tibb Universitetinə daxil olmuş və 1997-ci ildə fərqlən",link:"Etrafli"}
       
       ]
       return(
        <>
        <section id="hospital-members">
            <div className="container">
                <div className={styles.title}>
                    <h2>Butun Hekimleer</h2>
                </div>
                <div className={styles.cards}>
                {innerData && innerData.map((item,index)=>{
    <Card
    key={index}
    item = {item}
    />
                }
                 )
                   }
                </div>
               
            </div>
        </section>
        </>
       )
    
}
export default Cards
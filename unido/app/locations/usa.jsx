import styles from "../styles/locations.module.scss"
import cardImg1 from "../../public/swiperimg2.png"
import cardImg2 from "../../public/swiperimg6.png"
import Image from "next/image"
const UsaLocation = ()=>{
    return(
    
            
<div className={styles.location_cards}>
    <div className={styles.location_card}>
     <Image
     src={cardImg1}
     width={300}
     height={300}
     
     />
        <h3>Location 1</h3>
        <p>Location 1</p>
    </div>
    <div className={styles.location_card}>
    <Image
     src={cardImg2}
     width={300}
     height={300}
     
     />
        <h3>Location 1</h3>
        <p>Location 1</p>
    </div>
</div>
           
     
    )
}
export default UsaLocation
import styles from "../styles/locations.module.scss"
import cardImg1 from "../../public/swiperimg2.png"

import Image from "next/image"

const PanamaLocations = ()=>{
    return(
        <div className={styles.panamaCards}>
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
     src={cardImg1}
     width={300}
     height={300}
     
     />
        <h3>Location 1</h3>
        <p>Location 1</p>
    </div>
        </div>
    )
}
export default PanamaLocations
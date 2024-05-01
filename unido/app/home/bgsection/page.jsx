
import unidobg from "../../../public/unidobg.png"
import styles from "../../home/bgsection/page.module.scss"
import Image from "next/image"
const BackgroundPart = ()=>{
    return(
        <section id={styles.bgsection}>
            <div className={styles.container}>
            <div className={styles.imgbanner}>
                <Image className={styles.imgfon}
                src={unidobg}
                width={1800}
                height={1200}
                />
            </div>
            <div className={styles.overlay}></div>
            </div>
        </section>
    )
}
export default BackgroundPart
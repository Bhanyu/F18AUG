
import unidobg from "../../../public/unidobg.png"
import styles from "../../home/bgsection/page.module.scss"
import Image from "next/image"
import Link from "next/link"
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
          <div className={styles.overcontent}>
            <h1>POP UP VOL. 2</h1>
            <Link href="#" className={styles.rsvp}>RSVP</Link>
          </div>
            </div>
        </section>
    )
}
export default BackgroundPart
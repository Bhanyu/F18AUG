
import styles from "../styles/locations.module.scss"
import PanamaLocations from "./panama"


import UsaLocation from "./usa"


export default function Locations(){
    return(
        <section id={styles.locations}>
            <h1>Locations</h1>
            <div className={styles.locations__container}>
                <UsaLocation/>
                <PanamaLocations/>
            </div>
        </section>
    )
}
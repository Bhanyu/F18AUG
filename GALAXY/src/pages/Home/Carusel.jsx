import styles from "../Home/_home.module.scss" 

const Carusel= ()=>{
    return(
        <>
        <section id={styles.carusel}>
            <div className={styles.container}>
                <div className={styles.carusel_img}>
                    <img src="https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/11/be-cosmetics3-animated.svg" alt="" />
                </div>
            </div>
        </section>
        </>
    )
}
export default Carusel;
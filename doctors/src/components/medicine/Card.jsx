
import styles from "./_card.module.scss"

const Card = ({item})=>{
    const{ img,name,status,info,link}= item
    return(
        <>
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={img} alt="" />
            </div>
            <div className={styles.content}>
                <h2>{name}</h2>
                <p>{status}</p>
                <p>{info}</p>
                <a href="#">{link}</a>
            </div>
        </div>
        </>
    )
}
export default Card
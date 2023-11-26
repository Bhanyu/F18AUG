import { useState, useEffect } from "react"
import React from "react"
import { useParams } from "react-router-dom"
import styles from "./_card.module.scss"

const Card = ()=>{

    const {cardId} = useParams()

    const [post, setPost] = useState(null)   

    const URL_API = `http://localhost:3000/innerData/${cardId}`

    async function getPost(){
   const response = await fetch(URL_API)
   const data = await response.json()
   setPost(data)
}

useEffect(()=>{

   getPost()
},[])




    return(
       
        <>
        {
        post && (
            <div  className={styles.card}>
                <div className={styles.image}>
             <img src={post.img} alt="" />
                </div>
                <div className={styles.content}>
                    <h2>{post.id + post.name}</h2>
                    <p>{post.status}</p>
                    <span>{post.data}</span>
                    
                </div>
                

            </div>
        )
        }
        </>
    )
}
export default Card
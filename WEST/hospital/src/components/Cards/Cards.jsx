import React, { useEffect, useState } from "react"
import styles from "../Cards/_cards.module.scss"

import { Link } from "react-router-dom"
const Cards = ()=>{
   
   const [posts, setPosts] = useState(null)   
     const URL_API = "http://localhost:3000/innerData"
async function getPosts(){
    const response = await fetch(URL_API)
    const data = await response.json()
    setPosts(data)
}
useEffect(()=>{
    getPosts()
}, [])

       return(
        <>
       
    
         <div className={styles.cards}>
        {
            posts && posts.map((post)=>{
                const {id,img, name, status, data, link} = post
                return(
                    <div key={id} className={styles.inner}>

                    <div className={styles.picture}>
                        <img src={img} alt="" />
                    </div>
                    <div className={styles.description}>
                        <h2 >{name}</h2>
                        <p >{status}</p>
                        <span >{data}</span>
                        <Link to={`${id}`}>
                            {link}
                        </Link>
                    </div>
                    </div>
                    
                  
                )
            })
        }
            </div>
       
    
        </>
       )
    
            }
export default Cards
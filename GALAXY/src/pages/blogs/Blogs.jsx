
import styles from "../blogs/_blogs.module.scss"
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { GoClock } from "react-icons/go";
const Blogs = ()=>{
    const [ blogs, setBlog ] = useState(null);
    async function getBlogs(){
        const res = await fetch(" http://localhost:8000/blogs")
        const data = await res.json();
        setBlog(data)
    }
    useEffect(()=>{getBlogs()}, []);
    return(
  <>
  <section id={styles.blogs_section}>
  <div className={styles.blogs_header}>
    <div className={styles.blogs_title}>
            <h1>Blog</h1>
        </div>
<div className={styles.sub_title}>
    <p><a href="#">Home</a><FaAngleRight /><span>Blog</span> </p>
</div>
    </div>
    <div className={styles.container}>
    <div  className={`row ${styles.blogs_cards}`}>
{blogs && blogs.map((blog)=>{
    const{id, blog_img, blog_user,blog_date, blog_name} = blog
return(
    <>
    <div key={id} className={`col-12 col-lg-6`}>
    <div  className={styles.blog_card}>
                            <div   className={styles.blog_img}>
<Link to = {`${id}`}> <img src={blog_img} alt="" /></Link>
                                </div>
                            <div   className={styles.blog_desc}>
                                <div  className={styles.blog_info}>
                                    <ul>
                                        <li  ><IoIosContact /><a  href="#">{blog_user}</a></li>
                                        <GoClock /> <li  >{blog_date}</li>
                                       
                                    </ul>
                                </div>
                                <div   className={styles.blog_name}>
                                    <a href="#" >{blog_name}</a>
                                </div>
                            </div>
                        </div>
    </div>
    </>
)
})}
            
        </div>
    </div>
  </section>
  <div className={styles.background_overlay}></div>
  </>
    )
}
export default Blogs
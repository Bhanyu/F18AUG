'use client'
import React from "react";
import { getItems } from "../libs/item";
import "../Blogs/blogs.css"
 const Blogs= async ({searchParams})=>{
  if (searchParams.test ==="false") {
    Page404()
  }  
  const items = await getItems()
  console.log(items);
    return(
        <>

        <h1>BLOGLAR SEHIFESI BURADIR</h1>
        <div className="cards">
        {items ? items.map((item)=>{
          console.log(item)
        return(
            
          
         <>
         
         <div key={item.id} className="card">
           
           <div className="back-img">
               <img src={item.background} alt="" />
           </div>

          <div className="content">
           <p>{item.title}</p>
           <p>{item.price}</p>
           <span>{item.id}</span>
          </div>

        </div>
        </>
            
       
            
        )
      }) : 'yoxdu'}
        </div>
    
        </>
    )
}

export default Blogs
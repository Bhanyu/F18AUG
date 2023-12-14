
import React from "react";
import { getItems } from "../libs/item";
import "../Blogs/blogs.css"
 const Blogs= async ({searchParams})=>{
  if (searchParams.test ==="false") {
    Page404()
  }  
  const items = await getItems()
    return(
        <>

        <h1>BLOGLAR SEHIFESI BURADIR</h1>
        <div className="cards">
        {items && items.map((item)=>{
        return(
            
           
          
            <div className="card">
           
            <div className="back-img">
                <img src={item.background} alt="" />
            </div>

           <div className="content">
            <p>{item.title}</p>
            <p>{item.price}</p>
            <span>{item.id}</span>
           </div>

         </div>
            
       
            
        )
      })}
        </div>
    
        </>
    )
}

export default Blogs

import { singleItem } from "@/app/libs/item";
import { useParams } from "next/navigation";
import React from "react";
import "../[iblog]/iblog.css"
 const singleBlog = async ({params})=>{

    const card = await singleItem(params.iblog)
    return(
        <>
        <div className="container">
        <div className="individual-card">
        <div className="back-img">
                <img src={card.background} alt="" />
            </div>
           <div className="description">
            <p>{card.title}</p>
            <p>{card.price}</p>
            <span>{params.iblog}</span>
           </div>
        </div>
        </div>
      
     
        </>
    )
}
export default singleBlog 
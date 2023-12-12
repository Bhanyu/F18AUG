
import { singleItem } from "@/app/libs/item";
import React from "react";

 const singleBlog = async ({params})=>{
    const item = await singleItem(params.iblog)
    return(
        <>
        <div className="individual-card">
        <div className="back-img">
                <img src={item.background} alt="" />
            </div>
           <div className="content">
            <p>{item.title}</p>
            <p>{item.price}</p>
            <span>{params.iblog}</span>
           </div>
        </div>
     
        </>
    )
}
export default singleBlog 
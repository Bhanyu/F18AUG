
import { singleItem } from "@/app/libs/item";
import { useSearchParams } from "next/navigation";
// 
import React from "react";
import "../[iblog]/iblog.css"
import NotFound from "./notfound";


async function delays(ms){

    return new Promise((res)=>{
        setTimeout(() => res(), ms)

    })
}

 async function singleBlog({ params,searchParams}) {
if (searchParams.test === "false") {
 NotFound()   
}

await delays(3000)

    const card = await singleItem(params.iblog);
    return (
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
    );

}
export default singleBlog
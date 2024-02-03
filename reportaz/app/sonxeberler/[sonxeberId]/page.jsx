import { getSingleLastNews } from "@/app/libs/news";

const singleLastNews = async ({params}) =>{
    const news = await getSingleLastNews(params.sonxeberId)


    return(
        <>
        <h1>{params.sonxeberId}</h1>
        <h2>{news.descL}</h2>
        <h3>{news.dateL}</h3>
        </>
    )
}
export default singleLastNews
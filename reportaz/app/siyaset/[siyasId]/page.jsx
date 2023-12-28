import {  singleNews } from "@/app/libs/news";


const OnePage = async ({params}) => {
  const post = await singleNews(params.siyasId)


 
  return (
    <>
    <h1>{params.siyasId}</h1>
   <h2>{post.descP}</h2>
   <p>{post.dateP}</p>
     
    </>
  );
};
export default OnePage;

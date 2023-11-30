import { createPost } from "@/app/libs/post";

const SinglePage = async({params})=>{
   
    const post = await createPost(params.blogId)
   
    return(
        <>
        <h2>{params.blogId}</h2>
        <h3>{post.body}</h3>
       
 
        </>
    )
}
export default SinglePage
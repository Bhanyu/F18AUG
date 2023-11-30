import { getPosts } from "../libs/post"

const Blog = async()=>{

    const posts = await getPosts()
 
    return(
        <>
        <h1>Bloglarrrr</h1>
     {posts && posts.slice(0,11).map(item =>{
        return(
            <p>{item.title}</p>
        )
     })}
        </>
    )
}
export default Blog
export async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return(data)
}
export async function createPost({comingId}){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${comingId}`)
    const data = await res.json()
    return( data);
}
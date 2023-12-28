

export async function getNews(){
    const res = await fetch("http://localhost:3000/politic")
    const data = await res.json()
    return( data)
}
export async function singleNews(politicId){
    const res = await fetch(`http://localhost:3000/politic/${politicId}`)
    const data = await res.json()
    return(data)
  }


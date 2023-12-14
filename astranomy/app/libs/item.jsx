
export async function getItems(){
    const res = await fetch("http://localhost:3000/aksesuar")
    const data = await res.json()
return(data)
}
export async function singleItem(exId){
    const res = await fetch(`http://localhost:3000/aksesuar/${exId}`)
    const data = await res.json()
    return (data);
}
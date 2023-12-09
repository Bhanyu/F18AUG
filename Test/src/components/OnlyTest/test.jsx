


export default function Profile(){
    return(
        <Avatar
        size = {300}
        person = {{name:BaseAudioContext,
        imgId:"https://images.unsplash.com/photo-1701657128111-e506c4ad64c1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8a"
    }}
        
        />
    )
}

function Avatar({person, size}){
    return(
        <img src={person.imgId}
        className="avatar"
        width={size}
        height={size}
        alt={person.name} />
    )
}
import React, { useContext, useRef, useState } from "react";
import { ThemeSeries } from "../../App";
import Header from "../Header/header";

import "./learn.css"

const Learn = ()=>{
const  [basliq, setBasliq] = useState('KATRINA KAIF')
const eded = 1983

const changeBasliq = ()=>{
    if(basliq === 'KATRINA KAIF'){
        setBasliq("RANI MUKARJEE")
    }
    else{
        setBasliq("KATRINA KAIF")
    }
}



    return(
        <>
        <Container header={basliq} number={eded}/>
        <button onClick={()=>{changeBasliq()}}>CHANGEE</button>
        </>
    )
}

 function Container({header,number}){
    const [color,setColor]=useState("red")

const Referance = useRef(null)

const Changing = ()=>{
  
    document.body.style.backgroundColor = Referance.current.value 

setColor(Referance.current.value)

}
    return(
        
        <div className="container" style={useContext(ThemeSeries)}>
            <Header >
            <div className="header">
     <div className="logo">
        <a className="logo-img" href="#"><img src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>
        </div>
           <div className="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
           </div>
           <div className="right-side">
            <button className="sign" type="submit">Sign in</button>
           </div>
        </div>
                </Header>
                <div className="main-part">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui incidunt iste tempore, animi iure molestiae, hic est corporis non pariatur aut enim dolorem aliquam esse vitae doloremque accusamus ex quas.
<h2>{header}</h2>
<p>{number}</p>

                </div>
<div className="color-changing">
    <input type="text" ref={Referance} onChange={Changing}></input>
    <p>{color}</p>
</div>

        </div>
    )
}
export default Learn;
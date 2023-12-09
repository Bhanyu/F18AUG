import { useEffect, useState } from "react"


const Timer = ()=>{
   
    const [time, setTime] = useState(10)


useEffect(()=>{
if (time > 0) {
    const timeInterval  = setInterval(()=>{
        setTime(time - 1)
    },1000);
    return ()=>{clearInterval(timeInterval)
}
  

}
},[time])


    return(
<div className="timer" style = {{borderRadius:"30px", backgroundColor:"blueviolet", fontSize:"30px",}}>{time}</div>
    )
}
export default Timer
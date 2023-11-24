import React from "react";

const Button = ({children, getResult})=>{
  
    return(
        <button onClick={ getResult}>{children}</button>
    )
}
export default Button
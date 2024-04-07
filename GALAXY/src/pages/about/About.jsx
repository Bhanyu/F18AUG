
import React from "react";

import Motto from "./Motto"
import DailyCare from "./Care";
import Information from "./information";
import Counter from "./Counter";
import Founder from "./Founder";

const About = ()=>{
    return(
        <>
        <main>
               <Motto/>
       <DailyCare/>
       <Information/>
       <Counter/>
    <Founder/>
        </main>
     
        </>
    )
}
export default About
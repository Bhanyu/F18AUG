import React, { Children } from "react";
import Button from "../ui/button";

import Footer from "./Footer/footer";
import Header from "./Header/header";

const Common= ({children})=>{
  
    const conclusion = ()=>{
        alert("SALAM")
          }
return(
    <>
    <Header>
        HERE IS HEADER SECTION
    </Header>
    <main>
        {children}
<Button getResult={conclusion}>
    CLICK HERE AND SHOW ALERT
</Button>

    </main>

<Footer>
    HERE IS END SECTION OF WEBSITE
</Footer>
    </>
)

}
export default Common
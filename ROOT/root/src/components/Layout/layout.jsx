import React from "react";

const Common = ({children})=>{
    return(
        <>
  
  <Header>
        BU HIISE BASLIQDIR
        </Header>
        <main>
{children}

        </main>

        <footer>
            BU HISSE SONDUR
        </footer>
        </>
    )
}
export default Common
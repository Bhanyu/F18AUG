
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import './globals.css'

export default function RootLayout({children}){
  return(
    <html>
    <body>
   <Header>
    {<h2>BURA BASLIQDIR!!!</h2>}
   </Header>
   <main>
   {children}
   </main>
     
       <Footer>
        {<h2>BURA SONDURR!!!</h2>}
      </Footer>
      </body>
    </html>
  )
}

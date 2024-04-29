import  './globals.css'
import Header from "./components/Header/header";

export const metadata = {
  title:{
    template: ' Unido| Unido Coffee Rosters',
  default: 'Unido Coffee Rosters',}
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      
       <Header/>
        {children}
       
        </body>
    </html>
  );
}

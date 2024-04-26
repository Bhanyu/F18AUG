import "../app/globals.css"

import Header from "./components/Header/header";

export const metadata = {
  title:{
    template: '%s | ABB - Müasir, Faydalı, Universal',
  default: 'ABB - Müasir, Faydalı, Universal',}
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header/>
        <main>
        {children}
        </main>
        </body>
    </html>
  );
}

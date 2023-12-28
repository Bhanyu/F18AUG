import { Inter } from 'next/font/google'

import './globals.css'





export default function RootLayout({ children }) {
return(
  <html>
    <body>
      <main>
        {children}
      </main>
    </body>
  </html>
)
}

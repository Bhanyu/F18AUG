"use client";

import './globals.css';
import Header from "./components/Header/header";
import { ShopProvider } from './context/ShopContext';
import { metadata } from './metadata';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <title>{metadata.title.default}</title> 
      </head>
      <body>
        <ShopProvider>
          <Header />
          <main>
            {children}
          </main>
        </ShopProvider>
      </body>
    </html>
  );
}





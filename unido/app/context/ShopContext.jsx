"use client";

import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 1,
      cardImage: '/unidocap.jpg',
      desc: "5 Pane Hat",
      detailedDesc: "This is a detailed description of the 5 Pane Hat.",
      price: 29.99,
    },
    {
      id: 2,
      cardImage: '/relaxo.jpg',
      desc: "Relaxo Hat",
      detailedDesc: "This is a detailed description of the Relaxo Hat.",
      price: 39.99,
    },
    {
      id: 3,
      cardImage: '/harpia.jpg',
      desc: "Harpia Hat",
      detailedDesc: "This is a detailed description of the Harpia Hat.",
      price: 49.99,
    },
    {
      id: 4,
      cardImage: '/blend.jpg',
      desc: "Blend Hat",
      detailedDesc: "This is a detailed description of the Blend Hat.",
      price: 59.99,
    },
    {
      id: 5,
      desc: "Product 1",
      price: 100,
      detailedDesc: "This is a detailed description of the Blend Hat.",
cardImage:'/damarli.jpg'
  },
  {
      id: 6,
      desc: "Product 2",
      price: 200,
      detailedDesc: "This is a detailed description of the Blend Hat.",
      cardImage:"/geisha.jpg"
  },
  {
      id: 7,
     desc: "Product 3",
      price: 300,
      detailedDesc: "This is a detailed description of the Blend Hat.",
      cardImage:"/relaxo.jpg"
  },
  {
      id: 8,
     desc: "Product 4",
      price: 400,
      detailedDesc: "This is a detailed description of the Blend Hat.",
      cardImage:"/harpia.jpg"
  },
  {
      id: 9,
     desc: "Product 5",
      price: 500,
      detailedDesc: "This is a detailed description of the Blend Hat.",
      cardImage:"/harpiaBig.jpg"
  }
  ]);

  return (
    <ShopContext.Provider value={{ products }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);




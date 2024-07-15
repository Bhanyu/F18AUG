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
  ]);

  return (
    <ShopContext.Provider value={{ products }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);




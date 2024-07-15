"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useShop } from '../../context/ShopContext';
import styles from '../../styles/ProductPage.module.scss';

const ProductPage = () => {
  const params = useParams();
  const { productId } = params;
  const { products } = useShop();

  const product = products.find((product) => product.id === parseInt(productId));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className={styles.productPage}>
      <Image src={product.cardImage} alt={product.desc} width={500} height={500} />
      <h1>{product.desc}</h1>
      <p>{product.detailedDesc}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductPage;




  
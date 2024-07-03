import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
import Link from "next/link";
import styles from "../cards/card.module.scss";
import unidocap from "../../../public/unidocap.jpg";
import Image from "next/image";
import relaxo from "../../../public/relaxo.jpg";
import harpia from "../../../public/harpia.jpg";
import blend from "../../../public/blend.jpg";

export default function Cards() {
  const products = [
    {
      id: 1,
      href: "#",
      cardImage: unidocap,
      desc: "5 Pane Hat",
      button: "  Add to Cart",
    },
    {
      id: 2,
      href: "#",
      cardImage: relaxo,
      desc: "5 Pane Hat",
      button: "  Add to Cart",
    },
    {
      id: 3,
      href: "#",
      cardImage: harpia,
      desc: "5 Pane Hat",
      button: "  Add to Cart",
    },
    {
      id: 4,
      href: "#",
      cardImage: blend,
      desc: "5 Pane Hat",
      button: "  Add to Cart",
    },
  ];
  return (
    <section id={styles.cardsection}>
      <div className={styles.container}>
        <h2>Staff Favorites</h2>
        <div className={styles.cards_part}>
          {products &&
            products.map((product) => {
              return (
                <div key={product.id} className={styles.singlecard}>
                  <Link href={product.href} className={styles.cardlink}>
                    <div className={styles.linkimage}>
                      <Image
                        className={styles.unidocapp}
                        src={product.cardImage}
                        width={510}
                      />
                    </div>
                    <div className={styles.link_desc}>
                      <p>{product.desc}</p>
                    </div>
                  </Link>
                  <div className={styles.buttonpart}>
                    <button>{product.button}</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

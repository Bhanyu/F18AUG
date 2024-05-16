import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import styles from "../cards/card.module.scss";
import unidocap from "../../../public/unidocap.jpg";
import Image from "next/image";
import relaxo from "../../../public/relaxo.jpg"
import harpia from "../../../public/harpia.jpg"
import blend from "../../../public/blend.jpg"
export default function Cards() {
  return (
    <section id={styles.cardsection}>
      <div className={styles.container}>
        <h2>Staff Favorites</h2>
        <div className={styles.cards_part}>
         
           
              <div className={styles.singlecard}>
                <Link href="#" className={styles.cardlink}>
                <div className={styles.linkimage}>
                  <Image className={styles.unidocapp}
                  src={unidocap}
                  width={510}
                   />
                   
                </div>
               <div className={styles.link_desc}>
               <p>5 Pane Hat</p>
               </div>

                </Link>
               <div className={styles.buttonpart}>
               <button>
                Add to Cart
               </button>
               </div>
              </div>
         
              <div className={styles.singlecard}>
                <Link href="#" className={styles.cardlink}>
                <div className={styles.linkimage}>
                  <Image className={styles.unidocapp}
                  src={relaxo}
                  width={510}
                   />
                   
                </div>
               <div className={styles.link_desc}>
               <p>5 Pane Hat</p>
               </div>

                </Link>
               <div className={styles.buttonpart}>
               <button>
                Add to Cart
               </button>
               </div>
              </div>
              <div className={styles.singlecard}>
                <Link href="#" className={styles.cardlink}>
                <div className={styles.linkimage}>
                  <Image className={styles.unidocapp}
                  src={harpia}
                  width={510}
                   />
                   
                </div>
               <div className={styles.link_desc}>
               <p>5 Pane Hat</p>
               </div>

                </Link>
               <div className={styles.buttonpart}>
               <button>
                Add to Cart
               </button>
               </div>
              </div>
              <div className={styles.singlecard}>
                <Link href="#" className={styles.cardlink}>
                <div className={styles.linkimage}>
                  <Image className={styles.blend}
                  src={blend}
                  width={510}
                   />
                   
                </div>
               <div className={styles.link_desc}>
               <p>5 Pane Hat</p>
               </div>

                </Link>
               <div className={styles.buttonpart}>
               <button>
                Add to Cart
               </button>
               </div>
              </div>
       
        </div>
      </div>
    </section>
  );
}


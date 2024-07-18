import classNames from "classnames"
import styles from "../../styles/shop.module.scss"
import bottomAngle from "../../../public/chevron-bottom.svg"
import search from "../../../public/search-svgrepo-com.svg"

import Image from "next/image"
import Link from "next/link"
import ShopProductCard from "../../components/shopProductPage"
import "bootstrap/dist/css/bootstrap.min.css";
export default function ShopContent({products}){
    return(
        <section id={styles.shopping}>
            <div className={classNames("container", styles.shopContainer)}>
<div className={classNames("row", styles.shopRow)}>
    <div className={classNames("col-lg-3", styles.shopCol)}>
     <div className={ styles.shopTitle}>Now Shopping by</div>
     <div className={ styles.categories}>
     <div className={classNames("character", styles.shopChar)}>
           
                <button className={styles.charButton}>
                    Process <Image src={bottomAngle}
                    width={20}
                    height={15}/>
                </button>
                
                <div className={styles.shopDropdown}>
                    <ul className={styles.dropdownList}>
                        <li><Link className={styles.underLink} href="#">NATURAL</Link></li>
                        <li><Link className={styles.underLink}href="#">EXPERIMENTAL</Link></li>
                        <li><Link className={styles.underLink}href="#">DECAF</Link></li>
                    </ul>
                </div>
          
        </div>



        <div className={classNames("character", styles.shopChar)}>
           
           <button className={styles.charButton}>
               Process <Image src={bottomAngle}
               width={20}
               height={15}/>
           </button>
           <div className={styles.shopDropdown}>
                    <ul className={styles.dropdownList}>
                        <li><Link className={styles.underLink} href="#">NATURAL</Link></li>
                        <li><Link  className={styles.underLink} href="#">EXPERIMENTAL</Link></li>
                        <li><Link className={styles.underLink} href="#">DECAF</Link></li>
                    </ul>
                </div>
          
     
   </div>



   <div className={classNames("character", styles.shopChar)}>
           
           <button className={styles.charButton}>
               Process <Image src={bottomAngle}
               width={20}
               height={15}/>
           </button>
           <div className={styles.shopDropdown}>
                    <ul className={styles.dropdownList}>
                        <li><Link className={styles.underLink} href="#">NATURAL</Link></li>
                        <li><Link className={styles.underLink} href="#">EXPERIMENTAL</Link></li>
                        <li><Link className={styles.underLink} href="#">DECAF</Link></li>
                    </ul>
                </div>
          
     
   </div>
     </div>
    </div>
    <div className={classNames("col-lg-9", styles.shopCol2)}>
       <div className={classNames("col-12" , styles.shopSearchBar)}>
      
            <div className={styles.searchBar}>
              <Image className={styles.searchIcon}
              src={search}
              width={25}
              height={25}/>  <input className={styles.searchInput} type="text" placeholder="Search..."/>
            </div>
     
       </div>
       <div className={classNames("col-lg-12" , styles.shopInnerCards)}>
       <div className={classNames("row", styles.shopCards)}>
        {products && products.map((card)=>{
            return(
             
                <div key={card.id} className={classNames("col-lg-4", styles.singleCard)}>
                        <ShopProductCard shopProduct={card} />
                </div>
                  
            )
        })}
       </div>
       </div>
      
    </div>
</div>
            </div>
        </section>
    )
}
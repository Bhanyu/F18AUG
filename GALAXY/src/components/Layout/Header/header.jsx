

import React from "react";



import { IoBagOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

import styles from "../Header/_header.module.scss"
import {  Link } from "react-router-dom";
function Header(){
    return(
        <header className={styles.header}>
        <div className={styles.headcontainer}>
            <div className={styles.cosmetichead}>
                <div className={styles.leftside}>
                <div className={styles.logolink}>
                    <a href="#">
                        <img src="	https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/10/cosmetics3.svg" alt="" />
                    </a>
                </div>
                <div className={styles.navbar}>
                   <ul className={styles.navitems}>
                    <li ><Link className={styles.colorful} to="/">Start</Link></li>
                    <li><Link className={styles.simple} to="/products">Products</Link></li>
                    <li><Link className={styles.simple}  to="/blogs">Blog</Link></li>
                    <li><Link className={styles.simple}  to="/about">About</Link></li>
                    <li><Link className={styles.simple}  to="/que">FAQ</Link></li>
                    <li><Link className={styles.simple} 
                     to="/contact">Contact</Link></li>
                   </ul>
                </div>

                </div>
             <div className={styles.rightside}>
                <div className={styles.searchpart}>
                    <input type="text" placeholder="Search" />
                    <CiSearch size={20} className={styles.search} />
                </div>
                <div className={styles.iconspart}>
                    <a href="#"><CiHeart className={styles.icon}  size={20}/></a>
                    <a href="#"> <IoBagOutline className={styles.icon} size={20}/></a>
                    <a href="#"> <IoPersonOutline className={styles.icon} size={20} /></a>
                </div>
             </div>
            </div>
        </div>
        </header>
    )
    
}
export default Header
import React, { useEffect, useState } from "react";

import { IoBagOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

import styles from "../Header/_header.module.scss";
import { Link } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import Sidebar from "../Sidebar/sidebar";
function Header() {
  const CARD_API = "http://localhost:8000/parfumery";

  const [apiUsers, setApiUsers] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  async function getApiUsers() {
    const res = await fetch(CARD_API);
    const data = await res.json();
    setApiUsers(data);
  }
  useEffect(() => {
    getApiUsers();
  }, []);

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredCards = apiUsers.filter((post) => {
      return post.parfum_title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredUsers(filteredCards);
    if (searchTerm === "") setFilteredUsers([]);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headcontainer}>
        <div className={styles.cosmetichead}>
          <div className={styles.leftside}>
            <div className={styles.logolink}>
              <a href="#">
                <img
                  src="	https://themes.muffingroup.com/be/cosmetics3/wp-content/uploads/2022/10/cosmetics3.svg"
                  alt=""
                />
              </a>
            </div>
            <Sidebar/>
            <div className={styles.navbar}>
              <ul className={styles.navitems}>
                <li>
                  <Link className={styles.colorful} to="/">
                    Start
                  </Link>
                </li>
                <li>
                  <Link className={styles.simple} to="/products">
                    Products
                  </Link>
                </li>
                <li>
                  <Link className={styles.simple} to="/blogs">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className={styles.simple} to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className={styles.simple} to="/que">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className={styles.simple} to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.rightside}>
            <div className={styles.searchpart}>
              <input
                type="text"
                value={searchItem}
                onChange={handleChange}
                placeholder="Search"
              />
              <CiSearch size={20} className={styles.search} />
              <div className={styles.search_filter_box}>
                {filteredUsers
                  ? filteredUsers.map((user) => {
                      return (
                        <div key={user.id} className={styles.user_card}>
                          <div className={styles.user_img}>
                            <Link to={user.id}>
                              {/* {" "} */}
                              <img src={user.parfum_img} alt="" />
                            </Link>
                          </div>
                          <div className={styles.user_desc}>
                            <h6>{user.parfum_title}</h6>
                            <div className={styles.star_icons}>
                              <MdOutlineStar />
                              <MdOutlineStar />
                              <MdOutlineStar />
                              <FaRegStar />
                              <FaRegStar />
                            </div>
                            <div className={styles.mfn_vr}>
                              <ul>
                                <li>
                                  <a href="#">{user.amount}</a>
                                </li>
                                <li>
                                  <a href="#">{user.amount}</a>
                                </li>
                                <li>
                                  <a href="#">{user.amount}</a>
                                </li>
                              </ul>
                            </div>
                            <div className={styles.price}>
                              <span>{user.price}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : setFilteredUsers(null)}
              </div>
            </div>
            <div className={styles.iconspart}>
              <a href="#">
                <CiHeart className={styles.icon} size={20} />
              </a>
              <a href="#">
                {" "}
                <IoBagOutline className={styles.icon} size={20} />
              </a>
              <a href="#">
                {" "}
                <IoPersonOutline className={styles.icon} size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;

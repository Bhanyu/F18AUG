import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

import { IoMdClose } from "react-icons/io";
import "../Sidebar/_sidebar.scss";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`sidebar ${!isOpen ? "closed" : " "}`}>
      {/* <button
                type="button"
                className="sidebar_burger"
               onClick={()=>setIsOpen(false)}
              >
               
               <span className="sidebar_icon">{!isOpen ? <IoMdMenu /> : " "}</span>
              </button> */}

      <div className={`side_inner ${!isOpen ? "active" : " "}`}>
        <button onClick={() => setIsOpen(false)} className="close_button">
          <span className="close_btn">{!isOpen ? <IoMdClose /> : " "}</span>
        </button>
        <ul>
          <li>
            <Link className="simple" to="/">
              Start
            </Link>
          </li>
          <li>
            <Link className="simple" to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="simple" to="/blogs">
              Blog
            </Link>
          </li>
          <li>
            <Link className="simple" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="simple" to="/que">
              FAQ
            </Link>
          </li>
          <li>
            <Link className="simple" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;

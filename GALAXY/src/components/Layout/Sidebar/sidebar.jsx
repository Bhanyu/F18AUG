import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Sidebar/_sidebar.scss";

function Sidebar(){
    const [isOpen, setIsOpen] = useState(false);
    return (
       
          <div className="sidebar">
         
              <button
                type="button"
                className="sidebar_burger"
               onClick={()=>setIsOpen(!isOpen)}
              >
                <span className="sidebar_icon">{isOpen ? "ACC" : "BAGLA"}</span>
              </button>
          
        <div className={`side_inner ${!isOpen ? "active" : " " }`}></div>
           <ul>
                  <li>
                    <Link className="colorful" to="/">
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
      
      )

  
 
};
export default Sidebar;

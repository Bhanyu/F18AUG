import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import me from "../../../public/down.svg"

import "../Header/header.scss";
const Header = () => {
  const navLinks = [
    { name: "Haqqimizda", href: "/haqqimizda" },
    { name: "Tarifler ve Standart sertler", href: "/tarifler" },
    { name: "Xeberler", href: "/xeberler" },
    { name: "Xidmet sebekesi", href: "/xidmetsebekesi" },
    { name: "Satinalmalar", href: "/satinalmalar" },
    { name: "Dayaniqli Inkisaf Hesabatlari", href: "/sustainability" },
    { name: "Arasdirma", href: "/arasdirma" },
    { name: "Satinalmalar", href: "/satinalmalar" },
    {name : "Karyera Portali", href:"/karyera"}
  ];

  return (
    <header>
      <div className="upper-wrap">
        <div className="container">
          <div className="links_left_part">
            {navLinks.map((link) => {
              return (
                <Link className="navlink" href={link.href} key={link.name}>
                  {link.name}
                </Link>
              );
            })}
        <div className="select_individual">
        <select name="private" id="private">
          <option  value="Fərdi">Fərdi</option>
          <option value="Korporativ">Korporativ</option>
          <option value="KOB" data-url="/KOB">KOB</option>
        </select>
        </div>
          
          </div>
          <div className="right_part_tinnies">
            <a className="search" href="#">
       <Image className="research"
       src="https://abb-bank.az/img/icons/search.svg"
       width={12}
       height= {12}
       />
              <span>Axtarış</span>
            </a>

            <div className="select_box">
              <div className="lang">
              <span className="label">AZ</span>
                         <Image className="angle"
                         src={me}
                         width={10}
                         height={10}
                         />
                   
             </div>
             <div className="hide_options">
                  <div className="first_opt">
                  <Image
                    src="https://abb-bank.az/img/icons/flag-uk.svg"
                    height={24}
                    width={24}
                  />
                    <option value="EN">EN</option>
                  </div>
                  <div className="first_opt">
                  <Image
                    src="https://abb-bank.az/img/icons/flag-ru.svg"
                    height={24}
                    width={24}
                  />
                    <option value="EN">EN</option>
                  </div>
                </div>   
            
            </div>

            <div className="call_phone">
             
                <Image className="phone_icon"
                src="https://abb-bank.az/img/icons/phone.svg"
                width={12}
                height={12}
                />
              <span>937</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

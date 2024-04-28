import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import me from "../../../public/down.svg"
import logo from "../../../public/logo.svg"
import internetbank from "../../../public/internetbank.svg"
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
  const services = [
    {name: " Fərdi", href:"#ferdi"},
    {name: "Korporativ ", href:"#korporativ"},
    {name: " KOB", href:"#KOB"}
  ]
const lowlinks = [
  {name: "Kreditlər", href:"#kreditler" },
  {name: "Kartlar", href:"#kartlar" },
  {name: "Onlayn xidmətlər", href:"#onlaynservice" },
  {name: "Kampaniyalar", href:"#kampaniya" },
  {name: "Keşbek", href:"#kesbek"},
  {name:"İpoteka", href:"#ipotek"},
  {name: "Pul köçürmələri", href:"#pulkocur"},
  {name : "Cari Hesab", href:"#carihesab"},
  {name: "Əmanətlər", href:"#emanet"},
  {name: "Azərbaycan Alış-veriş Festivalı", href:"#alisveris"}
                        
                        
                        
                    
]
  return (
    <header>
      <section id="upper-wrap">
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
      </section>
      <section id="middle_parts">
      <div className="container">
      <div className="left_field_part">
          <div className="logo">
           <a className="abb_logo" href="#">
           <Image
            src={logo}
            width={110}
            height={50}
            />
           </a>
          </div>
          <div className="services">
{services.map((service)=>{
  return(
    <Link className="service"  href={service.href} key={service.name}>
{service.name}
    </Link>
  )
})}
          </div>
        </div>
        <div className="right_field_part">
         <Link className="internet_bank" href="#">
         <Image
         src={internetbank}
         />
         </Link>
         <span>İnternet Bankçılıq</span>
        </div>
      </div>
      </section>
      <section id="low_part">
        <div className="container">
          <div className="low-navigation">
{lowlinks && lowlinks.map((lowlink)=>{
  return(
    <Link className="low_nav_link" href={lowlink.href} key={lowlink.name}>
  {lowlink.name}
  </Link>
  )
})}
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;

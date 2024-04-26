import Link from "next/link";
import Image from "next/image";
import angle from "../../../public/angle.svg";
// import { usePathname } from "next/navigation";
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
          </div>
          <div className="right_part_tinnies">
            <a className="search" href="#">
              <Image
                src="https://abb-bank.az/img/icons/search.svg"
                width={20}
                height={20}
                alt="Picture of the author"
              />
              <span>Axtarış</span>
            </a>

            <div className="select_box">
              <div className="lang">
              <span className="label">AZ</span>
                         <button>
<Image
src={angle}/>
                         </button>
                         
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
                  <div className="second_opt">
                  <Image
                    src="https://abb-bank.az/img/icons/flag-ru.svg"
                    height={24}
                    width={24}
                  />
                    <option value="EN">EN</option>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

import Link from "next/link"
import Image from "next/image"
import "../Header/header.scss"
import logo from "../../../public/logo.png"
import bucketb from "../../../public/bucketb.png"
import buckety from "../../../public/buckety.png"
import burger from "../../../public/burger.svg"
const Header = ()=>{
const navlinks = [
    {name: "SHOP",href:"https://nextjs.org/"},
    {name: "MENU",href:"https://nextjs.org/"},
    {name: "LEARN",href:"https://nextjs.org/"},
    {name: "PANAMA COFFEE",href:"https://nextjs.org/"},
    {name: "NEWS",href:"https://nextjs.org/"},
    {name: "LOCATIONS",href:"https://nextjs.org/"},
    {name: "WHOLESALE",href:"https://nextjs.org/"},
    {name: "ACCOUNT",href:"https://nextjs.org/"},
]

    return(
        <header>
            <div className="container">
                <div className="head_part">
                    <div className="logo">
                        <Link href={"https://nextjs.org/"} className="logolink">
                        <Image className="unidologo"
                        src={logo}
                        width={159}
                        height={64}
                        />
                        </Link>
                    </div>
                    <div className="navbar">
                        <nav>
{navlinks && navlinks.map((navlink)=>{
    return(
        <Link className="navlink" href={navlink.href} key={navlink.name}>{navlink.name}</Link>
    )
})}
                        </nav>
                        <div className="bucket">
                            <Link className="bucket_count" href={"https://nextjs.org/"}>
                            <Image className="show"
                            src={bucketb}
                            width={20}
                            height={20}
                            />
                               <Image className="hidden"
                            src={buckety}
                            width={20}
                            height={20}
                            />
                            </Link>
                        </div>
                     
                    </div>
                    <div className="burger-menu">
                            <button>
                                <Image 
                                src={burger}/>
                            </button>
                         
                        </div>
                </div>
            </div>
          
                        <div className="container-menu">
                                <div className="mobil_menu">
                                    {
                                        navlinks && navlinks.map((mobilink)=>{
                                            return(
                                                <Link href={mobilink.href} key={mobilink.name} className="mobilink">
                                                    {mobilink.name}
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
        </header>
        
    )
}
export default  Header;
import Link from "next/link";
import { navTop,navBottom } from "./data";
import nav_img_amu from './nav-img/nav-img-amu-logo.webp'
import nav_img_ieee from './nav-img/nav-img-ieee.svg'
import Image from "next/image";

const Navbar = () => {

  return (
    <div className="bg-white border-b-[1px] " >

        <div className= " px-[25px] hidden bg-primary text-white text-[13px] font-poppins sm:flex flex-row font-extralight border-b-[1px] border-secondary w-full ">
          {navTop.map((item,index)=>(
            <ul key={index}>
              <a href={item.link} className="button">
              {item.name}
              </a>
             { index===navTop.length-1 ? <></> : <span className=" sm:px-[8px] md:px-[20px] text-orange-200">
                |
              </span>}
            </ul>
          ))}
        </div>

        <div className="flex flex-row w-full items-center sm:justify-center py-[10px]">
          <a href="/" className="sm:px-[50px] sm:h-auto sm:w-[60%]">
            <Image src={nav_img_amu} alt="amu" className="h-full w-full"/>
          </a>
          <a href="https://www.ieee.org/" className="hidden sm:flex items-end ml-auto pr-[50px] md:pr-[80px]">
            <Image src={nav_img_ieee} alt="ieee" className="w-full h-full"/>
          </a>
        </div>
          
          <div className="bg-primary text-secondary flex flex-row font-poppins py-[8px] items-center justify-around">
            {navBottom.map((items,index)=>(
              <div key={index} className="px-[40px]">
              <Link  key={index} href={items.link} className="button font-medium ">
              {items.name}
              </Link>
              </div>
            ))}
          </div>

    </div>
  )
}

export default Navbar
'use client'

import Link from "next/link";
import { navTop,navBottom } from "./data";
import { motion } from "framer-motion";
import ieee_logo from './nav-img/ieee.svg'
import Image from "next/image";
import { fadeIn } from "@/utils/motion";
import { useState } from "react";

const Navbar = () => {

  const [toggle ,setToggle]=useState(false)

  return (
    <motion.div 
     initial="hidden"
     animate="show"
    variants={fadeIn('left', 'spring', 0.5, 2)}


    className="bg-primary flex flex-row items-center pt-[20px]" >

        {/* <div className= " px-[25px] hidden bg-primary text-white text-[13px] font-poppins sm:flex flex-row font-extralight border-b-[1px] border-secondary w-full ">
          {navTop.map((item,index)=>(
            <ul key={index}>
              <a href={item.link}  target="_blank" rel="noopener noreferrer" className="button">
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
          </div> */}


  <Link href="/" className=" w-4/12 flex justify-start  ">
    <Image src={ieee_logo} height={10} width={80} className="scale-110"/>
  </Link>
        <motion.div className="hidden sm:flex flex-row w-8/12 justify-end pt-[5px]">
          {navBottom.map((items,index)=>(
            <Link href={items.link} key={index} className="button flex flex-col justify-normal items-center ">
              {items.name}
              <div className="transition-line"/>
            </Link>
            
          ))}
        </motion.div>

        <motion.div
        onClick={()=>setToggle(!toggle)}
        className=" flex flex-col sm:hidden"
        >  
           <div className={`nav-icon ${toggle ? 'change' : ''}`}  onClick={()=>setToggle(!toggle)}>
            <div className={`bar bar1 ${toggle ? 'change' : ''}`}></div>
             <div className={`bar bar2 ${toggle ? 'change' : ''}`}></div>
             <div className={`bar bar3 ${toggle ? 'change' : ''}`}></div>
            </div>

        </motion.div>
    </motion.div>
  )
}

export default Navbar
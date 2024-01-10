'use client'

import Link from "next/link";
import { navTop, navBottom } from "./data";
import { motion } from "framer-motion";
import ieee_logo from './nav-img/ieee mb white png.png'
import Image from "next/image";
import { fadeIn, slideDown } from "@/utils/motion";
import { useState } from "react";
import Pop from "./Pop";

const Navbar = () => {

  const [toggle, setToggle] = useState(true)
  const [active ,setActive]=useState("HOME")

  return (
    <motion.div
       initial="hidden"
       animate="show"
       variants={fadeIn('left', 'spring', 0.5, 2)}
      className="  flex flex-row justify-between items-center pt-[20px]" >

      <Link 
      onClick={()=>setActive("HOME")}
      href="/" 
      className="w-4/12 flex justify-start">
        <Image src={ieee_logo} height={10} width={80} className="scale-110" />
      </Link>


      <motion.div className="hidden md:flex flex-row w-8/12 justify-end pt-[5px]">
        {navBottom.map((items, index) => (
          <Link
          onClick={()=>setActive(items.name)}
           href={items.link} key={index} 
           className={`${active===items.name ? "text-white scale-125" : "text-secondary"} button flex flex-col justify-normal items-center` }>
            {items.name}
            <div className="transition-line" />
          </Link>
        ))}
      </motion.div>

        <motion.div>
          <div onClick={()=>(setToggle(!toggle))}
          className={`md:hidden `}>
          <div className={`bar bar1 ${toggle ? 'change' : ''}`}></div>
          <div className={`bar bar2 ${toggle ? 'change' : ''}`}></div>
          <div className={`bar bar3 ${toggle ? 'change' : ''}`}></div>
          </div>
         <Pop
        toggle={toggle}
        setToggle={setToggle}/>
          </motion.div>
    </motion.div>
  )
}

export default Navbar
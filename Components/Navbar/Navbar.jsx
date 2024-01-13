'use client'

import Link from "next/link";
import { navBottom } from "./data";
import { motion } from "framer-motion";
import ieee_logo from './nav-img/ieee mb white png.png'
import Image from "next/image";
import { fadeIn } from "@/utils/motion";
import { useState } from "react";
import Pop from "./Pop";

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const [active ,setActive]=useState("")

  return (
    <motion.div
       initial="hidden"
       animate="show"
       variants={fadeIn('top', 'tween', 0.3, 1)}
      className=" flex flex-row justify-between items-center pt-[20px]" >

      <Link 
      onClick={()=>setActive("HOME")}
      href="/" 
      className="w-4/12 flex justify-start">
        <Image src={ieee_logo} height={10} width={80} className="scale-110" />
      </Link>


      <motion.div className="hidden md:flex flex-row lg:w-7/12 md:w-8/12 justify-end ml-[100px] pt-[5px]">
        {navBottom.map((items, index) => (
          <Link
          onClick={()=>setActive(items.name)}
           href={items.link} key={index} 
           className={`${active===items.name ? "text-white scale-125" : "text-secondary"} button flex flex-col justify-normal items-center` }>
            {items.name}
            <div className="transition-line"/>
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
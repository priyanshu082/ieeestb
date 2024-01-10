'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { navBottom, navTop } from './data'
import Link from 'next/link'
import { slideDown } from '@/utils/motion'
import dropdown from './nav-img/arrow.svg'
import Image from 'next/image'

const Pop = ({toggle,setToggle}) => {

    const [toggleLink,setToggleLink]=useState(false)
    const [active ,setActive]=useState("HOME")

  return (
    <motion.div
    key={toggle ? 'visible' : 'hidden'}
    initial="hidden"
    animate="show" 
    variants={slideDown(0.1,0.5)}
    className={`${toggle ? "flex md:hidden flex-col" : "hidden"} black-gradient p-[10px] z-[1000] absolute ml-[-110px] mt-[10px] border-[1px] bg-primary border-primary rounded-xl font-poppins font-semibold text-secondary shadow-[10px_18px_10px_-5px_rgba(0,0,50,0.2)]`}>
        {navBottom.map((items,index)=>(
            <Link onClick={()=>{
              setToggle(!toggle);
              setActive(items.name)
              }} key={index} href={items.link} className={`${active===items.name ? "text-white" : "text-secondary"} mt-[10px] px-[20px]`}>
                {items.name}
            </Link>
        ))}
        <div onClick={()=>(setToggleLink(!toggleLink))}
        className='flex flex-row items-center hover:text-white hover:cursor-pointer transition duration-500 ease-in-out mt-[10px] px-[20px]'>
             LINKS <Image src={dropdown} className={ `h-[25px] w-[25px] transition duration-300  ${toggleLink ? "rotate-180" : "rotate-0 text-white"}` }/>
        </div>
        <motion.div 
        key={toggleLink ? 'visible' : 'hidden'}
        initial="hidden"
        animate="show" 
        variants={slideDown(0.1,0.5)}
        className={` mt-[175px] w-[140px] ml-[13px] absolute border-[1px] shadow-[7px_-10px_15px_1px_rgba(0,0,50,0.2)] black-gradient border-primary rounded-[10px] bg-primary 
         ${toggleLink ? "flex flex-col" : "hidden"}`}>
            {navTop.map((items,index)=>(
                <a key={index} href={items.link} className='mt-[10px] px-[10px] hover:text-white transition duration-300'>
                    {items.name}
                </a>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Pop
import React from 'react'
import { motion } from 'framer-motion'
import { navBottom, navTop } from './data'
import Link from 'next/link'
import { slideDown } from '@/utils/motion'

const Pop = ({toggle,setToggle}) => {
  return (
    <motion.div
    key={toggle ? 'visible' : 'hidden'}
    initial="hidden"
    animate="show" 
    variants={slideDown(0.1,0.5)}
    className={`${toggle ? "flex md:hidden flex-col" : "hidden"} p-[10px] z-[1000] absolute ml-[-90px] mt-[10px] border-[1px] bg-primary border-primary rounded-xl text-black shadow-[10px_18px_10px_-5px_rgba(0,0,50,0.2)]`}>
        {navBottom.map((items,index)=>(
            <Link onClick={()=>(setToggle(!toggle))} key={index} href={items.link} className='hover:text-white transition duration-500 ease-in-out mt-[10px] px-[20px]'>
                {items.name}
            </Link>
        ))}
    </motion.div>
  )
}

export default Pop
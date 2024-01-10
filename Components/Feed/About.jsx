import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motion'
import Image from 'next/image'
import ghost from './img/ghost-img (1).png'

const About = () => {
  return (
    <motion.div 
    variants={textVariant()}
    className='flex flex-row justify-between'>
        <div className='flex flex-col flex-1'>

        <div className=' border-[2px] rounded-xl pl-[10px] max-w-[300px] md:mt-[100px]'>
        <span className='text-[45px] text-white-100 font-extrabold font-poppins '>About</span>
        <span className='text-[45px] text-[#915eff] font-extrabold'>  Us</span>
        </div>

        <div>

        </div>

        </div>


        <div className='shadow-container flex justify-center items-center flex-col flex-1 '>
          <Image className='floating-img' src={ghost} height={400} width={400}/>
          <div className='shadow-img sm:w-[100px] md:w-[170px] lg:w-[210px] h-[20px]'></div>
        </div>
    </motion.div>
  )
}

export default About
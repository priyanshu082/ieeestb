'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { slideUp, textVariant } from '@/src/utils/motion'
import Image from 'next/image'
import ghost from './img/ghost-img (1).png'
import logo from '../Navbar/nav-img/ieee mb white png.png'
import BlinkingCursor from './Blinking'
import SectionWrapper from '../../HOC/SectionWrapper'

const About = () => {

  return (
    <motion.div
      variants={textVariant(1)}
      className='flex flex-col lg:flex-row font-poppins justify-between items-center lg:gap-0 gap-20 mt-[30px] '>

      <div className=' lg:w-7/12'>
        <div className=' violet-gradient text-[30px] md:text-[40px] w-fit rounded-3xl pl-[10px] pr-[20px] md:pl-[10px]'>
          <span className=' text-white-100 font-extrabold font-poppins '>About</span>
          <span className=' text-[#915eff] font-extrabold'>  IEEE</span>
          <BlinkingCursor />
        </div>

        <div className='text-white flex flex-col gap-3 mt-[20px] pl-[10px] font-poppins'>
          <p>
            IEEE – Institute of Electrical and Electronics Engineers, as defined by the official website ieee.org is the professional home for the engineering and technology community worldwide.
          </p>
          <p>
            Being the largest-technical professional organization, IEEE and its members inspire a global community to innovate for a better tomorrow through highly cited publications, conferences, technology standards, and professional and educational activities. IEEE defines its mission as fostering technological innovation and excellence for the benefit of humanity. IEEE is the trusted “voice” for engineering, computing, and technology information around the globe.
          </p>
          <p>
            Having over 4 lakh members from more than 160 countries worldwide, IEEE houses more than 1 lakh student members, providing them with a professional shelter. With 39 technical societies, ten geographic regions that host over 10,000 local meetings annually, several affinities and special interest groups, humanitarian opportunities, and virtual communities and private groups through IEEE IEEE collaborate®, IEEE offers ample opportunity to network and grow professionally through communities
          </p>
        </div>

      </div>


      <motion.div
        variants={slideUp(1.5, 1)}
        className='shadow-container flex flex-col justify-center px-auto'>
        <Image className='floating-img' src={logo} height={400} width={400} />
        <div className='shadow-img w-[100%] ml-[25px] h-[30px] mt-[40px]'></div>
      </motion.div>
    </motion.div>
  )
}

export default SectionWrapper(About, "about")
'use client'
import React from 'react'
import { textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'
import  SectionWrapper  from '../../HOC/SectionWrapper'

const IEEEAMU = () => {
  return (
    <motion.div 
    variants={textVariant(1)}
    className=" flex flex-1 flex-col items-center text-center">
  
      <div className='bg-primary font-bold text-[45px] md:text-[50px] lg:text-[60px] text-white font-poppins'>
      IEEE STB&nbsp;<span className='text-[#915eff]'>AMU</span>
      </div>
      <div className='text-secondary font-poppins text-[12px] md:text-[13px] lg:text-[16px] mt-[-12px] flex flex-1 font-bold'>
        IEEE STUDENT BRANCH ALIGARH MUSLIM UNIVERSITY
      </div>
  
  </motion.div>
  )
}

export default SectionWrapper(IEEEAMU,"ieeamu")
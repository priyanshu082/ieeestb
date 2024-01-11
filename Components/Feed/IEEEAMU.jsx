import React from 'react'
import { textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'
import  SectionWrapper  from '../../HOC/SectionWrapper'

const IEEEAMU = () => {
  return (
    <motion.div 
    variants={textVariant(0.5)}
    className="  flex flex-1 justify-center items-center">
    <motion.div className='max-w-[800px] rounded-[20px] '>
      <div className='bg-primary font-bold violet-gradient text-[50px] md:text-[60px] text-white rounded-2xl px-[30px] flex justify-center items-center font-poppins'>
    IEEE STB&nbsp;<span className='text-[#915eff]'>AMU</span>
      </div>
    </motion.div>
  </motion.div>
  )
}

export default SectionWrapper(IEEEAMU,"ieeamu")
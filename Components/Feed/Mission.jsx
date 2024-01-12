import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motion'
import  SectionWrapper  from '../../HOC/SectionWrapper'
import BlinkingCursor from './Blinking'

const Mission = () => {
  return (
    <motion.div 
    variants={textVariant(1)}
    className='flex flex-col mt-[30px] font-poppins'>

      
       <div className=' violet-gradient w-fit text-[30px] md:text-[40px] pl-[10px] pr-[15px] rounded-3xl '>
          <span className=' text-white-100 font-extrabold font-poppins '>Mission</span>
          <span className=' text-[#915eff] font-extrabold'> & Vision</span>
          <BlinkingCursor />
        </div>
        <div className='text-white flex flex-col gap-4 mt-[20px] pl-[10px]'>
      <p>
      A network of undergraduates volunteering to partner with local organizations and underserved communities to make the most of technology for sustainable development.
      </p>
      <p>
      Helping underserved local communities to benefit from sustainable technological advances.
      </p>
        </div>
    </motion.div>
  )
}

export default SectionWrapper(Mission,"mission")
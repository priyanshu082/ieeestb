import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motion'
import  SectionWrapper  from '../../HOC/SectionWrapper'
import BlinkingCursor from './Blinking'

const Mission = () => {
  return (
    <motion.div 
    variants={textVariant(0.5)}
    className='flex flex-col lg:flex-row justify-start mt-[30px] font-poppins'
    >
      <div className='flex flex-1 flex-col '>
       <div className=' border-[2px] border-secondary text-[30px] md:text-[40px] rounded-3xl px-[10px] max-w-[300px] md:pl-[10px] md:max-w-[400px] '>
          <span className=' text-white-100 font-extrabold font-poppins '>Mission</span>
          <span className=' text-[#915eff] font-extrabold'> & Vision</span>
          <BlinkingCursor />
        </div>
        <div className='text-white flex flex-col gap-4 mt-[40px]'>
      <p>
      A network of undergraduates volunteering to partner with local organizations and underserved communities to make the most of technology for sustainable development.
      </p>
      <p>
      Helping underserved local communities to benefit from sustainable technological advances.
      </p>
        </div>
      </div>
      <div>

      </div>
    </motion.div>
  )
}

export default SectionWrapper(Mission,"mission")
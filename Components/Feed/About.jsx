import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motion'

const About = () => {
  return (
    <motion.div 
    variants={textVariant()}
    className='flex flex-1 flex-row'>
        <div className='text-white'>
        About Us.
        </div>
        <div className='ghost'>

        </div>
    </motion.div>
  )
}

export default About
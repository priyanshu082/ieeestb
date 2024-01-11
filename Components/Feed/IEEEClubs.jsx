import React from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import clubs from './clubsData'
import ClubsCard from './ClubsCard'
import  SectionWrapper  from '../../HOC/SectionWrapper'
import { slideIn, textVariant } from '@/utils/motion'


const IEEEClubs = () => {
  return (
    
    <motion.div
    variants={textVariant()}
    className='flex flex-row flex-1'
    >
      {clubs.map((items,index)=>(
       <ClubsCard key={index} index ={index} club={items}/>
      ))}
    </motion.div>
  )
}

export default SectionWrapper(IEEEClubs,"ieeeclubs")
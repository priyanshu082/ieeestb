'use client'
import React from 'react'
import { motion } from 'framer-motion'
import clubs from './clubsData'
import ClubsCard from './ClubsCard'

import { fadeIn } from '@/src/utils/motion'


const IEEEClubs = () => {
  return (
    <motion.div className='flex flex-col'>
      {clubs.map((items,index)=>(
        <motion.div 
        key={index}
        initial='hidden'
        whileInView='show'
        exit='hidden'
        viewport={{ once: true, minTop: 1, maxTop: 1 }}
        variants={fadeIn(index%2===0 ? "right":"left", "tween", 0.5, 1)}>
          <ClubsCard index ={index} club={items}/>
        </motion.div>
      ))}
    </motion.div>
  )
}

// export default SectionWrapper(IEEEClubs,'ieeeclubs')
 export default IEEEClubs
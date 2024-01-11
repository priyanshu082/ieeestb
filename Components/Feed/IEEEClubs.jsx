import React from 'react'
import { motion } from 'framer-motion'
import clubs from './clubsData'
import ClubsCard from './ClubsCard'

import { staggerContainer, textVariant,fadeIn } from '@/utils/motion'


const IEEEClubs = () => {
  return (
    <motion.div className='flex flex-col flex-1 mt-[30px]'>
      {clubs.map((items,index)=>(
        <motion.div 
        key={index}
        initial='hidden'
        whileInView='show'
        exit='hidden'
        viewport={{ once: true, minTop: 1, maxTop: 1 }}
        variants={fadeIn("right", "tween", 0.4, 0.8)}>
          <ClubsCard index ={index} club={items}/>
        </motion.div>
      ))}
    </motion.div>
  )
}

// export default SectionWrapper(IEEEClubs,'ieeeclubs')
 export default IEEEClubs
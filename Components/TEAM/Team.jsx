import React from 'react'
import { motion } from 'framer-motion'
import { jello, lightSpeedIn, textVariant,shake, slideIn } from '@/utils/motion'
import TeamCard from './TeamCard'
import { data } from './ieeestbmembers'

const Team = () => {
  return (

    <div className='flex flex-col mt-[40px]'>
    <motion.div 
    initial='hidden'
    whileInView='show'
    exit='hidden'
    viewport={{ once: true }}
    variants={textVariant()}
    className="text-center flex flex-1 flex-col items-center">
  
      <div className='bg-primary font-bold text-[33px] md:text-[43px] lg:text-[53px] text-white font-poppins'>
      TEAM &nbsp;<span className='text-[#915eff]'>MEMBERS</span>
      </div>
      <div className='text-secondary font-poppins text-[10px] md:text-[13px] lg:text-[16px] mt-[-12px] flex flex-1 font-bold'>
        IEEE STUDENT BRANCH ALIGARH MUSLIM UNIVERSITY
      </div>
  </motion.div>
    <div className='flex flex-row object-contain flex-1/2 flex-wrap'>
   {data.map((data,index)=>(
    <TeamCard key={index} index={index} data={data}/>
   ))}
    </div>
    </div>

  )
}

export default Team
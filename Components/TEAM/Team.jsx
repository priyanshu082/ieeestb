'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motion'
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
    <motion.div 
   initial='hidden'
   whileInView='show'
  variants={textVariant()}
  className='flex flex-col justify-center items-center mt-[50px]'>
    <div className=' w-full flex flex-col justify-center items-center '>

  <div className='bg-primary  text-[#915eff] mb-[-40px] font-bold text-[19px] md:text-[28px] lg:text-[33px]  font-poppins'>
      DESIGN &  &nbsp;<span className='text-white'>DEVELOPED BY</span>
      </div>
    <TeamCard data={data[35]}/>
   
    </div>
  </motion.div>
    </div>

  )
}

export default Team
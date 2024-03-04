'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, delay, textVariant } from '@/src/utils/motion'
import Image from 'next/image'
import linkedin from '../Footer/img/linkedin.svg'

const TeamCard = ({index ,data}) => {
  return (
    <motion.div 
    initial='hidden'
    whileInView='show'
    viewport={{ once: true, minTop: 0.5, maxTop: 0.75 }} 
    // variants={fadeIn('down','tween',index*0.05,1)}
    variants={textVariant()}
    className="group mt-[40px] mx-[auto]">

    <motion.div className='team-card group-hover:rounded-[10px] p-[2px]'>

      <motion.div className=' team-card bg-tertiary group-hover:rounded-[10px] flex justify-center items-center flex-col p-[10px]'>

    <div className='flex flex-col justify-center items-center'>
        <Image 
        src={data.ProfilePicture || '/dummy.jpeg'} 
        alt={data.name} 
      height={250}
     width={250}
        className='team-image team-card group-hover:translate-y-[-100px]'/>
        <div className='group-hover:hidden text-secondary text-[21px] mt-[10px] font-poppins font-semibold'>
        {data.name}
        </div>
    </div>

        <motion.div 
        initial='hidden'
        whileInView='show'
        exit='hidden'
        // viewport={{ once: Infinity, minTop: 0, maxTop: 0.75 }}
        variants={delay(0.2,1)}
        className='hidden group-hover:flex flex-col justify-center items-center text-[20px] text-secondary font-bold font-poppins z-[10] transform ease-in delay-500 mt-[-80px] max-w-[300px]'>
        <h3 className='text-[22px] text-white text-center'>{data.name}</h3>
        <span className='text-[16px] text-center'>{data.Position}</span>
        <span className='text-[14px] mt-[5px] text-center'>Gmail:-{data.emailId}</span>
        <p className='text-[13px] text-wrap text-center mt-[5px]'>{data.About}</p>
        <a href={data.LinkedinProfileLink} target="_blank" rel="noopener noreferrer" className=' cursor-pointer mt-[10px]'>
      <Image src={linkedin} alt="linkedin" width={30} height={30}/>
        </a>
        </motion.div>

      </motion.div>

    </motion.div>
  </motion.div>
  )
}

export default TeamCard
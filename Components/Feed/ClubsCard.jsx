import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const ClubsCard = ({ index, club }) => {
  return (
    <motion.div
    variants={fadeIn("left","spring",index*0.5,0.5)}
    className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 clubs-card'>
      <div className='flex flex-row'>
        <Image src={club.image} alt={club.name} width={100} height={100}/>

        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins fonr-normal text-[20px] leading-[32px] text-white'>{club.name}</h4>
        </div>
        
      </div>
      
      <p className='font-poppins fonr-normal text-[18px] leading-[32px] text-white my-10'>{club.content}</p>

    </motion.div>
  )
}

export default ClubsCard
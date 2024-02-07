'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ClubsCard = ({ index, club }) => {
    return (
        <motion.div className='flex flex-col px-5 py-6 rounded-[20px] my-5 clubs-card font-poppins'>

            <div className='flex flex-col items-center'>
                <Image className='rounded-3xl' src={club.image} alt={club.name} width={100} height={100} />
                <div className='mt-[10px]'>
                    <p className=' font-bold text-[22px] leading-[32px] text-[#915eff]'>{club.name}</p>
                </div>
            </div>

            <p className=' leading-[30px] text-secondary  my-10'>{club.content}</p>
        </motion.div>
    )
}

export default ClubsCard
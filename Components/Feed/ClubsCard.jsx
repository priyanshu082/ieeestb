import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const ClubsCard = ({ index, club }) => {
    return (
        <motion.div className='flex flex-col px-5 py-10 rounded-[20px] md:mr-10 sm:mr-5 mr-0 my-5 clubs-card'>

            <div className='flex flex-col justify-center items-center'>
                <Image className='rounded-3xl' src={club.image} alt={club.name} width={100} height={100} />
                <div className='mt-[10px]'>
                    <a className=' cursor-pointer font-poppins font-bold text-[22px] leading-[32px] text-[#915eff]'>{club.name}</a>
                </div>
            </div>

            <p className='font-poppins leading-[30px] text-secondary my-10'>{club.content}</p>
        </motion.div>
    )
}

export default ClubsCard
'use client'
import About from '@/src/Components/Feed/About'
import IEEEAMU from '@/src/Components/Feed/IEEEAMU'
import IEEEClubs from '@/src/Components/Feed/IEEEClubs'
import Message from '@/src/Components/Feed/Message'
import Mission from '@/src/Components/Feed/Mission'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div className='mt-[40px]' >
       <div>
      <IEEEAMU/>
      </div>  
      <div className='flex flex-col gap-[100px]'>
      <About/>
      <Mission/>
      <Message/>
      <IEEEClubs/>
      </div>
    </motion.div>
  )
}

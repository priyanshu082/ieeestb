'use client'
import About from '@/Components/Feed/About'
import IEEEAMU from '@/Components/Feed/IEEEAMU'
import IEEEClubs from '@/Components/Feed/IEEEClubs'
import Message from '@/Components/Feed/Message'
import Mission from '@/Components/Feed/Mission'
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

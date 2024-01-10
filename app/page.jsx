'use client'
import About from '@/Components/Feed/About'
import IEEEClubs from '@/Components/Feed/IEEEClubs'
import Message from '@/Components/Feed/Message'
import Mission from '@/Components/Feed/Mission'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div className='h-[1000px] py-[30px] flex flex-col' >
      <About/>
      <Mission/>
      <Message/>
      <IEEEClubs/>
    </motion.div>
  )
}

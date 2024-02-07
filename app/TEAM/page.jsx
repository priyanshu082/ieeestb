'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Team from '@/Components/TEAM/Team'

const page = () => {
  return (
    <motion.div className=' min-h-[1000px]'>
      <Team/> 
    </motion.div>
  )
}
export default page
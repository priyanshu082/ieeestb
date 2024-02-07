'use client'
import React from 'react'
// import { motion } from 'framer-motion'
import { items,handles } from './data'
import Image from 'next/image'
import logo from '../Navbar/nav-img/ieee mb white png.png'

const Footer = () => {
  return (
    <section className={`mt-[40px] flex flex-col violet-gradient p-[10px] rounded-2xl bg-transparent mb-[40px] mx-[10px] font-poppins overflow-hidden`}>

      <div className='flex flex-col lg:flex-row justify-between items-center '>

         <Image src={logo} alt="logo" className='lg:mb-[20px] h-[45px] w-[140px] md:h-[60px] md:w-[160px] lg:h-[70px] lg:w-[200px] lg:ml-[20px]'/>
      
        <div className='h-[140px] flex flex-col flex-wrap gap-2 md:gap-6 lg:gap-4 object-contain lg:mr-[120px] mt-[30px] lg:mt-[0px] overflow-hidden md:overflow-visible '>
          {items.map((footerLink,index) => (
            <a key={index} href={footerLink.link} target="_blank" rel="noopener noreferrer">
              <span className='text-secondary text-[14px] md:text-[14px] lg:text-[15px] xl:text-[17px] hover:text-white cursor-pointer font-bold'>  
                {footerLink.name}
              </span>
            </a>
          ))}
        </div>
      </div>
     
<div className=' flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-white'>
  <p className='font-poppins font-medium text-[14px] lg:text-[18px] leading-[27px] text-white'>
  2023. All Rights Reserved.
  </p>

  <div className='flex flex-row md:mt-0 mt-6'>
  {handles.map((social,index)=>(
  <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
  <Image key={index} src={social.icon} alt={social.name} className={`${index !== handles.length-1 ? "mr-6" : "mr-2"} h-[20px] w-[20px] lg:h-[25px] lg:w-[25px] items-center`}/>
  </a>
))}
  </div>
</div>
    </section>
  )
}

export default Footer
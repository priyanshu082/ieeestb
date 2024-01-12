import React from 'react'
import { motion } from 'framer-motion'
import { items,handles } from './data'
import Image from 'next/image'
import logo from '../Navbar/nav-img/ieee mb white png.png'

const Footer = () => {
  return (
    <section className={`mt-[40px] flex flex-col violet-gradient p-[10px] rounded-2xl bg-transparent mb-[40px] mx-[10px] font-poppins`}>

      <div className='flex flex-col lg:flex-row justify-around items-center '>

         <Image src={logo} alt="logo" height={100} width={200}/>
      
        <div className='h-[140px] flex flex-col flex-wrap lg:gap-4 gap-x-[40px]'>
          {items.map((footerLink,index) => (
            <div key={index} className="">
              <span className='text-secondary hover:text-white cursor-pointer font-bold'>  
                {footerLink.name}
              </span>
            </div>
          ))}
        </div>
      </div>
     
<div className=' flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-white'>
  <p className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
  2021 HooBank. All Rights Reserved.
  </p>

  <div className='flex flex-row md:mt-0 mt-6'>
{handles.map((social,index)=>(
  <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
  <Image key={index} src={social.icon} alt={social.name} width={30} height={30} className={`${index !== handles.length-1 ? "mr-6" : "mr-2"}`}/>
  </a>
))}
  </div>
</div>
      
    </section>
  )
}

export default Footer
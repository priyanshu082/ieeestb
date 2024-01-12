import React from 'react'
import { motion } from 'framer-motion'
import { items,handles } from './data'

const Footer = () => {
  return (
    <section className={` flex-col mr-[60px] bg-transparent`}>
      <div className={` md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          {/* <img src={logo} alt="logo" className="w-[266px] h-[72px] object-contain" /> */}
          <p className={` mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {items.map((footerLink,index) => (
            <div key={index} className="flex flex-col ss:my-0 my-4min-w-[150px] text-[19px] leading-[27px]">
              <h4>
                {footerLink.title}
              </h4>
              <ul className='list-none mt-4'>
                {/* {footerLink.links.map((link, index) => (
                  <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"}`}>
                    {link.name}
                  </li>
                ))} */}
              </ul>
            </div>
          ))}
        </div>
      </div>
<div className=' flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-white'>
  <p className='font-poppins font-medium text-[18px] leading-[27px] text-dimWhite'>
  2021 HooBank. All Rights Reserved.
  </p>

  <div className='flex flex-row md:mt-0 mt-6'>
{handles.map((social,index)=>(
  <img key={index} src={social.icon} alt={social.id} className={`w-[21px] h-[21px object-contain cursor-pointer ${index !== handles.length-1 ? "mr-6" : "mr-0"}`}/>
))}
  </div>
</div>
      
    </section>
  )
}

export default Footer
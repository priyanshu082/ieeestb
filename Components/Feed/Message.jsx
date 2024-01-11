import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motion'
import Image from 'next/image'
import ZaidSirPik from './img/Zaid-sir.png'
import SectionWrapper from '../../HOC/SectionWrapper'

const Message = () => {
  return (
    <motion.div
      variants={textVariant(1)}
      className='flex flex-col lg:flex-row items-center mt-[30px] font-poppins'>

      <div className='flex flex-col flex-1'>
        <div className=' violet-gradient text-[15px] md:text-[20px] rounded-2xl w-fit pl-[10px] pr-[20px] py-[3px] md:pl-[10px] '>
          <span className=' text-white-100 font-extrabold font-poppins '>MESSAGE FROM BRANCH COUNSELLOR</span>
          <span className=' text-[#915eff] font-extrabold'>  Mr. Mohd. Zaid</span>
        </div>

        <div className='text-white flex flex-col mt-[20px] gap-4 pl-[10px] font-poppins'>
          <p>
            I am glad to pen for the IEEE Student Branch of Zakir Hussain College of Engineering and Technology, AMU. IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.
          </p>
          <p>
            The student branch in collaboration with other affinity groups, has been organizing several tech conferences, competitions, workshops, and seminars. The newsletter highlights the various events, awards, and recognitions that took place, thus making it a rewarding experience for the readers.
          </p>
          <p>
            I congratulate the chairs, office bearers, and volunteers who have given their utmost dedication, time, and expertise in maintaining one of the most vibrant and outshining clubs at AMU.
          </p>
        </div>
      </div>

      {/* content and photo */}
      <div className=' flex flex-1 mt-[30px] lg:mt-[20px] '>
        <Image className='my-[0px] mx-[auto] rounded-2xl' src={ZaidSirPik} height={300} width={300} />
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Message, "message")
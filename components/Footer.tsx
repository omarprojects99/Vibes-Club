import { footer } from 'framer-motion/client'
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from './Data'

const Footer = () => {
  return (
   <footer className='w-full mb-[100px] pb-10 md:mb-5' id='contact'>
   
    <div className='flex flex-col items-center'>
     <h1 className='heading lg:max-w[45vw]'>
       Are you ready to <span className='text-purple'>grow </span>
        beyond limits?
     </h1>
     <p  className='text-white-200 md:mt-10 my-5 text-center'>
       Let’s connect today and find the best way to reach our goals.
     </p>
     <div className="relative bg-[url('/collected.png')] bg-cover bg-center bg-no-repeat w-full h-[800px] flex justify-center items-center">
       <a href="mailto:omarbenhajsaid1@gmail.com">
          <MagicButton title="let's get in touch" icon={<FaLocationArrow/>} position={'right'}

          />
       </a>
     </div>
    </div>
    <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>
            copyright © 2026 omar
        </p>
        <div className='flex items-center md:gap-3
        gap-6'
        >
            {
                socialMedia.map((profile) =>(
                    <a key={profile.id} href={profile.link} target="_blank" rel="noopener noreferrer" className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-100'>
                        <img src={profile.img}  width={20} height={20} />
                    </a>

                ) )}
        </div>
    </div>

   </footer>
  )
}

export default Footer
import React, { useEffect, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { motion} from 'framer-motion'



const MobileNav = () => {
    const [nav, setNav] = useState(false)

    useEffect(() => {
        AOS.init({duration: 3000});
      }, [])



      const easing = [0.6, -0.05, 0.01, 0.99]

      const stagger = {
        animate: {
          transition: {
            staggerChildren: 0.05
          }
        }
      };


      const fadeInUp = {
          initial: {
              y: 60,
              opacity: 0,
          },
          animate: {
              y: 0,
              opacity: 1,
              transition: {
                  duration: .6,
                  ease: easing
              }
          }
      }
      





  return (
    <motion.div exit={{opacity: 0}} className='w-[95%] nav text-4xl fixed justify-end items-end  z-50 flex'> 
        <div className={` flex duration-1000 w-30  justify-end items-end`} onClick={ () => setNav(!nav)}> 
            {nav ? <XMarkIcon className='z-50  w-10 h-10  text-yellow-500 justify-center' /> : <Bars3Icon className='z-50 xl:text-yellow-500 md:text-black flex justify-start w-10 h-10 ' />}
          </div>
          <motion.div variants={stagger}  >
             <nav className=''>
              <motion.ul variants={fadeInUp} className={`${nav ? ['menu '].join('') : ''} hidden `}>
                <li data-aos="flip-up" data-aos-offset="0" data-aos-delay="120" data-aos-duration="9000"  className='xl:text-4xl text-xl hover:animate-bounce font-bold uppercase hover:text-red-500 duration-500 icon'><Link href="/">Home</Link></li>
                <li data-aos="flip-up" data-aos-offset="0" data-aos-delay="120" data-aos-duration="9000" className='xl:text-4xl text-xl hover:animate-bounce font-bold uppercase hover:text-orange-500 duration-500 icon'><Link href="/Work">Work</Link></li>
                <li data-aos="flip-up" data-aos-offset="0" data-aos-delay="120" data-aos-duration="9000" className='xl:text-4xl text-xl hover:animate-bounce font-bold uppercase hover:text-green-500 duration-500 icon'><Link href="/About">About</Link></li>
                <li data-aos="flip-up" data-aos-offset="0" data-aos-delay="120" data-aos-duration="15000" className='xl:text-4xl text-xl hover:animate-bounce font-bold uppercase hover:text-blue-500 duration-500 icon'><Link href="/Contact">Contact</Link></li>
              </motion.ul>
             </nav>
          </motion.div>
    </motion.div>
  )
}

export default MobileNav
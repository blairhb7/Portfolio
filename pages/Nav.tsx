import React, { useState } from 'react'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, HomeIcon, PaperAirplaneIcon, CodeBracketIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import { AiFillBehanceCircle, AiFillGithub, AiFillLinkedin,  } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import Link from 'next/link';
import { motion} from 'framer-motion'

const Nav = () => {

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
    <motion.div variants={stagger}  exit={{opacity: 0}} initial='initial' animate='animate'>
        <motion.div variants={stagger} className="bg-gray-400 z-30 backdrop-blur-lg bg-opacity-30  xl:flex flex-col  fixed backdrop-opacity-90 xl:w-20 h-screen hidden w-10">
           <Link href={'/'}><FaReact className="xl:w-12 xl:h-12 w-4 h-4 text-cyan-500 xl:m-4 m-3 cursor-pointer hover:rotate-180 duration-500" /></Link> 
           <motion.div variants={fadeInUp} className="flex flex-col justify-center items-center gap-4 mt-14">
            <Link href={'/'}><HomeIcon className='xl:w-6 xl:h-6 w-4 h-4 items-center justify-center flex text-black icon' /></Link>
            <Link href={'/Projects'}><CodeBracketIcon className='xl:w-6 xl:h-6 w-4 h-4 items-center justify-center flex text-red-500 cursor-pointer icon' /></Link>
            <Link href={'/About'}><PaperAirplaneIcon className='xl:w-6 xl:h-6 w-4 h-4 items-center justify-center flex text-green-500 cursor-pointer icon' /></Link>
            <Link href={'/Contact'}><DevicePhoneMobileIcon className='xl:w-6 xl:h-6 w-4 h-4 items-center justify-center flex text-blue-500 cursor-pointer icon' /></Link>
           </motion.div>
           <motion.div variants={fadeInUp} className="flex flex-col justify-end items-center gap-2 mt-64">
            <Link href={'https://github.com/blairhb7'}><AiFillGithub className='xl:w-8 xl:h-8 w-4 h-4 items-center justify-center flex cursor-pointer icon'/></Link>
            <Link href={'https://www.linkedin.com/in/blair-chappell-23818420a/'}><AiFillLinkedin className='xl:w-8 xl:h-8 w-4 h-4 items-center justify-center flex cursor-pointer icon'/></Link>
            <Link href={'https://www.behance.net/'}><AiFillBehanceCircle className='xl:w-8 xl:h-8 w-4 h-4 items-center justify-center flex cursor-pointer icon'/></Link>
           </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Nav
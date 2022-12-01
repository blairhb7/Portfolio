import React, { useEffect } from 'react'
import MobileNav from './MobileNav'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { motion} from 'framer-motion'
import Nav from './Nav';
import {  DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import { FaEnvelope, FaPhoneSquare } from "react-icons/fa";


const Contact = () => {

useEffect(() => {
        AOS.init({duration: 3000});
      }, [])



  return (
    <motion.div exit={{ scaleY: 0}} initial={{ scaleY: 0}} animate={{ scaleY: 1}} transition={{duration:0.5}}>
        <Head>
        <title>Blair Chappell Portfolio</title>
        <link rel="icon" href="/React-icon..png" />
      </Head>
        <Nav />
        <MobileNav />
        <div className="grid grid-cols-1 w-screen circle bg-no-repeat bg-center bg-cover">
            <div className="flex flex-col justify-center h-screen   w-screen">
                <h1 className="xl:text-6xl text-4xl font-extrabold flex justify-center items-center uppercase">Let's connect!</h1>
                <div className="xl:flex justify-center">
                <div className="flex justify-center xl:p-6 p-1">
                    <FaPhoneSquare className="w-8 h-8 mx-4 text-white z-10 lg:flex hidden" />
                    <p className="text-white xl:text-3xl items-center justify-center flex font-bold hover:text-yellow-500 hover:animate-bounce">Phone:<a href="tel:17073154173">+1 707-315-4173</a></p>
                </div>
                <div className="flex justify-center xl:p-6 p-1">
                    <FaEnvelope className="w-8 h-8 mx-4 text-white z-10 lg:flex hidden" />
                    <p className="text-white xl:text-3xl items-center justify-center flex font-bold mr-2 hover:text-yellow-500 hover:animate-bounce">Email:<a href="mailto:blairhb7@yahoo.com">BlairHb7@yahoo.com</a></p>
                </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Contact
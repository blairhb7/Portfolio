import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { motion} from 'framer-motion'

const LandingPage = () => {

  useEffect(() => {
    AOS.init({duration: 3000});
  }, [])

  return (
    <motion.div exit={{ scaleY: 0}} initial={{ scaleY: 0}} animate={{ scaleY: 1}} transition={{duration:0.5}}  className='h-screen'>
      <Nav />
      <MobileNav />
      <div className=" flex flex-col justify-center items-center h-[800px] xl:h-screen landingpage">
        <h2  data-aos="fade" data-aos-offset="200" data-aos-delay="120" data-aos-duration="9000" className="uppercase flex font-cinzel text-lg  xl:text-2xl">Blair Chappell</h2>
        <h1 data-aos="fade-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="5000" className="uppercase flex font-bold text-2xl md:text-6xl xl:text-7xl">Frontend Developer</h1>
        <div data-aos="flip-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="5000" className="flex xl:text-md font-medium ">
          <Link href={'/Projects'} ><a href="" className="uppercase hover:text-orange-500 duration-500 px-3 ">Projects</a></Link>
          <Link href={'/About'} ><a href="" className="uppercase hover:text-yellow-500 duration-500 px-3 ">About</a></Link>
          <Link href={'/Contact'}><a href="" className="uppercase hover:text-red-500 duration-500 px-3 ">Contact</a></Link>
        </div>
      </div>
    </motion.div>
  )
}

export default LandingPage
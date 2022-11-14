import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from './Nav';
import { FaBars} from "react-icons/fa";
import MobileNav from './MobileNav';
import { motion, AnimatePresence} from 'framer-motion'
import { url } from 'inspector';



const Projects = () => {

    

    const [selectedId, setSelectedId] = useState(null)
    
    useEffect(() => {
        AOS.init({duration: 3000});
      }, [])
    
   

  return (
 

  
     <motion.div   className=''>
        <Nav />
        <MobileNav />
        <div className=" grid xl:grid-cols-3 2xl:grid-cols-2">
      
          <div className="xl:bg-white xl:grid xl:h-[900px] xl:justify-center xl:w-[600px] lg:w-[400px] 2xl:w-[800px] bg-no-repeat h-screen xl:bg-center Movement xl:fixed hidden">
            <h1 className="text-black flex  justify-center text-3xl font-bold  text items-center">RECENT PROJECTS</h1>
          </div>
         
         <div className="">
             
          </div>
          <div className="  xl:grid xl:grid-cols-1 2xl:grid-cols-3 animate-in fade-in gap-1 xl:rounded-sm col-span-2 xl:col-span-2  overflow-hidden ">
            <Link className='hover:scale-105' href={'/TravelPage'}><motion.div data-aos="flip-up" data-aos-offset="0" data-aos-delay="120" data-aos-duration="9000"  className="2xl:col-span-1 xl:col-span-3 xl:h-[400px] xl:rounded-lg  sm:h-80 h-40 flex justify-center travel bg-cover cursor-pointer gap-2 hover:scale-105 mr-1 "></motion.div></Link>
             <Link className='overflow-hidden hover:scale-105 ' href={'/NFTPage'}><motion.div data-aos="flip-up" data-aos-offset="0" data-aos-delay="180" data-aos-duration="9000" className="2xl:col-span-1 2xl:h-[400px] xl:rounded-lg bg-gradient-to-r from-indigo-500 to flex h-40 sm:h-80  nft bg-center to-blue-400   col-span-1 cursor-pointer gap-2 mr-1 "></motion.div></Link>
            <Link className='overflow-hidden hover:scale-105 ' href={'/BlogPage'}><motion.div data-aos="flip-up" data-aos-offset="0" data-aos-delay="200" data-aos-duration="9000" className="2xl:col-span-1 2xl:h-[400px] col-span-3 xl:rounded-lg  justify-center h-40  bg-cover sm:h-80 flex movement bg-blue-500 cursor-pointer gap-2 mr-1 "></motion.div></Link>
            <Link className='overflow-hidden hover:scale-105 ' href={'/FilmduoPage'}><motion.div data-aos="flip-up" data-aos-offset="0" data-aos-delay="190" data-aos-duration="9000" className="2xl:col-span 2xl:h-[400px]-1 xl:col-span-3 xl:rounded-lg  justify-center h-60  sm:h-80 flex filmduo bg-black cursor-pointer gap-2 mr-1 "></motion.div></Link>           
          </div>
        </div>
    </motion.div> 
  )
}

export default Projects



/*  <motion.div   className='h-screen'>
        <Nav />
        <MobileNav />
        <div className=" grid grid-cols-3">
      
          <div className="xl:bg-white xl:grid h-[900px] xl:justify-center bg-center Movement   hidden">
            <h1 className="text-black flex  justify-center text-4xl font-bold pl-8  items-center">RECENT PROJECTS</h1>
          </div>
         
         <div className=" grid xl:grid-cols-1 animate-in fade-in gap-1 rounded-sm grid-cols-1 xl:col-span-2 h-full overflow-hidden ">
             <Link className='hover:scale-105' href={'/TravelPage'}><motion.div data-aos="flip-up" data-aos-offset="0" data-aos-delay="120" data-aos-duration="9000"  className="xl:col-span-3 xl:h-[400px] rounded-lg  h-[600px] sm:h-80  flex justify-center travel bg-cover cursor-pointer  hover:scale-105 "></motion.div></Link>
             <Link className='overflow-hidden hover:scale-105 ' href={'/NFTPage'}><motion.div data-aos="flip-up" data-aos-offset="0" data-aos-delay="180" data-aos-duration="9000" className=" rounded-lg bg-gradient-to-r from-indigo-500 to flex h-40 sm:h-80  nft bg-center to-blue-400  w-full col-span-1 cursor-pointer  "></motion.div></Link>
            <Link className='overflow-hidden hover:scale-105 ' href={'/BlogPage'}><motion.div data-aos="flip-up" data-aos-offset="0" data-aos-delay="200" data-aos-duration="9000" className="col-span-3 rounded-lg  justify-center h-40  bg-cover sm:h-80 flex movement bg-blue-500 cursor-pointer  "></motion.div></Link>
            <Link className='overflow-hidden hover:scale-105 ' href={'/FilmduoPage'}><motion.div data-aos="flip-up" data-aos-offset="0" data-aos-delay="190" data-aos-duration="9000" className="xl:col-span-3 rounded-lg  justify-center h-80  sm:h-80 flex filmduo bg-black cursor-pointer  "></motion.div></Link>
          </div>
  
        </div>*/
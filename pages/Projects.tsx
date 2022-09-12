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
        <div className="">
            <div className=" grid xl:grid-cols-1 animate-in fade-in  overflow-hidden grid-cols-1  ">
             <Link className='overflow-hidden' href={'/TravelPage'}><motion.div data-aos="flip-up" data-aos-offset="0" data-aos-delay="120" data-aos-duration="9000"  className="col-span-1 xl:h-[720px] h-40 sm:h-80 w-full flex justify-center travel bg-cover cursor-pointer  bg-yellow-500  "></motion.div></Link>
             <Link href={'/NFTPage'}><motion.div data-aos="flip-up" data-aos-offset="0" data-aos-delay="120" data-aos-duration="9000" className=" bg-gradient-to-r from-indigo-500 to flex h-40 sm:h-80  nft bg-center to-blue-400 xl:h-[560px] w-full col-span-1 cursor-pointer  "></motion.div></Link>
            <Link href={'/BlogPage'}><motion.div data-aos="flip-up" data-aos-offset="0" data-aos-delay="120" data-aos-duration="9000" className="col-span-1 xl:h-[560px] w-screen justify-center h-40  sm:h-80 flex movement bg-blue-500 cursor-pointer  "></motion.div></Link>
            </div>
        </div>
    </motion.div> 
  )
}

export default Projects
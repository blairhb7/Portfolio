import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from '../Components/Nav';
import { FaBars} from "react-icons/fa";
import MobileNav from '../Components/MobileNav';
import { motion} from 'framer-motion'




const Work = () => {
    useEffect(() => {
        AOS.init({duration: 3000});
      }, [])
    


  return (
    <motion.div  className="flex">
        <Nav />
        <div className="grid grid-cols-1 h-screen w-screen bg-gray-200 ">
            <MobileNav />
            <motion.div exit={{ scale: 0}} initial={{ scale: 0}} animate={{  x: 0, y: 0, scale: 1, rotate:0,}} transition={{duration:0.9}}  id='rightside' className="grid  movement grid-cols-1 gap-6  xl:gap-40 my-4 ">
               <div className="grid xl:grid-cols-2 xl:h-[350px] overflow-hidden shadow-2xl mt-4 mx-4 xl:mx-20">
                <div className="flex flex-col pt-2 bg-gray-400 border-gray-200  bg-cover bg-no-repeat backdrop-blur-lg bg-opacity-30 backdrop-opacity-90">
                    <h1 data-aos="flip-up" data-aos-offset="0" data-aos-delay="120" data-aos-duration="9000" className="px-6 uppercase xl:text-5xl text-base xl:px-36 font-bold flex">travel life</h1>
                    <p data-aos="fade" data-aos-offset="0" data-aos-delay="120" data-aos-duration="9000" className="px-6  py-2 xl:px-20 xl:text-lg text-xs xl:py-6 text-gray-700">Travel life is a travel guide website built from scratch by me. the site is built with Next JS, Typescript, Sanity, and style with Tailwind CSS. Each travel destination is render by sanity backend SSR.</p>
                    <div className="flex items-center justify-center mb-4 xl:mb-6 ">
                        <img src="/next-js.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4" />
                        <img src="/sanity.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4" />
                        <img src="/tailwind-css.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4" />
                        <img src="/typescript-icon.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4" />
                    </div>
                    <Link href={'https://travel-life-psi.vercel.app/'} ><button className="w-full p-3 h-full text-white xl:text-3xl  bg-yellow-500 hover:bg-black duration-500 uppercase ">Visit site</button></Link>
                </div>
                <Link href={'https://travel-life-psi.vercel.app/'}><img data-aos="flip-up" data-aos-offset="0" data-aos-delay="120" data-aos-duration="9000" src="travel.png" alt="" className="cursor-pointer h-full w-full hover:scale-110" /></Link>
               </div>
               <div className="grid xl:grid-cols-2 xl:h-[350px] shadow-2xl mx-4 xl:mx-20">
                <div className="flex flex-col pt-2 bg-gray-400 border-gray-200  bg-cover bg-no-repeat backdrop-blur-lg bg-opacity-30 backdrop-opacity-90">
                    <h1 data-aos="flip-up" data-aos-offset="0" data-aos-delay="120" data-aos-duration="9000" className="px-6 uppercase xl:text-4xl text-base xl:px-36 font-bold flex">Movement Blog</h1>
                    <p data-aos="fade" data-aos-offset="0" data-aos-delay="120" data-aos-duration="9000" className="px-6  py-2 xl:px-20 xl:text-lg text-xs xl:py-6 text-gray-700">Movement is a blog built with Next-js, TypeScript, and style by Tailwind, with Sanity working the back-end Server Side Rendering. Each article is render out using Sanity, that includes titles, pictures, authors, and subject.</p>
                    <div className="flex items-center justify-center mb-4 xl:mb-6 ">
                        <img src="/next-js.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4" />
                        <img src="/sanity.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4" />
                        <img src="/tailwind-css.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4" />
                        <img src="/typescript-icon.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4" />
                    </div>
                    <Link href={'https://nextjs-blog-movement1.vercel.app/'} ><button className="w-full p-3 h-full text-white xl:text-3xl  bg-black hover:bg-blue-500 duration-500 uppercase">Visit site</button></Link>
                </div>
                <Link href={'https://nextjs-blog-movement1.vercel.app/'}><img data-aos="flip-up" data-aos-offset="0" data-aos-delay="120" data-aos-duration="9000" src="movement-thumbnail.png" alt="" className="cursor-pointer h-full w-full " /></Link>
               </div> 
               <div className="grid xl:grid-cols-2 xl:h-[350px] shadow-2xl mx-4 xl:mx-20">
                <div className="flex flex-col bg-gray-400 border-gray-200  bg-cover bg-no-repeat backdrop-blur-lg bg-opacity-30 backdrop-opacity-90 pt-2 ">
                    <h1 data-aos="flip-up" data-aos-offset="0" data-aos-delay="120" data-aos-duration="9000" className="px-6 uppercase xl:text-4xl text-base xl:px-36 font-bold flex">NFT react natvie app</h1>
                    <p data-aos="fade" data-aos-offset="0" data-aos-delay="120" data-aos-duration="9000" className="px-6  py-2 xl:px-20 xl:text-lg text-xs xl:py-6 text-gray-700">This NFT Application was built with React Native along with the Expo Go App. Along with app is a React built Responsive landing page styled by Tailwind CSS.</p>
                    <div className="flex items-center justify-center mb-4 xl:mb-6 ">
                        <img src="/react.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4" />
                        <img src="/javascript-js.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4" />
                        <img src="/tailwind-css.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4" />
                    </div>
                    <Link href={'https://blairnft.netlify.app/'} ><button className="w-full h-full p-3 text-white xl:text-3xl  bg-gradient-to-r from-indigo-500 to to-blue-400 hover:bg-red-400 duration-500 uppercase">Visit site</button></Link>
                </div>
                <Link href={'https://blairnft.netlify.app/'}><img data-aos="flip-up" data-aos-offset="0" data-aos-delay="120" data-aos-duration="9000" src="react native thumbnail.png" alt="" className="cursor-pointer h-full w-full " /></Link>
               </div>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Work
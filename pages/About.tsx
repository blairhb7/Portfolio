import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { motion} from 'framer-motion'

const About = () => {
    useEffect(() => {
        AOS.init({duration: 3000});
      }, [])



  return (
    <motion.div exit={{ scale: 0}} initial={{ scale: 0}} animate={{  x: 0, y: 0, scale: 1, rotate:0,}} transition={{duration:0.9}}  className='blob 2xl:h-screen 2xl:w-screen overflow-hidden bg-no-repeat '>
        <Nav />
        <MobileNav />
        <div className=' flex flex-col md:mx-20 h-[1000px] xl:h-[700px]  xl:justify-center xl:items-center' data-aos="flip-up">
            <div className="shadow-2xl xl:mt-10 xl:m-0 grid grid-cols-1 xl:grid-cols-2 xl:w-[1300px]  md:h-[800px] xl:h-[400px] bg-gray-400 border-gray-200  bg-cover bg-no-repeat backdrop-blur-lg bg-opacity-30 backdrop-opacity-90">
              <div className="h-[300px] xl:pt-0 pt-6 md:pt-16 xl:h-full">
                <h2 className='flex flex-col items-center justify-center xl:pt-16 text-5xl pb-4 xl:text-black text-white font-bold font-outline uppercase xl:p-8'>skills</h2>
                <div className="grid grid-cols-4 xl:w-80 md:w-[600px] mx-auto pt-1">
                <img className='w-20 mx-auto hover:animate-spin' src="/react.svg" alt="" />
                <img className='w-16 mx-auto hover:animate-bounce' src="/next-js.svg" alt="" />
                <img className='w-20 h-20 mx-auto icon' src="/tailwind-css.svg" alt="" />
                <img className='w-26 h-20 mx-auto hover:animate-spin' src="/sanity.svg" alt="" />
                <img className='w-12 mx-auto icon' src="/html-5.svg" alt="" />
                <img className='w-12 mx-auto icon' src="/css-3.svg" alt="" />
                <img className='w-16 h-20 mx-auto hover:animate-spin' src="/javascript-js.svg" alt="" />
                <img className='w-16 h-20 mx-auto hover:animate-spin' src="/typescript-icon.svg" alt="" />
                <img className='w-16 h-20 mx-auto hover:animate-bounce' src="/npm.svg" alt="" />
                <img className='w-16 h-20 mx-auto hover:animate-bounce' src="/git.svg" alt="" />
                </div>
              </div>
              <div className="grid col-span-1  break-inside-auto ">
                <h1 className='flex items-center xl:pt-8 flex-col overflow-hidden xl:text-black justify-center uppercase text-white font-bold text-5xl mt-8 font-outline'>About</h1>
                <p className='flex flex-col flex-wrap break-inside-auto text-sm p-4 xl:items-center '>Hi, my name is Blair Chappell, I am a front-end developer. 
                For a few years now I've been making websites with HTML, CSS, and JavaScript.
                 But receantly I've been diving into more complex technologies like React, Next-js, and Typescript. 
                 As this field continues to change, I am always still learning. Which I enjoy because I like to continually get better at whatever I set my heart and mind to! 
                 Below is some personal info about me to get a better understaning of who I am.
                 <br/>
                 <br/>
                  I'm a big Golden State Warriors fan, I really love basket ball.
                   I have a huge love for the outdoors, and I like to backpack in the wilderness when I the have free time.
                    I consider myself a social person who is easy to talk to, and I enjoy learning about other people's intrests. 
                    Like many I have a huge love for Music and Movies! A huge passion of mine is film making and creating content. 
                    I own a company called FilmDuo where I've made many diffrent types of videos for commercials, weddings, and other events!
                     That's a little bit of information on me, looking foward to connecting!</p>
              </div>
            </div>
       </div>
    </motion.div>
  )
}

export default About
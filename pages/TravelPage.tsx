import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'

const TravelPage = () => {
  return (
    <div>
        <Nav />
        <MobileNav />
        <div className="grid xl:grid-cols-2 grid-cols-2 h-screen">
                <div className="flex justify-center">
                    <div className="flex flex-col w-full h-full bg-gray-400  border-gray-200  justify-center items-center  bg-cover bg-no-repeat backdrop-blur-lg bg-opacity-30 backdrop-opacity-90">
                        <h1 className="px-6 uppercase xl:text-6xl text-2xl  text-left font-bold flex">travel life</h1>
                        <p  className=" xl:w-[600px] xl:px-20 px-6 py-6 xl:text-lg leading-4 whitespace-pre-line text-xs xl:py-6 text-gray-700">
                            Travel life is a travel guide website built from scratch by me. 
                        the site is built with Next JS, Typescript, Sanity, and style with Tailwind CSS. 
                        Each travel destination is render by sanity backend SSR.<br/><br/>

                        Travel life landing page is a full screen mobile freindly background video. On the right hand side is a drop down menu with feature destinations.
                        As mention before, each destination is render by sanity. That includes images, titles, and posts.<br/><br/>

                        During this build I learn how to optimize Sanity as a backend feature and learn how to optimize the layout for multiple screen sizes.
                        </p>
                        <div className="flex items-center justify-center mb-4 xl:mb-6 ">
                            <img src="/next-js.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4 md:w-7 md:h-7" />
                            <img src="/sanity.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4 md:w-7 md:h-7" />
                            <img src="/tailwind-css.svg" alt="" className="xl:w-8 l:h-8 mx-2 h-4 w-4 md:w-7 md:h-7" />
                            <img src="/typescript-icon.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4 md:w-7 md:h-7" />
                        </div>
                    </div>
                </div>
                <div className="ny bg-center h-full w-full flex justify-center items-center">
                    <Link href={'https://travel-life-psi.vercel.app/'}><button className="uppercase text-4xl border-2 font text-yellow-500 bg-gray-400 backdrop-blur-lg bg-opacity-30 backdrop-opacity-90 border-yellow-500 h-10 p-10 items-center flex">Visit site</button></Link>
                </div>
        </div>
    </div>
  )
}

export default TravelPage
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'

const Sunfish = () => {
  return (
    <div>
        <Head>
        <title>Blair Chappell Portfolio</title>
        <link rel="icon" href="/React-icon..png" />
      </Head>
        <Nav />
        <MobileNav />
        <div className="grid xl:grid-cols-2 grid-cols-2 h-screen">
                <div className="flex justify-center">
                    <div className="flex flex-col w-full h-full bg-gray-400  border-gray-200  justify-center items-center  bg-cover bg-no-repeat backdrop-blur-lg bg-opacity-30 backdrop-opacity-90">
                        <h1 className="px-6 uppercase xl:text-6xl text-2xl  text-left font-bold flex">Sun Fish</h1>
                        <p  className=" xl:w-[600px] xl:px-20 px-6 py-6 xl:text-lg leading-4 whitespace-pre-line text-xs xl:py-6 text-gray-700">
                           Hired by Sun Fish to create a beautiful website for Sun Fish Restaurant. Built with Next JS, Sun Fish Features Multiple pages
                           including, a landing page, menu, classes, and slide in check out cart.<br/><br/>

                        Sun Fish Menu page features, a responsive layout, along with add to cart function that updates instantly as you add more items
                        to your cart. Click on the the cart icon and a slide in check out cart will appear, along with each item you added and the ammount.
                        A remove button was added to easily remove any item out of your cart.<br/><br/>

                        During this build I learned how to apply JavaScript lodgic to add updating check out cart feature. Also deepen my knowledge with TypeScript, and Tailwind CSS. 
                        </p>
                        <div className="flex items-center justify-center mb-4 xl:mb-6 ">
                            <img src="/next-js.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4 md:w-7 md:h-7" />
                            <img src="/javascript-js.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4 md:w-7 md:h-7" />
                            <img src="/tailwind-css.svg" alt="" className="xl:w-8 l:h-8 mx-2 h-4 w-4 md:w-7 md:h-7" />
                            <img src="/typescript-icon.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4 md:w-7 md:h-7" />
                        </div>
                    </div>
                </div>
                <div className="sunfishimg  bg-center h-full w-full flex justify-center items-center">
                    <Link href={'https://sun-fish.vercel.app/'}><button className="uppercase xl:text-4xl border-2 font text-yellow-500 bg-gray-400 backdrop-blur-lg bg-opacity-30 backdrop-opacity-90 border-yellow-500 h-10 xl:p-10 p-5 items-center flex">Visit site</button></Link>
                </div>
        </div>
    </div>
  )
}

export default Sunfish
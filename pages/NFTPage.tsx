import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'

const NFTPage = () => {
  return (
    <div>
      <Head>
        <title>Blair Chappell Portfolio</title>
        <link rel="icon" href="/React-icon..png" />
      </Head>
         <Nav />
        <MobileNav />
        <div className="grid xl:grid-cols-2 grid-cols-2 h-screen">
                <div className="flex justify-center w-screen">
                <div className="nftphone h-full w-full flex bg-center justify-center items-center">
                    <Link href={'https://blairnft.netlify.app/'}><button className="uppercase xl:text-4xl border-2 text-yellow-500 bg-gray-400 backdrop-blur-lg bg-opacity-30 backdrop-opacity-90 border-yellow-500 font-bold h-10 xl:p-10 p-5 items-center flex">Visit site</button></Link>
                </div>
                    <div className="flex flex-col w-full h-full bg-gray-400  border-gray-200  justify-center items-center  bg-cover bg-no-repeat backdrop-blur-lg bg-opacity-30 backdrop-opacity-90">
                        <h1 className="px-6 uppercase xl:text-4xl text-2xl  text-left font-bold flex">NFT react native app</h1>
                        <p  className=" xl:w-[600px] xl:px-20 px-6 py-6 xl:text-lg leading-4 whitespace-pre-line text-xs xl:py-6 text-gray-700">
                        The NFT Reactive Native App was built with React Native along with the Expo Go App. Also included is a Responsive landing page built with React and styled by Tailwind CSS.
                        <br /><br />
                        This NFT Application is mock app that let you search through the array of NFT's listed. Built with the expo go app, this react native application simulates a simple but modern NFT app.


                        </p>
                        <div className="flex items-center justify-center mb-4 xl:mb-6 ">
                        <img src="/react.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4 md:w-7 md:h-7" />
                        <img src="/javascript-js.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4 md:w-7 md:h-7" />
                        <img src="/tailwind-css.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4 md:w-7 md:h-7" />
                        </div>
                    </div>
                </div>
                
        </div>
    </div>
  )
}

export default NFTPage
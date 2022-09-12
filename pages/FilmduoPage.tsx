import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'

const FilmduoPage = () => {
  return (
    <div>
        <Nav />
        <MobileNav />
        <div className="grid xl:grid-cols-2 grid-cols-1 h-screen">
                <div className="flex justify-center">
                    <div className="flex flex-col w-full h-full bg-gray-400  border-gray-200  justify-center items-center  bg-cover bg-no-repeat backdrop-blur-lg bg-opacity-30 backdrop-opacity-90">
                        <h1 className="px-6 uppercase xl:text-6xl text-2xl  text-left font-bold flex">FilmDuo</h1>
                        <p  className=" xl:w-[600px] xl:px-20 px-6 py-6 xl:text-lg leading-4 whitespace-pre-line text-xs xl:py-6 text-gray-700">
                        FilmDuo is a static website that I built to showcase my video production company. The landing page is a responsive grid,
                        that has a hover video feature that plays a video upon hovering over with the mouse. Each video was shot and edited by me. 
                        Each video will play when hover, but will also expand upon clicking on the video. this is made possible with JavaScript.
                        <br/><br/>

                        Film making is one of my passion. FilmDuo website built with HTML, CSS, and JavaScript, is the combination of two of my passions coming together.
                        I design and coded this website from scratch!
                        </p>
                        <div className="flex items-center justify-center mb-4 xl:mb-6 ">
                            <img src="/html-5.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4 md:w-7 md:h-7" />
                            <img src="/css-3.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4 md:w-7 md:h-7" />
                            <img src="/javascript-js.svg" alt="" className="xl:w-8 l:h-8 mx-2 h-4 w-4 md:w-7 md:h-7" />
                        </div>
                    </div>
                </div>
                <div className="filmduo   w-full flex justify-center items-center">
                    <Link href={'http://filmduo.com/index.html'}><button className="uppercase xl:text-4xl border-2 text-black bg-gray-400 backdrop-blur-lg bg-opacity-30 backdrop-opacity-90 border-back font-bold h-10 xl:p-10 p-4 items-center flex">Visit site</button></Link>
                </div>
        </div>
    </div>
  )
}

export default FilmduoPage
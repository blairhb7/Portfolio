import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'

const BlogPage = () => {
  return (
    <div>
         <Nav />
        <MobileNav />
        <div className="grid xl:grid-cols-2 grid-cols-1 h-screen">
                <div className="flex justify-center">
                    <div className="flex flex-col w-full h-full bg-gray-400  border-gray-200  justify-center items-center  bg-cover bg-no-repeat backdrop-blur-lg bg-opacity-30 backdrop-opacity-90">
                        <h1 className="px-6 uppercase xl:text-6xl text-2xl  text-left font-bold flex">Movement Blog</h1>
                        <p  className=" xl:w-[600px] xl:px-20 px-6 py-6 xl:text-lg leading-4 whitespace-pre-line text-xs xl:py-6 text-gray-700">
                        Movement is a blog built with Next-js, TypeScript, and styled by Tailwind, with Sanity working the back-end server side rendering. 
                        Each article is rendered out using Sanity, that includes titles, pictures, authors, and subjects.
                        <br/><br/>

                        A main feature of this Movement blog is not only the SSR but also the comment feature for each post. Using Sanity I was able to add in this
                        comment feature, that will display a comment by a user after approval from the editor using Sanity backend. This page's orignal intention was to emulate the famous blog site Medium.
                        </p>
                        <div className="flex items-center justify-center mb-4 xl:mb-6 ">
                            <img src="/next-js.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4 md:w-7 md:h-7" />
                            <img src="/sanity.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4 md:w-7 md:h-7" />
                            <img src="/tailwind-css.svg" alt="" className="xl:w-8 l:h-8 mx-2 h-4 w-4 md:w-7 md:h-7" />
                            <img src="/typescript-icon.svg" alt="" className="xl:w-8 xl:h-8 mx-2 h-4 w-4 md:w-7 md:h-7" />
                        </div>
                    </div>
                </div>
                <div className="movementvertical bg-center  w-full flex justify-center items-center">
                    <Link href={'https://nextjs-blog-movement1.vercel.app/'}><button className="uppercase xl:text-4xl border-2 text-black bg-gray-400 backdrop-blur-lg bg-opacity-30 backdrop-opacity-90 border-back font-bold h-10 xl:p-10 p-4 items-center flex">Visit site</button></Link>
                </div>
        </div>
    </div>
  )
}

export default BlogPage
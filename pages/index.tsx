import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LandingPage from './LandingPage'
import { motion} from 'framer-motion'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Nav from './Nav';
import MobileNav from './MobileNav';


const Home: NextPage = () => {
  return (

    <motion.div exit={{opacity: 0}} className="w-screen">
      <Head>
        <title>Blair Chappell Portfolio</title>
        <link rel="icon" href="/React-icon..png" />
      </Head>
      <LandingPage />
    </motion.div>
  )
}

export default Home

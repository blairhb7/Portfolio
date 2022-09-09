import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LandingPage from './LandingPage'
import { motion} from 'framer-motion'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Nav from '../Components/Nav';
import MobileNav from '../Components/MobileNav';


const Home: NextPage = () => {
  return (
    <motion.div exit={{opacity: 0}} className="">
      <LandingPage />
    </motion.div>
  )
}

export default Home

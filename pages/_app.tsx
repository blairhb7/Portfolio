import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { motion, AnimatePresence } from "framer-motion"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Nav from '../Components/Nav';
import MobileNav from '../Components/MobileNav';
import { motion} from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
        </AnimatePresence>
}

export default MyApp

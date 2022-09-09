import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LandingPage from './LandingPage'
import { motion} from 'framer-motion'

const Home: NextPage = () => {
  return (
    <motion.div exit={{opacity: 0}} className="">
      <LandingPage />
    </motion.div>
  )
}

export default Home

import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import About from '@/components/About'
import Stats from '@/components/Stats'
import HomeOath from '@/components/HomeOath'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <HomeOath />
    </div>
  )
}

export default Home

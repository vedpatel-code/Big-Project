import React from 'react'
import HeroSection from '../componets/HeroSection'
import Footer from '../componets/Footer'
import Newlatter from '../componets/Newlatter'
import FAQ from '../componets/FAQ'
import CardsPage from '../componets/Card'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <CardsPage />
        <FAQ />
        <Newlatter />
        <Footer />
    </div>
  )
}

export default Home

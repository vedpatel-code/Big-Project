import React from 'react'
import HeroSection from '../componets/HeroSection'
import Footer from '../componets/Footer'
import Newlatter from '../componets/Newlatter'
import Banner from '../componets/Banner'
import FAQ from '../componets/FAQ'
import Cards from '../componets/Cards'

const Home = () => {
  return (
    <div>
        <Banner />
        <HeroSection />
        <Cards />
        <FAQ />
        <Newlatter />
        <Footer />
    </div>
  )
}

export default Home
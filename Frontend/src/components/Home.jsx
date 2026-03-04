import React from 'react'
import  Header from './Header'
import Hero from './Hero'
import Statistics from './Statistics'
import DegreeSection from './DegreeSection'
import Whyedero from './Whyedero'
import UniversitisList from './UniversitisList'
import Footer from './Footer'
const Home = () => {
  return (
    <>
    <div>
        <Header />
        <Hero/>
        <Statistics/>
        <DegreeSection/>
        <UniversitisList/>
        <Whyedero/>
        <Footer/>
    </div>
    </>
  )
}

export default Home
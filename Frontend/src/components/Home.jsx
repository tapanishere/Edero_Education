import React from 'react'
import  Header from './Header'
import Hero from './Hero'
import Statistics from './Statistics'
import DegreeSection from './DegreeSection'
import Whyedero from './Whyedero'
import UniversitisList from './UniversitisList'
import Footer from './Footer'
import AddmissionProcess from './AddmissionProcess'
import CareerValues from './CareerValues'
import Categories from './Categories'
import Testimonials from './Testimonials'
const Home = () => {
  return (
    <>
    <div>
        <Header />
        <Hero/>
        <Statistics/>
        <UniversitisList/>
        <DegreeSection/>
        <Whyedero/>
        <AddmissionProcess/>
        <CareerValues/>
        <Categories/>
        <Testimonials/>
        <Footer/>
    </div>
    </>
  )
}

export default Home
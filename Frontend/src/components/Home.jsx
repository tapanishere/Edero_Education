import React from 'react'
import  Header from './Header'
import Hero from './Hero'
import Statistics from './Statistics'
import Whyedero from './Whyedero'
import UniversitisList from './UniversitisList'
import Footer from './Footer'
import AddmissionProcess from './AddmissionProcess'
import CareerValues from './CareerValues'
import Categories from './Categories'
import Testimonials from './Testimonials'
import FaqSection from './FaqSection'
import Guidance from './Guidance'
import ExecutiveCourses from './ExecutiveCourses'
import DegreeData from './DegreeData'
import Accreditations from './Accreditations'
const Home = () => {
  return (
    <>
    <div>
        <Header />
        <Hero/>
        <UniversitisList/>
        <Statistics/>
        <Accreditations/>
        <DegreeData/>
        <ExecutiveCourses/>
        <Guidance/>
        <Whyedero/>
        <AddmissionProcess/>
        <CareerValues/>
        <Categories/>
        <Testimonials/>
        <FaqSection/>
        <Footer/>
    </div>
    </>
  )
}

export default Home
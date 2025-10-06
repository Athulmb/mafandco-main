import React from 'react'
import HomeHero from '../Components/Home/HomeHero'
import AboutLanding from '../Components/About/AboutLanding'
import PropertyCarousel from '../Components/Home/PropertyCarousel'
import CompanyOverview from '../Components/Home/CompanyOverview'
import ContactForm from '../Components/Contact/ContactForm'
import RealEstateNews from '../Components/Home/RealEstateNews'


const Home = () => {
  return (
   <>
   <HomeHero/>
   <AboutLanding/>
   <PropertyCarousel/>
   <CompanyOverview/>
   <ContactForm/>
   <RealEstateNews/>
   </>
  )
}

export default Home

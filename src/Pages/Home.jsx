import React from 'react'
import HomeHero from '../Components/Home/HomeHero'
import AboutLanding from '../Components/About/AboutLanding'
import PropertyCarousel from '../Components/Home/PropertyCarousel'
import CompanyOverview from '../Components/Home/CompanyOverview'
import ContactForm from '../Components/Contact/ContactForm'
import RealEstateNews from '../Components/Home/RealEstateNews'
import CompanyFacts from '../Components/Home/CompanyFacts'
import HomeAboutLanding from '../Components/Home/HomeAboutLanding'


const Home = () => {
  return (
   <>
   <HomeHero/>
<HomeAboutLanding/>
   <PropertyCarousel/>
   <CompanyOverview/>
   <ContactForm/>
   <CompanyFacts/>
   <RealEstateNews/>
   </>
  )
}

export default Home

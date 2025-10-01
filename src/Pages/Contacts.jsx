import React from 'react'
import ContactHero from '../Components/Contact/ContactHero'
import ContactForm from '../Components/Contact/ContactForm'
import FreeMap from '../Components/Common/FreeMap'

const Contacts = () => {
  return (
   <>
   <ContactHero/>
   <ContactForm/>
    {/* Map Section */}
    <div className="w-full bg-backgound flex justify-center  p-8 sm:p-6 lg:p-12 xl:p-20">
                <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[95%] h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-3xl overflow-hidden shadow-lg z-0">
                    <FreeMap />
                </div>
            </div>
   </>
  )
}

export default Contacts

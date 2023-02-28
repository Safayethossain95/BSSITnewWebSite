import React from 'react'
import Banner from '../components/desktop/Banner'
import CounterSection from '../components/desktop/CounterSection'
import FocusIndustries from '../components/desktop/FocusIndustries'
import MyNavbar from '../components/desktop/MyNavbar'
import OurClients from '../components/desktop/OurClients'
import Portfolio from '../components/desktop/Portfolio'
import Quote from '../components/desktop/Quote'
import Services from '../components/desktop/Services'
import Testimonials from '../components/desktop/Testimonials'
import WhyChooseUs from '../components/desktop/WhyChooseUs'
import Footer from '../components/desktop/Footer'
import '../sass/sassFiles/desktop/homepage.scss'
import Copyright from '../components/desktop/Copyright'

const Homepage = () => {
  return (

    <>
        <div className="mobile">

        </div>
        <div className="desktop">
            <MyNavbar/>
            <Banner/>
            <Services/>
            <FocusIndustries/>
            <WhyChooseUs/>
            <OurClients/>
            <Portfolio/>
            <CounterSection/>
            <Testimonials/>
            <Quote/>
            <Footer/>
            <Copyright/>
        </div>
    </>
  )
}

export default Homepage
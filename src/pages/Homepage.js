import React,{useEffect} from 'react'
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
import '../sass/sassFiles/mobile/homepagemb.scss'
import Copyright from '../components/desktop/Copyright'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbarmb from '../components/mobile/Navbarmb'
import Bannermb from '../components/mobile/Bannermb'
const Homepage = () => {
  
  useEffect(()=>{
  
    
    var navbar = document.getElementById("mynavbar");
    
    function myFunction() {
     
      if(window.pageYOffset > 99){
        navbar.classList.add("sticky");
      }else{
        navbar.classList.remove("sticky");
      }
   
    }
    window.onscroll = function() {myFunction()};
    
   
  },[])
  useEffect(() => {
    AOS.init({once: true});
  }, [])
  return (

    <>
        <div className="mobile">
            <MyNavbar/>
            <Banner break="mblinebreak"/>
            <Services/>
            <FocusIndustries/>
            <WhyChooseUs/>
            <OurClients/>
            <CounterSection/>
            <Testimonials arrows="false"/>
            <Quote/>
            <Footer/>
            <Copyright/>
        </div>
        <div className="desktop">
            <MyNavbar/>
            <Banner break="linebreak"/>
            <Services/>
            <FocusIndustries/>
            <WhyChooseUs/>
            <OurClients/>
            <Portfolio/>
            <CounterSection/>
            <Testimonials arrows="true"/>
            <Quote/>
            <Footer/>
            <Copyright/>
        </div>
    </>
  )
}

export default Homepage
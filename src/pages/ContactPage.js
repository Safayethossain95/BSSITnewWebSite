import React,{useEffect} from 'react'
import Banner from '../components/desktop/Banner'
import MyNavbar from '../components/desktop/MyNavbar'
import Quote from '../components/desktop/Quote'
import Footer from '../components/desktop/Footer'
import '../sass/sassFiles/desktop/homepage.scss'
import '../sass/sassFiles/desktop/contactpage.scss'
import Copyright from '../components/desktop/Copyright'
import OtherPageBanner from '../components/desktop/OtherPageBanner'
import ContactBar from '../components/desktop/ContactBar'
import MapSectionComponent from '../components/desktop/MapSectionComponent'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ContactPage = () => {
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
        
            
        </div>
        <div className="desktop">
            <MyNavbar/>
            <OtherPageBanner title="Contact"/>
            <ContactBar/>
            <MapSectionComponent/>
            <Quote/>
            <Footer/>
            <Copyright/>
        </div>
    </>
  )
}

export default ContactPage
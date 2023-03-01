import React from 'react'
import BigSectionHeader from './subComponents/BigSectionHeader'
import ServiceSubComponent from './subComponents/ServiceSubComponent'

const Services = () => {

  const servicesApi={
    servicesubsection1:{
      heading:"Web Application Development",  
      paragraph:"From concept to launch, we develop custom web applications tailored to your unique business needs using the latest technologies.",
      imgurl:"./assets/images/homepage/servicespart/img1.png"
    },
    servicesubsection2:{
      heading:"Desktop Application Development",  
      paragraph:"We offer full-cycle desktop application development services to help businesses automate processes, increase productivity, and improve user experiences.",
      imgurl:"./assets/images/homepage/servicespart/img2.png"
    },
    servicesubsection3:{
      heading:"Mobile Application Development",  
      paragraph:"Engage users and grow your business with our custom mobile applications for iOS and Android platforms.",
      imgurl:"./assets/images/homepage/servicespart/img3.png"
    },
    servicesubsection4:{
      heading:"Font End \n Designing",  
      paragraph:"Enhance user experiences and increase conversions with our responsive and visually stunning front-end designs.",
      imgurl:"./assets/images/homepage/servicespart/img4.png"
    },
    servicesubsection5:{
      heading:"User Experience & Interface Design",  
      paragraph:"Keep users engaged and satisfied with our data-driven UX/UI design services for websites and mobile applications.",
      imgurl:"./assets/images/homepage/servicespart/img5.png"
    },
    servicesubsection6:{
      heading:"Graphics \n Design",  
      paragraph:"Captivate your audience and communicate your brand's message with our custom graphic design services.",
      imgurl:"./assets/images/homepage/servicespart/img6.png"
    },

  }
  return (
    <>
        <div className="servicesection" data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
          <div className="myContainer">

            <BigSectionHeader/>

            <ServiceSubComponent aoskey="fade-left" aoskeyimg="fade-right" heading={servicesApi.servicesubsection1.heading} para={servicesApi.servicesubsection1.paragraph} imgurl={servicesApi.servicesubsection1.imgurl} flip=""/>

            <ServiceSubComponent aoskey="fade-right" aoskeyimg="fade-left" heading={servicesApi.servicesubsection2.heading} para={servicesApi.servicesubsection2.paragraph} imgurl={servicesApi.servicesubsection2.imgurl} flip="flex-row-reverse"/>
            
            <ServiceSubComponent aoskey="fade-left" aoskeyimg="fade-right" heading={servicesApi.servicesubsection3.heading} para={servicesApi.servicesubsection3.paragraph} imgurl={servicesApi.servicesubsection3.imgurl} flip=""/>
            
            <ServiceSubComponent aoskey="fade-right" aoskeyimg="fade-left" heading={servicesApi.servicesubsection4.heading} para={servicesApi.servicesubsection4.paragraph} imgurl={servicesApi.servicesubsection4.imgurl} flip="flex-row-reverse"/>

            <ServiceSubComponent aoskey="fade-left" aoskeyimg="fade-right" heading={servicesApi.servicesubsection5.heading} para={servicesApi.servicesubsection5.paragraph} imgurl={servicesApi.servicesubsection5.imgurl} flip=""/>

            <ServiceSubComponent aoskey="fade-right" aoskeyimg="fade-left" heading={servicesApi.servicesubsection6.heading} para={servicesApi.servicesubsection6.paragraph} imgurl={servicesApi.servicesubsection6.imgurl} flip="flex-row-reverse"/>

          </div>
        </div>
    </>
  )
}

export default Services
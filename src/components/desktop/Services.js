import React from 'react'
import BigSectionHeader from './subComponents/BigSectionHeader'
import ServiceSubComponent from './subComponents/ServiceSubComponent'

const Services = () => {

  const servicesApi={
    servicesubsection1:{
      heading:"Web Application Development",  
      paragraph:"Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
      imgurl:"./assets/images/homepage/servicespart/img1.png"
    },
    servicesubsection2:{
      heading:"Desktop Application Development",  
      paragraph:"Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
      imgurl:"./assets/images/homepage/servicespart/img2.png"
    },
    servicesubsection3:{
      heading:"Mobile Application Development",  
      paragraph:"Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
      imgurl:"./assets/images/homepage/servicespart/img3.png"
    },
    servicesubsection4:{
      heading:"Font End \n Designing",  
      paragraph:"Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
      imgurl:"./assets/images/homepage/servicespart/img4.png"
    },
    servicesubsection5:{
      heading:"User Experience & Interface Design",  
      paragraph:"Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
      imgurl:"./assets/images/homepage/servicespart/img5.png"
    },
    servicesubsection6:{
      heading:"Graphics \n Design",  
      paragraph:"Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
      imgurl:"./assets/images/homepage/servicespart/img6.png"
    },

  }
  return (
    <>
        <div className="servicesection">
          <div className="myContainer">

            <BigSectionHeader/>

            <ServiceSubComponent heading={servicesApi.servicesubsection1.heading} para={servicesApi.servicesubsection1.paragraph} imgurl={servicesApi.servicesubsection1.imgurl} flip=""/>

            <ServiceSubComponent heading={servicesApi.servicesubsection2.heading} para={servicesApi.servicesubsection2.paragraph} imgurl={servicesApi.servicesubsection2.imgurl} flip="flex-row-reverse"/>
            
            <ServiceSubComponent heading={servicesApi.servicesubsection3.heading} para={servicesApi.servicesubsection3.paragraph} imgurl={servicesApi.servicesubsection3.imgurl} flip=""/>
            
            <ServiceSubComponent heading={servicesApi.servicesubsection4.heading} para={servicesApi.servicesubsection4.paragraph} imgurl={servicesApi.servicesubsection4.imgurl} flip="flex-row-reverse"/>

            <ServiceSubComponent heading={servicesApi.servicesubsection5.heading} para={servicesApi.servicesubsection5.paragraph} imgurl={servicesApi.servicesubsection5.imgurl} flip=""/>

            <ServiceSubComponent heading={servicesApi.servicesubsection6.heading} para={servicesApi.servicesubsection6.paragraph} imgurl={servicesApi.servicesubsection6.imgurl} flip="flex-row-reverse"/>

          </div>
        </div>
    </>
  )
}

export default Services
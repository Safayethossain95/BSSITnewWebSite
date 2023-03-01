import React from 'react'
import WhyChooseUsCard from './subComponents/WhyChooseUsCard'
import {Row,Col} from 'react-bootstrap'
import MediumSectionHeader from './subComponents/MediumSectionHeader'
const WhyChooseUs = () => {
    const wcuApi={
        data:[
            {
                head:"Expertise & Experience",
                para:"We have a team of highly skilled professionals with extensive experience in delivering innovative IT solutions that meet the specific needs of businesses across different industries.",
                img:"./assets/images/homepage/wcupart/1.png",
                aoskey:"fade-right"
                
            },
            {
                head:"Customized Solutions",
                para:"Our services are tailored to meet your unique business requirements, ensuring that you get the best value for your investment.",
                img:"./assets/images/homepage/wcupart/2.png",
                aoskey:"fade-left"
                
            },
            {
                head:"Customer-Centric Approach",
                para:"We prioritize customer satisfaction and work closely with you to understand your needs and deliver exceptional services that exceed your expectations.",
                img:"./assets/images/homepage/wcupart/3.png",
                aoskey:"fade-right"
                
            },
            {
                head:"Proven Track Record",
                para:"We have a proven track record of successful project deliveries, demonstrating our ability to provide reliable and innovative IT solutions that drive business growth.",
                img:"./assets/images/homepage/wcupart/4.png",
                aoskey:"fade-left"
                
            },

        ]
    }
  return (
    <>
        <div className="whychooseussection" data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
            <div className="myContainer">
            <MediumSectionHeader head="Why Choose Us"/>
            <div className="middlesection">
               <p>Our team of highly skilled professionals has a proven track record of success, providing innovative and reliable services tailored to meet your unique business requirements. With a customer-centric approach, we strive for unparalleled customer satisfaction, making us the right choice for your technology needs.</p>
               
            </div>
            <div className="bottomsection">
                <Row>
                    {
                        wcuApi.data.map((item,key)=>{
                            return(
                                <Col lg={6} key={key} >
                                    <WhyChooseUsCard aoskey={item.aoskey} head={item.head} para={item.para} img={item.img}/>
                                </Col>
                            )
                        })
                    }
                    
                </Row>
            </div>
            </div>
        </div>
    </>
  )
}

export default WhyChooseUs
import React from 'react'
import MediumSectionHeader from './subComponents/MediumSectionHeader'
import {Row,Col} from 'react-bootstrap'
const OurClients = () => {
  return (
    <>
        <div className="ourclientssection" data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
            <div className="myContainer">
                <MediumSectionHeader head="Our Clients"/>

                <Row>
                    <Col lg={4}  xs={4}  className="mbgap">
                        <img data-aos-delay="400" data-aos="fade-right" data-aos-duration="2000" className='w-100' src="./assets/images/homepage/ourClients/logo1.png" alt="" />
                    </Col>
                    <Col lg={4} xs={4} className="mbgap">
                        <img className='w-100' data-aos-delay="400" data-aos="fade-in" data-aos-duration="2000" src="./assets/images/homepage/ourClients/logo2.png" alt="" />
                    </Col>
                    <Col lg={4} xs={4} className="mbgap">
                        <img data-aos-delay="400" data-aos="fade-left" data-aos-duration="2000" className='w-100' src="./assets/images/homepage/ourClients/logo3.png" alt="" />
                    </Col>
                    <Col lg={4} xs={4}  className="mbgap">
                        <img data-aos-delay="400" data-aos="fade-right" data-aos-duration="2000" className='w-100' src="./assets/images/homepage/ourClients/logo2.png" alt="" />
                    </Col>
                    <Col lg={4} xs={4} className="mbgap">
                        <img data-aos-delay="400" data-aos="fade-in" data-aos-duration="2000" className='w-100' src="./assets/images/homepage/ourClients/logo3.png" alt="" />
                    </Col>
                    <Col lg={4} xs={4} className="mbgap">
                        <img data-aos-delay="400" data-aos="fade-left" data-aos-duration="2000" className='w-100' src="./assets/images/homepage/ourClients/logo1.png" alt="" />
                    </Col>
                </Row>
            </div>
        </div>
    </>
  )
}

export default OurClients
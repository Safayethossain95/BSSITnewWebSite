import React from 'react'
import MediumSectionHeader from './subComponents/MediumSectionHeader'
import {Row,Col} from 'react-bootstrap'
const OurClients = () => {
  return (
    <>
        <div className="ourclientssection">
            <div className="myContainer">
                <MediumSectionHeader head="Our Clients"/>

                <Row>
                    <Col lg={4}>
                        <img src="./assets/images/homepage/ourClients/logo1.png" alt="" />
                    </Col>
                    <Col lg={4}>
                        <img src="./assets/images/homepage/ourClients/logo2.png" alt="" />
                    </Col>
                    <Col lg={4}>
                        <img src="./assets/images/homepage/ourClients/logo3.png" alt="" />
                    </Col>
                    <Col lg={4}>
                        <img src="./assets/images/homepage/ourClients/logo2.png" alt="" />
                    </Col>
                    <Col lg={4}>
                        <img src="./assets/images/homepage/ourClients/logo3.png" alt="" />
                    </Col>
                    <Col lg={4}>
                        <img src="./assets/images/homepage/ourClients/logo1.png" alt="" />
                    </Col>
                </Row>
            </div>
        </div>
    </>
  )
}

export default OurClients
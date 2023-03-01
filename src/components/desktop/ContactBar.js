import React from 'react'
import {Row,Col} from 'react-bootstrap'
const ContactBar = () => {
  return (
    <>
        <div className="contactbarcomp" data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
            <div className="myContainer">
                <Row>
                    <Col lg={4}>
                        <div className="contactbarcard">
                            <div className="upperpart">
                                <div className="contentup">
                                    <h4><img src="./assets/images/contactpage/contactsmallcard/phoneicon.png" alt="" /> Phone Number</h4>
                                </div>
                               
                            </div>
                            <div className="lowerpart">
                            <div className="contentdown">
                                    <p>+88 01611-252524</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} >
                        <div className="contactbarcard">
                            <div className="upperpart">
                                <div className="contentup">
                                    <h4><img src="./assets/images/contactpage/contactsmallcard/emailicon.png" alt="" /> Email Us</h4>
                                </div>
                               
                            </div>
                            <div className="lowerpart">
                            <div className="contentdown">
                                    <p>info@bssitbd.com</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="contactbarcard">
                            <div className="upperpart">
                                <div className="contentup">
                                    <h4><img src="./assets/images/contactpage/contactsmallcard/locationicon.png" alt="" /> Location</h4>
                                </div>
                               
                            </div>
                            <div className="lowerpart">
                            <div className="contentdown">
                                    <p>13 Larmini street ,Wari, Dhaka, Dhaka,<br/> Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </>
  )
}

export default ContactBar
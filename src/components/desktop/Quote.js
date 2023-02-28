import React from 'react'
import MediumSectionHeader from './subComponents/MediumSectionHeader'
import {Row,Col, Button} from 'react-bootstrap'
const Quote = () => {
  return (
    <>
        <div className="reqaquotesection">
            <div className="myContainer">
                <MediumSectionHeader head="Request a Quote"/>

                <Row>
                    <Col lg={7}>
                        <div className="leftform">
                            <Row>
                                <Col lg={6} className="mb10">
                                    <div className="basicinput">
                                        <p>Name</p>
                                        <input type="text" placeholder='Enter your name'/>
                                    </div>
                                </Col>
                                <Col lg={6} className="mb10">
                                    <div className="basicinput">
                                        <p>Email</p>
                                        <input type="text" placeholder='Enter your email'/>
                                    </div>
                                </Col>
                                <Col lg={6} className="mb10">
                                    <div className="basicinput">
                                        <p>Phone Number</p>
                                        <input type="text" placeholder='Enter your phone number'/>
                                    </div>
                                </Col>
                                <Col lg={6} className="mb10">
                                    <div className="basicinput">
                                        <p>Address</p>
                                        <input type="text" placeholder='Enter your address'/>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="basicinput">
                                        <p>Requirements</p>
                                        <textarea type="text" placeholder='Write your requirements'/>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="rightform">
                            <div className="basicinput">
                                <p>Choose A Service</p>
                            </div>
                            <Row>
                                <Col lg={4}>
                                    <div className="smcard">
                                        <div className="wrap">
                                        <img src="./assets/images/homepage/quotepart/1.png" alt="1.png" />
                                        <p>Web Applicaiton Development</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="smcard">
                                        <div className="wrap">
                                        <img src="./assets/images/homepage/quotepart/2.png" alt="1.png" />
                                        <p>Desktop Application Development</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="smcard">
                                        <div className="wrap">
                                        <img src="./assets/images/homepage/quotepart/3.png" alt="1.png" />
                                        <p>Mobile Application Development</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{marginTop:"20px"}}>
                                <Col lg={4}>
                                    <div className="smcard">
                                        <div className="wrap">
                                        <img src="./assets/images/homepage/quotepart/4.png" alt="1.png" />
                                        <p>Front End Design</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="smcard">
                                        <div className="wrap">
                                        <img src="./assets/images/homepage/quotepart/5.png" alt="1.png" />
                                        <p>UI/UX Design</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="smcard">
                                        <div className="wrap">
                                        <img src="./assets/images/homepage/quotepart/6.png" alt="1.png" />
                                        <p>Graphics Design</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        
                    </Col>
                </Row>
                <div className="buttondiv">

                    <Button className='quotebutton'>Get a Quote</Button>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Quote
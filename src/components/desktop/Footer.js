import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Footercard from './subComponents/Footercard'
import {HiLocationMarker,HiMail} from 'react-icons/hi'
import {BsTelephoneFill} from 'react-icons/bs'
const Footer = () => {
    const footerApi={
        header:{
            firstheader:"Services"
        },
        firstlist:[
            {
                name:"Web Application Development",
            },
            {
                name:"Desktop Application Development",
            },
            {
                name:"Mobile Application Development",
            },
            {
                name:"Font End Designing",
            },
            {
                name:"UI/UX Design",
            },
            {
                name:"Graphics Design",
            },

        ]
        
    }
    const footerApi2={
        header:{
            firstheader:"Solutions"
        },
        firstlist:[
            {
                name:"HR Management",
            },
            {
                name:"Institution Management",
            },
            {
                name:"Attendance System",
            },
            {
                name:"SAAS Application",
            },
            {
                name:"React & Ionic",
            },
            {
                name:"Dot Net",
            },

        ]
        
    }
    const footerApi3={
        header:{
            firstheader:"Legal"
        },
        firstlist:[
            {
                name:"Terms & Conditions",
            },
            {
                name:"Privacy Policy",
            },
            {
                name:"Cookies Policy",
            },
            {
                name:"Cookies Setting",
            },
            {
                name:"Copyright Information",
            },
           

        ]
        
    }
    
  return (
    <>
        <div className="footersection">
            <div className="myContainer">
                <div className="footerbox d-none d-lg-block">
                    <Row>
                        <Col lg={3} xs={12} style={{flex:"1 1 35%"}}>
                            <Footercard footerApi={footerApi}/>
                        </Col>
                        <Col lg={3} xs={6} style={{flex:"1 1 20%"}}>
                            <Footercard footerApi={footerApi2}/>
                        </Col>
                        <Col lg={3} xs={6} style={{flex:"1 1 20%"}}>
                            <Footercard footerApi={footerApi3}/>
                        </Col>
                        <Col lg={3} xs={12} style={{flex:"1 1 25%"}}>
                            <div className="fcart">
                                <h3>Contact Information</h3>
                                <div className="rowline d-flex">
                                    <div className="leftone">
                                        <HiLocationMarker/>
                                    </div>
                                    <div className="rightone">
                                        <p>13, Larmini Street, Wari,
                                        Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                                <div className="rowline2 d-flex">
                                    <div className="leftone">
                                        <BsTelephoneFill/>
                                    </div>
                                    <div className="rightone">
                                        <p>01902020202</p>
                                    </div>
                                </div>
                                <div className="rowline d-flex">
                                    <div className="leftone">
                                        <HiMail/>
                                    </div>
                                    <div className="rightone">
                                        <p>info@bssitbd.com</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="footerbox d-block d-lg-none">
                <Row>
                        <Col lg={3} xs={12} >
                            <Footercard footerApi={footerApi}/>
                        </Col>
                        <Col lg={3} xs={6} >
                            <Footercard footerApi={footerApi2}/>
                        </Col>
                        <Col lg={3} xs={6} >
                            <Footercard footerApi={footerApi3}/>
                        </Col>
                        <Col lg={3} xs={12} >
                            <div className="fcart">
                                <h3>Contact Information</h3>
                                <div className="rowline d-flex">
                                    <div className="leftone">
                                        <HiLocationMarker/>
                                    </div>
                                    <div className="rightone">
                                        <p>13, Larmini Street, Wari,
                                        Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                                <div className="rowline2 d-flex">
                                    <div className="leftone">
                                        <BsTelephoneFill/>
                                    </div>
                                    <div className="rightone">
                                        <p>01902020202</p>
                                    </div>
                                </div>
                                <div className="rowline d-flex">
                                    <div className="leftone">
                                        <HiMail/>
                                    </div>
                                    <div className="rightone">
                                        <p>info@bssitbd.com</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
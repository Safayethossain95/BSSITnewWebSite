import React from 'react'
import MediumSectionHeader from './subComponents/MediumSectionHeader'
import {Row,Col, Button} from 'react-bootstrap'
import $ from 'jquery'
const Quote = () => {

    const handlesmcardClick=(selectorimg,selectorpara)=>{
        $(".imgclick").css('opacity','0.5')
        $(".imgclick2").css('opacity','0.5')
        $(".imgclick3").css('opacity','0.5')
        $(".imgclick4").css('opacity','0.5')
        $(".imgclick5").css('opacity','0.5')
        $(".imgclick6").css('opacity','0.5')
        $(".paraclick").css('opacity','0.5')
        $(".paraclick2").css('opacity','0.5')
        $(".paraclick3").css('opacity','0.5')
        $(".paraclick4").css('opacity','0.5')
        $(".paraclick5").css('opacity','0.5')
        $(".paraclick6").css('opacity','0.5')
        $(`.${selectorimg}`).css('opacity','1')
        $(`.${selectorpara}`).css('opacity','1')

    }
  
  
  return (
    <>
        <div className="reqaquotesection"  data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
            <div className="myContainer">
                <MediumSectionHeader head="Request a Quote"/>
                <div className="desktopversion d-none d-lg-block">
                <Row clasName="mbrev">
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
                            <div className="d-none d-lg-block">

                            <Row >
                                <Col lg={4} xs={6}>
                                    <div className="smcard"  onClick={()=>handlesmcardClick("imgclick","paraclick")}>
                                        <div className="wrap">
                                        <img className='imgclick' src="./assets/images/homepage/quotepart/1.png" alt="1.png" />
                                        <p className='paraclick'>Web Applicaiton Development</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <div className="smcard" onClick={()=>handlesmcardClick("imgclick2","paraclick2")}>
                                        <div className="wrap">
                                        <img className='imgclick2' src="./assets/images/homepage/quotepart/2.png" alt="1.png" />
                                        <p className='paraclick2'>Desktop Application Development</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <div className="smcard" onClick={()=>handlesmcardClick("imgclick3","paraclick3")}>
                                        <div className="wrap">
                                        <img className='imgclick3' src="./assets/images/homepage/quotepart/3.png" alt="1.png" />
                                        <p className='paraclick3'>Mobile Application Development</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{marginTop:"20px"}} >
                                <Col lg={4} xs={6}>
                                    <div className="smcard" onClick={()=>handlesmcardClick("imgclick4","paraclick4")}>
                                        <div className="wrap">
                                        <img className='imgclick4' src="./assets/images/homepage/quotepart/4.png" alt="1.png" />
                                        <p className='paraclick4'>Front End Design</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <div className="smcard" onClick={()=>handlesmcardClick("imgclick5","paraclick5")}>
                                        <div className="wrap">
                                        <img className='imgclick5' src="./assets/images/homepage/quotepart/5.png" alt="1.png" />
                                        <p className='paraclick5'>UI/UX Design</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <div className="smcard" onClick={()=>handlesmcardClick("imgclick6","paraclick6")}>
                                        <div className="wrap">
                                        <img className='imgclick6' src="./assets/images/homepage/quotepart/6.png" alt="1.png" />
                                        <p className='paraclick6'>Graphics Design</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            </div>
                            <div className="d-block d-lg-none">

                            <Row >
                                <Col lg={4} xs={6}>
                                    <div className="smcard"  onClick={()=>handlesmcardClick("imgclick","paraclick")}>
                                        <div className="wrap">
                                        <img className='imgclick' src="./assets/images/homepage/quotepart/1.png" alt="1.png" />
                                        <p className='paraclick'>Web Applicaiton Development</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <div className="smcard" onClick={()=>handlesmcardClick("imgclick2","paraclick2")}>
                                        <div className="wrap">
                                        <img className='imgclick2' src="./assets/images/homepage/quotepart/2.png" alt="1.png" />
                                        <p className='paraclick2'>Desktop Application Development</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <div className="smcard mbgap"  onClick={()=>handlesmcardClick("imgclick3","paraclick3")}>
                                        <div className="wrap">
                                        <img className='imgclick3' src="./assets/images/homepage/quotepart/3.png" alt="1.png" />
                                        <p className='paraclick3'>Mobile Application Development</p>
                                        </div>
                                    </div>
                                </Col>
                           
                                <Col lg={4} xs={6}>
                                    <div className="smcard mbgap"  onClick={()=>handlesmcardClick("imgclick4","paraclick4")}>
                                        <div className="wrap">
                                        <img className='imgclick4' src="./assets/images/homepage/quotepart/4.png" alt="1.png" />
                                        <p className='paraclick4'>Front End Design</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <div className="smcard mbgap"  onClick={()=>handlesmcardClick("imgclick5","paraclick5")}>
                                        <div className="wrap">
                                        <img className='imgclick5' src="./assets/images/homepage/quotepart/5.png" alt="1.png" />
                                        <p className='paraclick5'>UI/UX Design</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <div className="smcard mbgap"  onClick={()=>handlesmcardClick("imgclick6","paraclick6")}>
                                        <div className="wrap">
                                        <img className='imgclick6' src="./assets/images/homepage/quotepart/6.png" alt="1.png" />
                                        <p className='paraclick6'>Graphics Design</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            </div>
                        </div>
                        
                    </Col>
                </Row>

                </div>
                <div className="mobileversion d-block d-lg-none">
                <Row clasName="mbrev">
                <Col xs={12}>
                        <div className="rightform">
                            <div className="basicinput">
                                <p>Choose A Service</p>
                            </div>
                            <div className="d-none d-lg-block">

                            <Row >
                                <Col lg={4} xs={6}>
                                    <div className="smcard"  onClick={()=>handlesmcardClick("imgclick","paraclick")}>
                                        <div className="wrap">
                                        <img className='imgclick' src="./assets/images/homepage/quotepart/1.png" alt="1.png" />
                                        <p className='paraclick'>Web Applicaiton Development</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <div className="smcard" onClick={()=>handlesmcardClick("imgclick2","paraclick2")}>
                                        <div className="wrap">
                                        <img className='imgclick2' src="./assets/images/homepage/quotepart/2.png" alt="1.png" />
                                        <p className='paraclick2'>Desktop Application Development</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <div className="smcard" onClick={()=>handlesmcardClick("imgclick3","paraclick3")}>
                                        <div className="wrap">
                                        <img className='imgclick3' src="./assets/images/homepage/quotepart/3.png" alt="1.png" />
                                        <p className='paraclick3'>Mobile Application Development</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{marginTop:"20px"}} >
                                <Col lg={4} xs={6}>
                                    <div className="smcard" onClick={()=>handlesmcardClick("imgclick4","paraclick4")}>
                                        <div className="wrap">
                                        <img className='imgclick4' src="./assets/images/homepage/quotepart/4.png" alt="1.png" />
                                        <p className='paraclick4'>Front End Design</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <div className="smcard" onClick={()=>handlesmcardClick("imgclick5","paraclick5")}>
                                        <div className="wrap">
                                        <img className='imgclick5' src="./assets/images/homepage/quotepart/5.png" alt="1.png" />
                                        <p className='paraclick5'>UI/UX Design</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <div className="smcard" onClick={()=>handlesmcardClick("imgclick6","paraclick6")}>
                                        <div className="wrap">
                                        <img className='imgclick6' src="./assets/images/homepage/quotepart/6.png" alt="1.png" />
                                        <p className='paraclick6'>Graphics Design</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            </div>
                            <div className="d-block d-lg-none">

                            <Row >
                                <Col lg={4} xs={6}>
                                    <div className="smcard"  onClick={()=>handlesmcardClick("imgclick","paraclick")}>
                                        <div className="wrap">
                                        <img className='imgclick' src="./assets/images/homepage/quotepart/1.png" alt="1.png" />
                                        <p className='paraclick'>Web Applicaiton Development</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <div className="smcard" onClick={()=>handlesmcardClick("imgclick2","paraclick2")}>
                                        <div className="wrap">
                                        <img className='imgclick2' src="./assets/images/homepage/quotepart/2.png" alt="1.png" />
                                        <p className='paraclick2'>Desktop Application Development</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <div className="smcard mbgap"  onClick={()=>handlesmcardClick("imgclick3","paraclick3")}>
                                        <div className="wrap">
                                        <img className='imgclick3' src="./assets/images/homepage/quotepart/3.png" alt="1.png" />
                                        <p className='paraclick3'>Mobile Application Development</p>
                                        </div>
                                    </div>
                                </Col>
                           
                                <Col lg={4} xs={6}>
                                    <div className="smcard mbgap"  onClick={()=>handlesmcardClick("imgclick4","paraclick4")}>
                                        <div className="wrap">
                                        <img className='imgclick4' src="./assets/images/homepage/quotepart/4.png" alt="1.png" />
                                        <p className='paraclick4'>Front End Design</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <div className="smcard mbgap"  onClick={()=>handlesmcardClick("imgclick5","paraclick5")}>
                                        <div className="wrap">
                                        <img className='imgclick5' src="./assets/images/homepage/quotepart/5.png" alt="1.png" />
                                        <p className='paraclick5'>UI/UX Design</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <div className="smcard mbgap"  onClick={()=>handlesmcardClick("imgclick6","paraclick6")}>
                                        <div className="wrap">
                                        <img className='imgclick6' src="./assets/images/homepage/quotepart/6.png" alt="1.png" />
                                        <p className='paraclick6'>Graphics Design</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            </div>
                        </div>
                        
                    </Col>
                    <Col xs={12}>
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
                    
                </Row>
                </div>
                <div className="buttondiv">

                    <Button style={{border:"none"}} className='quotebutton'>Get a Quote</Button>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Quote
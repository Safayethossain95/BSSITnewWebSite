import React, { useState,useRef } from 'react'
import MediumSectionHeader from './subComponents/MediumSectionHeader'
import {Row,Col} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:false,
        appendDots: (dots) => <ul>{dots}</ul>,
        customPaging: (i) => <div className="dots--custom"></div>
      };
      const [rating,setrating] = useState(4.7)
      const slider = useRef(null);
  return (
    <>
        <div className="testimonialsection">
            <div className="myContainer">
                <MediumSectionHeader head="Testimonials"/>

                <Row>
                    <Col lg={11} className="m-auto">
                        <div className="testslider">
                        <button className='prevbutton' onClick={() => slider?.current?.slickPrev()}><AiOutlineLeft/></button>
                        <button className="nextbutton" onClick={() => slider?.current?.slickNext()}><AiOutlineRight/></button>

                    <Slider {...settings} ref={slider}>
                        <div >
                            <div className="slidemain">
                                <h3>@ Name Here</h3>
                                <div className="ratinbox d-flex flex-column" >
                                    <div className="wrapper d-flex">
                                    <span>{rating}</span>
                                    {
                                        rating>4?
                                        <>
                                        <div className="stars">
                                        <img src="./assets/images/homepage/ratingpart/starfilled.png" alt="" />
                                        <img src="./assets/images/homepage/ratingpart/starfilled.png" alt="" />
                                        <img src="./assets/images/homepage/ratingpart/starfilled.png" alt="" />
                                        <img src="./assets/images/homepage/ratingpart/starfilled.png" alt="" />
                                        <img src="./assets/images/homepage/ratingpart/starempty.png" alt="" />

                                        </div>
                                       
                                        
                                        </>
                                        :
                                        ""
                                    }
                                    <span> &#40;30&#41;</span>
                                    </div>
                                    <div className="textt">
                                            <p>Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at. Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div >
                        <div className="slidemain">
                                <h3>@ Another Name</h3>
                                <div className="ratinbox d-flex flex-column" >
                                    <div className="wrapper d-flex">
                                    <span>{rating}</span>
                                    {
                                        rating>4?
                                        <>
                                        <div className="stars">
                                        <img src="./assets/images/homepage/ratingpart/starfilled.png" alt="" />
                                        <img src="./assets/images/homepage/ratingpart/starfilled.png" alt="" />
                                        <img src="./assets/images/homepage/ratingpart/starfilled.png" alt="" />
                                        <img src="./assets/images/homepage/ratingpart/starfilled.png" alt="" />
                                        <img src="./assets/images/homepage/ratingpart/starempty.png" alt="" />

                                        </div>
                                       
                                        
                                        </>
                                        :
                                        ""
                                    }
                                    <span> &#40;30&#41;</span>
                                    </div>
                                    <div className="textt">
                                            <p>Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at. Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div >
                        <div className="slidemain">
                                <h3>@ Another Name</h3>
                                <div className="ratinbox d-flex flex-column" >
                                    <div className="wrapper d-flex">
                                    <span>{rating}</span>
                                    {
                                        rating>4?
                                        <>
                                        <div className="stars">
                                        <img src="./assets/images/homepage/ratingpart/starfilled.png" alt="" />
                                        <img src="./assets/images/homepage/ratingpart/starfilled.png" alt="" />
                                        <img src="./assets/images/homepage/ratingpart/starfilled.png" alt="" />
                                        <img src="./assets/images/homepage/ratingpart/starfilled.png" alt="" />
                                        <img src="./assets/images/homepage/ratingpart/starempty.png" alt="" />

                                        </div>
                                       
                                        
                                        </>
                                        :
                                        ""
                                    }
                                    <span> &#40;30&#41;</span>
                                    </div>
                                    <div className="textt">
                                            <p>Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at. Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div >
                        <div className="slidemain">
                                <h3>@ Another Name</h3>
                                <div className="ratinbox d-flex flex-column" >
                                    <div className="wrapper d-flex">
                                    <span>{rating}</span>
                                    {
                                        rating>4?
                                        <>
                                        <div className="stars">
                                        <img src="./assets/images/homepage/ratingpart/starfilled.png" alt="" />
                                        <img src="./assets/images/homepage/ratingpart/starfilled.png" alt="" />
                                        <img src="./assets/images/homepage/ratingpart/starfilled.png" alt="" />
                                        <img src="./assets/images/homepage/ratingpart/starfilled.png" alt="" />
                                        <img src="./assets/images/homepage/ratingpart/starempty.png" alt="" />

                                        </div>
                                       
                                        
                                        </>
                                        :
                                        ""
                                    }
                                    <span> &#40;30&#41;</span>
                                    </div>
                                    <div className="textt">
                                            <p>Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at. Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        </Slider>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </>
  )
}

export default Testimonials
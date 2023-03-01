import React,{useState,useRef} from 'react'
import MediumSectionHeader from './subComponents/MediumSectionHeader'
import {Row,Col} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'
import NextArrowfunc from './subComponents/NextArrowfunc';
const Portfolio = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:false
      };
    var settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow />
      };
      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ display: "block" }}
            onClick={onClick}
            
          ><BsArrowRight onClick={onClick}/></div>
        );
      }
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ display: "block"  }}
            onClick={onClick}
          ><BsArrowLeft /></div>
        );
      }
    const slider = useRef(null);
    const [sl,setsl] = useState(null)
    const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  
  return (
    <>
        <div className="portfoliosection"  data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
            <div className="myContainer">
                <MediumSectionHeader head="Portfolio"/>

                <Row>
                    <Col lg={6} data-aos-delay="400" data-aos="fade-right" data-aos-duration="4000">
                    <Slider {...settings} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                        <div >
                            <div className="innerdiv" style={{border:"8px solid #0782EA"}}>

                            <img className='w-100' src="./assets/images/homepage/portfolio/slideleftimg1.png" alt="" />
                            </div>
                        </div>
                        <div>
                            
                            <div className="innerdiv" style={{border:"8px solid #0782EA"}}>

                            <img className='w-100' src="./assets/images/homepage/portfolio/slideleftimg2.png" alt="" />
                            </div>
                        </div>
                        
                        </Slider>
                    </Col>
                    <Col lg={6}>
                        <div className="rightslider" data-aos-delay="400" data-aos="fade-left" data-aos-duration="4000">
                            
                        {/* <button className='prevbutton' onClick={() => slider?.current?.slickPrev()}><BsArrowLeft/></button>
                        <button className="nextbutton" onClick={() => slider?.current?.slickNext()}><BsArrowRight/></button> */}
                        <Slider {...settings2} asNavFor={nav1}  ref={(slider1) => {setNav2(slider1)}}>
                            <div >

                                <div className="rightslideinnerdiv"  >
                                <div className="wrapperinnerrightslide">
                                    <h3>LMS Development for British Standard School</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at.</p>
                                </div>
                                </div>
                            </div>
                            <div>
                            <div className="rightslideinnerdiv" >
                                <div className="wrapperinnerrightslide">
                                    <h3>LMS Development for Tarbiyah Institute</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at.</p>
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

export default Portfolio
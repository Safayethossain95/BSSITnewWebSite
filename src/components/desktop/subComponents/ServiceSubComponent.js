import React from 'react'
import {Row,Col} from 'react-bootstrap'
import CommonButton from './CommonButton'
const ServiceSubComponent = (props) => {
    function replaceWithBr() {
        return props.heading.replace(/\n/g, "<br />");
      }
  return (
    <>
        <div className="servicesubcomponent mobilegap"  >
            <Row className={`${props.flip?props.flip:""}`}>
                <Col lg={6}>
                    <img data-aos-delay="400" data-aos={props.aoskeyimg} data-aos-duration="2000" className='w-100 img-fluid' src={`${props.imgurl}`} alt="img1" />
                </Col>
                <Col lg={6} className="d-flex justify-content-center align-items-center">
                    <div className="textpart">
                        <div className="wrapperwrap">
                            <h5 data-aos-delay="400" data-aos={props.aoskey} data-aos-duration="2000" dangerouslySetInnerHTML={{ __html: replaceWithBr() }}></h5>
                            <p data-aos-delay="400" data-aos={props.aoskey} data-aos-duration="2000">{props.para}</p>
                            <CommonButton text="Book A Call"/>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default ServiceSubComponent
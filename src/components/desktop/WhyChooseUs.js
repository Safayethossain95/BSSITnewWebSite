import React from 'react'
import WhyChooseUsCard from './subComponents/WhyChooseUsCard'
import {Row,Col} from 'react-bootstrap'
const WhyChooseUs = () => {
  return (
    <>
        <div className="whychooseussection">
            <div className="myContainer">
            <div className="heading">
                <h4>
                    Why Choose Us?
                </h4>
            </div>
            <div className="middlesection">
                <p>Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at. Interdum sodales gravida mattis venenatis fusce sagittis quisque.Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at. Interdum sodales gravida mattis venenatis fusce sagittis quisque.</p>
                <p>Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at. Interdum sodales gravida mattis venenatis fusce sagittis quisque.Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris et dui volutpat nunc purus felis. Est vitae et velit at. Interdum sodales gravida mattis venenatis fusce sagittis quisque.</p>
            </div>
            <div className="bottomsection">
                <Row>
                    <Col lg={4}>
                        <WhyChooseUsCard/>
                    </Col>
                </Row>
            </div>
            </div>
        </div>
    </>
  )
}

export default WhyChooseUs
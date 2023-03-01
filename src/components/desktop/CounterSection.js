import React from 'react'
import {Row,Col} from 'react-bootstrap'
const CounterSection = () => {
  return (
    <>
        <div className="countersection"  data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">
            <div className="myContainer">
                <Row>
                    <Col lg={3} xs={6}>
                        <div className="countercard">
                            <img src="./assets/images/homepage/counterPart/1.png" alt="" />
                            <p>Website Created</p>
                            <h2><span>450</span>+</h2>
                        </div>
                        
                    </Col>
                    <Col lg={3} xs={6}>
                    <div className="countercard">
                            <img src="./assets/images/homepage/counterPart/2.png" alt="" />
                            <p>Happy Clients</p>
                            <h2><span>1300</span>+</h2>
                        </div>
                    </Col>
                    <Col lg={3} xs={6} className="mbtopgap">
                    <div className="countercard">
                            <img src="./assets/images/homepage/counterPart/3.png" alt="" />
                            <p>App Created</p>
                            <h2><span>37</span>+</h2>
                        </div>
                    </Col>
                    <Col lg={3} xs={6} className="mbtopgap">
                    <div className="countercard">
                            <img src="./assets/images/homepage/counterPart/4.png" alt="" />
                            <p>Investment Raised</p>
                            <h2><span>12</span>M+</h2>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </>
  )
}

export default CounterSection
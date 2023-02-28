import React from 'react'
import FocusSmallCard from './subComponents/FocusSmallCard'
import MediumSectionHeader from './subComponents/MediumSectionHeader'
import {Row,Col} from 'react-bootstrap'
const FocusIndustries = () => {

  const focusCardApi = {
    focussmcard1:{
      imgurl:"./assets/images/homepage/focuspart/smallcard/1.png",
      text:"Education"
    },
    focussmcard2:{
      imgurl:"./assets/images/homepage/focuspart/smallcard/2.png",
      text:"Banking & Non Banking (FIs)"
    },
    focussmcard3:{
      imgurl:"./assets/images/homepage/focuspart/smallcard/3.png",
      text:"Local & Multinational companies"
    },
    focussmcard4:{
      imgurl:"./assets/images/homepage/focuspart/smallcard/4.png",
      text:"Telecoms"
    },
    focussmcard5:{
      imgurl:"./assets/images/homepage/focuspart/smallcard/5.png",
      text:"Hospital & Pharmaceuticals"
    },
    focussmcard6:{
      imgurl:"./assets/images/homepage/focuspart/smallcard/6.png",
      text:"Government. ICT sector"
    },
  }
  return (
    <>
        <div className="focusindutriessection">
          <div className="myContainer">

            <MediumSectionHeader head="Focus Industries"/>
            <Row>
                <Col lg={4} style={{flex: "1 1 25%"}}>
                    <FocusSmallCard imgurl={focusCardApi.focussmcard1.imgurl} text={focusCardApi.focussmcard1.text}/>
                </Col>
                <Col lg={4} style={{flex: "1 1 35%"}}>
                    <FocusSmallCard imgurl={focusCardApi.focussmcard2.imgurl} text={focusCardApi.focussmcard2.text}/>
                </Col>
                <Col lg={4} style={{flex: "1 1 40%"}}>
                    <FocusSmallCard imgurl={focusCardApi.focussmcard3.imgurl} text={focusCardApi.focussmcard3.text}/>
                </Col>
                
                
               
            </Row>
            <Row style={{marginTop:"45px"}}>
            <Col lg={4} style={{flex: "1 1 25%"}}>
                    <FocusSmallCard imgurl={focusCardApi.focussmcard4.imgurl} text={focusCardApi.focussmcard4.text}/>
                </Col>
                <Col lg={4} style={{flex: "1 1 35%"}}>
                    <FocusSmallCard imgurl={focusCardApi.focussmcard5.imgurl} text={focusCardApi.focussmcard5.text}/>
                </Col>
                <Col lg={4} style={{flex: "1 1 40%"}}>
                    <FocusSmallCard imgurl={focusCardApi.focussmcard6.imgurl} text={focusCardApi.focussmcard6.text}/>
                </Col>
            </Row>
          </div>
        </div>
    </>
  )
}

export default FocusIndustries
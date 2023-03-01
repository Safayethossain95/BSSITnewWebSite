import React from 'react'

const WhyChooseUsCard = (props) => {
  return (
    <>
        <div className="wcuCardmain" data-aos-delay="400" data-aos={props.aoskey} data-aos-duration="2000">
            <div className="smallimg">
              <img src={`${props.img}`} alt="" />
            </div>
            <div className="mytitle">
              <h4>{props.head}</h4>
            </div>
            <div className="para">
              <p>{props.para}</p>
            </div>
        </div>
    </>
  )
}

export default WhyChooseUsCard
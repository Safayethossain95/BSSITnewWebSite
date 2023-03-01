import React from 'react'
import { Button } from 'react-bootstrap'

const CommonButton = (props) => {
  return (
    <div className="commonbutton">
        <Button data-aos-delay="400" data-aos="fade-up" data-aos-duration="2000">{props.text}</Button>
    </div>
  )
}

export default CommonButton
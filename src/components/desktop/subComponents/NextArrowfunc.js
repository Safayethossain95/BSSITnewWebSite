import React from 'react'
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'
const NextArrowfunc = (props) => {
    const { className, style, onClick } = props;
  return (
    <>
    <div
            className={className}
            style={{ display: "block",  }}
            onClick={onClick}
          ><BsArrowLeft/>dfghdfghdfgdgdfg
          </div>
    </>
  )
}

export default NextArrowfunc
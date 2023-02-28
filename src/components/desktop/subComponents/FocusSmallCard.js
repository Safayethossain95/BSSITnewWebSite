import React from 'react'

const FocusSmallCard = (props) => {
  return (
    <>
        <div className="focussmallcard">
            <div className="img">
                <img src={`${props.imgurl}`} alt="1.png" />
            </div>
            <div className="text">
                <p>{props.text}</p>
            </div>
        </div>
    </>
  )
}

export default FocusSmallCard
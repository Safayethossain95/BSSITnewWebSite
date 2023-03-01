import React from 'react'

const Banner = (props) => {
  return (
    <>
        <div className="myBanner">
            <div className="bnoverlay">
              <img src="./assets/images/homepage/bannerpart/left.png" alt="" />
              <img src="./assets/images/homepage/bannerpart/right.png" alt="" />
                <div className="bnrtextwrapper" data-aos-delay="400" data-aos="fade-in" data-aos-duration="2000">
                <h1>Experience the Future{props.break=="linebreak"?<br/>:""} with Our IT Solutions</h1>
                <p>Partner with us for customized IT solutions{props.break=="mblinebreak"?<br/>:""} and take your{props.break=="linebreak"?<br/>:""} business to the next level</p>

                </div>
            </div>
            {/* <img src="./assets/images/homepage/herosectionslider1.png" alt="herosectionslider1.png" /> */}
            <video src="./assets/videos/BannerVideo.mp4" autoPlay loop muted></video>
        </div>
    </>
  )
}

export default Banner
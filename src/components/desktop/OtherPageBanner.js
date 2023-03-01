import React from 'react'

const OtherPageBanner = (props) => {
  return (
    <div className="myBanner otherpagebanner">
    <div className="bnoverlay">
      <img src="./assets/images/homepage/bannerpart/left.png" alt="" />
      <img src="./assets/images/homepage/bannerpart/right.png" alt="" />
        <div className="bnrtextwrapper" data-aos-delay="400" data-aos="fade-in" data-aos-duration="2000">
        <h1>{props.title}</h1>
        

        </div>
    </div>
    {/* <img src="./assets/images/homepage/herosectionslider1.png" alt="herosectionslider1.png" /> */}
    <video src="./assets/videos/BannerVideo.mp4" autoPlay loop muted></video>
</div>
  )
}

export default OtherPageBanner
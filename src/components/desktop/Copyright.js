import React from 'react'
import {BsFacebook,BsYoutube,BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
const Copyright = () => {
  return (
    <>
    <div className="myContainer">

        <div className="copyright">
            <div className="left">
            <BsFacebook/>
            <div className="icondiv">
                <BsYoutube/>
            </div>
            <div className="icondiv">
                <BsTwitter/>
            </div>
            <div className="icondiv">
                <FaLinkedinIn/>
            </div>
            </div>
            <div className="right text-end">
                <p>&copy; 2023. BSSIT. All right reserved</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Copyright
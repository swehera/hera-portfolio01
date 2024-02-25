import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";


const SocialIcon = () => {
  return (
    
          <div className="flex items-center gap-5">
            <a href="https://facebook.com" target="blank" className="portfolioIconStyle">
              <BsTwitterX />
            </a>


            <a href="https://facebook.com" target="blank" className="portfolioIconStyle">
            <FaFacebook />
            </a>



            <a href="https://facebook.com" target="blank" className="portfolioIconStyle">
            <FaGithub />
            </a>



            <a href="https://facebook.com" target="blank" className=" portfolioIconStyle">
            <FaLinkedinIn />
            </a>
          </div>
        
  )
}

export default SocialIcon
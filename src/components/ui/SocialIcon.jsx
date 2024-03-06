import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const SocialIcon = () => {
  return (
    <div className="flex items-center gap-5">
      <a
        href="https://www.youtube.com/@heratech2721"
        target="blank"
        className="portfolioIconStyle"
      >
        <IoLogoYoutube />
      </a>

      <a
        href="https://www.facebook.com/lutforrohoman.hera/"
        target="blank"
        className="portfolioIconStyle"
      >
        <FaFacebook />
      </a>

      <a
        href="https://github.com/swehera"
        target="blank"
        className="portfolioIconStyle"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/lutfor-rahman-hera/"
        target="blank"
        className=" portfolioIconStyle"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default SocialIcon;

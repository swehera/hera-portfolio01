import React from "react";
import Container from "./Container";
import logo from "../assets/logo.png";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import SocialIcon from "./ui/SocialIcon";

const Footer = () => {
  return (
    <div className="bg-primaryColor">
      <Container className="flex flex-col md:flex-row gap-5 items-center text-lightText justify-between py-5">
        <img src={logo} alt="logo" className="w-24" />
        <p className="text-sm lowercase hover:text-white duration-300">
          All right reserved @Hera
        </p>
        <SocialIcon />
      </Container>
    </div>
  );
};

export default Footer;

import React from "react";
import Container from "./Container";
import AboutMeImg from "../assets/banner2.png";
import Button from "./ui/Button";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";

const AboutMe = () => {
  return (
    <section name="about" className="px-4">
      <Container className="flex flex-col gap-10 md:gap-0 md:flex-row justify-between">
        {/* Left part */}
        <div className="w-full md:w-[35%] bg-[#212428] p-10 rounded-lg shadow-md shadow-black overflow-hidden group">
          <div className=" overflow-hidden">
            <div className=" h-[300px] md:h-[500px] flex flex-col items-center justify-center overflow-hidden rounded-md">
              <img
                src={AboutMeImg}
                alt="aboutMeImage"
                className="h-full group-hover:scale-110 duration-500 rounded-md"
              />
            </div>
          </div>
        </div>
        {/* Right part */}
        <div className="w-full md:w-[55%] flex flex-col justify-center gap-7">
          <Subtitle title="About me" />
          <Title title="Lutfor Rahman" />
          <p>
            I am lutfor Rahman Hira, I completed my diploma engineering in cse
            from munshiganj polytechnic institute. And Recently I learned MERN
            Stack development with PropleNTech
          </p>
          <p>
            I always wanted to know how web technology works. And that curiosity
            makes me a web developer today.
          </p>
          <Button title="Learn more" className="w-40 h-14" />
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;

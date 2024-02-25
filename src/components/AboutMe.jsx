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
          <div className="h-[500px] overflow-hidden rounded-md">
            <img
              src={AboutMeImg}
              alt="aboutMeImage"
              className="h-full group-hover:scale-110 duration-500 rounded-md"
            />
          </div>
        </div>
        {/* Right part */}
        <div className="w-full md:w-[55%] flex flex-col justify-center gap-7">
          <Subtitle title="About me" />
          <Title title="Lutfor Rahman" />
          <p>
            Dr. Laura Jerry brings a wealth of experience and expertise to her
            practice. With a focus on patient-centered care, she is known for
            her warm and empathetic approach, always taking the time to listen
            to her patients’ concerns. Her extensive medical knowledge and
            dedication to staying at the forefront of the field make her a
            trusted healthcare partner.
          </p>
          <p>
            Explore the range of medical services Dr. Collins offers, including
            general check-ups, preventative care, chronic disease management,
            and more. She is committed to working with you to develop
            personalized treatment plans that suit your unique needs.
          </p>
          <Button title="Learn more" className="w-40 h-14" />
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;

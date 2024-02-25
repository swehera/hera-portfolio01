import React from "react";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";

import Button from "./ui/Button";

const Hero = () => {
  const words = [
    "Mern stack developer",
    "Frontend developer",
    "Backend developer",
    "Full stack developer",
  ];

  return (
    <section name="hero">
      <div className="w-full px-7 md:px-0 bg-primaryColor md:bg-hero-image lg:bg-hero-image bg-cover z-40">
        <Container className="py-20">
          <div className="w-full md:w-1/2 flex flex-col gap-y-5">
            <p className="text-sm md:text-base  text-lightText uppercase">
              Full Stack developer
            </p>
            <h2 className="text-5xl md:text-7xl font-bold text-white">
              Hi, I’m <span className="text-designColor">Lutfor Rahman</span>
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              a{" "}
              <Typewriter
                words={words}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p className="text-base text-lightText pr-32 font-medium">
              I am full stack developer with 3+ years of expreience in web
              development. I completed many project in my previous. Recently I
              learn about mern stack development with peoplentech.
            </p>
            <Button className="w-40 h-14 " />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;

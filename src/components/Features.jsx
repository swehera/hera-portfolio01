import React from "react";
import Container from "./Container";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
//import { AiOutlineMenu } from "react-icons/ai";

//import { IoBookOutline } from "react-icons/io5";

import { featuresData } from "../constant/data";
import FaeatureCard from "./ui/FaeatureCard";

const Features = () => {
  return (
    <section name="services" className="px-4">
      <Container className="border-b border-black flex flex-col items-center md:items-start gap-7">
        <Subtitle title="Features" />
        <Title title="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
          {featuresData.map((item) => (
            <FaeatureCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;

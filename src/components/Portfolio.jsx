import React from "react";
import Container from "./Container";
import Title from "./ui/Title";
import Subtitle from "./ui/Subtitle";

import PortfolioCard from "./ui/PortfolioCard";
import { portfolioData } from "../constant/data";

const Portfolio = () => {
  return (
    <section name="portfolio" className=" px-3">
      <Container className="border-b border-black flex flex-col gap-7">
        <div className="flex flex-col items-center">
          <Subtitle title="Portfolio" className=" text-center" />
          <Title title="My Portfolio" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
          {portfolioData.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;

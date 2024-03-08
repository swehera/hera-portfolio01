import React from "react";
import Title from "./Title";
import { Discuss } from "react-loader-spinner";
import Subtitle from "./Subtitle";

const Experience = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-5 ">
      <div className=" border-solid border-2 border-black rounded-md ">
        <div className="  w-full  md:w-full mb-5">
          <div className="flex items-center mt-3">
            <div className="w-full md:w-full px-5 md:px-16 py-5  ">
              <Subtitle title="2022-2023" />
              <p className=" text-3xl font-bold text-titleColor">
                Job Experience
              </p>
              <div className=" px-4 mt-4">
                <p className=" text-2xl">Assistant Manager</p>
                <p>Islam Navigation(2023-2024)</p>
                <p className=" text-designColor">1 years</p>
                <p>
                  I worked as an assistant manager at Islam Navigation it's a
                  ship company
                </p>
              </div>
              <div className=" px-4 mt-4">
                <p className=" text-2xl">Freelancer</p>
                <p>Fiverr, Freelancer.com, Upwork (2022-2023)</p>
                <p className=" text-designColor">1 years</p>
                <p>
                  I worked as an freelancer at diffrent type of freelance
                  website
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

import React from "react";
import Subtitle from "./Subtitle";

const EducationTab = () => {
  return (
    <div className=" flex flex-col md:flex-row  w-full">
      <div className=" w-full md:w-1/2">
        <div className="flex items-center mt-3">
          <div className="w-full md:w-full px-16 py-5  ">
            <Subtitle title="2016-2023" />
            <p className=" text-3xl font-bold text-titleColor">
              Education Qualification
            </p>
            <div className=" px-4 mt-4">
              <p className=" text-2xl">Diploma-in-Engineering</p>
              <p>Munshiganj Polytechnic Institute (2018-2022)</p>
              <p className=" text-designColor">3.43 / 4</p>
              <p>
                I completed my diploma from Munshiganj Polytechnic Institute
                (2018-2022) in CSE Department
              </p>
            </div>
            <div className=" px-4 mt-4">
              <p className=" text-2xl">S.S.C (Science)</p>
              <p>Ma Memorial Model Academy (2016-2018)</p>
              <p className=" text-designColor">4.39 / 5</p>
              <p>
                I completed my S.S.C from Ma Memorial Model Academy school
                (2018-2022)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="  w-full md:w-1/2">
        <div className="flex items-center mt-3">
          <div className="w-full md:w-full px-16 py-5  ">
            <Subtitle title="2022-2023" />
            <p className=" text-3xl font-bold text-titleColor">
              Job Experience
            </p>
            <div className=" px-4 mt-4">
              <p className=" text-2xl">Assistant Manager</p>
              <p>Islam Navigation(2023-2024)</p>
              <p className=" text-designColor">1 years</p>
              <p>
                I worked as an assistant manager at Islam Navigation it's a ship
                company
              </p>
            </div>
            <div className=" px-4 mt-4">
              <p className=" text-2xl">Freelancer</p>
              <p>Fiverr, Freelancer.com, Upwork (2022-2023)</p>
              <p className=" text-designColor">1 years</p>
              <p>
                I worked as an freelancer at diffrent type of freelance website
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationTab;

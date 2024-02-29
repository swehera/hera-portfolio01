import React from "react";
import Container from "../Container";
import Subtitle from "./Subtitle";
import Title from "./Title";
import { useState } from "react";
import EducationTab from "./EducationTab";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificates from "./Certificates";

const Resume = () => {
  const [education, setEducation] = useState(true);
  const [skills, setSkills] = useState(false);
  const [experience, setExprience] = useState(false);
  const [certificate, setCertificate] = useState(false);

  const handleEducation = () => {
    setEducation(true);
    setSkills(false);
    setExprience(false);
    setCertificate(false);
  };

  const handleSkills = () => {
    setEducation(false);
    setSkills(true);
    setExprience(false);
    setCertificate(false);
  };
  const handleExprience = () => {
    setEducation(false);
    setSkills(false);
    setExprience(true);
    setCertificate(false);
  };
  const handleCertificate = () => {
    setEducation(false);
    setSkills(false);
    setExprience(false);
    setCertificate(true);
  };

  return (
    <section name="resume" className="px-4">
      <Container className="border-b border-black flex flex-col items-center md:items-center ">
        <Subtitle title="1+ years of experience" />
        <Title title="My Resume" />
        <div className=" w-full py-4 md:py-6">
          <ul className="  flex-none md:flex  md:items-center md:justify-between gap-1 md:gap-2">
            <li
              onClick={handleEducation}
              className={`resumeStyle ${education && "text-designColor  "}`}
            >
              Education
            </li>
            <li
              onClick={handleSkills}
              className={`resumeStyle ${skills && "text-designColor"}`}
            >
              Professional Skills
            </li>
            <li
              onClick={handleExprience}
              className={`resumeStyle ${experience && "text-designColor"}`}
            >
              Experience
            </li>
            <li
              onClick={handleCertificate}
              className={`resumeStyle ${certificate && "text-designColor"}`}
            >
              My Certificates
            </li>
          </ul>
          <div>
            {education && <EducationTab />}
            {skills && <Skills />}
            {experience && <Experience />}
            {certificate && <Certificates />}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Resume;

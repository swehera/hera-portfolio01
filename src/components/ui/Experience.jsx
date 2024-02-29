import React from "react";
import Title from "./Title";
import { Discuss } from "react-loader-spinner";

const Experience = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-5">
      <div>
        <Discuss
          visible={true}
          height="80"
          width="80"
          ariaLabel="discuss-loading"
          wrapperStyle={{}}
          wrapperClass="discuss-wrapper"
          color="designColor"
          backgroundColor="#F4442E"
        />
      </div>
      <p className=" text-2xl">This section Under Devlopment Process</p>
    </div>
  );
};

export default Experience;

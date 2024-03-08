import React from "react";
import { certificateData } from "../../constant/data";

const Certificates = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 p-3  gap-2 justify-center items-center mt-5">
      {certificateData.map((item) => (
        <div className=" flex justify-center items-center gap-2 ">
          <div
            key={item.id}
            className=" border-solid border-2 border-black p-3 rounded-md "
          >
            <div className=" overflow-hidden">
              <img
                src={item.img}
                alt="diploma-certificate"
                className=" w-auto md:w-[450px] rounded-md hover:scale-125 duration-300"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificates;

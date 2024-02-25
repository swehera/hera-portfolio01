import React from "react";
import { FaArrowRight } from "react-icons/fa";

const FaeatureCard = ({ item }) => {
  return (
    <div
      key={item.id}
      className=" relative group overflow-hidden w-full p-10 bg-primaryColor flex flex-col gap-5 rounded-lg shadow-md shadow-black/95 feature-item"
    >
      <span className="iconStyle">{item.icon}</span>
      <p className="text-xl font-bold">{item.title}</p>
      <p className="text-base font-medium">{item.description}</p>

      <FaArrowRight className=" text-2xl group-hover:absolute group-hover:bottom-8  text-primaryColor  group-hover:text-designColor translate-y-2  -translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0 duration-300" />
    </div>
  );
};

export default FaeatureCard;

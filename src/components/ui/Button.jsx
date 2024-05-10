import React from "react";
import { resume } from "../../assets/getImage";

const Button = (props) => {
  console.log(props.className);
  return (
    <button
      className={`text-designColor/70 text-sm  font-semibold bg-gradient-to-tr from-black to-primaryColor rounded-md hover:bg-gradient-to-t hover:from-primaryColor hover:to-black hover:text-designColor duration-300 hover:-translate-y-1 ${props.className}`}
    >
      <a href={resume} target="_blank">
        {" "}
        {props.title ? props.title : "Hire Me"}
      </a>
    </button>
  );
};

export default Button;

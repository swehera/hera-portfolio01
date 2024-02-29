import React from "react";

const Title = ({ title, className }) => {
  return (
    <h2
      className={`${className} text-4xl md:text-6xl font-bold text-titleColor`}
    >
      {title}
    </h2>
  );
};

export default Title;

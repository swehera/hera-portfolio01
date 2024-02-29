import React from "react";

const Subtitle = ({ title, className }) => {
  return (
    <p
      className={`${className} text-base font-medium text-designColor uppercase`}
    >
      {title}
    </p>
  );
};

export default Subtitle;

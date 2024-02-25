import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";



const PortfolioCard = ({item}) => {
    console.log(item);
  return (
    <div className="w-full bg-black p-10 bg-gradient-to-tr from-primaryColor to-primaryColor/80 shadow shadow-lightText/10 rounded-lg ">

      







        <a href={item.link} target="blank">
        <div className="w-full h-72 rounded-lg overflow-hidden relative group">
          <img
            src={item.img}
            alt="img-one"
            className="w-full h-full object-cover  group-hover:scale-110 duration-500"
          />
          <span className="absolute top-4 right-4 text-xl">{item.icon}</span>
        </div>

        <div className="flex flex-col gap-5 pt-5">
          <p className="text-xs font-semibold text-designColor uppercase">
            {item.subtitle}
          </p>
          <div>
            <h2 className="text-2xl font-bold hover:text-designColor duration-300 cursor-pointer relative group overflow-hidden">
              {item.title}
              <span className="absolute bottom-0 translate-y-5 -translate-x-5 group-hover:translate-y-0 group-hover:translate-x-0 duration-300">
                <MdArrowOutward />
              </span>{" "}
            </h2>
          </div>
        </div>
        </a>
      </div>
  )
}

export default PortfolioCard
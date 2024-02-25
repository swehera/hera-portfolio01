import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineBars4 } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { CiMobile2 } from "react-icons/ci";
import { FiDatabase } from "react-icons/fi";
import { BsBox } from "react-icons/bs";

import { PiGridFourBold } from "react-icons/pi";
import { IoVideocamOutline } from "react-icons/io5";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";


import { imgFive, imgFour, imgOne, imgSix, imgThree, imgTwo } from "../assets/getImage";

export const featuresData = [
  {
    id: 1,
    icon: <HiOutlineBars4 className=" text-6xl" />,
    title: "Business Stratagy",
    description:
      "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
  },
  {
    id: 2,
    icon: <IoBookOutline className=" text-6xl"/>,
    title: "App Development",
    description:
      "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
  },
  {
    id: 3,
    icon: <PiTelevisionSimpleLight  className=" text-6xl"/>,
    title: "Business Stratagy",
    description:
      "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
  },
  {
    id: 4,
    icon: <CiMobile2 className=" text-6xl"/>,
    title: "Mobile App",
    description:
      "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
  },
  {
    id: 5,
    icon: <FiDatabase  className=" text-6xl"/>,
    title: "SEO Optimisation",
    description:
      "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
  },
  {
    id: 6,
    icon: <BsBox className=" text-6xl"/>,
    title: "UX Consulting",
    description:
      "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
  },
];





export const portfolioData = [
  {
    id: 101,
    title: "NFT Dashboard Application Development.",
    subtitle: "Gallery",
    img: imgOne,
    icon: <PiGridFourBold />,
    link: "https://facebook.com"
  },
  {
    id: 102,
    title: "Online Food Delivery Mobile App Design.",
    subtitle: "Video",
    img: imgTwo,
    icon: <IoVideocamOutline />,
    link: "https://facebook.com"
  },
  {
    id: 103,
    title: "Travel App Design Creativity & Application. ",
    subtitle: "External Link",
    img: imgThree,
    icon: <FaSquareArrowUpRight />,
    link: "https://facebook.com"
  },
  {
    id: 104,
    title: "Workout Website Design And Development. ",
    subtitle: "Image",
    img: imgFour,
    icon: <FaImage />,
    link: "https://facebook.com"
  },
  {
    id: 105,
    title: "NFT Dashboard Application Development.",
    subtitle: "Gallery",
    img: imgFive,
    icon: <PiGridFourBold />,
    link: "https://facebook.com"
  },
  {
    id: 106,
    title: "Restaurant Mobile Application Figma Design.",
    subtitle: "Standard",
    img: imgSix,
    icon: <AiOutlineMenu />,
    link: "https://facebook.com"
  }
];

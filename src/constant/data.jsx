import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineWeb } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { AiOutlineSolution } from "react-icons/ai";
import { CiMobile2 } from "react-icons/ci";
import { FiDatabase } from "react-icons/fi";
import { BsBox } from "react-icons/bs";

import { PiGridFourBold } from "react-icons/pi";
import { IoVideocamOutline } from "react-icons/io5";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";

import {
  imgFive,
  imgFour,
  imgOne,
  imgSix,
  imgThree,
  imgTwo,
} from "../assets/getImage";

import { diploma, freecodecamp } from "../assets/getImage";

export const featuresData = [
  {
    id: 1,
    icon: <MdOutlineWeb className=" text-6xl" />,
    title: "Web Development",
    description:
      "html5, css3, tailwind css, react+vite js, next js, node js, express js, mongodb etc",
  },
  {
    id: 2,
    icon: <MdOutlinePhoneAndroid className=" text-6xl" />,
    title: "App Development",
    description: "For app development I use react native, firebase, mongodb.",
  },
  {
    id: 3,
    icon: <AiOutlineSolution className=" text-6xl" />,
    title: "Business Stratagy",
    description:
      "For bussiness groth I created some content management system (CMS) software",
  },
  {
    id: 4,
    icon: <CiMobile2 className=" text-6xl" />,
    title: "Mobile App",
    description:
      "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
  },
  {
    id: 5,
    icon: <FiDatabase className=" text-6xl" />,
    title: "SEO ",
    description:
      "For Search Engine Optomization I use some of my personal tricks.",
  },
  {
    id: 6,
    icon: <BsBox className=" text-6xl" />,
    title: "UI & UX",
    description: "For desining a app or website UI I use figma .",
  },
];

export const portfolioData = [
  {
    id: 101,
    title: "User Management System",
    subtitle: "Image",
    img: imgOne,
    icon: <PiGridFourBold />,
    link: "https://user-manage-app-five.vercel.app/",
  },
  {
    id: 102,
    title: "Beautiful Portfolio Design",
    subtitle: "Image",
    img: imgTwo,
    icon: <IoVideocamOutline />,
    link: "https://hera-portfolio-01.vercel.app/",
  },
  {
    id: 103,
    title: "JSON Placeholder Clone ",
    subtitle: "Image",
    img: imgThree,
    icon: <FaSquareArrowUpRight />,
    link: "https://json-placeholder-six.vercel.app/",
  },
  /*
  {
    id: 104,
    title: "Workout Website Design And Development. ",
    subtitle: "Image",
    img: imgFour,
    icon: <FaImage />,
    link: "https://facebook.com",
  },
  {
    id: 105,
    title: "NFT Dashboard Application Development.",
    subtitle: "Gallery",
    img: imgFive,
    icon: <PiGridFourBold />,
    link: "https://facebook.com",
  },
  {
    id: 106,
    title: "Restaurant Mobile Application Figma Design.",
    subtitle: "Standard",
    img: imgSix,
    icon: <AiOutlineMenu />,
    link: "https://facebook.com",
  },
  */
];

export const certificateData = [
  {
    id: 1,
    img: diploma,
  },
  {
    id: 2,
    img: freecodecamp,
  },
];

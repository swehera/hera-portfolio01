import { Link } from "react-scroll";
import logo from "../assets/logo1.png";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Button from "./ui/Button";
import SocialIcon from "./ui/SocialIcon";
import { useState } from "react";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navigationArray = [
    { title: "Home", link: "hero" },
    { title: "About", link: "about" },
    { title: "Services", link: "services" },
    { title: "Portfolio", link: "portfolio" },
    { title: "Resume", link: "resume" },
    { title: "Contact", link: "contact" },
  ];

  console.log("menu", showMenu);

  return (
    <header className="w-full h-20  sticky top-0 z-50  bg-[#0f1013]/95 bg-opacity-95 shadow-xl bg-primaryColor drop-shadow-md ">
      <div className="h-full max-w-screen-xl mx-auto flex items-center justify-between px-4">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-24" />
          </Link>
        </div>
        <div className="hidden md:inline-flex items-center gap-6">
          {navigationArray.map(({ title, link }) => (
            <Link
              to={link}
              key={title}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p className="text-sm hover:animate-pulse uppercase text-lightText font-semibold hover:text-designColor cursor-pointer duration-300">
                {title}
              </p>
            </Link>
          ))}

          <Button className="w-28 h-10 uppercase" />
        </div>
        <div className="md:hidden">
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 bg-black rounded-full"
          >
            <FiMenu className="text-2xl text-designColor/80 cursor-pointer hover:text-designColor duration-200" />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="fixed top-0 min-h-full w-full md:hidden bg-black/50 text-gray-200">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-96 min-h-screen bg-primaryColor p-10 flex flex-col gap-5"
          >
            <div className="flex items-center justify-between">
              <img src={logo} alt="logo" className="w-20" />
              <span
                onClick={() => setShowMenu(false)}
                className="p-2 bg-black rounded-full inline-block"
              >
                <IoClose className="text-2xl text-designColor/80 cursor-pointer hover:text-designColor duration-200" />
              </span>
            </div>
            <p className="text-base text-lightText">
              Inbio is a all in one personal portfolio WordPress theme. You can
              customize everything.
            </p>
            <div className="flex flex-col gap-4">
              {navigationArray.map(({ title, link }) => (
                <Link
                  to={link}
                  key={title}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => setShowMenu(false)}
                >
                  <p className="text-sm uppercase text-lightText font-semibold hover:text-designColor cursor-pointer duration-300">
                    {title}
                  </p>
                </Link>
              ))}
              <Button className="w-28 h-10 uppercase" />
            </div>
            <div>
              <h2 className="uppercase mb-2 font-semibold">Find with me</h2>
              <SocialIcon />
            </div>
          </motion.div>
        </div>
      )}
    </header>
  );
};

export default Header;

import React from "react";
import Subtitle from "./Subtitle";
import { delay, motion } from "framer-motion";
import Title from "./Title";

const Skills = () => {
  return (
    <div className="flex-none md:flex items-center justify-between mt-4">
      <div className="w-full md:w-1/2  p-3 h-full md:h-[600px]">
        <Subtitle title="Skills" />
        <p className=" text-titleColor text-2xl md:text-3xl font-semibold">
          Design Skills
        </p>

        <div className=" overflow-hidden mt-4">
          <p className="  text-[14px] md:text-[16px] uppercase ">Figma</p>

          <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className=" w-[90%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
            >
              <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                90%
              </span>
            </motion.span>
          </span>
        </div>

        <div className=" overflow-hidden mt-4">
          <p className="  text-[14px] md:text-[16px] uppercase ">
            Adove Illustrator
          </p>

          <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className=" w-[60%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
            >
              <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                60%
              </span>
            </motion.span>
          </span>
        </div>

        <div className=" overflow-hidden mt-4">
          <p className="  text-[14px] md:text-[16px] uppercase ">UI & UX</p>

          <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className=" w-[80%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
            >
              <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                80%
              </span>
            </motion.span>
          </span>
        </div>
      </div>

      <div className=" w-full md:w-1/2  p-3 h-full md:h-[600px]">
        <Subtitle title="Skills" />
        <p className=" text-titleColor text-2xl md:text-3xl font-semibold">
          Development Skill
        </p>
        <div className=" mt-5">
          <div className=" overflow-hidden mt-4">
            <p className="  text-[14px] md:text-[16px] uppercase ">HTML5</p>

            <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=" w-[90%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
              >
                <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                  90%
                </span>
              </motion.span>
            </span>
          </div>
        </div>
        <div className=" mt-5">
          <div className=" overflow-hidden mt-4">
            <p className="  text-[14px] md:text-[16px] uppercase ">CSS3</p>

            <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=" w-[80%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
              >
                <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                  80%
                </span>
              </motion.span>
            </span>
          </div>
        </div>
        <div className=" mt-5">
          <div className=" overflow-hidden mt-4">
            <p className="  text-[14px] md:text-[16px] uppercase ">
              TAILWINDCSS
            </p>

            <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=" w-[80%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
              >
                <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                  80%
                </span>
              </motion.span>
            </span>
          </div>
        </div>
        <div className=" mt-5">
          <div className=" overflow-hidden mt-4">
            <p className="  text-[14px] md:text-[16px] uppercase ">
              JAVASCRIPT
            </p>

            <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=" w-[70%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
              >
                <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                  70%
                </span>
              </motion.span>
            </span>
          </div>
        </div>
        <div className=" mt-5">
          <div className=" overflow-hidden mt-4">
            <p className="  text-[14px] md:text-[16px] uppercase ">REACT JS</p>

            <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=" w-[80%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
              >
                <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                  80%
                </span>
              </motion.span>
            </span>
          </div>
        </div>
        <div className=" mt-5">
          <div className=" overflow-hidden mt-4">
            <p className="  text-[14px] md:text-[16px] uppercase ">NEXT JS</p>

            <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=" w-[70%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
              >
                <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                  70%
                </span>
              </motion.span>
            </span>
          </div>
        </div>
        <div className=" mt-5">
          <div className=" overflow-hidden mt-4">
            <p className="  text-[14px] md:text-[16px] uppercase ">MONGODB</p>

            <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=" w-[80%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
              >
                <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                  80%
                </span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

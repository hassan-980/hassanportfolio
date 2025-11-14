import React from "react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { motion } from "motion/react";
import ContactButton from "@/components/ContactButton";
import FloatingMotion from "@/components/FloatingMotion";

const HeroSection = () => {
  return (
    <div>
      <div className="border-b-2 border-[#1C1C1F] dark:bg-black bg-white">
        <div className="px-4 pt-4 sm:px-6 sm:pt-6 md:ml-4 md:px-0 md:pt-4">
          <div className="flex sm:min-h-screen flex-col items-center bg-white font-sans dark:bg-black">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
              <div className="">
                <h1 className="font-blackHanSans sm:-mb-16 -mb-4 bg-gradient-to-t dark:from-gray-800 from-black dark:to-white  bg-clip-text text-3xl sm:text-9xl font-extrabold text-transparent">
                  HI, I'M HASSAN
                </h1>
              </div>
            </motion.div>

            <div className="flex items-center  justify-center space-y-10">
              <div className=" hidden sm:flex w-100 flex-col items-center justify-center">
                <TypingAnimation
                  cursorStyle="block"
                  loop
                  className="font-geist-mono sm:mx-15 sm:text-xl text-xs "
                > I build for the web! that are scalable and feels good to use.
                </TypingAnimation>
              </div>

              <FloatingMotion>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  <img src="/avatar.png" className="sm:h-120 sm:w-110
                  h-70 w-70" 
                  alt="" />
                </motion.div>
              </FloatingMotion>

              <div className=" hidden sm:flex w-100 items-center justify-center">
                <ContactButton></ContactButton>
              </div>
              
            </div>
          </div>
        </div>
        <div className=" sm:hidden flex  flex-col h-20 -mt-10  items-center justify-center">
                <TypingAnimation
                  cursorStyle="block"
                  loop
                  className="font-geist-mono w-1/2  sm:mx-15 sm:text-xl text-xs "
                > I build for the web! that are scalable and feels good to use.
                </TypingAnimation>
              </div>
      </div>
      

      {/* <div className="h-12 border-b-2 border-[#1C1C1F] bg-black bg-[radial-gradient(circle,#1D202A_1px,transparent_1px)] [background-size:12px_12px] sm:h-16 sm:[background-size:14px_14px] md:h-18 md:[background-size:16px_16px]"></div> */}
    </div>
  );
};

export default HeroSection;

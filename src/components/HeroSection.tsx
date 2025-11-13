import React from "react";
import { FileDown, Calendar } from "lucide-react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { motion } from "motion/react";
import ContactButton from "@/components/ContactButton";
import FloatingMotion from "@/components/FloatingMotion";
const HeroSection = () => {
  return (
    <div>
      <div className="border-b-2 border-[#1C1C1F] bg-black">
        <div className="px-4 pt-4 sm:px-6 sm:pt-6 md:ml-4 md:px-0 md:pt-4">
          <div className="flex min-h-screen flex-col items-center bg-black font-sans dark:bg-black">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
              <div className="">
                <h1 className="font-blackHanSans -mb-16 bg-gradient-to-t from-gray-800 to-white bg-clip-text text-9xl font-extrabold text-transparent">
                  HI, I'M HASSAN
                </h1>
              </div>
            </motion.div>

            <div className="flex items-center justify-center space-y-10">
              <div className="flex w-100 flex-col items-center justify-center">
                <TypingAnimation
                  cursorStyle="block"
                  loop
                  className="font-geist-mono mx-15 text-xl"
                >
                  I build for the web! that are scalable and feels good to use.
                </TypingAnimation>
              </div>

              <FloatingMotion>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  <img src="/avatar.png" className="h-120 w-110" alt="" />
                </motion.div>
              </FloatingMotion>

              <div className="flex w-100 items-center justify-center">
                <ContactButton></ContactButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="h-12 border-b-2 border-[#1C1C1F] bg-black bg-[radial-gradient(circle,#1D202A_1px,transparent_1px)] [background-size:12px_12px] sm:h-16 sm:[background-size:14px_14px] md:h-18 md:[background-size:16px_16px]"></div> */}
    </div>
  );
};

export default HeroSection;

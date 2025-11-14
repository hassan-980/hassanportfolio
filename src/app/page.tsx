"use client";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Separator from "@/components/Separator";
import SkillsSection from "@/components/SkillsSection";
import React from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { useState } from "react";
import Taskbar from "@/components/Taskbar";
import Graph from "@/components/Graph";

const page = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <div className="w-full dark:bg-[repeating-linear-gradient(45deg,#000_0px,#000_7px,#1C1C1F_7px,#1C1C1F_8px)]  bg-[repeating-linear-gradient(45deg,#ffffff_0px,#ffffff_7px,#1C1C1F_7px,#1C1C1F_8px)]">
          <Container>
            <div className="dark:text-white text-black dark:bg-black bg-white">
              <Navbar />
              <HeroSection />
              <Separator />
              <Heading heading="About Me" />
              <About />
              <Separator />
              <Heading heading="Stack" />
              <SkillsSection />
              <Separator />
              <Heading heading="Projects" showButton buttonLink="/projects" />
              <ProjectsSection />
              {/* <Separator /> */}
              {/* <Heading heading="Experience" />
              <ExperienceSection
                logo="/conduit.png"
                title="NAME"
                link="/"
                type="Internship"
                highlights={[
                  "Contributing to the development of enterprise-grade frontend systems powering modern wholesale e-commerce.",
                  "Collaborating with the engineering team to build scalable, responsive UI components and optimize performance across the platform."
                ]}
                skills={["Javascript", "Next.js", "Tailwind CSS", "Redux"]}
              />
              */}
              <Separator />
               <Heading heading="Github Graph" />
              <Graph/>
              <Separator />
             
              <ContactSection />
            </div>
         </Container>
       </div>
      )}
     {loading ||   <Taskbar />}
    </>
  );
};

export default page;

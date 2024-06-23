"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";
import profile from "@/public/profile.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4"
    >
      <ParticleContainer />
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profile}
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white max-w-[50rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Rajat.</span> I'm a{" "}
        <span className="font-bold">SDE Intern</span> at{" "}
        <span className="font-bold">CloudSEK</span> in Banglore. I'm currently
        working with{" "}
        <span className="font-bold" style={{ color: "#134ca7" }}>
          {" "}
          Next.js
        </span>{" "}
        and{" "}
        <span className="font-bold" style={{ color: "#134ca7" }}>
          Typescript.
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950 md:px-7 md:py-3 md:gap-2 sm:p-4 sm:rounded-full"
          href="https://github.com/con-artist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="opacity-70" />
          <span className="hidden md:inline">GitHub</span>
        </a>
        <a
          className="group bg-gray-850 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40 md:px-7 md:py-3 md:gap-2 sm:p-4 sm:rounded-full"
          href="https://drive.google.com/file/d/1sJ2HFp6tTQu51_dgn82g75Q_gOYYRkZt/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileAlt className="opacity-70" />
          <span className="hidden md:inline">Resume</span>
        </a>
        <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40 md:px-7 md:py-3 md:gap-2 sm:p-4 sm:rounded-full"
          href="https://www.linkedin.com/in/rajat1064/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="opacity-70" />
          <span className="hidden md:inline">LinkedIn</span>
        </a>
      </motion.div>
    </section>
  );
}

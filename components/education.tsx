"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import college from "@/public/kota.png";
import Image from "next/image";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My Education</SectionHeading>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <Image src={college} alt="QUT" width="150" />
        </div>

        <div>
          <p className=" font-bold text-lg ">
            Bachelor of Technology in Computer Science
          </p>
          <p style={{ color: "#134ca7", fontWeight: 700 }}>
            Indian Institute of Information Technology, Kota
          </p>
          <p className="mt-1">Graduated in 2024</p>
          <p className="my-1">
            CGPA - <span className="font-bold">8.54/10</span>
          </p>
          <ul className="list-disc pl-6">
            <li>Webmasters Team Member</li>
            <li>Member of College Basketball Team</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

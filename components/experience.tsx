"use client";

import React, { ReactNode } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import Image from "next/image";
import { CgWorkAlt } from "react-icons/cg";
import darkCloudsek from "@/public/darkCloudsek.png";
import whiteCloudsek from "@/public/whiteCloudsek.png";
import aiplanet from "@/public/aiplanet.png";
import codingNinjas from "@/public/codingNinjas.png";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  interface ExperienceItem {
    id?: number;
    title: string;
    location: ReactNode;
    description: ReactNode;
    icon: ReactNode;
    date: string;
    logo: any;
    width?: number;
    height?: number;
  }

  const experiencesData: ExperienceItem[] = [
    {
      id: 1,
      title: "Software Developer Intern",
      location: (
        <p className="font-normal !mt-0">
          <span style={{ color: "#134ca7", fontWeight: 700 }}>Cloud</span>
          <span
            style={{
              color: theme === "light" ? "black" : "#fafafa",
              fontWeight: 700,
            }}
          >
            SEK
          </span>
        </p>
      ),
      description: (
        <div className="job-description">
          <ul className=" list-inside">
            <li
              className="mb-2"
              style={{ color: theme === "light" ? "#414141" : "#d4d4d4" }}
            >
              👉 Enhanced user activity and asset access flow for clients like
              "AB InBev," streamlining subscription management.
            </li>
            <li
              className="mb-2"
              style={{ color: theme === "light" ? "#414141" : "#d4d4d4" }}
            >
              👉 Reduced app.js bundle size and optimized login page, boosting
              performance by 60% and implementing enhanced security measures.
            </li>
            <li
              className="mb-2"
              style={{ color: theme === "light" ? "#414141" : "#d4d4d4" }}
            >
              👉 Developed reports page for downloading reports and monitoring
              live report generation.
            </li>
            <li
              className="mb-2"
              style={{ color: theme === "light" ? "#414141" : "#d4d4d4" }}
            >
              👉 Managed asset inventory pages with automated verification and
              timeline history.
            </li>
          </ul>
        </div>
      ),
      icon: React.createElement(CgWorkAlt),
      date: "December 2023 - June 2024",
      logo: theme === "light" ? darkCloudsek : whiteCloudsek,
      width: 100,
      height: 50,
    },
    {
      title: "Software Developer Intern",
      location: (
        <p className="font-normal !mt-0">
          <span
            style={{
              color: theme === "light" ? "black" : "#fafafa",
              fontWeight: 700,
            }}
          >
            AI
          </span>{" "}
          <span style={{ color: "#51AF5B", fontWeight: 700 }}>Planet</span>
        </p>
      ),
      description: (
        <div className="job-description">
          <ul className=" list-inside">
            <li
              className="mb-2"
              style={{ color: theme === "light" ? "#414141" : "#d4d4d4" }}
            >
              👉 Developed and launched 20+ webpages for the company's website,
              migrating code from React to Next.js.
            </li>
            <li
              className="mb-2"
              style={{ color: theme === "light" ? "#414141" : "#d4d4d4" }}
            >
              👉 Led the development of a full-scale dashboard for
              AI-Challenges, resulting in a 35% increase in user engagement.
            </li>
            <li
              className="mb-2"
              style={{ color: theme === "light" ? "#414141" : "#d4d4d4" }}
            >
              👉 Collaborated with a 6-member team to integrate new features and
              maintain the existing application for smooth operation.
            </li>
          </ul>
        </div>
      ),
      icon: React.createElement(CgWorkAlt),
      date: "June 2022 - January 2023",
      logo: aiplanet,
    },
    {
      title: "Teaching Assistant",
      location: (
        <p className="font-normal !mt-0">
          <span style={{ color: "#f66c3b", fontWeight: 700 }}>Coding</span>{" "}
          <span
            style={{
              color: theme === "light" ? "black" : "#fafafa",
              fontWeight: 700,
            }}
          >
            Ninjas
          </span>
        </p>
      ),
      description: (
        <div className="job-description">
          <ul className=" list-inside">
            <li
              className="mb-2"
              style={{ color: theme === "light" ? "#414141" : "#d4d4d4" }}
            >
              👉 Achieved a 4.8-star rating as a teaching assistant, boosting
              student engagement.
            </li>
            <li
              className="mb-2"
              style={{ color: theme === "light" ? "#414141" : "#d4d4d4" }}
            >
              👉 Guided students in mastering full-stack development concepts
              and skills through assignment assistance and feedback.
            </li>
          </ul>
        </div>
      ),
      icon: React.createElement(CgWorkAlt),
      date: "August 2022 - December 2022",
      logo: codingNinjas,
    },
  ];

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        <div>
          {experiencesData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                position: "relative",
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "#1d2432",
                fontSize: "1.5rem",
              }}
            >
              <>
                <h2
                  style={{
                    fontSize: "18px",
                    color: theme === "light" ? "black" : "#fafafa",
                  }}
                  className="font-bold capitalize md:max-w-none max-w-[150px]"
                >
                  {item.title}
                </h2>

                <div
                  style={{
                    position: "absolute",
                    top: item.id === 1 ? "24px" : "15px",
                    right: "10px",
                  }}
                >
                  <Image
                    src={item.logo}
                    alt="image description"
                    width={item?.width ?? 50}
                    height={item?.height ?? 50}
                  />
                </div>
                <p className="font-normal !mt-0 text-blue-800">
                  {item.location}
                </p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  <>{item.description}</>
                </p>
              </>
            </VerticalTimelineElement>
          ))}
        </div>
      </VerticalTimeline>
    </section>
  );
}

import React from "react";
import lightsOut from "@/public/movieApp.png";
import quinnn from "@/public/quinnn.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Lights OUT!",
    description:
      "Here's a Movie App crafted with React and styled-components, seamlessly connected to The Movie Database API. It's a user-friendly platform where movie enthusiasts can effortlessly browse through a vast collection of films, accessing comprehensive information and entertainment at their convenience.",
    tags: ["JavaScript", "React", "SCSS"],
    icons: ["logos:javascript", "logos:react", "logos:sass"],
    imageUrl: lightsOut,
    githubLink: "https://github.com/con-artist/Light-s-Out-app",
    demoLink: "https://lights-out-app.vercel.app/",
  },
  {
    title: "Quinnn",
    description:
      "Quinnn is a dynamic social media platform designed to empower all communities. Users can create personalized profiles, share posts, organize events, write blogs, and engage in a multitude of other interactive activities. It's a space where individuals can express themselves freely and connect with others who share their interests and passions",
    tags: ["Next.Js", "MUI", "JavaScript", "Express", "Nodejs"],
    icons: [
      "logos:nextjs-icon",
      "simple-icons:mui",
      "logos:javascript",
      "devicon:express",
      "logos:nodejs-icon",
    ],
    imageUrl: quinnn,
    urlLink: "https://quinnn.vercel.app/",
    githubLink: "https://github.com/Ankur6702/Quinnn-Frontend",
  },
];

export const skillsData = [
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "Material UI",
    icon: "simple-icons:mui",
  },
  {
    name: "Mongo DB",
    icon: "devicon:mongodb",
  },
  {
    name: "Git",
    icon: "devicon:git",
  },
  {
    name: "Github",
    icon: "mdi:github",
  },
  {
    name: "Jira",
    icon: "devicon:jira",
  },
  {
    name: "React Query",
    icon: "logos:react-query-icon",
  },
  {
    name: "C++",
    icon: "devicon:cplusplus",
  },

  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
] as const;

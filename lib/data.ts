import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import youtube from "@/public/youtube.png";
import store from "@/public/store.png";
import imageGen from "@/public/imagegen.png";
import carthagehostingImg from "@/public/hosting.png";
import bloodcenterImg from "@/public/bllod.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Applicative Internship at Carthage Solutions",
    location: "Monastir, Tunisia",
    description:
      "Completed an applicative internship, which involved developing an application and delivering a presentation. Gained practical experience in web development and project execution.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Initial Internship",
    location: "Monastir, Tunisia",
    description:
      "Completed an initial internship, focusing on foundational web development skills and gaining industry experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Computer Science Student",
    location: "Mahdia, Tunisia",
    description:
      "Studying Computer Science at ISET Mahdia University. Expected to graduate in 2025. Focused on programming and enhancing technical skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2025",
  },
  {
    title: "Part-Time Freelancer",
    location: "Remote",
    description:
      "Currently working as a part-time freelancer on various projects, including web applications and e-commerce platforms.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PickMe store",
    description:
      "Developed a comprehensive e-commerce platform with admin dashboards, user management, and payment integration.",
    tags: ["Angular", "Node.js", "Express", "MongoDB", "tailwindcss"],
    imageUrl: store,
  },{
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting, and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count, and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "PickMe store",
    description:
      "Developed a comprehensive e-commerce platform with admin dashboards, user management, and payment integration.",
    tags: ["Angular", "Node.js", "Express", "MongoDB", "tailwindcss"],
    imageUrl: store,
  },
  {
    title: "Blood Center Management",
    description:
      "Created a blood donation center management system to streamline donor registration, inventory, and reporting.",
      tags: ["Angular", "Node.js", "Express", "MongoDB", "tailwindcss"],
    imageUrl: bloodcenterImg,
  },
  {
    title: "RapidTupe",
    description:
      "Built a YouTube clone with video uploading, streaming, and user authentication features.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "RapidApi"],
    imageUrl: youtube,
  },
  {
    title: "Genpic",
    description:
      "Designed a web application that generates images based on user inputs and allows for image customization.",
    tags: ["React", "Next.js", "Tailwind", "OpenAI API"],
    imageUrl: imageGen,
  },
  {
    title: "Carthage Hosting",
    description:
      "I worked on this project during my internship at Carthage Solutions Company. It involves hosting and managing websites.",
    tags: ["angular", "tailwindcss", "expressjs", "mongoDB","typescript"],
    imageUrl: carthagehostingImg,
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "angular",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "mongoose",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "c#",
  "java",
  "boostrap",
  ".NET",
  "figma design",
  "photoshop"
] as const;

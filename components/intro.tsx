"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import hat from "@/public/hat.png";
import { BsArrowRight, BsLinkedin, BsDiscord, BsTwitter, BsYoutube } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaDiscord, FaGithub, FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import profilePic from "../../proImage.jpg"

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyUsername = () => {
    navigator.clipboard.writeText('am3er');

    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };
  return (
    <section
      ref={ref}
      id="home"
      className=" intro  p-28 relative text-center
       "
    >
      <div className="flex items-center z-10 justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <div className="relative mt-10 z-10" >
              <Image
                src={profilePic}
                alt="Ricardo portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
              <Image
                src={hat}
                alt="Ricardo portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="absolute rotate-[-35deg] top-[-45%] left-[-30px] 
                 h-24 w-36 rounded-full "
              />
            </div>
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl z-10"
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
        className="mb-10 mt-4 z-10 px-4 text-2xl max-w-[50rem]
         mx-auto text-center font-medium text-black !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Amir SF.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">4 years</span> of experience.

      </motion.h1>

      <motion.div
        className="flex mb-2 z-20 flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex
           items-center gap-2 rounded-full outline-none focus:scale-110
            hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-
           rounded-full outline-none focus:scale-110 hover:scale-110 
           active:scale-105 transition cursor-pointer borderBlack text-gray-700
            "
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 text-gray-700 transition" />
        </a>

      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 
        text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >


        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 
          flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] 
          active:scale-105 transition cursor-pointer borderBlack  "
          href="https://www.linkedin.com/in/amir-souaf-31232b264/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack  "
          href="https://github.com/AmlrSF"
          target="_blank"
        >
          <FaGithub />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack  "
          target="_blank"
          onClick={handleCopyUsername}

        >

          {showTooltip ? "copied" : <BsDiscord />}
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack  "
          href="https://x.com/AmlrSF"
          target="_blank"
        >
          <BsTwitter />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack  "
          href="https://www.youtube.com/@code-minds905"
          target="_blank"
        >
          <BsYoutube />
        </a>
      </motion.div>
    </section>
  );
}

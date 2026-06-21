"use client";

import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Image from "next/image";
import Link from "next/link";

import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    image: "/Blog/1.png",
    title: "Swisss Mobile App Redesign",
    tags: ["branding", "ui/ux design"],
    href: "#",
  },
  {
    image: "/Blog/2.png",
    title: "Italic Web Development",
    tags: ["ui/ux design", "web"],
    href: "#",
  },
  {
    image: "/Blog/3.png",
    title: "Swat Identity Stack",
    tags: ["branding", "visual design"],
    href: "#",
  },
  {
    image: "/Blog/4.png",
    title: "Swat Identity Stack",
    tags: ["branding", "visual design"],
    href: "#",
  },
  {
    image: "/Blog/5.png",
    title: "Swat Identity Stack",
    tags: ["branding", "visual design"],
    href: "#",
  },
];

const MotionImage = motion.create(Image);

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.75, 1],
    [0, 1, 1, 0],
  );

  const y = useTransform(scrollYProgress, [0, 0.2], [70, 0]);

  const imageScale = useTransform(scrollYProgress, [0, 0.2], [1.1, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y }}
      className="relative w-full rounded-3xl overflow-hidden border border-[#2a2a2a] group cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full h-[300px] lg:h-[540px] sm:h-[320px] overflow-hidden">
        <MotionImage
          style={{ scale: imageScale }}
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Bottom Info */}
      <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-b from-[#0d0d0d] via-[#1f1d1d] via-[#171717] to-[#191919]">
        <div className="flex flex-col gap-1">
          <h2 className="text-white lg:text-[40px] font-medium">
            {project.title}
          </h2>
          <p className="text-[#888] text-sm font-light">
            {project.tags.join(", ")}
          </p>
        </div>

        <a
          href={project.href}
          className="flex items-center justify-center w-15 h-15 rounded-full border border-[#3a3a3a] text-white hover:bg-[#c8f400] hover:text-black transition-all duration-200 shrink-0 ml-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const Page = () => {
  return (
    <>
      <Navbar />

      <div className="relative flex flex-col items-center gap-y-10 mt-10 px-4 overflow-hidden">
        {/* Heading */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.99 }}
          className="flex mt-10 lg:mt-30 flex-col items-center justify-center text-center z-10"
        >
          <h1 className="text-6xl md:text-6xl text-white leading-none">
            Blog <span className="font-extrabold">Insights</span>
          </h1>

          <p className="mt-10 max-w-2xl text-sm text-white/60 leading-relaxed">
            A showcase of my design projects, highlighting
            <br />
            my skills and experience.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="w-full max-w-xl mt-10 flex flex-col gap-8">
          {projects.map((project, index) => (
            <Link href={``} key={index}>
              <ProjectCard  project={project} />
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;

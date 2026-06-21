"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import { projects } from "../Data/projects";

const faqs = [
  {
    question: "Why should I hire you?",
    answer:
      "I specialize in UX/UI design, web development, and branding for individuals and businesses.",
  },
  {
    question: "What services do you offer?",
    answer:
      "I offer UI/UX design, web development, brand identity, and motion design tailored to your needs.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on the scope. A typical project takes 1–4 weeks from brief to final delivery.",
  },
  {
    question: "What is your design process?",
    answer:
      "I follow a research, wireframe, design, and iterate process to ensure quality results every time.",
  },
];

const Projects = () => {


  return (
    <>
      <div className="relative flex flex-col items-center gap-y-10 mt-10 px-4 overflow-hidden">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-7xl md:text-8xl font-machina text-white leading-none">
            Projects <span className="font-extrabold">Done</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl text-white/60 leading-relaxed">
            A showcase of my design projects, highlighting
            <br />
            my skills and experience.
          </p>
        </div>

        {/* ORB BACKGROUND */}
        <motion.div
          animate={{ y: [0, -10, 0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-8 z-0 opacity-70 pointer-events-none"
        >
          <Image src="/Orb.png" width={1200} height={1200} alt="orb" />
        </motion.div>

        {/* Cards — all 5 projects */}
        <div className="w-full mt-10 max-w-xl flex flex-col gap-6 relative z-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

     

        <Footer />
      </div>
    </>
  );
};

export default Projects;

"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../Components/Footer";
import ProjectCard from "../Components/ProjectCard";
import { projects } from "../Data/projects";
import Navbar from "../Components/Navbar";

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

const page = () => {
  const TextRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: TextRef,
    offset: ["start end", "end start"],
  });

  const Opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const Y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <>
      <Navbar />
      <div className="relative flex flex-col items-center gap-y-10 mt-10 px-4 overflow-hidden">
        {/* Heading */}
        <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{ease:"easeOut",duration:0.99}} className="flex mt-10 lg:mt-30 flex-col items-center justify-center text-center z-10">
          <h1 className="text-7xl md:text-6xl  text-white leading-none">
            Projects <span className="font-extrabold">Done</span>
          </h1>
          <p className="mt-6 max-w-xl text-md text-white/60 leading-relaxed">
            A showcase of my design projects, highlighting
            <br />
            my skills and experience.
          </p>
        </motion.div>

        {/* ORB BACKGROUND */}
        <motion.div
          animate={{ y: [0, -10, 0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute hidden lg:relative top-0 left-8 z-0 opacity-70 pointer-events-none"
        >
          <Image src="/Orb.png" width={1200} height={1200} alt="orb" />
        </motion.div>

        {/* Cards — all 5 projects */}
        <div className="w-full mt-10 max-w-xl flex flex-col gap-6 relative z-10">
          {projects.map((project, index) => (
           
              <Link  href={`/Display?id=${index}`} key={index}>
                <ProjectCard  project={project} />

              </Link>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default page;

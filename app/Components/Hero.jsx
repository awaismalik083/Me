"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Footer from "./Footer";
import { CiGlobe } from "react-icons/ci";
import CountUp from "react-countup";

import ProjectCard from "../Components/ProjectCard";
import { projects } from "../Data/projects";
import Feedback from "../Components/Feedback";
import { FiArrowUpRight } from "react-icons/fi";

import Link from "next/link";

const MotionImage = motion.create(Image);


// ── Reusable scroll-driven animation wrapper ───────────────────────────────
const ScrollSection = ({ children, className, style, animateProps = {} }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.3"],
  });

  const defaults = {
    opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
    y: useTransform(scrollYProgress, [0, 1], [60, 0]),
  };

  const motionStyle = {
    opacity: animateProps.opacity ?? defaults.opacity,
    y: animateProps.y ?? defaults.y,
    x: animateProps.x,
    scale: animateProps.scale,
    width: animateProps.width,
  };

  return (
    <motion.div
      ref={ref}
      style={{ ...motionStyle, ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
// ──────────────────────────────────────────────────────────────────────────

// ── Stacking Card Wrapper ──────────────────────────────────────────────────
const StackingCard = ({ project, index, total }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (total - index - 1) * 0.04],
  );

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.6]);

  return (
    <div
      ref={ref}
      style={{
        position: "sticky",
        top:
          typeof window !== "undefined" && window.innerWidth < 768
            ? `${8 + index * 10}px`
            : `${30 + index * 10}px`,
        zIndex: index + 1,
      }}
    >
      <Link href={`/Display?id=${index}`}>
        <motion.div
          style={{ scale, opacity }}
          className="lg:min-h-[700px] min-h-[280px] sm:min-h-[420px]"
        >
          <ProjectCard project={project} />
        </motion.div>
      </Link>
    </div>
  );
};
// ──────────────────────────────────────────────────────────────────────────

const Hero = () => {
  const heroProjects = projects.slice(0, 3);
  // Orb scroll
  const { scrollYProgress: pageScroll } = useScroll();
  const orbY = useTransform(pageScroll, [0, 0.3], [0, -60]);
  const orbOpacity = useTransform(pageScroll, [0, 0.2], [0.3, 0]);

  // Marquee
  const marqueeRef = useRef(null);
  const { scrollYProgress: marqueeScroll } = useScroll({
    target: marqueeRef,
    offset: ["start 0.9", "start 0.5"],
  });
  const marqueeOpacity = useTransform(marqueeScroll, [0, 1], [0, 1]);
  const marqueeX = useTransform(marqueeScroll, [0, 1], [-40, 0]);

  // Company heading
  const companyRef = useRef(null);
  const { scrollYProgress: companyScroll } = useScroll({
    target: companyRef,
    offset: ["start 0.9", "start 0.5"],
  });
  const companyY = useTransform(companyScroll, [0, 1], [80, 0]);
  const companyOpacity = useTransform(companyScroll, [0, 1], [0, 1]);

  // Hero card — mobile safe

  const heroCardRef = useRef(null);
  const { scrollYProgress: heroCardScroll } = useScroll({
    target: heroCardRef,
    offset: ["start 0.95", "start 0.4"],
  });
  // animate width as a PERCENTAGE, not a hardcoded pixel value
  const heroCardWidthPct = useTransform(heroCardScroll, [0, 1], [0, 100]);
  const heroCardOpacity = useTransform(heroCardScroll, [0, 1], [0, 1]);

  // Bottom row
  const bottomRowRef = useRef(null);
  const { scrollYProgress: bottomRowScroll } = useScroll({
    target: bottomRowRef,
    offset: ["start 0.95", "start 0.5"],
  });
  const bottomRowY = useTransform(bottomRowScroll, [0, 1], [100, 0]);
  const bottomRowOpacity = useTransform(bottomRowScroll, [0, 1], [0, 1]);

  // Projects heading
  const projectsHeadingRef = useRef(null);
  const { scrollYProgress: projectsHeadingScroll } = useScroll({
    target: projectsHeadingRef,
    offset: ["start 0.95", "start 0.5"],
  });
  const projectsHeadingY = useTransform(projectsHeadingScroll, [0, 1], [80, 0]);
  const projectsHeadingOpacity = useTransform(
    projectsHeadingScroll,
    [0, 1],
    [0, 1],
  );
  return (
    <>
      <div className="h-screen relative mb-30">
        {/* Wrapper */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center mb-20 justify-center"
        >
          <MotionImage
            src="/Orb.png"
            alt="orb"
            className="object-contain z-10 relative"
            width={1300}
            height={100}
            style={{ opacity: orbOpacity, y: orbY }}
          />

          {/* Side buttons */}
          <div className="h-10 w-1.5 left-1 lg:left-[29vw] top-[34%] lg:top-[60%] z-40 rounded-xl absolute">
            <div className="w-full h-full bg-gradient-to-b from-[#DADBD6] to-[#B7B7B6] rounded-xl"></div>
          </div>
          <div className="h-20 w-1.5 left-1 lg:left-[29vw] top-[70%] lg:top-[80%] shadow-inner shadow-black shadow-xs z-40 rounded-xl absolute">
            <div className="w-full h-full bg-gradient-to-b from-[#DADBD6] to-[#B7B7B6] rounded-xl"></div>
          </div>
          <div className="h-20 w-1.5 left-1 lg:left-[29vw] top-[94%] lg:top-[97%] border-[#000000] border-1 z-40 rounded-xl absolute">
            <div className="w-full h-full bg-gradient-to-b from-[#DADBD6] to-[#B7B7B6] rounded-xl"></div>
          </div>
          <div className="h-30 w-1.5 right-1 lg:right-[29vw] top-[35%] lg:top-[80%] border-[#000000] border-1 z-40 rounded-xl absolute">
            <div className="w-full h-full bg-gradient-to-b from-[#DADBD6] to-[#B7B7B6] rounded-xl"></div>
          </div>

          {/* Outer border */}
          <div className="bg-[#494949] p-[2px] mt-120 rounded-[50px] absolute z-30">
            {/* Outer gradient gap */}
            <div className="bg-gradient-to-l from-[#77796B] via-[#7D7D7A] via-[#494949] to-[#77796B] p-[6px] rounded-[50px]">
              <div className="bg-[#151515] flex items-center overflow-hidden rounded-[50px] justify-center p-2 w-[clamp(280px,85vw,500px)] h-[160vh] relative">
                <Image
                  src={"/t.png"}
                  width={300}
                  height={300}
                  className="rounded-[50px] object-cover w-full h-full"
                  alt="userImage"
                />

                {/* 👋 Hello — top left */}
                <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
                  <span className="text-xl">👋</span>
                  <span className="text-white font-semibold text-base tracking-wide">
                    Hello
                  </span>
                </div>

                {/* Porty Robertson */}
                <div className="absolute bottom-[38%] right-0 top-30 px-5 z-10">
                  <h1
                    className="text-white font-bold leading-none"
                    style={{ fontSize: "clamp(1.5rem, 7vw, 3rem)" }}
                  >
                    Muhammad
                  </h1>
                  <h1
                    className="text-white font-light leading-none"
                    style={{ fontSize: "clamp(1.5rem, 7vw, 3rem)" }}
                  >
                    Awais
                  </h1>
                </div>

                {/* ── OVERLAY SECTION ── */}
                <motion.div
                  initial={{ y: 300, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 right-0 h-[550px] z-20 rounded-b-4xl overflow-hidden"
                >
                  <div
                    className="p-4 h-full pb-6 flex flex-col gap-4"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.97) 30%)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    {/* Divider line */}
                    <div className="w-16 h-[12px] bg-white mt-10 relative rounded-full mx-auto" />

                    {/* Row 1 */}
                    <div className="flex mt-4 items-center justify-between">
                      <p className="text-[#aaa] text-sm leading-snug">
                        I'm an{" "}
                        <span className="text-white font-semibold">
                          App and
                          <br />
                          full stack web Developer
                        </span>
                      </p>
                      <div className="flex gap-2">
                        <button
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{
                            background:
                              "linear-gradient(145deg, #6b6b6b, #3a3a3a)",
                            border: "1px solid #888",
                            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.15)",
                          }}
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="#ccc"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </button>
                        <button
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{
                            background:
                              "linear-gradient(145deg, #6b6b6b, #3a3a3a)",
                            border: "1px solid #888",
                            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.15)",
                          }}
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ccc"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            />
                            <circle cx="12" cy="12" r="4" />
                            <circle
                              cx="17.5"
                              cy="6.5"
                              r="1"
                              fill="#ccc"
                              stroke="none"
                            />
                          </svg>
                        </button>
                        <button
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{
                            background:
                              "linear-gradient(145deg, #6b6b6b, #3a3a3a)",
                            border: "1px solid #888",
                            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.15)",
                          }}
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ccc"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Row 2: Quote */}
                    <p className="text-white text-3xl mt-5 leading-snug">
                      "I make imaginations come true{" "}
                      <strong>simple things and i love what i do"</strong>
                    </p>

                    {/* Row 3: Stars */}
                    <div className="flex items-center mt-10 gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(4)].map((_, i) => (
                          <svg
                            key={i}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="#FACC15"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#FACC15"
                        >
                          <path
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                            clipPath="inset(0 50% 0 0)"
                          />
                          <path
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                            fill="none"
                            stroke="#FACC15"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                      <span className="text-[#aaa] text-sm">50+ customers</span>
                    </div>

                    {/* Row 4: CTA */}
                    <div className="flex items-center lg:mt-10 gap-3">
                      <Link href="#contact">
                        <button className="flex items-center gap-2 bg-[#E1FF01] cursor-pointer  hover:bg-white px-5 py-3 rounded-full text-black font-semibold text-sm">
                          Get Started
                          <span className="w-6 hidden lg:relative h-6 rounded-full bg-black flex items-center justify-center">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#CCFF00"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M7 17L17 7M7 7h10v10" />
                            </svg>
                          </span>
                        </button>
                      </Link>
                      <Link href="/projects">
                        <button className="px-5 py-3 border-[#444] border-1 hover:text-white cursor-pointer hover:bg-black rounded-full text-white font-semibold text-sm">
                          My Works
                        </button>
                      </Link>
                    </div>

                    {/* Row 5: Available + Contact */}
                    <div className="flex items-center mt-5 justify-between text-sm text-[#aaa]">
                      <div className="flex items-center gap-1.5">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#aaa"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        <span>
                          Available{" "}
                          <strong className="text-white">Worldwide</strong>
                        </span>
                      </div>
                      <div className="flex cursor-pointer items-center gap-1 text-white font-medium">
                        <Link href="#contact " className="flex gap-2">
                          Contact me
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 17L17 7M7 7h10v10" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* ── END OVERLAY ── */}
              </div>
            </div>

            {/* Silver social buttons on outer border */}
            <div className="absolute bottom-8 right-6 flex gap-2">
              <button
                className="w-11 h-11 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                style={{
                  background: "linear-gradient(145deg, #6b6b6b, #3a3a3a)",
                  border: "1px solid #888",
                  boxShadow:
                    "inset 0 1px 1px rgba(255,255,255,0.15), 0 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#ccc">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              <button
                className="w-11 h-11 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                style={{
                  background: "linear-gradient(145deg, #6b6b6b, #3a3a3a)",
                  border: "1px solid #888",
                  boxShadow:
                    "inset 0 1px 1px rgba(255,255,255,0.15), 0 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ccc"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="#ccc" stroke="none" />
                </svg>
              </button>
              <button
                className="w-11 h-11 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                style={{
                  background: "linear-gradient(145deg, #6b6b6b, #3a3a3a)",
                  border: "1px solid #888",
                  boxShadow:
                    "inset 0 1px 1px rgba(255,255,255,0.15), 0 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ccc"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Marquee — scroll-driven fade + slide in from left */}
        <motion.div
          ref={marqueeRef}
          style={{ opacity: marqueeOpacity, x: marqueeX }}
          className="flex"
        >
          <Marquee>
            <h1 className="relative font-handjet text-center text-[clamp(3rem,12vw,10rem)] z-50 text-[#333]">
              Explore my projects
            </h1>
            <h1 className="relative font-handjet text-center text-[clamp(3rem,12vw,10rem)] z-50 text-[#333]">
              Explore my projects
            </h1>
          </Marquee>
        </motion.div>
      </div>

      {/* Company section */}
      <div className="flex flex-col items-center lg:mt-140 mt-80 mb-20 gap-y-10 justify-center">
        <motion.h1
          ref={companyRef}
          style={{ y: companyY, opacity: companyOpacity }}
          className="text-white items-center ml-3 mb-10 text-2xl lg:text-xl"
        >
          Trusted by the industry's leading brands
        </motion.h1>
        <div>
          <Marquee speed={100} className="max-w-xl" autoFill>
            <div className="mx-8">
              <Image src="/Hero/1.svg" width={160} height={160} alt="" />
            </div>
            <div className="mx-8">
              <Image src="/Hero/2.svg" width={160} height={160} alt="" />
            </div>
            <div className="mx-8">
              <Image src="/Hero/3.svg" width={160} height={160} alt="" />
            </div>
            <div className="mx-8">
              <Image src="/Hero/4.svg" width={160} height={160} alt="" />
            </div>
          </Marquee>
        </div>
      </div>

      {/* Cards section */}
      <div className="flex flex-col items-center justify-center p-4 sm:p-6">
        <div className="flex flex-col gap-4 w-full max-w-3xl">
          {/* Hero Card — scroll-driven width expand */}
          <motion.div
            ref={heroCardRef}
            style={{
              width: useTransform(heroCardWidthPct, (v) => `${v}%`),
              opacity: heroCardOpacity,
            }}
            className="mx-auto bg-gradient-to-b from-[#0E0E0E] border-2 border-[#454545] rounded-4xl p-6 sm:p-8 max-w-[770px] lg:max-w-full"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neutral-500" />
                <span className="text-sm text-[#BBBBBB]">
                  My teammates and me
                </span>
              </div>
              <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center">
                <CiGlobe className="text-white w-full h-full" />
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-5xl text-white font-light mb-6 sm:mb-10">
              Our journey in <br />
              <span className="font-semibold">Numbers</span>
            </h1>

            <div className="flex items-center justify-between flex-wrap gap-3">
              <p className="text-[#DDDDDD] text-sm">
                Great work comes from great teams
              </p>
              <div className="flex">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#4a3f6b] border-2 border-[#1a1a1a] flex items-center justify-center text-xs text-white font-bold">
                  JD
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#3b5a4a] border-2 border-[#1a1a1a] flex items-center justify-center text-xs text-white font-bold -ml-2">
                  KM
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#6b3f3f] border-2 border-[#1a1a1a] flex items-center justify-center text-xs text-white font-bold -ml-2">
                  RL
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Row — scroll-driven slide up */}
          <motion.div
            ref={bottomRowRef}
            style={{ y: bottomRowY, opacity: bottomRowOpacity }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Revenue Card */}
            <div className="bg-[#E1FF01] w-full rounded-2xl p-5 sm:p-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#3a4a00] flex-shrink-0" />
                <span className="text-xs sm:text-sm text-black">
                  Clients' Revenue
                </span>
              </div>
              <h2 className="text-base sm:text-xl font-medium text-[#1a1a00] mt-1 mb-6 sm:mb-12">
                Revenue Growth in 2024
              </h2>
              <div className="flex items-end justify-between gap-2">
                <Image
                  src="/Hero/5.svg"
                  width={50}
                  height={50}
                  className="sm:w-[70px] sm:h-[70px]"
                  alt="matrix"
                />
                <span className="font-handjet text-5xl sm:text-7xl lg:text-8xl font-bold text-[#1a1a00]">
                  <CountUp
                    end={100}
                    duration={1}
                    enableScrollSpy
                    scrollSpyOnce
                    suffix="K+"
                  />
                </span>
              </div>
            </div>

            {/* Projects Card */}
            <div className="bg-[#151515] w-full border border-[#2a2a2a] rounded-2xl p-5 sm:p-8 flex flex-col justify-between min-h-[180px] sm:min-h-[220px]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#ccff00] flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-neutral-500">
                    Work
                  </span>
                </div>
                <h2 className="text-4xl sm:text-3xl font-semibold text-white mt-2">
                  Projects
                  <br />
                  Done
                </h2>
              </div>
              <span className="font-handjet text-6xl sm:text-8xl font-bold text-[#797979] text-right">
                 <CountUp
                    end={23}
                    duration={1}
                    enableScrollSpy
                    scrollSpyOnce
                    
                  />
                
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Projects Section ── */}
      <motion.div
        ref={projectsHeadingRef}
        style={{ y: projectsHeadingY, opacity: projectsHeadingOpacity }}
        className="flex flex-col lg:mt-30"
      >
        <div className="flex flex-col items-center justify-center py-10 sm:py-24 lg:min-h-screen text-center px-4">
          <h1 className="text-white text-3xl sm:text-5xl lg:text-[5rem] leading-none font-light tracking-tight">
            Projects <span className="font-medium">Done</span>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-xl text-[#8A8A8A] leading-relaxed">
            A showcase of my design projects, highlighting
            <br className="hidden sm:block" />
            my skills and experience.
          </p>
        </div>

        {/* ── Stacking Project Cards ── */}
        <div className="flex items-center justify-center sm:px-6">
          <div className="w-full lg:max-w-[530px] max-w-xl mx-auto flex flex-col">
            {heroProjects.map((project, index) => (
              <StackingCard
                key={index}
                project={project}
                index={index}
                total={heroProjects.length}
              />
            ))}
            <div style={{ height: "40vh" }} />
          </div>
        </div>

        {/*View all projects */}
        <div className="flex items-center mt-30 justify-center mb-10 lg:mb-40">
          <Link href="/projects">
            <button className="group  flex items-center justify-between bg-[#E1FF01] hover:bg-white transition-all duration-300 rounded-full text-center w-[230px] h-[65px] px-2 pl-8 cursor-pointer">
              <span className="text-black text-md text-center ">
                View All Projects
              </span>

              <div className="flex items-center justify-center w-12 h-12 bg-black group-hover:bg-[#E1FF01] rounded-full transition-all duration-300 ">
                <FiArrowUpRight className="text-white text-xl group-hover:text-black" />
              </div>
            </button>
          </Link>
        </div>
      </motion.div>

      <Feedback />
    </>
  );
};

export default Hero;

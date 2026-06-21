"use client";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";
const companies = [
  {
    name: "Forma Leaf Agency",
    role: ["Senior", "Product Marketer"],
    years: "2019–2022",
    start: "2016",
    end: "Present",
  },
  {
    name: "Bright Studio Co.",
    role: ["Lead", "Brand Strategist"],
    years: "2015–2018",
    start: "2013",
    end: "2019",
  },
  {
    name: "NovaCraft Labs",
    role: ["Junior", "Growth Marketer"],
    years: "2012–2014",
    start: "2010",
    end: "2015",
  },
];

const Feedback = () => {
  const [idx, setIdx] = useState(0);
  const company = companies[idx];

  const prev = () =>
    setIdx((i) => (i - 1 + companies.length) % companies.length);
  const next = () => setIdx((i) => (i + 1) % companies.length);

  return (
    <motion.section initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"backOut",duration:1}} className="relative flex mt-30 lg:mt-0 flex-col items-center justify-center min-h-[300px] sm:min-h-[420px] overflow-hidden py-8 sm:py-10 rounded-xl">
      {/* Dynamic year label + tick */}
      <p className="text-[#c8f135] text-xs sm:text-md absolute top-0 font-medium tracking-widest transition-all duration-300">
        {company.years}
      </p>
      <div className="w-px h-3 bg-[#c8f135] absolute top-0 mt-8 sm:mt-10 mx-auto" />

      {/* Half Circle Dotted SVG — scales down on mobile */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 top-14 sm:top-18 pointer-events-none"
        width="100%"
        height="100%"
        viewBox="0 0 600 300"
        preserveAspectRatio="xMidYMid meet"
        style={{ maxWidth: "600px", maxHeight: "300px" }}
        fill="none"
      >
        <path
          d="M 50 250 A 250 250 0 0 1 550 250"
          stroke="white"
          strokeWidth="0.60"
          strokeDasharray="1 17"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Start year label — left end of arc */}
      <div
        className="absolute flex items-center gap-1"
        style={{
          bottom: "clamp(50px, 10vw, 82px)",
          left: "clamp(4px, calc(63% - 38vw), calc(63% - 320px))",
        }}
      >
        <span className="text-white text-xs sm:text-sm">{company.start}</span>
        <span className="w-3 sm:w-5 h-[0.3px] bg-white inline-block" />
      </div>

      {/* End year label — right end of arc */}
      <div
        className="absolute flex  items-center gap-1"
        style={{
          bottom: "clamp(50px, 10vw, 82px)",
          right: "clamp(4px, calc(61% - 38vw), calc(61% - 340px))",
        }}
      >
        <span className="w-3 sm:w-5 h-[0.3px] bg-white inline-block" />
        <span className="text-white text-xs sm:text-sm">{company.end}</span>
      </div>

      {/* Pin icon */}
      <div className="absolute top-[72px] sm:top-[90px] left-1/2 -translate-x-1/2 text-[#c8f135] text-xl sm:text-2xl z-10">
        <IoLocationOutline />
      </div>

      {/* Job title */}
      <div className="mt-0 sm:mt-20 text-center z-10">
        <span className="block text-white text-md sm:text-4xl font-light leading-tight transition-all duration-300">
          {company.role[0]}
        </span>
        <span className="block text-white text-md sm:text-4xl font-bold leading-tight transition-all duration-300">
          {company.role[1]}
        </span>
      </div>

      {/* Company navigator */}
      <div className="flex items-center gap-2 sm:gap-3 mt-6 sm:mt-8 z-10">
        <button
          onClick={prev}
          className="text-white text-lg px-1.5 sm:px-2 transition-colors hover:opacity-60"
        >
          ‹
        </button>

        <div className="bg-white rounded-full px-3 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-3 min-w-[160px] sm:min-w-[200px]">
          <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-[#111] flex items-center justify-center flex-shrink-0">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2C5.79 2 4 3.79 4 6c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4zm0 5.5C7.17 7.5 6.5 6.83 6.5 6S7.17 4.5 8 4.5 9.5 5.17 9.5 6 8.83 7.5 8 7.5z"
                fill="#c8f135"
              />
            </svg>
          </div>
          <span className="text-[#111] font-semibold text-xs sm:text-sm text-center flex-1 transition-all duration-300">
            {company.name}
          </span>
        </div>

        <button
          onClick={next}
          className="text-white text-lg px-1.5 sm:px-2 transition-colors hover:opacity-60"
        >
          ›
        </button>
      </div>
    </motion.section>
  );
};

export default Feedback;

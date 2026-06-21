"use client";
import React, { useRef } from "react";
import { CiPen } from "react-icons/ci";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const tools = [
  {
    name: "Next js",
    category: "FrontEnd ",
    icon: "/next.png",
  },
  {
    name: "Framer",
    category: "Animation Libarary",
    icon: "/Framer2.png",
  },
 
  {
    name: "PostGressSQl",
    category: "Database",
    icon: "/postgress.png",
  },
  {
    name: "MongoDB",
    category: "Databse",
    icon: "/mongo.png",
  },
  {
    name: "React",
    category: "Frontend",
    icon: "/react.png",
  },
  {
    name: "ُPython",
    category: "Machine learning",
    icon: "/python.png",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "/node.png",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: "/express.png",
  },
];

const ToolCard = ({ tool }) => (
  <div className="group w-[153px] cursor-pointer rounded-[9999px] p-[2px] bg-[#3F3F3F] hover:bg-gradient-to-r hover:from-[#0A413D] hover:via-[#395620] hover:to-[#506417] transition-all duration-300">
    <div className="bg-black rounded-[9999px] p-[6px] overflow-hidden">
      <div className="bg-[#111111] h-[120px] rounded-t-[9999px] rounded-b-[40px] flex items-center justify-center">
        <Image src={tool.icon} alt={tool.icon} width={50} height={50} />
      </div>
      <div className="flex flex-col items-center justify-center py-4 pb-5">
        <span className="text-white font-bold text-[17px]">{tool.name}</span>
        <span className="text-[#666666] text-[12px] mt-1">{tool.category}</span>
      </div>
    </div>
  </div>
);

// Reusable scroll-driven tool card wrapper
const ScrollToolCard = ({ tool, index, rowStart }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.45"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  // slight stagger via delay on the transform range
  const adjustedOpacity = useTransform(
    scrollYProgress,
    [index * 0.08, index * 0.08 + 0.5],
    [0, 1],
  );

  return (
    <motion.div ref={ref} style={{ y, opacity: adjustedOpacity }}>
      <ToolCard tool={tool} />
    </motion.div>
  );
};

const Knowledge = () => {
  // Heading refs
  const headingRef = useRef(null);
  const { scrollYProgress: headingScroll } = useScroll({
    target: headingRef,
    offset: ["start 0.9", "start 0.5"],
  });
  const headingY = useTransform(headingScroll, [0, 1], [40, 0]);
  const headingOpacity = useTransform(headingScroll, [0, 1], [0, 1]);

  const subRef = useRef(null);
  const { scrollYProgress: subScroll } = useScroll({
    target: subRef,
    offset: ["start 0.9", "start 0.5"],
  });
  const subY = useTransform(subScroll, [0, 1], [25, 0]);
  const subOpacity = useTransform(subScroll, [0, 1], [0, 1]);

  // Work Progress heading
  const workHeadingRef = useRef(null);
  const { scrollYProgress: workScroll } = useScroll({
    target: workHeadingRef,
    offset: ["start 0.95", "start 0.5"],
  });
  const workY = useTransform(workScroll, [0, 1], [100, 0]);
  const workOpacity = useTransform(workScroll, [0, 1], [0, 1]);

  // Process cards — alternating slide directions
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const { scrollYProgress: scroll1 } = useScroll({
    target: ref1,
    offset: ["start end", "start center"],
  });
  const { scrollYProgress: scroll2 } = useScroll({
    target: ref2,
    offset: ["start end", "start center"],
  });
  const { scrollYProgress: scroll3 } = useScroll({
    target: ref3,
    offset: ["start end", "start center"],
  });
  const { scrollYProgress: scroll4 } = useScroll({
    target: ref4,
    offset: ["start end", "start center"],
  });

  const x1 = useTransform(scroll1, [0, 1], [-200, 0]);
  const x2 = useTransform(scroll2, [0, 1], [200, 0]);
  const x3 = useTransform(scroll3, [0, 1], [200, 0]);
  const x4 = useTransform(scroll4, [0, 1], [-200, 0]);

  const opacity1 = useTransform(scroll1, [0, 0.5], [0, 1]);
  const opacity2 = useTransform(scroll2, [0, 0.5], [0, 1]);
  const opacity3 = useTransform(scroll3, [0, 0.5], [0, 1]);
  const opacity4 = useTransform(scroll4, [0, 0.5], [0, 1]);

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#111111",
          padding: "80px 24px",
        }}
      >
        {/* Heading */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "56px",
          }}
        >
          <motion.h1
            ref={headingRef}
            style={{
              y: headingY,
              opacity: headingOpacity,
              fontSize: "52px",
              fontWeight: 300,
              color: "#ffffff",
              margin: 0,
              textAlign: "center",
            }}
          >
            Mastered <span style={{ fontWeight: 600 }}>tools</span>
          </motion.h1>

          <motion.p
            ref={subRef}
            style={{
              y: subY,
              opacity: subOpacity,
              color: "#808080",
              marginTop: "16px",
              maxWidth: "400px",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            Proficient in industry-standard design software and tools.
          </motion.p>
        </div>

        {/* Tools Row 1 */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 justify-center">
          {tools.slice(0, 4).map((tool, i) => (
            <ScrollToolCard key={tool.name} tool={tool} index={i} />
          ))}
        </div>

        {/* Tools Row 2 */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 mt-5 justify-center">
          {tools.slice(4).map((tool, i) => (
            <ScrollToolCard key={tool.name} tool={tool} index={i} />
          ))}
        </div>

        {/* Work Progress heading */}
        <motion.div
          ref={workHeadingRef}
          style={{ y: workY, opacity: workOpacity }}
          className="flex h-screen justify-center items-center flex-col"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "56px",
            }}
          >
            <h1
              style={{
                fontSize: "52px",
                fontWeight: 300,
                color: "#ffffff",
                margin: 0,
                textAlign: "center",
              }}
            >
              Work <span style={{ fontWeight: 600 }}>Progress</span>
            </h1>
            <p
              style={{
                color: "#808080",
                marginTop: "16px",
                maxWidth: "400px",
                textAlign: "center",
                lineHeight: 1.6,
              }}
            >
              A glimpse into my collaborative and iterative design process
            </p>
          </div>
        </motion.div>
      </div>

      {/* Process Cards */}
      <section className="flex flex-col lg:flex-row items-center mb-10 justify-center w-full rounded-2xl">
        <div className="grid grid-col-4 p-5 lg:p-0 lg:grid-cols-2 gap-6 w-full max-w-3xl">
          {/* Card 01 — slide from left */}
          <div ref={ref1} className="overflow-hidden rounded-[30px]">
            <motion.div
              style={{ x: x1, opacity: opacity1 }}
              className="bg-[#000000] rounded-[30px] border-[1.5px] border-[#454545] min-h-[200px] flex flex-col justify-between"
            >
              <div className="p-5 flex justify-between items-start">
                <div className="bg-[#E1FF01] rounded-[10px] w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/Hero/6.svg"
                    alt="Discovery Session"
                    width={22}
                    height={22}
                    className="brightness-0"
                  />
                </div>
                <span className="text-[96px] text-[#333333] font-handjet leading-none tracking-tight">
                  01.
                </span>
              </div>
              <div className="p-2">
                <div className="bg-gradient-to-r rounded-3xl from-[#0E0E0E] to-[#1A1A1A] px-4 py-3 border-t border-[#454545] border-2">
                  <p className="text-[#EBEBEB] font-medium text-[20px] leading-snug whitespace-pre-line m-0">
                    Discovery{"\n"}Session
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 02 — slide from right */}
          <div ref={ref2} className="overflow-hidden rounded-[30px]">
            <motion.div
              style={{ x: x2, opacity: opacity2 }}
              className="bg-[#000000] rounded-[30px] border-[1.5px] border-[#454545] min-h-[200px] flex flex-col justify-between"
            >
              <div className="p-5 flex justify-between items-start">
                <div className="bg-[#E1FF01] rounded-[10px] w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/Hero/7.svg"
                    alt="Strategy Mapping"
                    width={22}
                    height={22}
                    className="brightness-0"
                  />
                </div>
                <span className="text-[96px] text-[#333333] font-handjet leading-none tracking-tight">
                  02.
                </span>
              </div>
              <div className="p-2">
                <div className="bg-gradient-to-r rounded-3xl from-[#0E0E0E] to-[#1A1A1A] px-4 py-3 border-t border-[#454545] border-2">
                  <p className="text-[#EBEBEB] font-medium text-[20px] leading-snug whitespace-pre-line m-0">
                    Strategy{"\n"}Mapping
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 03 — slide from right */}
          <div ref={ref3} className="overflow-hidden rounded-[30px]">
            <motion.div
              style={{ x: x3, opacity: opacity3 }}
              className="bg-[#000000] rounded-[30px] border-[1.5px] border-[#454545] min-h-[200px] flex flex-col justify-between"
            >
              <div className="p-5 flex justify-between items-start">
                <div className="bg-[#E1FF01] rounded-[10px] w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/Hero/8.svg"
                    alt="Prototype Creation"
                    width={22}
                    height={22}
                    className="brightness-0"
                  />
                </div>
                <span className="text-[96px] text-[#333333] font-handjet leading-none tracking-tight">
                  03.
                </span>
              </div>
              <div className="p-2">
                <div className="bg-gradient-to-r rounded-3xl from-[#0E0E0E] to-[#1A1A1A] px-4 py-3 border-t border-[#454545] border-2">
                  <p className="text-[#EBEBEB] font-medium text-[20px] leading-snug whitespace-pre-line m-0">
                    Prototype{"\n"}Creation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 04 — slide from left */}
          <div ref={ref4} className="overflow-hidden rounded-[30px]">
            <motion.div
              style={{ x: x4, opacity: opacity4 }}
              className="bg-[#000000] rounded-[30px] border-[1.5px] border-[#454545] min-h-[200px] flex flex-col justify-between"
            >
              <div className="p-5 flex justify-between items-start">
                <div className="bg-[#E1FF01] rounded-[10px] w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/Hero/9.svg"
                    alt="Final Delivery"
                    width={22}
                    height={22}
                    className="brightness-0"
                  />
                </div>
                <span className="text-[96px] text-[#333333] font-handjet leading-none tracking-tight">
                  04.
                </span>
              </div>
              <div className="p-2">
                <div className="bg-gradient-to-r rounded-3xl from-[#0E0E0E] to-[#1A1A1A] px-4 py-3 border-t border-[#454545] border-2">
                  <p className="text-[#EBEBEB] font-medium text-[20px] leading-snug whitespace-pre-line m-0">
                    Final{"\n"}Delivery
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Knowledge;

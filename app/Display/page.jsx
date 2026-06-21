"use client";
import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../Data/projects";




const MotionImage = motion(Image);

const DisplayContent = ({ project }) => {
  if (!project)
    return <p className="text-white  text-center mt-20">Project not found.</p>;

  return (
    <div className="w-full max-w-2xl px-4 sm:px-8 py-10 flex flex-col items-center gap-6">
      <div className="w-full border-[#363636] border-1 max-w-4xl bg-gradient-to-r from-[#000000] via-[#111111] to-[#1B1B1B] rounded-[32px] overflow-hidden border border-[#1f1f1f]">
        <div className="relative w-full h-[260px] sm:h-[380px] lg:h-[420px] overflow-hidden rounded-[32px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="px-6 sm:px-10 py-8 flex flex-col gap-2">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            {project.title}
          </h1>
          <p className="text-[#888] text-sm sm:text-base font-light tracking-wide">
            {project.tags.join(", ")}
          </p>
        </div>

        {project.description && (
          <div className="w-full max-w-5xl px-6 sm:px-10 pb-8">
            <p className="text-white/60 text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectLoader = ({ onLoad }) => {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));
  const project = projects[id];

  useEffect(() => {
    onLoad(project);
  }, [project]);

  return <DisplayContent project={project} />;
};

const page = () => {
  const [project, setProject] = useState(null);

  return (
    <>
      <Navbar />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.99, ease: "easeOut" }}
        className="relative flex justify-center items-center min-h-[600px] sm:min-h-[650px] lg:min-h-0"
      >
        <MotionImage
          src="/Orb.png"
          alt="orb"
          className="object-contain hidden lg:block opacity-30 pointer-events-none"
          width={1300}
          height={100}
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
          <div className="absolute  inset-0 flex justify-center items-center z-10 pt-10">
            <Suspense
              fallback={<p className="text-white text-center">Loading...</p>}
            >
              <ProjectLoader  onLoad={setProject} />
            </Suspense>
          
        </div>
      </motion.div>

      <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.50,ease:"easeOut"}} viewport={{amount:0.3}} className="flex justify-center items-center px-4 py-10 lg:py-0">
        <div className="border border-[#363636] w-full max-w-[620px] rounded-[2rem] bg-[#000000] overflow-hidden">
          <div className="p-5 sm:p-8 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 sm:gap-0">
            <div className="flex flex-col items-center sm:items-start gap-8 sm:gap-16">
              <Image
                src="/U.png"
                width={52}
                height={42}
                className="rounded-full object-cover"
                alt="Lucas Ricardo"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-white text-xl leading-tight">
                  Muhammad
                  <br />
                  Awais
                </h2>
                <p className="text-[#888888] text-sm mt-1 font-sm">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <div className="bg-[#E1FF01] rounded-3xl w-full max-w-[220px] h-[260px] p-5 flex flex-col justify-between relative overflow-hidden">
              <p className="text-black leading-snug z-10">
                Client satisfaction
                <br />
                built on trust and results.
              </p>
              <Image
                src={"/Hero/5.svg"}
                className="rotate-270 ml-auto"
                width={50}
                height={50}
                alt="dot image"
              />
            </div>
          </div>

          <div className="p-2 rounded-4xl">
            <div className="p-5 sm:p-8 mt-10 sm:mt-20 rounded-4xl bg-gradient-to-b from-[#000000] via-[#060606] via-[#0E0E0E] via-[#070707] via-[#070707] to-[#1B1B1B]">
              <h3 className="text-white text-lg sm:text-xl mb-4">
                The Power of Discovery and Analysis
              </h3>
              <p className="text-[#aaaaaa] text-sm leading-relaxed mb-4">
                The first stage of our process focuses comprehensive research
                and data collection. We carefully examine the exists environment
                identify challenge and define the primary goals and objectives.
                Conducting depth work we uncover valuable insights and potential
                opportunity.
              </p>
              <p className="text-[#aaaaaa] text-sm leading-relaxed">
                Before we design or launch we listen. Discovery is where
                strategy begins. Through deep dive analysis we uncover the
                insights matter most user behavior, brand gaps, technical needs
                and opportunities. This stage isn't about guesswork about
                informed clarity. We believe in making every decision count.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Image + Cards — all aligned */}
      <div className="flex flex-col items-center justify-center mt-12 sm:mt-16 lg:mt-20 gap-4 px-4 w-full">
        {/* Main Image Card */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="relative w-full max-w-3xl lg:max-w-[49vw] rounded-[28px] h-[220px] sm:h-[320px] lg:h-[440px] overflow-hidden"
        >
          {project && (
            <Image
              src={project.image}
              fill
              alt="project image"
              className="object-cover rounded-[28px]"
            />
          )}
        </motion.div>

        {/* Two Cards Row — same max-w as image above */}
        <div className="w-full max-w-3xl lg:max-w-[49vw] flex flex-col sm:flex-row gap-4">
          {/* Timeline Card - Yellow */}
          <motion.div
            initial={{ translateX: -100, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="sm:flex-[3] bg-[#E1FF01] rounded-[28px] p-6 sm:p-7 flex flex-col justify-between min-h-[200px] sm:min-h-[240px]"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
              <span className="text-black text-sm">Timeline</span>
            </div>

            <h2 className="text-black text-xl sm:text-2xl font-semibold leading-tight">
              {project?.timeline || "March 2025 – April 2025"}
            </h2>

            {/* Dot Grid */}
            <div className="grid grid-cols-8 gap-[6px] w-fit">
              {Array.from({ length: 48 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-black/30"
                />
              ))}
            </div>
          </motion.div>

          {/* Service Card - Dark */}
          <motion.div
            initial={{ translateX: 100, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="sm:flex-1 bg-[#1a1a1a] border-[#363636] border-1 rounded-[28px] p-6 sm:p-7 flex flex-col justify-between min-h-[200px] sm:min-h-[240px]"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
              <span className="text-white text-sm font-medium">Service</span>
            </div>

            <h2 className="text-white text-xl sm:text-2xl font-semibold leading-tight">
              {project?.service || (
                <>
                  Branding <br /> UI/UX
                </>
              )}
            </h2>
          </motion.div>
        </div>

        <motion.div  initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.50,ease:"easeOut"}} viewport={{amount:0.3}} className="w-full border-[#363636] border-1 mt-10 max-w-3xl lg:max-w-[49vw] h-auto p-2 rounded-3xl sm:rounded-4xl bg-[#000000]">
          <div className="bg-gradient-to-b from-[#000000] flex flex-col p-4 sm:p-5 rounded-3xl sm:rounded-4xl via-[#060606] via-[#0E0E0E] via-[#070707] via-[#070707] to-[#1B1B1B] w-full h-full">
            <div className="flex flex-col max-w-2xl gap-y-6 sm:gap-y-8 lg:gap-y-10">
              <h1 className="text-white text-lg sm:text-xl relative z-10 mt-4 sm:mt-6 lg:mt-10">
                Strategy Becomes Reality and Evolves
              </h1>
              <p className="text-white text-sm sm:text-base">
                Once the insights from the discovery phase are gathered, the
                focus shifts the implementation of the solution. During this
                stage strategy are executed and the necessary tools technologies
                are deployed to address identified a objectives. The process
                does end there ongoing monitoring and optimize a are key
                components. We continuously on analyze performance and gather
                the feedback to refine{" "}
              </p>

              <p className="text-white text-sm sm:text-base">
                The first stage of our process focuses on comprehensive research
                a collection. We carefully existing environment identify
                challenge the and define the primary goals and objectives. By
                conducting work on we uncover valuable insights and potential
                opportunities that inform strategy moving forward.{" "}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.50,ease:"easeOut"}} viewport={{amount:0.3}} className="w-full border-[#363636] border-1 mt-10 max-w-3xl lg:max-w-[49vw] h-auto p-2 rounded-3xl sm:rounded-4xl bg-[#000000]">
          <div className="bg-gradient-to-b from-[#000000] flex flex-col p-4 sm:p-5 rounded-3xl sm:rounded-4xl via-[#060606] via-[#0E0E0E] via-[#070707] via-[#070707] to-[#1B1B1B] w-full h-full">
            <div className="flex flex-col max-w-2xl gap-y-6 sm:gap-y-8 lg:gap-y-10">
              <h1 className="text-white text-lg sm:text-xl relative z-10 mt-4 sm:mt-6 lg:mt-10">
                The Result
              </h1>
              <p className="text-white text-sm sm:text-base">
                This is where we translate complexity into strategy, and vision
                action direction. By taking the time to listen, learn, and
                analyze upfront, the Foundation that ensures every creative
                move, every line of code, and campaign that follows is rooted in
                purpose. Without it, you’re building With it, you’re building
                smart. The phase where assumptions are and goals are defined.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default page;

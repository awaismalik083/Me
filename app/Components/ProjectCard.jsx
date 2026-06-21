// "use client";
// import { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// const MotionImage = motion(Image);

// const ProjectCard = ({ project }) => {
//   const cardRef = useRef(null);
//   const router = useRouter();

//   const { scrollYProgress } = useScroll({
//     target: cardRef,
//     offset: ["start end", "end start"],
//   });

//   const opacity = useTransform(
//     scrollYProgress,
//     [0, 0.2, 0.75, 1],
//     [0, 1, 1, 0],
//   );
//   const y = useTransform(scrollYProgress, [0, 0.2], [40, 0]);
//   const imageScale = useTransform(scrollYProgress, [0, 0.2], [1.1, 1]);

//   return (
//     <motion.div
//       ref={cardRef}
//       style={{ opacity, y }}
//       className="font-poppins relative w-full rounded-3xl overflow-hidden border border-[#2a2a2a] group cursor-pointer"
//     >
//       {/* Thumbnail */}
//       <div className="relative w-full h-[200px] sm:h-[320px] lg:h-[300px] overflow-hidden">
//         <MotionImage
//           style={{ scale: imageScale }}
//           src={project.image}
//           alt={project.title}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//       </div>

//       {/* Bottom Info */}
//       <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 bg-gradient-to-b from-[#000000] via-[#171717] to-[#191919]">
//         <div className="flex flex-col gap-1">
//           <h2 className="text-white text-xl sm:text-2xl lg:text-[40px] font-medium">
//             {project.title}
//           </h2>
//           <p className="text-[#888] text-xs sm:text-sm font-light">
//             {project.tags.join(", ")}
//           </p>
//         </div>
//         <div
//           role="link"
//           tabIndex={0}
//           onClick={(e) => {
//             e.preventDefault();
//             e.stopPropagation();
//             router.push(project.href);
//           }}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               e.preventDefault();
//               e.stopPropagation();
//               router.push(project.href);
//             }
//           }}
//           className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-[#3a3a3a] text-white hover:bg-[#c8f400] hover:text-black transition-all duration-200 shrink-0 ml-3 sm:ml-4"
//         >
//           <Link  target="_blank" rel="noopener noreferrer"  href={project.href}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="18"
//               height="18"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <line x1="7" y1="17" x2="17" y2="7" />
//               <polyline points="7 7 17 7 17 17" />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;


"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const y = useTransform(scrollYProgress, [0, 0.2], [40, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.2], [1.1, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y }}
      className="font-poppins relative w-full rounded-3xl overflow-hidden border border-[#2a2a2a] group cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="relative w-full h-[200px] sm:h-[320px] lg:h-[300px] overflow-hidden">
        <MotionImage
          style={{ scale: imageScale }}
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Bottom Info */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 bg-gradient-to-b from-[#000000] via-[#171717] to-[#191919]">
        <div className="flex flex-col gap-1">
          <h2 className="text-white text-xl sm:text-2xl lg:text-[40px] font-medium">
            {project.title}
          </h2>
          <p className="text-[#888] text-xs sm:text-sm font-light">
            {project.tags.join(", ")}
          </p>
        </div>
        <div
          role="link"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(project.href, "_blank", "noopener,noreferrer");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.stopPropagation();
              window.open(project.href, "_blank", "noopener,noreferrer");
            }
          }}
          className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-[#3a3a3a] text-white hover:bg-[#c8f400] hover:text-black transition-all duration-200 shrink-0 ml-3 sm:ml-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
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
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
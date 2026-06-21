"use client";
import React, { useRef, useState } from "react";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";

const budgetOptions = [
  "$500 - $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
];

const socials = [
  {
    label: "X",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Dribbble",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "Why should I hire you?",
    answer:
      "I specialized in web development and app development, and branding for individuals and businesses.",
  },
  {
    question: "What services do you offer?",
    answer:
      "I offer web and app development, brand identity, and motion design tailored to your needs.",
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

const FAQCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [60, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y }}
      className={`p-[1px] rounded-2xl ${
        isOpen
          ? "bg-gradient-to-r from-[#0A413D] via-[#1B3F2C] via-[#395620] via-[#4D6319] to-[#506417]"
          : "border-[#1E1E1E]"
      } border-0`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-2xl border border-[#2a2a2a] bg-[#111111] px-6 py-5 cursor-pointer"
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-white font-semibold text-lg">{question}</h3>

          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`shrink-0 w-11 h-11 rounded-full ${
              isOpen ? "bg-[#E1FF01]" : "bg-white"
            } flex items-center justify-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-[#888] text-sm font-light leading-relaxed">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Footer = () => {
  const TextRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: TextRef,
    offset: ["start end", "end start"],
  });

  const Opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const Y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [budgetOpen, setBudgetOpen] = useState(false);

  return (
    <>
      {/* Common Questions */}
      <div className="mt-10 relative z-50 w-full lg:mt-30 lg:mb-30 max-w-xl mx-auto opacity-100">
        <motion.div
          ref={TextRef}
          style={{ y: Y, opacity: Opacity }}
          className="flex flex-col  items-center gap-y-1"
        >
          <div className="flex lg:gap-5 flex-col lg:flex-row  ">
            <h1 className="text-5xl sm:text-6xl  lg:text-5xl font-extralight text-white text-center leading-tight">
              Common
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold text-white text-center leading-tight">
              Questions
            </h1>
          </div>
          <p className="text-sm lg:text-md mt-10 lg:mt-0  text-gray-400 text-center mt-3 max-w-[240px] lg:max-w-[400px]">
            Helping you understand our process and offerings.
          </p>
        </motion.div>
      </div>

      {/* ✅ FAQ SECTION — FIXED & ADDED HERE */}
      <div className="w-full max-w-xl mb-20 mx-auto px-4 py-16">
        {/* FAQ Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20 mx-auto px-6"
        >
          <h2 className="text-5xl font-light text-white leading-tight tracking-tight">
            Frequently
          </h2>
          <h2 className="text-5xl font-extrabold text-white leading-tight tracking-tight">
            Asked Questions
          </h2>
        </motion.div>

        {/* FAQ Cards — mapped from faqs array */}
        <div className="flex flex-col gap-10">
          {faqs.map((faq, index) => (
            <FAQCard key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      {/* form section */}

      <motion.div id="contact" initial={{y:200}} whileInView={{y:0}} transition={{ease:"backOut",duration:0.99}} className="min-h-screen flex items-center justify-center w-full px-4 sm:px-6">
        <div className="p-[1px] rounded-3xl bg-gradient-to-r from-[#0A413D] via-[#1B3F2C] via-[#395620] via-[#4D6319] to-[#506417] w-full max-w-2xl">
          <div className="bg-[#0a0a0a] rounded-3xl px-6 sm:px-10 py-12 w-full">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-4xl lg:text-6xl font-light text-white leading-tight tracking-tight">
                Contact
              </h1>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-10">
                For Work
              </h1>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="flex gap-3 mb-12"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-8 h-8 rounded-full bg-[#222222] border border-[#333] text-white flex items-center justify-center hover:bg-[#c8f400] hover:text-black hover:border-[#c8f400] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>

            {/* Form Fields */}
            <motion.div
        
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col gap-10"
            >
              {/* Email */}
              <div className="flex flex-col gap-3">
                <label className="text-white font-medium text-sm lg:text-md">
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter the Email"
                  className="bg-transparent border-b border-[#333] text-white placeholder-[#555] text-base py-2 outline-none focus:border-[#c8f400] transition-colors duration-200"
                />
              </div>
              {/* Phone */}
              <div className="flex flex-col gap-3">
                <label className="text-white font-medium text-sm lg:text-md">
                  Your Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="bg-transparent border-b border-[#333] text-white placeholder-[#555] text-base py-2 outline-none focus:border-[#c8f400] transition-colors duration-200"
                />
              </div>
              {/* Budget Dropdown */}
              <div className="flex flex-col gap-3">
                <label className="text-white font-medium text-sm lg:text-md">
                  Your Budget
                </label>
                <div className="relative">
                  <button
                    onClick={() => setBudgetOpen(!budgetOpen)}
                    className="w-full flex items-center justify-between border-b border-[#333] text-base py-2 outline-none text-left transition-colors duration-200"
                  >
                    <span className={budget ? "text-white" : "text-[#555]"}>
                      {budget || "Select Price Point"}
                    </span>
                    <motion.svg
                      animate={{ rotate: budgetOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#555"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </motion.svg>
                  </button>

                  {/* Dropdown Options */}
                  {budgetOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-full bg-[#111] border border-[#2a2a2a] rounded-xl mt-2 overflow-hidden z-50"
                    >
                      {budgetOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setBudget(option);
                            setBudgetOpen(false);
                          }}
                          className="w-full text-left px-5 py-3 text-white hover:text-white hover:bg-[#1a1a1a] transition-colors duration-150 text-sm"
                        >
                          {option}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
              {/* Submit Row */}
          
<div className="flex items-center cursor-pointer rounded-4xl hover:cursor-pointer w-fit bg-[#c8f400] hover:bg-white justify-between mt-2">
  <button
    onClick={() => {
      if (!email || !phone || !budget) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      const phoneNumber = "923154780106"; // your WhatsApp number
      const text = `New Project Inquiry%0A%0AEmail: ${email}%0APhone: ${phone}%0ABudget: ${budget}`;
      const url = `https://wa.me/${phoneNumber}?text=${text}`;

      window.open(url, "_blank");
    }}
    className="flex items-center gap-0 group cursor-pointer"
  >
    <span className="text-black font-semibold text-base px-7 py-4 rounded-full transition-colors duration-200">
      Submit Now
    </span>
    <span className="w-12 h-12 rounded-full bg-[#111] border border-[#2a2a2a] hover:border-none flex items-center justify-center group-hover:bg-[#c8f400] transition-colors duration-200">
      <svg
        className="text-white group-hover:text-black"
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
    </span>
  </button>
</div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <p className="text-sm lg:text-lg text-gray-400 mx-auto mt-20 mb-10 text-center max-w-[300px] lg:max-w-[340px]">
        Do You have any concerns before we finalize
      </p>
     

      {/* Bottom Cards Section */}
      <div className="w-full max-w-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* LEFT — Instagram Card */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ duration: 0.5, ease: "linear" }}
            viewport={{ amount: "0.30" }}
            className="relative w-full lg:w-1/2 rounded-3xl overflow-hidden bg-[#111] h-full lg:min-h-[300px] flex flex-col justify-between p-5 group"
          >
            <Image
              src="/U.png"
              alt="Instagram"
              fill
              className="object-cover object-center cursor-pointer opacity-80 transition-transform duration-500 group-hover:scale-110"
            />

            <motion.div className="relative z-10">
              <div className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.5"
                    fill="white"
                    stroke="none"
                  />
                </svg>
              </div>
            </motion.div>

            <div className="relative z-10 flex items-end justify-between">
              <div>
                <p className="text-[#E1FF01] text-sm font-medium mb-1">
                  . Porty
                </p>
                <h2 className="text-white text-3xl font-bold leading-tight">
                  Explore
                  <br />
                  Instagram
                </h2>
              </div>
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
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

          {/* RIGHT — Why Choose Card */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ duration: 0.5, ease: "linear" }}
            viewport={{ amount: "0.30" }}
            className="relative w-full lg:w-1/2 rounded-3xl bg-[#c8f400] p-6 flex flex-col justify-between min-h-[200px]"
          >
            <div className="absolute top-4 right-4 grid grid-cols-6 gap-[5px]">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[4px] h-[4px] rounded-full bg-black/20"
                />
              ))}
            </div>

            <div className="relative z-10">
              <h2 className="text-black text-3xl leading-tight">
                Why Choose
                <br />
                <span className="font-bold">Awais</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-black text-white text-sm px-4 py-2 rounded-full">
                High quality
              </span>
              <span className="bg-black text-white text-sm px-4 py-2 rounded-full">
                Creative
              </span>
              <span className="bg-black text-white text-sm font-medium px-4 py-2 rounded-full">
                Fast Responsive
              </span>
              <span className="bg-black text-white text-sm font-medium px-4 py-2 rounded-full">
                Easy-Use
              </span>
              <span className="bg-black text-white text-sm font-medium px-4 py-2 rounded-full">
                100% SEO
              </span>
              <span className="bg-black text-white text-sm font-medium px-4 py-2 rounded-full">
                Collaboration
              </span>
            </div>
          </motion.div>
        </div>

        {/* Back to Top */}
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: -10, opacity: 100 }}
          transition={{ duration: 0.3, ease: "linear" }}
          viewport={{ amount: "0.30" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center mt-10 gap-2 mx-auto mb-10 text-white/60 hover:text-white transition-colors duration-200 text-sm"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="16 12 12 8 8 12" />
            <line x1="12" y1="16" x2="12" y2="8" />
          </svg>
          Back to Top
        </motion.button>
      </div>
    </>
  );
};

export default Footer;

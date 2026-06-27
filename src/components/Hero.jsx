import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBriefcase, FaHardHat, FaPlay,
  FaStar, FaUsers, FaShieldAlt
} from "react-icons/fa";
import { MdAndroid } from "react-icons/md";

// Import step images
import step1Img from "../assets/webp/step-1.webp";
import step2Img from "../assets/webp/step-2.webp";
import step3Img from "../assets/webp/step-3.webp";

const Hero = ({ role }) => {
  const activeRole = role || "employer";
  const [currentStep, setCurrentStep] = useState(0);

  // Auto-advance slideshow and sync with progress bar
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentStep]);

  /* ── Copy and Slides configuration ── */
  const content = {
    employer: {
      badge: "For Employers & Contractors",
      title: "Build Your Workforce", 
      highlight: "in 3 simple steps",
      subtitle: "Hire verified daily-wage workers, manage your projects, and route zero-middleman payouts safely using BharatWork.",
      btnText: "Start Hiring Now",
      icon: <FaBriefcase className="text-xl" />,
      stats: [
        { icon: <FaUsers />,     value: "1K+", label: "Verified Workers" },
        { icon: <FaShieldAlt />, value: "100%", label: "Secure Payments"  },
        { icon: <FaStar />,      value: "4.9",  label: "App Rating"       },
      ],
      slides: [
        { tabLabel: "Browse", image: step1Img },
        { tabLabel: "Book", image: step2Img },
        { tabLabel: "Build", image: step3Img }
      ]
    },
    labour: {
      badge: "For Workers & Agents",
      title: "Secure Your Livelihood", 
      highlight: "in 3 simple steps",
      subtitle: "Find verified daily-wage jobs, connect directly with contractors, and get safe payouts to your bank account.",
      btnText: "Find Work Now",
      icon: <FaHardHat className="text-xl" />,
      stats: [
        { icon: <FaUsers />,     value: "10K+", label: "Daily Jobs"   },
        { icon: <FaShieldAlt />, value: "24hr", label: "Payment"      },
        { icon: <FaStar />,      value: "4.8",  label: "Worker Rating"},
      ],
      slides: [
        { tabLabel: "Browse", image: step1Img },
        { tabLabel: "Book", image: step2Img },
        { tabLabel: "Build", image: step3Img }
      ]
    },
  }[activeRole];

  if (!content) return null;

  return (
    <section
      id="home"
      className="relative pt-8 pb-20 lg:pt-12 lg:pb-28 overflow-hidden flex items-center min-h-[calc(100vh-5rem)]"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-screen via-white to-screen z-0" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-action/10 via-orange-400/5 to-transparent rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-gradient-end/10 via-amber-400/5 to-transparent rounded-full filter blur-[100px] pointer-events-none" />
      
      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#EE8311 1px,transparent 1px),linear-gradient(90deg,#EE8311 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ─────────────────────────────────────────────────────────────
             LEFT COLUMN: Typography and Call to Action
          ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
            }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Badge */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-action/20 shadow-md mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-action animate-pulse" />
              <span className="gradient-primary font-bold text-xs tracking-wider uppercase">{content.badge}</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
              className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-[1.1] mb-6 tracking-tight"
            >
              {content.title}{" "}
              <span className="relative inline-block mt-1">
                <span className="gradient-text-hero">{content.highlight}</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="#EE8311" strokeWidth="3" strokeLinecap="round" className="opacity-40" />
                </svg>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
              className="text-base md:text-lg text-text-secondary mb-8 max-w-2xl leading-relaxed"
            >
              {content.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
              className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto"
            >
              <Link
                to="/downloads"
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-action to-gradient-end text-white px-8 py-4 rounded-2xl font-bold text-base overflow-hidden shadow-lg hover:shadow-xl hover:shadow-action/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {content.icon}
                  </span>
                  {content.btnText}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gradient-end to-action opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                to="/demopage"
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-text-primary border border-border-medium hover:border-action hover:text-action transition-all duration-300"
              >
                <span className="w-8 h-8 rounded-lg bg-action/10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-action group-hover:to-gradient-end group-hover:text-white transition-colors">
                  <FaPlay className="text-xs ml-0.5" />
                </span>
                Watch Demo
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
              className="flex flex-wrap gap-8 lg:gap-10 mb-8 border-t border-border-light pt-8 w-full max-w-xl"
            >
              {content.stats.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-action/10 to-gradient-end/10 flex items-center justify-center text-action shrink-0">{s.icon}</div>
                  <div className="text-left">
                    <div className="text-xl font-extrabold text-text-primary leading-none mb-0.5">{s.value}</div>
                    <div className="text-xs text-text-secondary font-medium">{s.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Footer Badge */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} 
              className="inline-flex items-center gap-2.5 text-xs text-text-secondary bg-white/80 backdrop-blur-sm px-4.5 py-2.5 rounded-full border border-border-light shadow-sm"
            >
              <MdAndroid className="text-base text-action animate-bounce" />
              <span>Mobile Apps coming soon on <span className="font-semibold text-text-primary">Android & iOS</span></span>
            </motion.div>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
             RIGHT COLUMN: Interactive Step Slideshow (Minimalist Image & Tabs)
          ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full flex flex-col items-center"
          >
            <div className="w-full max-w-[420px] flex flex-col">
              
              {/* 1:1 Aspect-Square Slideshow Display Frame - Minimalist style */}
              <div className="w-full aspect-square overflow-hidden rounded-[2rem] relative bg-orange-50/10 shadow-xl border border-border-light">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentStep}
                    src={content.slides[currentStep].image}
                    alt={`Step ${currentStep + 1}`}
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -80, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 22 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* Step Navigation Tabs with Progress Loaders - Browse, Book, Build */}
              <div className="grid grid-cols-3 gap-3.5 mt-6 px-1 w-full">
                {content.slides.map((slide, index) => {
                  const isActive = currentStep === index;
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className="flex flex-col text-left group cursor-pointer focus:outline-none"
                    >
                      <span className={`text-[9px] font-black uppercase tracking-wider mb-0.5 transition-colors duration-200 ${
                        isActive ? "text-action" : "text-text-tertiary group-hover:text-text-secondary"
                      }`}>
                        Step {index + 1}
                      </span>
                      <span className={`text-sm font-black leading-tight transition-colors duration-200 ${
                        isActive ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
                      }`}>
                        {slide.tabLabel}
                      </span>
                      
                      {/* Active linear loader indicator bar */}
                      <div className="w-full h-[3px] bg-border-medium rounded-full mt-2.5 overflow-hidden">
                        <motion.div
                          animate={{
                            width: isActive ? "100%" : "0%"
                          }}
                          transition={{ duration: isActive ? 5 : 0.3, ease: "linear" }}
                          className="h-full bg-action"
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

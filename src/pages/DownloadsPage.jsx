import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FaGooglePlay, FaApple, FaBriefcase, FaHardHat, 
  FaArrowRight, FaShieldAlt, FaUsers, FaStar,
  FaPlusCircle, FaSearchLocation, FaRupeeSign,
  FaClipboardCheck, FaChartLine, FaWallet,
  FaBell, FaHistory, FaTimes
} from "react-icons/fa";
import Footer from "../components/Footer";
import app1 from "../assets/app1.png";
import app2 from "../assets/app2.png";
import app3 from "../assets/app3.png";

const DownloadsPage = () => {
  const navigate = useNavigate();
  const [selectedPortal, setSelectedPortal] = useState(null);

  const employerTags = [
    "0% Fee",
    "KYC Verified",
    "GPS Match"
  ];

  const workerTags = [
    "100% Wage",
    "Direct Pay",
    "Voice Jobs"
  ];

  const employerModalFeatures = [
    {
      icon: <FaPlusCircle />,
      title: "Post Jobs Instantly",
      description: "Create job postings in seconds with detailed requirements, location, and budget.",
    },
    {
      icon: <FaSearchLocation />,
      title: "Find Verified Workers",
      description: "Browse through KYC-verified labour profiles with ratings and reviews.",
    },
    {
      icon: <FaRupeeSign />,
      title: "Secure Payments",
      description: "Pay workers directly through the app with transaction records.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Track Projects",
      description: "Monitor work progress, attendance, and completion status.",
    },
    {
      icon: <FaChartLine />,
      title: "Budget Management",
      description: "Track expenses across multiple projects with labour cost insights.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Verified & Trusted",
      description: "All workers are background-verified with work history access.",
    },
  ];

  const workerModalFeatures = [
    {
      icon: <FaBriefcase />,
      title: "Find Jobs Near You",
      description: "Discover daily wage jobs in your area with instant notifications.",
    },
    {
      icon: <FaWallet />,
      title: "Direct Payments",
      description: "Get paid directly into your bank account with no middleman.",
    },
    {
      icon: <FaStar />,
      title: "Build Your Profile",
      description: "Accumulate ratings and reviews for better job opportunities.",
    },
    {
      icon: <FaBell />,
      title: "Job Alerts",
      description: "Receive instant notifications for new jobs in your area.",
    },
    {
      icon: <FaHistory />,
      title: "Work History",
      description: "Track all your completed jobs, earnings, and work days.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Verified",
      description: "Work only with genuine employers and verified job postings.",
    },
  ];

  return (
    <div className="min-h-screen bg-screen text-text-primary font-sans overflow-x-hidden selection:bg-action/30 selection:text-action pt-20 flex flex-col justify-between">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-screen via-white to-screen pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-action/5 via-orange-400/5 to-transparent rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-gradient-end/5 via-amber-400/5 to-transparent rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>

      <main className="grow flex flex-col justify-center py-16 md:py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 w-full">
          
          {/* Heading */}
          <div className="text-center mb-12 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4 tracking-tight">
              Get Started with <span className="gradient-primary">BharatWork</span>
            </h1>
            <p className="text-text-secondary max-w-xl mx-auto text-base mb-8">
              Access our digital portals directly or download the official mobile apps on your device.
            </p>

            {/* Central Arc Ratings & Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-row items-center justify-center gap-6 sm:gap-12 md:gap-16 mb-6 bg-white/40 backdrop-blur-sm px-6 sm:px-10 py-5 rounded-3xl border border-border-medium/30 shadow-sm"
            >
              {/* Active Users */}
              <div className="text-center flex flex-col items-center">
                <div className="flex items-center gap-1.5">
                  <FaUsers className="text-action text-sm sm:text-base shrink-0" />
                  <span className="text-xl sm:text-2xl font-black text-text-primary leading-none">50K+</span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-extrabold text-text-secondary uppercase tracking-wider mt-1.5">Active Users</span>
              </div>

              {/* Arc Rating Gauge */}
              <div className="flex flex-col items-center justify-center relative px-2">
                <svg viewBox="0 0 120 70" className="w-24 sm:w-28 h-18 sm:h-20 overflow-visible">
                  <defs>
                    <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#EE8311" />
                    </linearGradient>
                  </defs>
                  {/* Background Track */}
                  <path
                    d="M 15 60 A 45 45 0 0 1 105 60"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  {/* Foreground Filled Arc */}
                  <motion.path
                    d="M 15 60 A 45 45 0 0 1 105 60"
                    fill="none"
                    stroke="url(#gaugeGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="141.37"
                    initial={{ strokeDashoffset: 141.37 }}
                    animate={{ strokeDashoffset: 141.37 * (1 - 4.9 / 5) }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                  />
                  {/* Score */}
                  <text x="60" y="52" textAnchor="middle" className="text-2xl font-black fill-text-primary">
                    4.9
                  </text>
                </svg>
                
                {/* Stars and Platform Tag under the Arc */}
                <div className="flex flex-col items-center -mt-1 sm:-mt-1.5">
                  <div className="flex text-amber-500 text-[8px] sm:text-[9px] gap-0.5 mb-0.5">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-black text-text-secondary uppercase tracking-widest leading-none">
                    App Rating
                  </span>
                </div>
              </div>

              {/* KYC Verified */}
              <div className="text-center flex flex-col items-center">
                <div className="flex items-center gap-1.5">
                  <FaShieldAlt className="text-emerald-600 text-sm sm:text-base shrink-0" />
                  <span className="text-xl sm:text-2xl font-black text-text-primary leading-none">100%</span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-extrabold text-text-secondary uppercase tracking-wider mt-1.5">KYC Verified</span>
              </div>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
            
            {/* Card 1: Employer */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl border border-border-medium/60 shadow-2xl hover:shadow-action/10 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="h-2 bg-gradient-to-r from-action to-gradient-end"></div>
              <div className="p-8 md:p-10 flex flex-col justify-between h-full">
                <div>
                  {/* Card Header Side-by-Side */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-action to-gradient-end flex items-center justify-center text-white text-2xl shadow-lg shrink-0">
                      <FaBriefcase />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-action">Hiring Platform</span>
                      <h2 className="text-2xl font-black text-text-primary leading-tight">Employers</h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-6 text-sm leading-relaxed min-h-[72px]">
                    Seamlessly hire verified labours and contractors. Post daily-wage jobs, track progress, and route payouts directly to worker bank accounts.
                  </p>

                  {/* Shorter Tag Badges */}
                  <div className="grid grid-cols-3 gap-2 mb-8">
                    {employerTags.map((tag, i) => (
                      <span key={i} className="inline-flex items-center justify-center gap-1 px-1.5 py-1.5 rounded-full bg-screen border border-border-medium/60 text-[10px] sm:text-xs font-bold text-text-secondary leading-none whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-action animate-pulse shrink-0"></span>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-4">
                  <button
                    onClick={() => navigate("/employer-info")}
                    className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-action to-gradient-end text-white px-5 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-action/20 hover:-translate-y-0.5 text-sm cursor-pointer"
                  >
                    Access Employer Portal
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl border border-border-medium text-text-secondary font-bold hover:border-action hover:bg-action/5 hover:text-action transition-all duration-300 text-xs"
                    >
                      <FaGooglePlay className="text-xs" />
                      Google Play
                    </a>
                    <a
                      href="#"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl border border-border-medium text-text-secondary font-bold hover:border-action hover:bg-action/5 hover:text-action transition-all duration-300 text-xs"
                    >
                      <FaApple className="text-xs" />
                      App Store
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Worker */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl border border-border-medium/60 shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-500"></div>
              <div className="p-8 md:p-10 flex flex-col justify-between h-full">
                <div>
                  {/* Card Header Side-by-Side */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-2xl shadow-lg shrink-0">
                      <FaHardHat />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-amber-600">Earnings Portal</span>
                      <h2 className="text-2xl font-black text-text-primary leading-tight">Workers</h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-6 text-sm leading-relaxed min-h-[72px]">
                    Find verified daily-wage jobs near you. Connect directly with verified contractors, complete jobs, and get guaranteed digital payouts.
                  </p>

                  {/* Shorter Tag Badges */}
                  <div className="grid grid-cols-3 gap-2 mb-8">
                    {workerTags.map((tag, i) => (
                      <span key={i} className="inline-flex items-center justify-center gap-1 px-1.5 py-1.5 rounded-full bg-screen border border-border-medium/60 text-[10px] sm:text-xs font-bold text-text-secondary leading-none whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-4">
                  <button
                    onClick={() => setSelectedPortal("worker")}
                    className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5 text-sm cursor-pointer"
                  >
                    Access Worker Portal
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl border border-border-medium text-text-secondary font-bold hover:border-amber-500 hover:bg-amber-500/5 hover:text-amber-600 transition-all duration-300 text-xs"
                    >
                      <FaGooglePlay className="text-xs" />
                      Google Play
                    </a>
                    <a
                      href="#"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl border border-border-medium text-text-secondary font-bold hover:border-amber-500 hover:bg-amber-500/5 hover:text-amber-600 transition-all duration-300 text-xs"
                    >
                      <FaApple className="text-xs" />
                      App Store
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* App Preview Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-20 mb-4"
          >
            {/* Section Heading */}
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-action/20 shadow-sm mb-4 text-xs font-bold uppercase tracking-widest gradient-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-action animate-pulse"></span>
                App Preview
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-3 tracking-tight">
                See BharatWork in <span className="gradient-text-hero">Action</span>
              </h2>
              <p className="text-text-secondary max-w-md mx-auto text-sm">
                A seamless experience designed for both employers and workers — clean, fast, and built for Bharat.
              </p>
            </div>

            {/* Phone Cluster */}
            <div className="relative w-full max-w-[480px] mx-auto" style={{ minHeight: "520px" }}>
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-action/25 via-orange-400/15 to-amber-400/25 rounded-full blur-[90px] -z-10"></div>

              {/* Left Phone */}
              <motion.div
                initial={{ opacity: 0, x: -40, rotate: -8 }}
                animate={{ opacity: 1, x: 0, rotate: -8 }}
                transition={{ duration: 0.7, delay: 0.5, type: "spring", bounce: 0.25 }}
                whileHover={{ scale: 1.06, rotate: -5, zIndex: 30 }}
                className="absolute left-0 top-10 w-[42%] z-10 cursor-pointer"
              >
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-action bg-action">
                  <img
                    src={app2}
                    alt="BharatWork — Worker View"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Right Phone */}
              <motion.div
                initial={{ opacity: 0, x: 40, rotate: 8 }}
                animate={{ opacity: 1, x: 0, rotate: 8 }}
                transition={{ duration: 0.7, delay: 0.55, type: "spring", bounce: 0.25 }}
                whileHover={{ scale: 1.06, rotate: 5, zIndex: 30 }}
                className="absolute right-0 top-10 w-[42%] z-10 cursor-pointer"
              >
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-action bg-action">
                  <img
                    src={app3}
                    alt="BharatWork — Employer View"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Center Phone (Main) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.2 }}
                whileHover={{ scale: 1.04, y: -10 }}
                className="relative z-20 mx-auto w-[52%] cursor-pointer"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_rgba(234,88,12,0.28)] border-4 border-action bg-action">
                  <img
                    src={app1}
                    alt="BharatWork — Main Screen"
                    className="w-full h-auto"
                    fetchPriority="high"
                  />
                </div>

                {/* Floating Badge: Active Users */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -left-16 top-1/3 bg-white rounded-2xl shadow-xl p-3 border border-border-light"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-action to-gradient-end flex items-center justify-center text-white">
                      <FaUsers className="text-sm" />
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary">Active Now</div>
                      <div className="font-bold text-text-primary">2,451</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge: Verified */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -right-14 bottom-1/4 bg-white rounded-2xl shadow-xl p-3 border border-border-light"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white">
                      <FaShieldAlt className="text-sm" />
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary">Verified</div>
                      <div className="font-bold text-text-primary">100%</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Portal Details Modal */}
          <AnimatePresence>
            {selectedPortal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedPortal(null)}
                  className="absolute inset-0 bg-black/60 backdrop-blur-md"
                ></motion.div>

                {/* Modal Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="relative bg-white rounded-3xl border border-border-medium/40 max-w-3xl w-full shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
                >
                  {/* Header Accent Bar */}
                  <div className={`h-2 bg-gradient-to-r ${selectedPortal === "employer" ? "from-action to-gradient-end" : "from-amber-500 to-orange-500"}`}></div>

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedPortal(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-screen hover:bg-border-light border border-border-medium/40 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors cursor-pointer z-20"
                  >
                    <FaTimes />
                  </button>

                  <div className="p-6 sm:p-10 overflow-y-auto">
                    {/* Header Info */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedPortal === "employer" ? "from-action to-gradient-end" : "from-amber-500 to-orange-500"} flex items-center justify-center text-white text-2xl shadow-lg shrink-0`}>
                        {selectedPortal === "employer" ? <FaBriefcase /> : <FaHardHat />}
                      </div>
                      <div>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${selectedPortal === "employer" ? "text-action" : "text-amber-600"}`}>
                          {selectedPortal === "employer" ? "Employer Portal" : "Worker Portal"}
                        </span>
                        <h3 className="text-2xl font-black text-text-primary leading-tight mt-0.5">
                          {selectedPortal === "employer" ? "Hire Verified Labours" : "Earn Fair Wages"}
                        </h3>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {(selectedPortal === "employer" ? employerModalFeatures : workerModalFeatures).map((feature, idx) => (
                        <div
                          key={idx}
                          className="bg-screen p-5 rounded-2xl border border-border-medium/30 flex items-start gap-4 hover:border-action/25 transition-all duration-300"
                        >
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selectedPortal === "employer" ? "from-action/10 to-gradient-end/10 text-action" : "from-amber-500/10 to-orange-500/10 text-amber-600"} flex items-center justify-center text-lg shrink-0 shadow-sm`}>
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-text-primary text-sm mb-1">{feature.title}</h4>
                            <p className="text-text-secondary text-xs leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-border-medium/30">
                      <p className="text-text-secondary text-xs max-w-sm text-center sm:text-left">
                        Ready to log in or register? Continue to the secure login screen.
                      </p>
                      <button
                        onClick={() => {
                          const path = selectedPortal === "employer" ? "/employer/auth/login" : "/labour/auth/login";
                          setSelectedPortal(null);
                          navigate(path);
                        }}
                        className={`w-full sm:w-auto group flex items-center justify-center gap-2 bg-gradient-to-r ${selectedPortal === "employer" ? "from-action to-gradient-end" : "from-amber-500 to-orange-500"} text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-0.5 text-sm cursor-pointer`}
                      >
                        Proceed to Portal
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DownloadsPage;

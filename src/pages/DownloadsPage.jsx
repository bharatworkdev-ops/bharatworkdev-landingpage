import React from "react";
import { motion } from "framer-motion";
import { 
  FaGooglePlay, FaApple, FaBriefcase, FaHardHat, 
  FaShieldAlt, FaUsers, FaAndroid
} from "react-icons/fa";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import app1 from "../assets/webp/Screenshot_1782380912.webp";
import app2 from "../assets/webp/Screenshot_1782380984.webp";
import app3 from "../assets/webp/Screenshot_1782381000.webp";

const DownloadsPage = () => {
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

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BharatWork Mobile App",
    "operatingSystem": "Android, iOS",
    "applicationCategory": "BusinessApplication, Utilities",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "INR"
    },
    "description": "Download the official BharatWork application. Connect directly with verified manual workers or find hiring opportunities in under 10 minutes."
  };

  return (
    <div className="relative w-full min-h-screen bg-screen text-text-primary font-sans overflow-x-hidden selection:bg-action/30 selection:text-action pt-20 flex flex-col justify-between">
      <SEO 
        title="Download BharatWork App | BharatWork"
        description="Download the official BharatWork mobile app for employers and workers. Hire verified labour or find local daily-wage jobs in minutes."
        schemaMarkup={appSchema}
      />
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
              Download the official mobile apps on your device.
            </p>

            {/* Central Arc Ratings & Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-row items-center justify-center gap-6 sm:gap-12 md:gap-16 mb-6 bg-white/40 backdrop-blur-sm px-6 sm:px-10 py-5 rounded-3xl border border-border-medium/30 shadow-sm"
            >
              {/* Active Workers */}
              <div className="text-center flex flex-col items-center">
                <div className="flex items-center gap-1.5">
                  <FaUsers className="text-action text-sm sm:text-base shrink-0" />
                  <span className="text-xl sm:text-2xl font-black text-text-primary leading-none">1K+</span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-extrabold text-text-secondary uppercase tracking-wider mt-1.5">Active Workers</span>
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
                    <a
                      href="/downloads/Bharatwork.apk"
                      download="Bharatwork.apk"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl border border-border-medium text-text-secondary font-bold hover:border-action hover:bg-action/5 hover:text-action transition-all duration-300 text-xs"
                    >
                      <FaAndroid className="text-xs" />
                      Download APK
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
                    <a
                      href="/downloads/BharatWork-Agent/Labour.apk"
                      download="Labour.apk"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl border border-border-medium text-text-secondary font-bold hover:border-amber-500 hover:bg-amber-500/5 hover:text-amber-600 transition-all duration-300 text-xs"
                    >
                      <FaAndroid className="text-xs" />
                      Download APK
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



        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DownloadsPage;

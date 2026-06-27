import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers, FaPhone,
  FaArrowRight, FaMapMarkerAlt, FaStar,
  FaBriefcase,
  FaCheck, FaTimes, FaUserCheck, FaRupeeSign, FaCheckCircle, FaBolt, FaHardHat
} from "react-icons/fa";

const WhatIsBharatWork = ({ role }) => {
  const activeRole = role || "employer";

  // Comparison Points (No commission references)
  const comparisonPoints = [
    {
      title: "Agency & Middleman Sourcing Markup",
      traditional: "High pricing markups taken out of daily labor payouts by local agents.",
      bharatwork: "Direct-to-worker transparent pricing with zero agency markup details.",
    },
    {
      title: "Workforce Profile Verification",
      traditional: "No official background checks; high attendance and security risks.",
      bharatwork: "100% Aadhaar & KYC-verified workers with rating histories.",
    },
    {
      title: "Hiring Timeframe",
      traditional: "Days or weeks spent calling local middlemen contacts.",
      bharatwork: "Hyperlocal on-demand worker matching in under 10 minutes.",
    },
    {
      title: "Payout Direct Routing",
      traditional: "Unregulated wage payments, cash tracking overhead, and payment disputes.",
      bharatwork: "Direct bank payouts with full, verified digital transaction logs.",
    }
  ];

  return (
    <section id="what-is-bharatwork" className="py-20 bg-card relative overflow-hidden border-t border-border-light flex flex-col gap-24">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-action/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-end/5 rounded-full blur-[100px] pointer-events-none" />

      {/* ─────────────────────────────────────────────────────────────
         SECTION 1: Core "What is BharatWork?" Visual Explanation
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
              What is{" "}
              <span className="relative inline-block">
                <span className="gradient-text-hero">BharatWork</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="#EE8311" strokeWidth="3" strokeLinecap="round" className="opacity-40" />
                </svg>
              </span>
              ?
            </h2>
            <p className="text-text-secondary max-w-3xl mx-auto text-lg leading-relaxed mb-6">
              BharatWork bridges India's unorganized labor gap. We use AI voice agents to connect verified blue-collar workers with MSMEs and factory owners — accessible to anyone with just a basic phone call.
            </p>
            <div className="h-[2px] w-20 bg-action/30 mx-auto rounded-full" />
          </motion.div>
        </div>

        {/* 3-Step Visual Explanation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col bg-screen rounded-3xl border border-border-medium/40 p-6 shadow-sm overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-action/10 flex items-center justify-center mb-5 text-action font-black text-lg">01</div>
            <h3 className="text-xl font-bold text-text-primary mb-2">Explore Worker Roles</h3>
            <p className="text-sm text-text-secondary mb-6 leading-relaxed">
              Browse profiles matching specific daily-wage roles, local feedback ratings, and verified skills.
            </p>
            {/* Visual element: Grid of worker tags */}
            <div className="mt-auto bg-white rounded-2xl border border-border-light p-4 shadow-sm flex flex-col gap-2.5">
              <span className="text-[10px] uppercase tracking-widest text-text-secondary font-black">Quick Select Roles</span>
              <div className="flex flex-wrap gap-2">
                {["Mason (Mistri)", "Electrician", "Painter", "Helper / Labourer"].map((role, i) => (
                  <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-action/5 to-orange-400/5 text-text-primary font-bold text-[11px] rounded-xl border border-action/15">
                    <span className="w-1.5 h-1.5 rounded-full bg-action" />
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col bg-screen rounded-3xl border border-border-medium/40 p-6 shadow-sm overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-action/10 flex items-center justify-center mb-5 text-action font-black text-lg">02</div>
            <h3 className="text-xl font-bold text-text-primary mb-2">Define Wages & Crew</h3>
            <p className="text-sm text-text-secondary mb-6 leading-relaxed">
              Post details of your project, wage rate requirements, and number of daily workers needed.
            </p>
            {/* Visual element: Wage Card Mockup */}
            <div className="mt-auto bg-white rounded-2xl border border-border-light p-4 shadow-sm flex flex-col gap-2.5">
              <span className="text-[10px] uppercase tracking-widest text-text-secondary font-black">Listing Preview</span>
              <div className="flex justify-between items-center bg-screen rounded-xl p-3 border border-border-light">
                <div>
                  <div className="text-[10px] text-text-secondary font-bold">DAILY RATE</div>
                  <div className="text-base font-extrabold text-text-primary">₹450 / Worker</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-text-secondary font-bold">REQUIRED</div>
                  <div className="text-base font-extrabold text-text-primary">4 Labourers</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col bg-screen rounded-3xl border border-border-medium/40 p-6 shadow-sm overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-action/10 flex items-center justify-center mb-5 text-action font-black text-lg">03</div>
            <h3 className="text-xl font-bold text-text-primary mb-2">Direct Match & Verify</h3>
            <p className="text-sm text-text-secondary mb-6 leading-relaxed">
              Connect directly with verified matches, track project logs, and route secure digital payouts.
            </p>
            {/* Visual element: Match Status Card Mockup */}
            <div className="mt-auto bg-white rounded-2xl border border-border-light p-4 shadow-sm flex flex-col gap-2">
              <div className="flex items-center gap-2.5 bg-emerald-50 rounded-xl p-2.5 border border-emerald-200">
                <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">✓</span>
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-emerald-800 font-extrabold leading-none">Match Status</div>
                  <div className="text-xs font-bold text-emerald-950 mt-[2px]">Verified Workers Confirmed</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-action to-gradient-end text-white rounded-xl font-bold text-xs shadow-md">
                <FaPhone className="text-[10px] shrink-0" />
                Call Workers Directly
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
         SECTION 2: Core Value Pillars & Traditional Comparison
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-black text-text-primary mb-4">
            Switch to{" "}
            <span className="relative inline-block">
              <span className="gradient-text-hero">BharatWork</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="#EE8311" strokeWidth="3" strokeLinecap="round" className="opacity-40" />
              </svg>
            </span>
          </h3>
          <p className="text-text-secondary max-w-xl mx-auto text-base leading-relaxed">
            Eliminate traditional sourcing agency markups and unverified profiles. Get direct digital transparency on every daily project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-[2rem] bg-screen border border-border-medium/60 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full pointer-events-none" />
            <h4 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 font-bold text-sm shrink-0">✕</span>
              Traditional Sourcing Agencies
            </h4>
            <div className="space-y-6">
              {comparisonPoints.map((point, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                  <div>
                    <h5 className="font-bold text-text-primary text-sm mb-1">{point.title}</h5>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{point.traditional}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BharatWork Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-[2rem] bg-white border border-action shadow-xl shadow-action/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-action/5 rounded-bl-full pointer-events-none" />
            <div className="absolute top-4 right-4 bg-gradient-to-r from-action to-gradient-end text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Recommended
            </div>
            <h4 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-action/10 flex items-center justify-center text-action font-bold text-sm shrink-0">✓</span>
              Hiring through BharatWork
            </h4>
            <div className="space-y-6">
              {comparisonPoints.map((point, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-action font-bold shrink-0 mt-0.5">✓</span>
                  <div>
                    <h5 className="font-bold text-text-primary text-sm mb-1">{point.title}</h5>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{point.bharatwork}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsBharatWork;

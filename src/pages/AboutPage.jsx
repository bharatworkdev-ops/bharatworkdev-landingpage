import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import {
  FaPhoneAlt,
  FaGlobe,
  FaHandshake,
  FaShieldAlt,
  FaUsers,
  FaBolt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCheckCircle,
  FaArrowRight,
  FaMicrophone,
  FaRocket,
  FaLightbulb,
  FaFireAlt,
  FaChartBar,
  FaBrain,
  FaHeart,
  FaCommentDots,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

const AboutPage = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const teamMembers = [
    {
      name: "Tejas Aggarwal",
      role: "Founder & CEO",
      description: "Visionary behind BharatWork. Dedicated to transforming the unorganized labor sector into a streamlined, transparent ecosystem.",
      image: "https://res.cloudinary.com/dgkmzddjv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-03-22_at_6.30.29_PM_idkqfb.jpg",
      linkedin: "https://www.linkedin.com/in/tejas-aggarwal-bharatwork",
    },
    {
      name: "Sarthak Upadhyay",
      role: "Co-Founder & CTO",
      description: "Operational leader ensuring seamless connections between daily wage workers, agents, and enterprise employers nationwide.",
      image: "https://res.cloudinary.com/dgkmzddjv/image/upload/v1774187538/WhatsApp_Image_2026-03-22_at_6.16.21_PM_jk3nex.jpg",
      linkedin: "https://www.linkedin.com/in/sarthak-upadhyay-bharatwork",
    }
  ];
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const whyItMatters = [
    { icon: <FaPhoneAlt />, title: "No smartphone? No problem.", desc: "Jobs via simple phone calls" },
    { icon: <FaMapMarkerAlt />, title: "Hyperlocal matching", desc: "Based on real-time demand" },
    { icon: <FaBolt />, title: "Faster hiring", desc: "For businesses and contractors" },
    { icon: <FaShieldAlt />, title: "Trust-driven ecosystem", desc: "For both workers and employers" },
    { icon: <FiGlobe />, title: "Built specifically for India's", desc: "Informal workforce" },
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "BharatWork",
      "url": "https://thebharatwork.com",
      "description": "BharatWork is building India's most accessible and inclusive job ecosystem for the unorganized blue-collar workforce."
    }
  };

  return (
    <div className="min-h-screen bg-screen text-text-primary font-sans overflow-x-hidden selection:bg-action/30 selection:text-action pt-20">
      <SEO 
        title="About Us | BharatWork"
        description="Learn about the mission, values, and founders of BharatWork. We are building India's most accessible and inclusive blue-collar hiring platform."
        schemaMarkup={aboutSchema}
      />
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 overflow-hidden bg-gradient-to-b from-card to-screen">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-action/10 rounded-full blur-[100px] -z-10 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ff9800]/10 rounded-full blur-[100px] -z-10 mix-blend-multiply pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-action/30 bg-card/40 backdrop-blur-md mb-4 shadow-sm">
              <FaRocket className="text-action" />
              <span className="font-bold text-sm tracking-widest uppercase text-action">About BharatWork</span>
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-text-primary mb-6 tracking-tight leading-tight">
              Connecting Labour with Dignity, Employers with {" "}
              <span className="gradient-text-hero">Reliability</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed font-light mb-6">
              BharatWork is building India's most accessible and inclusive job ecosystem—designed especially for the next billion workers who are often left behind by traditional hiring platforms.
            </p>
            <p className="text-base text-text-secondary max-w-3xl mx-auto leading-relaxed">
              In a country where millions of unskilled workers still rely on word-of-mouth for jobs, we are bridging the gap between opportunity and accessibility using technology that works for everyone—<span className="font-bold text-text-primary">not just smartphone users.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem, Solution & Impact */}
      <section className="py-24 relative overflow-hidden bg-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-action/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-action/10 border border-action/20 mb-4">
              <FaLightbulb className="text-action text-sm" />
              <span className="text-action font-semibold text-xs uppercase tracking-wider">Problem, Solution & Impact</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary">
              How We Create <span className="gradient-text-hero">Real Impact</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* Left Column: The Problem & Our Promise */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="flex flex-col justify-between space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6">The Challenge We Face</h3>
                
                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  <div className="p-5 rounded-2xl bg-card border border-border-medium/40 shadow-sm hover:border-action/20 transition-all">
                    <div className="text-3xl font-black text-action mb-2">400M+</div>
                    <p className="text-text-secondary text-sm font-medium leading-relaxed">Informal workers in India relying on fragmented networks.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-card border border-border-medium/40 shadow-sm hover:border-action/20 transition-all">
                    <div className="text-3xl font-black text-text-primary mb-2">0% Web</div>
                    <p className="text-text-secondary text-sm font-medium leading-relaxed">Majority lack access to digital job platforms or smart devices.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-card border border-border-medium/40 shadow-sm hover:border-action/20 transition-all">
                    <div className="text-3xl font-black text-text-primary mb-2">Slow</div>
                    <p className="text-text-secondary text-sm font-medium leading-relaxed">Employers struggle with reliable, fast, and verified hiring.</p>
                  </div>
                </div>

                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Traditional job platforms require smartphones, active internet, and digital literacy. This excludes millions of unskilled daily wage workers, painters, masons, and helpers. 
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  BharatWork bridges this gap, connecting offline workers with online hiring needs instantly and securely without requiring internet or applications on their end.
                </p>
              </div>

              {/* Our Promise (The Quote) */}
              <div className="p-8 rounded-[2rem] bg-gradient-to-br from-action/5 via-card to-transparent border border-action/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-action/10 rounded-bl-[100px] -z-10"></div>
                <FaHandshake className="text-3xl text-action mb-4" />
                <h4 className="text-lg font-bold text-text-primary mb-2">Our Promise & Impact</h4>
                <p className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-action to-gradient-end leading-tight italic">
                  "Opportunity should not depend on the device you own."
                </p>
                <p className="text-sm text-text-secondary mt-3">
                  We believe every connection creates opportunity, ensuring dignity of work for all.
                </p>
              </div>
            </motion.div>

            {/* Right Column: AI Voice System & Solution */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="flex flex-col justify-between bg-card rounded-[2.5rem] p-8 sm:p-10 border border-border-medium/50 shadow-xl relative"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-action/10 flex items-center justify-center text-action text-xl shrink-0">
                    <FaMicrophone />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">What We Do</h3>
                    <p className="text-xs text-action font-semibold uppercase tracking-wider">AI Voice-Enabled Matching</p>
                  </div>
                </div>

                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  We call workers directly on their basic mobile phones. Our voice AI talks to them in their local language to check their availability, location, and interest.
                </p>

                {/* Voice Call Mockup Box */}
                <div className="p-6 rounded-2xl border-2 border-action/30 relative overflow-hidden bg-screen mb-8">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-action/10 rounded-bl-[100px]"></div>
                  
                  {/* Call Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">Incoming Call Preview</span>
                  </div>

                  {/* Audio Wave Pattern */}
                  <div className="flex items-center gap-1.5 mb-4 py-2">
                    <span className="w-1.5 h-6 rounded-full bg-action/40 animate-[pulse_1s_infinite_100ms]"></span>
                    <span className="w-1.5 h-10 rounded-full bg-action/60 animate-[pulse_1s_infinite_200ms]"></span>
                    <span className="w-1.5 h-14 rounded-full bg-action animate-[pulse_1s_infinite_300ms]"></span>
                    <span className="w-1.5 h-8 rounded-full bg-action/70 animate-[pulse_1s_infinite_400ms]"></span>
                    <span className="w-1.5 h-12 rounded-full bg-action/90 animate-[pulse_1s_infinite_500ms]"></span>
                    <span className="w-1.5 h-6 rounded-full bg-action/30 animate-[pulse_1s_infinite_600ms]"></span>
                  </div>

                  <p className="text-text-secondary text-sm mb-3 italic">System voice prompt:</p>
                  <div className="bg-card p-4 rounded-xl border-l-4 border-action font-medium text-text-primary text-lg leading-relaxed shadow-sm">
                    "Agar aap aaj kaam ke liye taiyar hain, toh ek (1) dabayein."
                  </div>
                </div>
              </div>

              {/* Core Benefits Grid */}
              <div className="grid grid-cols-2 gap-6 border-t border-border-medium/30 pt-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 text-sm">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm">Offline Reach</h4>
                    <p className="text-text-secondary text-xs">No smartphone/app needed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 text-sm">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm">Hyperlocal</h4>
                    <p className="text-text-secondary text-xs">Matches by closest location</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 text-sm">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm">10-Min Match</h4>
                    <p className="text-text-secondary text-xs">Fast crew assembly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 text-sm">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm">KYC Verified</h4>
                    <p className="text-text-secondary text-xs">Trust-driven ecosystem</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us & Our Foundation Section */}
      <section className="py-24 bg-card border-y border-border-light relative overflow-hidden">
        <div className="absolute right-0 top-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-action/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="absolute left-0 bottom-1/4 translate-y-1/2 w-[400px] h-[400px] bg-[#ff9800]/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-action/10 flex items-center justify-center text-action text-2xl shrink-0">
                <FaUsers />
              </div>
              About Us
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              BharatWork is more than a platform—it's a commitment to India's workforce transformation, bridging the digital divide for 400M+ manual workers.
            </p>
          </motion.div>

          {/* Grid 1: Our Story, Mission, Vision */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-20">
            {/* Story Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-screen border border-border-medium/60 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
                  Our Story
                </h3>
                <p className="text-text-secondary leading-relaxed text-base">
                  Founded in 2025, BharatWork emerged from a simple observation: millions of skilled workers in India remain disconnected from formal employment opportunities. Our founders set out to create a technology solution that bridges the digital divide and brings dignity to daily wage hiring.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-action/5 to-screen border border-action/20 shadow-sm flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-action/10 rounded-bl-[100px] -z-10"></div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-action/10 flex items-center justify-center text-action text-xl shrink-0">
                    <FiGlobe />
                  </div>
                  Our Mission
                </h3>
                <p className="text-text-secondary leading-relaxed text-base">
                  To empower every worker in Bharat—whether digitally connected or not—with equal access to job opportunities, fair wages, and dignity of work.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-[#ff9800]/5 to-screen border border-[#ff9800]/20 shadow-sm flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff9800]/10 rounded-bl-[100px] -z-10"></div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ff9800]/10 flex items-center justify-center text-[#ff9800] text-xl shrink-0">
                    <FaBrain />
                  </div>
                  Our Vision
                </h3>
                <p className="text-text-secondary leading-relaxed text-base">
                  To become India's default employment infrastructure, powering job access across villages, towns, and cities—ensuring that no worker is left behind due to lack of technology.
                </p>
              </div>
            </motion.div>
          </div>

          <hr className="border-border-medium/30 mb-20" />

          {/* Grid 2: Values and Leadership */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Left/Middle Column (2/3 width on large screens): Leadership */}
            <div className="lg:col-span-2 space-y-8">
              <h3 className="text-3xl font-black text-text-primary mb-8 text-center lg:text-left">Meet Our Leadership</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-screen p-8 rounded-3xl border border-border-medium/60 hover:border-action/40 group relative overflow-hidden flex flex-col items-center text-center transition-all duration-300 w-full max-w-sm shadow-sm"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-28 h-28 rounded-full mb-6 border-4 border-card shadow-lg group-hover:scale-105 transition-transform duration-300 object-cover"
                    />
                    <h4 className="text-xl font-bold text-text-primary mb-1">{member.name}</h4>
                    <p className="text-action font-semibold text-sm mb-4 uppercase tracking-wider">{member.role}</p>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-6 h-18">{member.description}</p>
                    
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-action/10 hover:bg-gradient-to-r hover:from-action hover:to-gradient-end text-action hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                      title="LinkedIn Profile"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (1/3 width on large screens): Core Values */}
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-text-primary mb-8 text-center lg:text-left">Our Core Values</h3>
              <div className="space-y-6 bg-screen p-8 rounded-3xl border border-border-medium/50 shadow-sm">
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-action text-xl mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-text-primary">Inclusion First</h4>
                    <p className="text-text-secondary text-sm">Technology should serve everyone, not just the digitally connected.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-action text-xl mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-text-primary">Transparency</h4>
                    <p className="text-text-secondary text-sm">Clear communication and fair practices for all stakeholders.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-action text-xl mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-text-primary">Innovation</h4>
                    <p className="text-text-secondary text-sm">Leveraging AI and voice technology to solve real-world problems.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-action text-xl mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-text-primary">Impact</h4>
                    <p className="text-text-secondary text-sm">Every decision we make is measured by its effect on workers' lives.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>



      <Footer />
    </div>
  );
};

export default AboutPage;

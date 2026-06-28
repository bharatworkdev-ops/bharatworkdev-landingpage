import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import {
  FaPhoneAlt,
  FaHandshake,
  FaShieldAlt,
  FaBolt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaMicrophone,
  FaRocket,
  FaLightbulb,
  FaBrain,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Tejas Aggarwal",
      role: "Founder & CEO",
      description: "Visionary behind BharatWork. Dedicated to transforming the unorganized labor sector into a streamlined, transparent ecosystem.",
      image: "https://res.cloudinary.com/dgkmzddjv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-03-22_at_6.30.29_PM_idkqfb.jpg",
      linkedin: "https://www.linkedin.com/in/tejas-agarwal-078877366/",
    },
    {
      name: "Sarthak Upadhyay",
      role: "Co-Founder & CTO",
      description: "Visionary technical leader scaling BharatWork's voice-first infrastructure and building tools to connect workforce agents with enterprise builders.",
      image: "https://res.cloudinary.com/dgkmzddjv/image/upload/v1774187538/WhatsApp_Image_2026-03-22_at_6.16.21_PM_jk3nex.jpg",
      linkedin: "https://www.linkedin.com/in/sarthak-upadhyay-6a709a292/",
    }

  ];

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
    <div className="relative w-full min-h-screen bg-screen text-text-primary font-sans overflow-x-hidden selection:bg-action/30 selection:text-action pt-20">
      <SEO 
        title="About Us | BharatWork"
        description="Learn about the mission, values, and founders of BharatWork. We are building India's most accessible and inclusive blue-collar hiring platform."
        schemaMarkup={aboutSchema}
      />
      {/* Hero & Impact Section */}
      <section className="relative pt-16 pb-24 overflow-hidden bg-gradient-to-b from-card to-screen">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-action/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ff9800]/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-action/30 bg-card/40 backdrop-blur-md mb-4 shadow-sm">
                <FaRocket className="text-action" />
                <span className="font-bold text-sm tracking-widest uppercase text-action">About BharatWork</span>
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-text-primary tracking-tight leading-tight">
                Connecting Labour with Dignity, Employers with {" "}
                <span className="gradient-text-hero">Reliability</span>
              </h1>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            {/* Left Column: The Problem & Our Promise */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="lg:col-span-6 flex flex-col justify-between space-y-8"
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

                <p className="text-base text-text-secondary leading-relaxed mb-6">
                  Traditional job platforms require smartphones, active internet, and digital literacy. This excludes millions of unskilled daily wage workers, painters, masons, and helpers. 
                </p>
                <p className="text-base text-text-secondary leading-relaxed">
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
              className="lg:col-span-6 flex flex-col justify-between bg-card rounded-[2.5rem] p-8 sm:p-10 border border-border-medium/50 shadow-xl relative"
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

                <p className="text-base text-text-secondary mb-6 leading-relaxed">
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
                  <div className="bg-card p-4 rounded-xl border-l-4 border-action font-medium text-text-primary text-base leading-relaxed shadow-sm">
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
      <section className="py-20 bg-card border-y border-border-light relative overflow-hidden">
        <div className="absolute right-0 top-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-action/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="absolute left-0 bottom-1/4 translate-y-1/2 w-[400px] h-[400px] bg-[#ff9800]/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Our Purpose (Story, Mission, Vision) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-action/10 border border-action/20 mb-4 text-xs font-bold uppercase tracking-wider text-action">
                  Our Purpose
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
                  Story, Mission & Vision
                </h2>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                  Founded in 2025, BharatWork is building India's default employment infrastructure to bridge the digital divide for 400M+ manual workers.
                </p>
              </div>

              {/* Story/Mission/Vision Cards combined */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-screen border border-border-medium/40 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-action/10 flex items-center justify-center text-action shrink-0 text-lg">
                    <FiGlobe />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm mb-1">Our Mission</h4>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      Empower workers with equal access to job opportunities, fair wages, and dignity of work.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-screen border border-border-medium/40 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ff9800]/10 flex items-center justify-center text-[#ff9800] shrink-0 text-lg">
                    <FaBrain />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm mb-1">Our Vision</h4>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      Become India's default infrastructure ensuring no worker is left behind due to technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Meet the Team */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-3xl font-extrabold text-text-primary mb-6">Meet the Founders</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-screen p-6 rounded-2xl border border-border-medium/60 hover:border-action/40 group relative overflow-hidden flex flex-col items-center text-center transition-all duration-300 w-full shadow-sm"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-20 h-20 rounded-full mb-4 border-2 border-card shadow-md group-hover:scale-105 transition-transform duration-300 object-cover"
                    />
                    <h4 className="text-base font-bold text-text-primary mb-0.5">{member.name}</h4>
                    <p className="text-action font-semibold text-xs mb-3 uppercase tracking-wider">{member.role}</p>
                    <p className="text-text-secondary text-xs leading-relaxed mb-4 min-h-[60px]">{member.description}</p>
                    
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-action/10 hover:bg-gradient-to-r hover:from-action hover:to-gradient-end text-action hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                      title="LinkedIn Profile"
                    >
                      <FaLinkedinIn size={12} />
                    </a>
                  </div>
                ))}
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

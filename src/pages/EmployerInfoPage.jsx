import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FaBriefcase, FaArrowRight, FaPlusCircle, FaSearchLocation, 
  FaRupeeSign, FaClipboardCheck, FaChartLine, FaShieldAlt
} from "react-icons/fa";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const EmployerInfoPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaPlusCircle />,
      title: "Post Jobs Instantly",
      description: "Create and publish job requirements in under 60 seconds. Set your budget, location, and required skills.",
    },
    {
      icon: <FaSearchLocation />,
      title: "Hyperlocal Matching",
      description: "Our AI matches your job with workers located closest to your site, reducing commute delay and absenteeism.",
    },
    {
      icon: <FaShieldAlt />,
      title: "KYC Verified Workers",
      description: "Every worker profile is Aadhaar & KYC-verified. View their historical performance ratings and reviews before hiring.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Attendance & Project Tracking",
      description: "Track attendance, daily progress, and completion states directly via the online portal dashboard.",
    },
    {
      icon: <FaRupeeSign />,
      title: "Direct Secure Payouts",
      description: "Pay wages digitally. Transferred straight to workers' bank accounts with secure, transparent digital tracking.",
    },
    {
      icon: <FaChartLine />,
      title: "Expense Analytics",
      description: "Manage budgets across multiple job sites. Generate cost statements and labor expense insights.",
    },
  ];

  return (
    <div className="min-h-screen bg-screen text-text-primary font-sans overflow-x-hidden selection:bg-action/30 selection:text-action pt-20 flex flex-col justify-between">
      <SEO 
        title="Hire Verified Daily Workers | BharatWork"
        description="Connect with KYC-verified daily-wage labourers including builders, electricians, painters, and carpenters. Match in under 10 minutes."
      />
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-screen via-white to-screen pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-action/5 via-orange-400/5 to-transparent rounded-full filter blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-gradient-end/5 via-amber-400/5 to-transparent rounded-full filter blur-[100px] pointer-events-none -z-10"></div>

      <main className="grow py-16 md:py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 w-full">
          

          {/* Intro Section */}
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-action/10 border border-action/20">
                <FaBriefcase className="text-action text-xs" />
                <span className="text-action font-bold text-xs uppercase tracking-widest">Employer Platform</span>
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-tight">
                Hire Verified daily wage teams <span className="gradient-primary">seamlessly</span>
              </h1>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                Welcome to BharatWork's Employer Portal. Designed for contractors, construction builders, logistics managers, event coordinators, and SMEs to source verified manual labor in under 10 minutes.
              </p>
              
              <p className="text-base text-text-secondary leading-relaxed">
                Ditch the unorganized local labor stands (nakhas) and opaque middleman markups. Hire directly, manage daily crew attendance, and process bank payouts easily.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center">
                <button
                  onClick={() => navigate("/employer/auth/login")}
                  className="group flex items-center gap-2 bg-gradient-to-r from-action to-gradient-end text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-action/25 hover:-translate-y-0.5 transition-all text-base cursor-pointer w-full sm:w-auto justify-center"
                >
                  Proceed to Portal
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-xs text-text-secondary text-center sm:text-left">
                  Redirects to secure registration & login screen.
                </span>
              </div>
            </motion.div>

            {/* Visual Callout block */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 p-8 rounded-3xl bg-card border border-border-medium/60 shadow-xl relative overflow-hidden flex flex-col justify-center min-h-[300px]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-action/10 rounded-bl-[120px] -z-10"></div>
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-text-primary leading-tight">Why employers choose BharatWork:</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                    <span className="text-text-secondary text-sm font-medium">**Transparent, Upfront Pricing** — No hidden middleman margins</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                    <span className="text-text-secondary text-sm font-medium">**Aadhaar-linked profiles** — Screen crew before arrival</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                    <span className="text-text-secondary text-sm font-medium">**Real-time status updates** — No more no-shows</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                    <span className="text-text-secondary text-sm font-medium">**Digital Ledger & Invoice** — Transparent accounts</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <hr className="border-border-medium/30 mb-20" />

          {/* Features Grid */}
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary">
                Full-Suite Features for <span className="gradient-primary">Workforce Management</span>
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                Everything you need to post, verify, manage, and pay daily wage teams efficiently, all in one secure online dashboard.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-card p-6 md:p-8 rounded-2xl border border-border-medium/40 hover:border-action/30 flex flex-col items-start gap-4 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-action/10 text-action flex items-center justify-center text-xl shrink-0 shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-lg mb-2">{feature.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EmployerInfoPage;

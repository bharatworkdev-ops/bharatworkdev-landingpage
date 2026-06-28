import React from "react";
import { motion } from "framer-motion";
import { FaVideo } from "react-icons/fa";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const DemoPage = () => {
  return (
    <div className="min-h-screen bg-screen text-text-primary font-sans overflow-x-hidden selection:bg-action/30 selection:text-action pt-20 flex flex-col justify-between">
      <SEO 
        title="Product Demo | BharatWork"
        description="Watch the official BharatWork product demo. Learn how we connect verified daily wage workers with employers through voice-first technology."
      />
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-screen via-white to-screen pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-action/5 via-orange-400/5 to-transparent rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-gradient-end/5 via-amber-400/5 to-transparent rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>

      <main className="grow flex flex-col justify-center py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4 w-full">
          {/* Demo Placeholder Window */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto w-full aspect-video rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-border-medium/30 shadow-2xl flex flex-col items-center justify-center p-8 relative overflow-hidden text-center"
          >
            {/* Ambient Background Glow inside the window */}
            <div className="absolute inset-0 bg-gradient-to-br from-action/5 to-gradient-end/5 pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-action/10 rounded-full filter blur-xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-end/10 rounded-full filter blur-xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center max-w-md">
              {/* Animated Play icon */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 rounded-3xl bg-gradient-to-br from-action to-gradient-end flex items-center justify-center text-white text-3xl shadow-xl shadow-action/20 mb-6 shrink-0"
              >
                <FaVideo />
              </motion.div>

              <h2 className="text-3xl font-extrabold text-text-primary mb-3 tracking-tight">
                Demo Video
              </h2>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border-medium/40 shadow-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-action animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Coming Soon</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                We are preparing a detailed walkthrough demonstrating our hyperlocal matching, digital attendance system, and zero-middleman payout routing in action.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DemoPage;

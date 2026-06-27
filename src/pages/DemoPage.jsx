import React from "react";
import { motion } from "framer-motion";
import CrewSimulator from "../components/CrewSimulator";
import Footer from "../components/Footer";

const DemoPage = () => {
  return (
    <div className="min-h-screen bg-screen text-text-primary font-sans overflow-x-hidden selection:bg-action/30 selection:text-action pt-20 flex flex-col justify-between">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-screen via-white to-screen pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-action/5 via-orange-400/5 to-transparent rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-gradient-end/5 via-amber-400/5 to-transparent rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>

      <main className="grow flex flex-col justify-center py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 w-full">
          {/* Simulator Component Container */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CrewSimulator />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DemoPage;

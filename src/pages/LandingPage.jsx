import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import Hero from '../components/Hero';
import Services from '../components/Services';
import WhatIsBharatWork from '../components/WhatIsBharatWork';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const LandingPage = () => {
  const { userRole } = useAuth();
  const navigate = useNavigate();

  // Default role is employer if not explicitly set
  const activeRole = userRole || "employer";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeRole]);

  const handleLogin = () => {
    navigate(`/${activeRole}/auth/login`);
  };

  return (
    <div className="bg-screen text-text-primary min-h-screen font-sans selection:bg-action/30 selection:text-action overflow-x-hidden pt-20 flex flex-col justify-between">
      <main className="grow">
        {/* Dynamic Hero Section */}
        <Hero role={activeRole} onLogin={handleLogin} />

        {/* Services We Provide */}
        <Services />

        {/* Unified "What is BharatWork" Section (Flow, Comparison & Credibility) */}
        <WhatIsBharatWork role={activeRole} />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Global SPA Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;

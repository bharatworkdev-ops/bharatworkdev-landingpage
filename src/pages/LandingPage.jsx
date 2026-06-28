import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhatIsBharatWork from '../components/WhatIsBharatWork';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import step1Img from '../assets/webp/step-1.webp';

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

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://thebharatwork.com/#organization",
        "name": "BharatWork",
        "legalName": "SOVQUE PVT LTD",
        "url": "https://thebharatwork.com",
        "logo": "https://thebharatwork.com/src/assets/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/bharatwork/",
          "https://www.instagram.com/thebharatwork/"
        ],
        "founder": [
          {
            "@type": "Person",
            "name": "Tejas Aggarwal"
          },
          {
            "@type": "Person",
            "name": "Sarthak Upadhyay"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://thebharatwork.com/#website",
        "url": "https://thebharatwork.com",
        "name": "BharatWork",
        "alternateName": ["Bharat Work"],
        "description": "AI-powered labour hiring platform connecting verified daily wage workers with employers.",
        "publisher": {
          "@id": "https://thebharatwork.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://thebharatwork.com/jobs?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  const faqMarkup = [
    {
      question: "What is BharatWork?",
      answer: "BharatWork is India's first dedicated digital marketplace designed for the unorganized blue-collar workforce. We connect daily wage workers (such as masons, electricians, painters, carpenters, and helpers) directly with contractors, builders, SMEs, and individual employers, eliminating middleman markups and hiring delays."
    },
    {
      question: "How does BharatWork verify worker profiles?",
      answer: "Every worker registered on the BharatWork platform undergoes secure identity verification linked to their Aadhaar and KYC details. Employers can view worker profiles, previous ratings, and historical performance reviews directly on the platform before booking their crew."
    },
    {
      question: "How fast can I hire workers for my job site?",
      answer: "Through our hyperlocal AI-matching system, you can post a job requirement and connect with workers located closest to your site in under 10 minutes. This significantly reduces commute times, delay overheads, and no-show rates."
    },
    {
      question: "How are daily wages tracked and paid?",
      answer: "BharatWork features a digital attendance ledger and payout routing system. Daily wages are calculated based on recorded attendance and transferred securely via UPI or bank transfer directly to the workers' accounts, creating a transparent, dispute-free transaction record."
    },
    {
      question: "Can I hire a full team or crew, or only individual workers?",
      answer: "You can hire both individual skilled workers (like a master mason or electrician) and coordinate whole crews (such as helpers and assistants) directly through the platform. Our dashboard lets you manage requirements for multiple workers across different job sites simultaneously."
    },
    {
      question: "What happens if a matched worker doesn't show up on site?",
      answer: "BharatWork includes real-time status updates and attendance tracking. In the rare event of a no-show, our hyperlocal matching algorithm helps you quickly source replacement workers located nearby to ensure your project timeline isn't disrupted."
    },
    {
      question: "What categories of workers are available on the platform?",
      answer: "BharatWork hosts a wide variety of construction, logistics, and maintenance roles. You can find skilled and semi-skilled workers including masons (mistris), electricians, painters, carpenters, welders, helpers, and general laborers."
    }
  ];

  return (
    <div className="bg-screen text-text-primary min-h-screen font-sans selection:bg-action/30 selection:text-action overflow-x-hidden pt-20 flex flex-col justify-between">
      <SEO 
        title="BharatWork | Hire daily wage workers in minutes."
        description="BharatWork is an AI-powered labour hiring platform connecting verified daily wage workers with employers through voice-first and offline-first technology across India."
        schemaMarkup={schemaMarkup}
        faqMarkup={faqMarkup}
      />
      <Helmet>
        <link rel="preload" as="image" href={step1Img} />
      </Helmet>
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

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFileContract, FaArrowLeft, FaShieldAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-screen text-text-primary font-sans pt-28 flex flex-col justify-between">
      <SEO 
        title="Terms of Service | BharatWork"
        description="Read the terms of service of BharatWork. Understand worker responsibilities, employer requirements, and billing/platform policies."
      />
      <main className="grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-action transition-colors font-semibold text-sm"
          >
            <FaArrowLeft className="text-xs" />
            Back to Home
          </Link>
        </motion.div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-border-medium pb-8 mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-action/10 flex items-center justify-center text-action text-2xl">
              <FaFileContract />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-text-tertiary">Legal Documents</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary">
            Terms & Conditions
          </h1>
          <p className="text-text-secondary mt-2 text-sm">
            Last Updated: June 25, 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="prose prose-orange max-w-none text-text-secondary space-y-8 text-base leading-relaxed"
        >
          <p>
            These Terms & Conditions ("Terms") govern your access to and use of the mobile applications, web platforms, and automated voice services of BharatWork, operated by <strong>SOVQUE PVT LTD</strong> ("Company", "we", "us", or "our").
          </p>

          <p>
            By registering for an account, accessing our job matchmaking system, posting work orders, or accepting daily-wage jobs, you agree to comply with and be bound by these Terms.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
              <span className="text-action">1.</span> Marketplace Relationship
            </h2>
            <p>
              BharatWork is a technology-enabled matchmaking marketplace. We facilitate direct connections between:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Employers:</strong> Individuals, builders, contractors, or companies looking to hire on-demand daily workforce.</li>
              <li><strong>Workers/Agents:</strong> Individuals or group-coordinating agents who offer labor, helpers, technicians, or skilled builders.</li>
            </ul>
            <p>
              <strong>Direct Engagement:</strong> The contract for labor supply is formed directly between the Employer and the Worker. We are not an employment agency and do not act as an employer. We charge zero markups on worker wages.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
              <span className="text-action">2.</span> KYC Verification & Account Responsibility
            </h2>
            <p>
              To maintain the security of our community, users agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate identification details, including Aadhaar and phone numbers during signup.</li>
              <li>Undergo mandated KYC and background check reviews prior to match activation.</li>
              <li>Keep log details, OTP credentials, and mobile access secure. The account holder is liable for all activities under their profile.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
              <span className="text-action">3.</span> Direct Payout Settlement & Fair Wages
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Employers agree to pay workers the agreed-upon wages directly to their bank account or UPI ID.</li>
              <li>Wage payments are routed directly from the employer to the worker's bank details. BharatWork is not responsible for handling cash payouts or withholding taxes for matches.</li>
              <li>Any payment discrepancies, timing disputes, or quality issues should be resolved directly between the worker/agent and the hiring partner.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
              <span className="text-action">4.</span> Platform Code of Conduct
            </h2>
            <p>
              Users are strictly prohibited from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing false information, duplicate identities, or unverified contact numbers.</li>
              <li>Engaging in discriminatory or abusive behavior towards matching parties.</li>
              <li>Bypassing payment routes, committing wage fraud, or posting unauthorized jobs.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
              <span className="text-action">5.</span> Limitation of Liability
            </h2>
            <p>
              In no event shall SOVQUE PVT LTD, its founders, directors, or employees, be held liable for any damages, losses, project delays, or payment defaults arising out of matches arranged through the Services. We do not guarantee the quality, safety, or legality of matching services.
            </p>
          </div>

          <div className="space-y-4 border-t border-border-medium pt-8">
            <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
              <span className="text-action">6.</span> Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any legal disputes or claims arising out of the use of our services shall be subject to the exclusive jurisdiction of the courts located in <strong>Lucknow, Uttar Pradesh, India</strong>.
            </p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;

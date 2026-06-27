import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaArrowLeft, FaFileContract, FaLock } from "react-icons/fa";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-screen text-text-primary font-sans pt-28 flex flex-col justify-between">
      <SEO 
        title="Privacy Policy | BharatWork"
        description="Read the privacy policy of BharatWork. Understand how we collect, store, verify, and protect worker and employer data."
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
              <FaShieldAlt />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-text-tertiary">Legal Documents</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary">
            Privacy Policy
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
            Welcome to BharatWork. This Privacy Policy describes how <strong>SOVQUE PVT LTD</strong> ("we", "us", or "our") collects, uses, shares, and protects your personal data when you use our mobile applications, website, and voice-calling platform (collectively, the "Services").
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
              <span className="text-action">1.</span> Information We Collect
            </h2>
            <p>
              To offer a secure, verified, and reliable marketplace for daily wage work, we collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>For Workers:</strong> Full name, phone number, physical address, Aadhaar card number, KYC details, bank account number/UPI ID (for direct routing payouts), skills, and work ratings.</li>
              <li><strong>For Employers & Agents:</strong> Company/individual name, email, phone number, GSTIN/official business registration info (if applicable), billing address, and job posting details.</li>
              <li><strong>Usage Data:</strong> Location details (for hyperlocal matching), device information, and call records from our automated AI voice-calling system.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
              <span className="text-action">2.</span> How We Use Your Data
            </h2>
            <p>
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Establish verified identities (KYC validation) to ensure ecosystem safety.</li>
              <li>Perform hyperlocal matchmaking to connect workers and contractors immediately.</li>
              <li>Facilitate direct bank-to-bank settlements with zero middlemen markups.</li>
              <li>Operate our voice calling assistant to reach offline workers who do not have smart devices.</li>
              <li>Improve app performance, handle queries, and prevent payment disputes.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
              <span className="text-action">3.</span> Data Security & KYC Integrity
            </h2>
            <div className="p-6 rounded-2xl bg-action/5 border border-action/20 flex gap-4 items-start">
              <FaLock className="text-action text-2xl shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-text-primary text-base mb-1">Aadhaar & KYC Safety</h4>
                <p className="text-sm leading-relaxed">
                  All Aadhaar verification is processed securely through authorized third-party KYC gateways. We do not store full Aadhaar biometric details. Bank routing numbers and UPI details are encrypted in transit and at rest.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
              <span className="text-action">4.</span> Sharing & Disclosure
            </h2>
            <p>
              We do not sell, rent, or trade your personal data to third parties. We share information only under these circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Between Matching Parties:</strong> Workers see employer names/job locations, and employers see verified worker names, ratings, and contact info to coordinate on-demand daily bookings.</li>
              <li><strong>Service Providers:</strong> Sharing details with authorized SMS, SMS/call voice APIs, and direct banking partners.</li>
              <li><strong>Legal Compliance:</strong> To comply with legal processes or government orders when required.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
              <span className="text-action">5.</span> Your Rights & Access
            </h2>
            <p>
              You have the right to access, edit, or delete your profile details at any time by accessing your app dashboard or contacting our Support team. Please note that deleting certain verification metrics may limit your eligibility to accept jobs or hire on the platform.
            </p>
          </div>

          <div className="space-y-4 border-t border-border-medium pt-8">
            <h2 className="text-2xl font-bold text-text-primary">
              Contact Privacy Officer
            </h2>
            <p>
              For concerns or questions regarding data processing, encryption, or to request account deletion, contact our legal officer:
            </p>
            <p className="font-bold text-text-primary">
              SOVQUE PVT LTD (Privacy Dept.)<br />
              Email: <a href="mailto:info@thebharatwork.com" className="text-action hover:underline">info@thebharatwork.com</a><br />
              Address: Lucknow, Uttar Pradesh, India
            </p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;

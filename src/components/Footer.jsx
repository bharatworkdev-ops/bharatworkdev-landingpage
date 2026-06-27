import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.svg";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-screen border-t border-border-medium/40 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col space-y-6">
            <Link
              to="/"
              className="flex items-center"
            >
              <img 
                src={logoImg} 
                alt="BharatWork Logo" 
                width="150"
                height="40"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed">
              India's AI-powered labour marketplace connecting manual workers with verified employers through technology, trust, and opportunity.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-card border border-border-medium/30 flex items-center justify-center text-text-secondary hover:bg-gradient-to-r hover:from-action hover:to-gradient-end hover:text-white transition-all shadow-sm"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href="https://www.linkedin.com/company/bharatwork/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-card border border-border-medium/30 flex items-center justify-center text-text-secondary hover:bg-gradient-to-r hover:from-action hover:to-gradient-end hover:text-white transition-all shadow-sm"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href="https://www.instagram.com/thebharatwork/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-card border border-border-medium/30 flex items-center justify-center text-text-secondary hover:bg-gradient-to-r hover:from-action hover:to-gradient-end hover:text-white transition-all shadow-sm"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h3 className="text-text-primary font-bold mb-6 tracking-wider text-sm uppercase">
              Platform
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-text-secondary hover:text-action transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#features"
                  className="text-text-secondary hover:text-action transition-colors text-sm"
                >
                  What is BharatWork?
                </Link>
              </li>
              <li>
                <Link
                  to="/downloads"
                  className="text-text-secondary hover:text-action transition-colors text-sm"
                >
                  Download App
                </Link>
              </li>
              <li>
                <Link
                  to="/#faq"
                  className="text-text-secondary hover:text-action transition-colors text-sm"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-text-secondary hover:text-action transition-colors text-sm"
                >
                  Blog & News
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h3 className="text-text-primary font-bold mb-6 tracking-wider text-sm uppercase">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-text-secondary hover:text-action transition-colors text-sm"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="/contact#work-with-us"
                  className="text-text-secondary hover:text-action transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-text-secondary hover:text-action transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-text-secondary hover:text-action transition-colors text-sm"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-text-secondary hover:text-action transition-colors text-sm"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-text-primary font-bold mb-6 tracking-wider text-sm uppercase">
              Contact Support
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919454144272"
                  className="flex items-center gap-3 text-text-secondary hover:text-action transition-colors text-sm group"
                >
                  <span className="w-8 h-8 rounded-full bg-card border border-border-medium/30 flex items-center justify-center group-hover:bg-action/10 transition-colors">
                    <FaPhoneAlt size={12} className="text-text-secondary group-hover:text-action" />
                  </span>
                  <span>+91 9454144272</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@thebharatwork.com"
                  className="flex items-center gap-3 text-text-secondary hover:text-action transition-colors text-sm group break-all"
                >
                  <span className="w-8 h-8 rounded-full bg-card border border-border-medium/30 flex items-center justify-center group-hover:bg-action/10 transition-colors">
                    <FaEnvelope size={12} className="text-text-secondary group-hover:text-action" />
                  </span>
                  <span>Email: info@thebharatwork.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-text-secondary text-sm">
                <span className="w-8 h-8 rounded-full bg-card border border-border-medium/30 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt size={12} className="text-text-secondary" />
                </span>
                <span>Lucknow, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border-medium/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} BharatWork (SOVQUE Pvt. Ltd.). All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-text-secondary">
            <span>Made in India</span>
            <span>✦</span>
            <span>For the World</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

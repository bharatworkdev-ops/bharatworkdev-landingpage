import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, 
  FaArrowLeft, FaBolt, FaArrowRight, FaHandshake, 
  FaRocket, FaHeart, FaCommentDots, FaGlobe, FaBuilding, FaUsers
} from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Contact Request: ${formData.name}`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    window.location.href = `mailto:info@bharatwork.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "BharatWork",
      "url": "https://thebharatwork.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9454144272",
        "contactType": "customer support",
        "email": "info@thebharatwork.com",
        "areaServed": "IN"
      }
    }
  };

  return (
    <div className="min-h-screen bg-screen text-text-primary font-sans pt-28 flex flex-col justify-between relative overflow-hidden">
      <SEO 
        title="Contact Us | BharatWork"
        description="Get in touch with the BharatWork team for support, partnerships, or integration options. We are here to help."
        schemaMarkup={contactSchema}
      />
      {/* Background Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-action/5 via-orange-400/5 to-transparent rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-gradient-end/5 via-amber-400/5 to-transparent rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>

      <main className="grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full relative z-10">
        {/* Back Link */}


        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-action/10 flex items-center justify-center text-action text-3xl mx-auto mb-6">
              <FaPhoneAlt />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6">
              Connect <span className="gradient-primary">With Us</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Let's build the future of work in Bharat—together. Whether you're an employer looking to hire, a partner wanting to collaborate, or someone who believes in our mission—we'd love to hear from you.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Get in Touch */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6 border-b border-border-light pb-2 inline-flex items-center gap-2">
                <FaHandshake className="text-action" /> Get in Touch
              </h3>
              <div className="space-y-4">
                {[
                  { icon: <FaEnvelope />, label: "General & Support Inquiries", value: "info@bharatwork.com", href: "mailto:info@bharatwork.com" },
                  { icon: <FaPhoneAlt />, label: "Support (Workers & Job Seekers)", value: "+91 9454144272", href: "tel:+919454144272" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-card border border-border-light flex items-center justify-center text-text-secondary group-hover:text-action group-hover:border-action transition-colors shadow-sm shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary font-medium uppercase tracking-wider">{item.label}</div>
                      {item.href
                        ? <a href={item.href} className="text-base sm:text-lg text-text-primary font-bold hover:text-action transition-colors">{item.value}</a>
                        : <div className="text-base sm:text-lg text-text-primary font-bold">{item.value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company & Registered Details */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6 border-b border-border-light pb-2 inline-flex items-center gap-2">
                <FaBuilding className="text-action" /> Corporate Office & Entity
              </h3>
              <div className="space-y-6 bg-card p-6 sm:p-8 rounded-3xl border border-border-medium/60 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-action/5 rounded-bl-[100px] pointer-events-none"></div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-action/10 flex items-center justify-center text-action shrink-0 text-xl">
                    <FaBuilding />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">Registered Entity</h4>
                    <p className="text-lg text-text-primary font-bold">SOVQUE Pvt. Ltd.</p>
                    <p className="text-xs text-text-tertiary">CIN: Registered placement agency provider</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-action/10 flex items-center justify-center text-action shrink-0 text-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">Presence</h4>
                    <p className="text-lg text-text-primary font-bold">Lucknow, Uttar Pradesh, India</p>
                    <p className="text-xs text-text-secondary leading-relaxed mt-1">
                      Headquartered in Lucknow. Expansion underway to establish a ground network nationwide to serve offline manual labours and enterprise contractors across India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Work With Us */}
            <div id="work-with-us">
              <h3 className="text-2xl font-bold text-text-primary mb-6 border-b border-border-light pb-2 inline-flex items-center gap-2">
                <FaRocket className="text-action" /> Work With Us
              </h3>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                Want to be part of BharatWork's journey to empower offline communities?
              </p>
              <ul className="mb-6 space-y-2 text-text-primary text-sm font-semibold">
                <li className="flex items-center gap-2"><FaCheckCircle className="text-action text-sm" /> Become a Hiring Partner</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-action text-sm" /> Join as a Ground Network Associate</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-action text-sm" /> Collaborate as a Government / NGO Partner</li>
              </ul>
              <div className="inline-flex items-center gap-3 bg-action/10 px-5 py-3 rounded-xl border border-action/25">
                <FaEnvelope className="text-action text-lg shrink-0" />
                <a href="mailto:info@thebharatwork.com" className="text-action text-sm font-bold hover:underline">info@thebharatwork.com</a>
              </div>
            </div>

            {/* Follow Our Journey */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6 border-b border-border-light pb-2 inline-flex items-center gap-2">
                <FaHeart className="text-action" /> Follow Our Journey
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Stay updated with our latest developments, impact stories, and field initiatives.
              </p>
            </div>
          </motion.div>

          {/* Quick Connect Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-border-medium/50 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-action/5 rounded-bl-full pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold text-text-primary mb-2 flex items-center gap-3">
                <FaBolt className="text-action" /> Send a Message
              </h3>
              <p className="text-text-secondary mb-8 text-sm">
                Have specific queries? Drop us a line and our partner success team will respond back within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    <FaCheckCircle />
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-2">Message Sent!</h4>
                  <p className="text-text-secondary text-sm">Thank you. We have received your query and will connect shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-text-secondary mb-2 uppercase tracking-wider">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name} 
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-screen border-2 border-border-light rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-action transition-colors text-sm"
                      placeholder="e.g. Rahul Kumar" 
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-text-secondary mb-2 uppercase tracking-wide">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone} 
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-screen border-2 border-border-light rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-action transition-colors text-sm"
                        placeholder="+91 9876543210" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-text-secondary mb-2 uppercase tracking-wide">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email} 
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-screen border-2 border-border-light rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-action transition-colors text-sm"
                        placeholder="you@example.com" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-secondary mb-2 uppercase tracking-wide">Your Message</label>
                    <textarea 
                      required 
                      rows="4" 
                      value={formData.message} 
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-screen border-2 border-border-light rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-action transition-colors resize-none text-sm"
                      placeholder="Tell us about your project or partnership goals..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 bg-gradient-to-r from-action to-gradient-end text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl hover:shadow-action/30 hover:-translate-y-0.5 text-base"
                  >
                    <span>Submit Request</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

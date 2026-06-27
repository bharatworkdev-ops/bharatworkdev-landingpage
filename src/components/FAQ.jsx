import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border rounded-2xl mb-4 overflow-hidden bg-card transition-all duration-300 ${
      isOpen ? "border-action shadow-md" : "border-border-medium/60 hover:border-action/30 hover:shadow-sm"
    }`}>
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none cursor-pointer"
        onClick={onClick}
      >
        <span className="font-bold text-base md:text-lg text-text-primary pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-action shrink-0"
        >
          <FiChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 text-text-secondary text-sm md:text-base leading-relaxed border-t border-border-light pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is BharatWork?",
      answer:
        "BharatWork is India's first dedicated digital marketplace designed for the unorganized blue-collar workforce. We connect daily wage workers (such as masons, electricians, painters, carpenters, and helpers) directly with contractors, builders, SMEs, and individual employers, eliminating middleman markups and hiring delays.",
    },
    {
      question: "How does BharatWork verify worker profiles?",
      answer:
        "Every worker registered on the BharatWork platform undergoes secure identity verification linked to their Aadhaar and KYC details. Employers can view worker profiles, previous ratings, and historical performance reviews directly on the platform before booking their crew.",
    },
    {
      question: "How fast can I hire workers for my job site?",
      answer:
        "Through our hyperlocal AI-matching system, you can post a job requirement and connect with workers located closest to your site in under 10 minutes. This significantly reduces commute times, delay overheads, and no-show rates.",
    },
    {
      question: "How are daily wages tracked and paid?",
      answer:
        "BharatWork features a digital attendance ledger and payout routing system. Daily wages are calculated based on recorded attendance and transferred securely via UPI or bank transfer directly to the workers' accounts, creating a transparent, dispute-free transaction record.",
    },
    {
      question: "Can I hire a full team or crew, or only individual workers?",
      answer:
        "You can hire both individual skilled workers (like a master mason or electrician) and coordinate whole crews (such as helpers and assistants) directly through the platform. Our dashboard lets you manage requirements for multiple workers across different job sites simultaneously.",
    },
    {
      question: "What happens if a matched worker doesn't show up on site?",
      answer:
        "BharatWork includes real-time status updates and attendance tracking. In the rare event of a no-show, our hyperlocal matching algorithm helps you quickly source replacement workers located nearby to ensure your project timeline isn't disrupted.",
    },
    {
      question: "What categories of workers are available on the platform?",
      answer:
        "BharatWork hosts a wide variety of construction, logistics, and maintenance roles. You can find skilled and semi-skilled workers including masons (mistris), electricians, painters, carpenters, welders, helpers, and general laborers.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-screen relative overflow-hidden border-t border-border-medium/30">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-action/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-end/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-action/10 border border-action/20">
              <span className="w-1.5 h-1.5 rounded-full bg-action animate-pulse" />
              <span className="text-action font-bold text-xs uppercase tracking-widest">Common Questions</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-text-primary">
              Frequently Asked <span className="gradient-primary">Questions</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Find answers to common questions about hiring, verification, payouts, and managing your daily wage workforce.
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

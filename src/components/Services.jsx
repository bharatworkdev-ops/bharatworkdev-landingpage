import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHandsHelping,
  FaHardHat,
  FaLayerGroup,
  FaHammer,
  FaFire,
  FaPaintBrush,
  FaIndustry,
  FaUserCheck,
  FaArrowRight,
  FaArrowLeft,
  FaCheck
} from "react-icons/fa";

// Import user-provided service images
import helperImg from "../assets/webp/helper.webp";
import constructionWorkerImg from "../assets/webp/construction-worker.webp";
import masonImg from "../assets/webp/mason.webp";
import carpenterImg from "../assets/webp/carpenter.webp";
import welderImg from "../assets/webp/welder.webp";
import painterImg from "../assets/webp/painter.webp";
import factoryWorkerImg from "../assets/webp/factory-worker.webp";
import onboardingImg from "../assets/webp/onboarding.webp";

const Services = () => {
  const [selectedId, setSelectedId] = useState(null);

  const servicesList = [
    {
      title: "Helper",
      image: helperImg,
      icon: <FaHandsHelping className="text-xl" />,
      desc: "Assisting with daily tasks, site cleanups, material movement, and general utility support.",
      offers: [
        "General assistant support for daily site chores",
        "Debris removal and site cleanup",
        "Material sorting and movement",
        "Direct peer-to-peer hiring with no markup"
      ],
      gradient: "from-amber-500 to-orange-500",
      accent: "amber",
      shadow: "rgba(245, 158, 11, 0.15)",
    },
    {
      title: "Construction Worker",
      image: constructionWorkerImg,
      icon: <FaHardHat className="text-xl" />,
      desc: "High-stamina physical labor for site preparation, excavation, and structural assistance.",
      offers: [
        "High-stamina manual excavation & trenching",
        "Concrete, mortar, and aggregate mixing",
        "Scaffolding loading and helper setup",
        "Strict compliance with safety standards"
      ],
      gradient: "from-orange-500 to-red-500",
      accent: "orange",
      shadow: "rgba(239, 68, 68, 0.15)",
    },
    {
      title: "Mason (Raj Mistry)",
      image: masonImg,
      icon: <FaLayerGroup className="text-xl" />,
      desc: "Precision bricklaying, plastering, stone masonry, tile laying, and concrete work.",
      offers: [
        "Precision brick and block wall construction",
        "High-finish internal/external wall plastering",
        "Tile, marble, and flooring stone installation",
        "Experienced structural concrete pouring"
      ],
      gradient: "from-emerald-500 to-teal-500",
      accent: "emerald",
      shadow: "rgba(16, 185, 129, 0.15)",
    },
    {
      title: "Carpenter",
      image: carpenterImg,
      icon: <FaHammer className="text-xl" />,
      desc: "Wooden framework centering, structural doors/windows installing, and furniture assembly.",
      offers: [
        "Centering, shuttering, and scaffolding build",
        "Door, window frame and panel installation",
        "Custom wooden furniture assembly & repair",
        "Precision layout sizing and fitting"
      ],
      gradient: "from-blue-500 to-indigo-500",
      accent: "blue",
      shadow: "rgba(59, 130, 246, 0.15)",
    },
    {
      title: "Welder",
      image: welderImg,
      icon: <FaFire className="text-xl" />,
      desc: "Metal fabrication, structural steel joining, custom cutting, and secure repairs.",
      offers: [
        "Professional arc and gas metal welding",
        "Steel structural frame joining & fabrication",
        "Gate, grill, and custom sheet metal work",
        "On-site equipment repair & reinforcement"
      ],
      gradient: "from-rose-500 to-pink-500",
      accent: "rose",
      shadow: "rgba(244, 63, 94, 0.15)",
    },
    {
      title: "Painter",
      image: painterImg,
      icon: <FaPaintBrush className="text-xl" />,
      desc: "Wall preparation, priming, interior/exterior painting, and waterproofing coatings.",
      offers: [
        "Thorough surface scraping and priming",
        "Interior & exterior wall emulsion coating",
        "Smooth wall putty application & touch-ups",
        "Wood and metal protective polish coats"
      ],
      gradient: "from-purple-500 to-pink-500",
      accent: "purple",
      shadow: "rgba(168, 85, 247, 0.15)",
    },
    {
      title: "Factory Worker",
      image: factoryWorkerImg,
      icon: <FaIndustry className="text-xl" />,
      desc: "Assembly line production, materials sorting, machine operation, and packaging chores.",
      offers: [
        "Reliable assembly line operational duties",
        "Raw material sorting, stacking & packing",
        "Light machinery setups & monitoring",
        "Warehouse logistics support & stock control"
      ],
      gradient: "from-violet-500 to-indigo-500",
      accent: "violet",
      shadow: "rgba(139, 92, 246, 0.15)",
    },
    {
      title: "Loading & Unloading",
      image: onboardingImg,
      icon: <FaUserCheck className="text-xl" />,
      desc: "Loading and unloading of construction materials, warehouse goods, equipment, and commercial deliveries.",
      offers: [
        "Loading construction materials and equipment",
        "Unloading trucks, containers, and deliveries",
        "Warehouse loading and inventory handling",
        "Safe handling of heavy goods and materials"
      ],
      gradient: "from-teal-500 to-emerald-500",
      accent: "teal",
      shadow: "rgba(20, 184, 166, 0.15)",
    }
  ];

  const handleCardClick = (index) => {
    if (selectedId === index) {
      setSelectedId(null);
    } else {
      setSelectedId(index);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="services" className="py-24 bg-screen relative overflow-hidden border-t border-border-light">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-action/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-end/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #EE8311 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-action/10 border border-action/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-action"></span>
              <span className="text-action font-bold text-xs tracking-wider uppercase">
                Services Directory
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
              Services We{" "}
              <span className="relative inline-block">
                <span className="gradient-text-hero">Provide</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="#EE8311" strokeWidth="3" strokeLinecap="round" className="opacity-40" />
                </svg>
              </span>
            </h2>
            <p className="text-text-secondary max-w-3xl mx-auto text-lg leading-relaxed">
              Find verified, highly capable daily-wage and skilled trade experts for your home, warehouse, factory, or commercial project. Direct match, no markup fees.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {servicesList.map((service, index) => {
            const isSelected = selectedId === index;
            const isAnySelected = selectedId !== null;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                onClick={() => handleCardClick(index)}
                style={{ originY: 0 }}
                animate={{
                  scale: isSelected ? 1.04 : isAnySelected ? 0.92 : 1,
                  opacity: isSelected ? 1 : isAnySelected ? 0.4 : 1,
                  filter: isSelected ? "blur(0px)" : isAnySelected ? "blur(0.8px)" : "blur(0px)",
                  zIndex: isSelected ? 30 : 10,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`group relative bg-white rounded-3xl border p-5 flex flex-col justify-between transition-all duration-300 overflow-hidden shadow-sm cursor-pointer ${
                  isSelected 
                    ? "border-action ring-4 ring-action/10 shadow-xl shadow-action/5 md:col-span-2 lg:col-span-2" 
                    : "border-border-medium/60 hover:shadow-md hover:border-action/30"
                }`}
              >
                {/* Subtle hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-${service.accent}-50/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div>
                  {/* Image Container */}
                  <div className={`w-full overflow-hidden rounded-2xl mb-4 bg-orange-50/20 relative transition-all duration-500 ${
                    isSelected ? "aspect-[2/1] md:aspect-[2.2/1]" : "aspect-square"
                  }`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    {/* Floating Icon Badges */}
                    <div className={`absolute bottom-3 right-3 w-8 h-8 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-md`}>
                      {service.icon}
                    </div>

                    {/* Back Button Overlay for selected card */}
                    {isSelected && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedId(null);
                        }}
                        className="absolute top-3 left-3 px-3 py-1.5 bg-black/60 backdrop-blur-md text-white rounded-full text-xs font-bold flex items-center gap-1.5 hover:bg-black/80 transition-all cursor-pointer shadow-lg"
                      >
                        <FaArrowLeft className="text-[10px]" /> Back
                      </button>
                    )}
                  </div>

                  <h3 className="text-xl font-extrabold text-text-primary mb-2.5 group-hover:text-action transition-colors duration-200 flex items-center justify-between">
                    {service.title}
                    {isSelected && (
                      <span className="text-[10px] font-black uppercase tracking-wider bg-action/10 text-action px-2 py-0.5 rounded-md">
                        Active Category
                      </span>
                    )}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {/* Expanded Detailed Offers List */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-border-light pt-4 mt-4"
                      >
                        <h4 className="text-xs font-black uppercase tracking-widest text-text-tertiary mb-3">
                          What We Offer:
                        </h4>
                        <ul className="space-y-2.5">
                          {service.offers.map((offer, oIndex) => (
                            <li key={oIndex} className="flex items-start gap-2.5 text-xs text-text-secondary font-medium">
                              <span className="w-4.5 h-4.5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                                <FaCheck className="text-[7px]" />
                              </span>
                              <span className="leading-normal">{offer}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5 pt-4 border-t border-border-light">
                          <Link
                            to="/downloads"
                            onClick={(e) => e.stopPropagation()}
                            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-action to-gradient-end text-white py-3 rounded-xl font-bold text-xs shadow-md hover:shadow-lg hover:shadow-action/20 transition-all duration-300 hover:-translate-y-0.5"
                          >
                            Hire {service.title} Now <FaArrowRight className="text-[9px]" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card footer action pill */}
                <div className="flex items-center justify-between pt-3 border-t border-border-light mt-6">
                  <span className="text-[9px] font-black uppercase tracking-wider text-text-tertiary">
                    Verified Active
                  </span>
                  {isSelected ? (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedId(null);
                      }}
                      className="flex items-center gap-1.5 text-xs font-bold text-action transition-transform duration-200 hover:-translate-x-1 cursor-pointer"
                    >
                      <FaArrowLeft className="text-[9px]" /> Back
                    </button>
                  ) : (
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-xs font-bold text-text-secondary group-hover:text-action transition-colors duration-200">
                        Explore <FaArrowRight className="text-[9px]" />
                      </span>
                      <Link
                        to="/downloads"
                        onClick={(e) => e.stopPropagation()}
                        className="px-3.5 py-1.5 bg-action/10 text-action hover:bg-action hover:text-white rounded-xl text-xs font-extrabold transition-all duration-200"
                      >
                        Hire Now
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

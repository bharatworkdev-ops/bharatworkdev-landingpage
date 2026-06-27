import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiMenu, FiX, FiArrowRight, FiArrowLeft, FiHome, FiGrid, 
  FiLayers, FiInfo, FiPhone, FiUsers, FiBookOpen, FiLogOut 
} from "react-icons/fi";
import { FaBriefcase, FaHardHat } from "react-icons/fa";
import logoImg from "../assets/logo.svg";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userRole, clearRole, isAuthenticated, logout } = useAuth();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Determine current page state
  const isAuthPage = location.pathname.includes("/auth/");
  const isDashboard = location.pathname.includes("/dashboard");
  const isEmployerRoute = location.pathname.includes("/employer") && !location.pathname.includes("employer-info");
  const isLabourRoute = location.pathname.includes("/labour");

  // Track active role based on context or path prefix
  const activeRole = userRole || (isEmployerRoute ? "employer" : isLabourRoute ? "labour" : null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active link highlighting based on location
  useEffect(() => {
    const path = location.pathname;
    
    if (path === "/about") {
      setActiveLink("about");
    } else if (path === "/blog") {
      setActiveLink("blog");
    } else if (path === "/contact") {
      setActiveLink("contact");
    } else if (path === "/") {
      setActiveLink("home");
    } else {
      setActiveLink("");
    }
  }, [location]);

  const navLinks = [
    { name: "Home", to: "/", icon: <FiHome />, id: "home" },
    { name: "About", to: "/about", icon: <FiInfo />, id: "about" },
    { name: "Blog", to: "/blog", icon: <FiBookOpen />, id: "blog" },
    { name: "Contact", to: "/contact", icon: <FiPhone />, id: "contact" },
  ];

  const roleLabels = {
    employer: "Employer Portal",
    labour: "Worker Portal"
  };

  const roleColors = {
    employer: "from-action to-gradient-end",
    labour: "from-amber-500 to-orange-500"
  };

  const handleLogout = () => {
    logout();
    clearRole();
    navigate("/");
    setMobileMenuOpen(false);
  };

  const handleRoleSwitch = () => {
    clearRole();
    navigate("/");
    setMobileMenuOpen(false);
  };

  const handleLoginClick = () => {
    if (activeRole) {
      navigate(`/${activeRole}/auth/login`);
    } else {
      navigate("/");
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled || isDashboard || isAuthPage
            ? "top-4 w-[95%] max-w-7xl bg-white/70 backdrop-blur-lg border border-white/25 shadow-xl shadow-action/5 py-3 rounded-full"
            : "top-0 w-full max-w-full bg-transparent backdrop-blur-none border-transparent shadow-none py-6 rounded-none"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8">
          <div className={isAuthPage || isDashboard 
            ? "flex justify-between items-center" 
            : "flex justify-between items-center md:grid md:grid-cols-3"
          }>
            {/* Logo & Badge */}
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center group">
                <img 
                  src={logoImg} 
                  alt="BharatWork Logo" 
                  width="150"
                  height="40"
                  className="h-8 md:h-10 w-auto object-contain" 
                />
              </Link>

              {activeRole && !isAuthPage && (
                <>
                  <span className="hidden sm:block text-border-medium h-6 w-px bg-current opacity-20"></span>
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${roleColors[activeRole]}/10 border border-action/20`}>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-action">
                      {roleLabels[activeRole]}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Navigation Options based on Route state */}
            {isAuthPage ? (
              // Simplified Navigation for Auth Pages
              <div className="flex items-center gap-4 justify-end">
                <Link
                  to="/"
                  className="flex items-center gap-2 px-4 py-2 text-text-secondary font-semibold hover:text-action transition-colors text-sm"
                >
                  <FiArrowLeft className="text-sm" />
                  Back to Home
                </Link>
              </div>
            ) : isDashboard ? (
              // Dashboard Header Option
              <div className="flex items-center gap-4 justify-end">
                <Link
                  to="/"
                  className="hidden md:flex items-center gap-2 px-4 py-2 text-text-secondary font-semibold hover:text-action transition-colors text-sm"
                >
                  Home
                </Link>
                <div className="px-4 py-1.5 rounded-full bg-action/10 border border-action/20">
                  <span className="text-action font-semibold text-sm flex items-center gap-2">
                    {activeRole === "employer" ? <FaBriefcase className="text-xs" /> : <FaHardHat className="text-xs" />}
                    {activeRole === "employer" ? "Employer" : "Worker"}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 p-2 px-3 bg-action/10 hover:bg-gradient-to-r hover:from-action hover:to-gradient-end text-action hover:text-white rounded-xl transition-all duration-300 font-semibold text-sm"
                  title="Logout"
                >
                  <FiLogOut className="text-lg" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            ) : (
              // Public Pages Navigation
              <>
                {/* Center Column: Links */}
                <div className="hidden md:flex items-center justify-center gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.to}
                      className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                        activeLink === link.id
                          ? "text-action"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {activeLink === link.id && (
                        <motion.span
                          layoutId="activeNav"
                          className="absolute inset-0 bg-action/10 rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Right Column: CTA & Mobile Menu Button */}
                <div className="flex items-center justify-end gap-4">
                  {/* Public Page CTA */}
                  {activeRole ? (
                    <div className="hidden md:flex items-center gap-4">
                      <button
                        onClick={handleRoleSwitch}
                        className="flex items-center gap-2 px-4 py-2 text-text-secondary font-semibold hover:text-action transition-colors text-sm"
                      >
                        <FiArrowLeft className="text-sm" />
                        Switch Role
                      </button>
                      <button
                        onClick={isAuthenticated ? () => navigate(`/${activeRole}/dashboard`) : handleLoginClick}
                        className="group flex items-center gap-2 bg-gradient-to-r from-action to-gradient-end text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-action/25 transition-all duration-300 hover:-translate-y-0.5 text-sm"
                      >
                        {isAuthenticated ? "Dashboard" : "Login"}
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  ) : (
                    <Link
                      to="/downloads"
                      className="hidden md:flex items-center gap-2 bg-gradient-to-r from-action to-gradient-end text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-action/25 transition-all duration-300 hover:-translate-y-0.5 text-sm"
                    >
                      Get Started
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}

                  {/* Mobile Menu Button */}
                  <button
                    className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow-lg border border-white/25 z-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                  >
                    <AnimatePresence mode="wait">
                      {mobileMenuOpen ? (
                        <motion.div
                          key="close"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiX size={20} className="text-text-primary" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiMenu size={20} className="text-text-primary" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && !isAuthPage && !isDashboard && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl shadow-action/10 border border-white/20 overflow-hidden"
            >
              <div className="p-6">
                {/* Mobile Nav Links */}
                <div className="space-y-2">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        to={link.to}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setActiveLink(link.id);
                        }}
                        className={`flex items-center gap-4 px-4 py-3 rounded-2xl font-semibold transition-all ${
                          activeLink === link.id
                            ? "bg-action/10 text-action"
                            : "text-text-secondary hover:bg-border-light/50 hover:text-text-primary"
                        }`}
                      >
                        <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          activeLink === link.id ? "bg-gradient-to-r from-action to-gradient-end text-white" : "bg-border-light text-text-secondary"
                        }`}>
                          {link.icon}
                        </span>
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-border-light my-4"></div>

                {/* Mobile Actions */}
                <div className="space-y-3">
                  {activeRole ? (
                    <>
                      <button
                        onClick={handleRoleSwitch}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border-2 border-border-medium text-text-secondary font-semibold hover:border-action hover:text-action transition-all text-sm"
                      >
                        <FiArrowLeft />
                        Switch Role
                      </button>
                      <button
                        onClick={isAuthenticated ? () => { navigate(`/${activeRole}/dashboard`); setMobileMenuOpen(false); } : handleLoginClick}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-action to-gradient-end text-white px-4 py-3 rounded-2xl font-bold shadow-lg text-sm"
                      >
                        {isAuthenticated ? "Go to Dashboard" : `Login as ${activeRole === 'employer' ? 'Employer' : 'Worker'}`}
                        <FiArrowRight />
                      </button>
                    </>
                  ) : (
                    <Link
                      to="/downloads"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-action to-gradient-end text-white px-4 py-3 rounded-2xl font-bold shadow-lg text-sm"
                    >
                      Get Started
                      <FiArrowRight />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

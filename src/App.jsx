import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { HelmetProvider } from "react-helmet-async";

// Layouts
import EmployerLayout from "./layouts/EmployerLayout";
import LabourLayout from "./layouts/LabourLayout";

// Pages
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import BlogPage from "./pages/BlogPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import ContactPage from "./pages/ContactPage";
import DownloadsPage from "./pages/DownloadsPage";
import EmployerInfoPage from "./pages/EmployerInfoPage";
import DemoPage from "./pages/DemoPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";

// Original landing page components (for reference/home)
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AppSections from "./components/AppSections";
import DownloadSection from "./components/DownloadSection";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import EmployerDashboard from "./pages/employer/EmployerDashboard";
import LabourDashboard from "./pages/labour/LabourDashboard";

// Helper component to handle smooth hash scrolling
function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Short timeout to let the page render before scrolling
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        document.documentElement.classList.add("hide-scrollbar");
      } else {
        document.documentElement.classList.remove("hide-scrollbar");
      }
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <ScrollToHashElement />
          <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/employer-info" element={<EmployerInfoPage />} />
            <Route path="/demopage" element={<DemoPage />} />

            {/* Employer Routes */}
            <Route path="/employer" element={<EmployerLayout />}>
              <Route path="auth/login" element={<LoginPage />} />
              <Route path="auth/signup" element={<SignupPage />} />
              <Route path="auth/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="dashboard" element={<EmployerDashboard />} />
              <Route index element={<Navigate to="/employer/auth/login" replace />} />
            </Route>

            {/* Labour Routes */}
            <Route path="/labour" element={<LabourLayout />}>
              <Route path="auth/login" element={<LoginPage />} />
              <Route path="auth/signup" element={<SignupPage />} />
              <Route path="auth/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="dashboard" element={<LabourDashboard />} />
              <Route index element={<Navigate to="/labour/auth/login" replace />} />
            </Route>

            {/* Catch all - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

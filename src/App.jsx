import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { HelmetProvider } from "react-helmet-async";

// Layouts
import EmployerLayout from "./layouts/EmployerLayout";
import LabourLayout from "./layouts/LabourLayout";

// Lazy loaded Pages
const LandingPage = lazy(() => import("./pages/LandingPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const DownloadsPage = lazy(() => import("./pages/DownloadsPage"));
const EmployerInfoPage = lazy(() => import("./pages/EmployerInfoPage"));
const DemoPage = lazy(() => import("./pages/DemoPage"));
const LoginPage = lazy(() => import("./pages/auth/LoginPage"));
const SignupPage = lazy(() => import("./pages/auth/SignupPage"));
const ForgotPasswordPage = lazy(() => import("./pages/auth/ForgotPasswordPage"));

// Original landing page components (for reference/home)
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AppSections from "./components/AppSections";
import DownloadSection from "./components/DownloadSection";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const EmployerDashboard = lazy(() => import("./pages/employer/EmployerDashboard"));
const LabourDashboard = lazy(() => import("./pages/labour/LabourDashboard"));

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

  return (
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <ScrollToHashElement />
          <Navbar />
          <Suspense fallback={<div className="min-h-screen bg-[#050d14] flex items-center justify-center text-text-secondary text-sm">Loading...</div>}>
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
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

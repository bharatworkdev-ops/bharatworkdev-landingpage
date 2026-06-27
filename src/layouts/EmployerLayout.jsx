import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const EmployerLayout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname.includes("/auth/");

  return (
    <div className="min-h-screen bg-gradient-to-br from-screen via-card to-screen flex flex-col pt-20">
      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      {!isAuthPage && (
        <footer className="border-t border-border-light py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-text-secondary text-sm">
                &copy; {new Date().getFullYear()} BharatWork. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-text-secondary">
                <a href="#" className="hover:text-action transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-action transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-action transition-colors">
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default EmployerLayout;

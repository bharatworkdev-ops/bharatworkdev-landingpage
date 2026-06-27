import React from "react";
import Team from "../components/Team";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-screen flex flex-col justify-between pt-20">
      <SEO 
        title="Our Team | BharatWork"
        description="Meet the core leadership, operational, and engineering team behind BharatWork startup."
      />
      <main className="grow">
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
import React from "react";
import Team from "../components/Team";
import Footer from "../components/Footer";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-screen flex flex-col justify-between pt-20">
      <main className="grow">
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaUserCheck, FaMapMarkerAlt, FaUsers, FaArrowRight, 
  FaRedo, FaPhoneAlt, FaVolumeUp, FaCheckCircle, FaSpinner,
  FaHardHat, FaTools, FaHammer, FaBolt, FaPaintRoller
} from "react-icons/fa";

const CrewSimulator = () => {
  const [step, setStep] = useState(1); // 1: Input, 2: Scanning, 3: Results
  const [role, setRole] = useState("Mason (Mistri)");
  const [workersCount, setWorkersCount] = useState(5);
  const [daysCount, setDaysCount] = useState(3);
  const [location, setLocation] = useState("Lucknow, Uttar Pradesh");
  const [radarLog, setRadarLog] = useState("");
  const [matchedList, setMatchedList] = useState([]);
  
  const rolesInfo = {
    "Mason (Mistri)": { rate: 650, icon: <FaTools className="text-base" /> },
    "Helper (Labour)": { rate: 450, icon: <FaHardHat className="text-base" /> },
    "Carpenter (Barhai)": { rate: 600, icon: <FaHammer className="text-base" /> },
    "Electrician (Bijliwala)": { rate: 700, icon: <FaBolt className="text-base" /> },
    "Painter (Rangsaaz)": { rate: 550, icon: <FaPaintRoller className="text-base" /> }
  };

  const mockNames = [
    "Ramesh Kumar", "Manoj Yadav", "Suresh Nishad", "Amit Verma", 
    "Sanjay Vishwakarma", "Dinesh Rajpoot", "Pappu Maurya", "Sunil Gupta", 
    "Vinod Kashyap", "Rajesh Jaiswal", "Arjun Sahu", "Vikram Pal"
  ];

  // Calculate costs
  const ratePerDay = rolesInfo[role].rate;
  const totalAmount = ratePerDay * workersCount * daysCount;
  const agencyCommission = 0;

  // Run matching log sequence
  useEffect(() => {
    if (step === 2) {
      const logs = [
        "Locating active nearby workers...",
        `Broadcasting dispatch request to ${role.split(" ")[0]}s in Lucknow...`,
        "24 verified workers received alert...",
        "Placing automated IVR confirmation calls...",
        "Awaiting worker keypress responses...",
        "5 workers accepted (keypress confirmed)...",
        "Crew Dispatched & Confirmed!"
      ];
      
      let index = 0;
      setRadarLog(logs[0]);
      
      const interval = setInterval(() => {
        index++;
        if (index < logs.length) {
          setRadarLog(logs[index]);
        } else {
          clearInterval(interval);
          // Generate mock matches
          const selectedNames = [...mockNames]
            .sort(() => 0.5 - Math.random())
            .slice(0, Math.max(1, Math.min(workersCount, 4)));
          
          setMatchedList(
            selectedNames.map((name, i) => ({
              name,
              role: role.split(" ")[0],
              rating: (4.7 + Math.random() * 0.3).toFixed(1),
              distance: (0.4 + Math.random() * 2.1).toFixed(1),
              confirmed: true
            }))
          );
          setStep(3);
        }
      }, 900);

      return () => clearInterval(interval);
    }
  }, [step, role, workersCount]);

  const handleStartScan = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    setMatchedList([]);
  };

  return (
    <section id="simulator" className="py-24 relative overflow-hidden bg-card border-t border-border-light">
      {/* Visual Background Accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-screen via-white to-screen"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-action/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-action/10 border border-action/20 mb-6">
              <FaUserCheck className="text-action text-sm" />
              <span className="text-action font-semibold text-sm tracking-wider uppercase">Live Dispatch Engine</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Dispatch Your <span className="gradient-primary">First Crew</span> Instantly
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
              Experience BharatWork in action. Define your daily crew requirements and watch our system broadcast direct calls and confirm workers in real-time.
            </p>
          </motion.div>
        </div>

        {/* Simulator Dashboard */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-border-medium/60 shadow-2xl shadow-action/5 overflow-hidden min-h-[500px] flex flex-col justify-between">
            {/* Top Bar Accent */}
            <div className="h-2 bg-gradient-to-r from-action to-gradient-end"></div>

            <div className="p-8 md:p-12 grow flex flex-col justify-center">
              <AnimatePresence mode="wait">
                
                {/* STEP 1: Inputs */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Left: Setup Fields */}
                      <div className="space-y-6">
                        <div>
                          <label className="block text-xs font-bold text-text-secondary mb-3 uppercase tracking-wider">
                            Select Crew Skill
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {Object.keys(rolesInfo).map((r) => (
                              <button
                                key={r}
                                type="button"
                                onClick={() => setRole(r)}
                                className={`flex items-center gap-2 p-3.5 rounded-xl border text-sm font-semibold transition-all ${
                                  role === r
                                    ? "border-action bg-action/5 text-action"
                                    : "border-border-medium hover:border-action/40 text-text-secondary bg-card"
                                }`}
                              >
                                <span>{rolesInfo[r].icon}</span>
                                <span className="truncate">{r.split(" ")[0]}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-text-secondary mb-2 uppercase tracking-wider">
                              Crew Size
                            </label>
                            <div className="flex items-center gap-3 bg-screen border border-border-medium rounded-xl px-4 py-3">
                              <button
                                type="button"
                                onClick={() => setWorkersCount(Math.max(1, workersCount - 1))}
                                className="w-8 h-8 rounded-lg bg-white border border-border-medium flex items-center justify-center font-bold text-text-secondary hover:text-action hover:border-action transition-all"
                              >
                                -
                              </button>
                              <span className="font-bold text-text-primary text-lg flex-1 text-center">
                                {workersCount}
                              </span>
                              <button
                                type="button"
                                onClick={() => setWorkersCount(Math.min(15, workersCount + 1))}
                                className="w-8 h-8 rounded-lg bg-white border border-border-medium flex items-center justify-center font-bold text-text-secondary hover:text-action hover:border-action transition-all"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-text-secondary mb-2 uppercase tracking-wider">
                              Job Duration
                            </label>
                            <div className="flex items-center gap-3 bg-screen border border-border-medium rounded-xl px-4 py-3">
                              <button
                                type="button"
                                onClick={() => setDaysCount(Math.max(1, daysCount - 1))}
                                className="w-8 h-8 rounded-lg bg-white border border-border-medium flex items-center justify-center font-bold text-text-secondary hover:text-action hover:border-action transition-all"
                              >
                                -
                              </button>
                              <span className="font-bold text-text-primary text-lg flex-1 text-center">
                                {daysCount} d
                              </span>
                              <button
                                type="button"
                                onClick={() => setDaysCount(Math.min(7, daysCount + 1))}
                                className="w-8 h-8 rounded-lg bg-white border border-border-medium flex items-center justify-center font-bold text-text-secondary hover:text-action hover:border-action transition-all"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right: Summary Box */}
                      <div className="bg-screen border border-border-medium/60 rounded-2xl p-6 flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-text-primary mb-4 text-base border-b border-border-medium pb-2 flex items-center gap-2">
                            <FaUsers className="text-action text-sm" /> Estimate Breakdown
                          </h4>
                          
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-text-secondary">Rate for {role.split(" ")[0]}</span>
                              <span className="font-semibold text-text-primary">₹{ratePerDay}/day</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-text-secondary">Crew Size</span>
                              <span className="font-semibold text-text-primary">{workersCount} Workers</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-text-secondary">Duration</span>
                              <span className="font-semibold text-text-primary">{daysCount} Days</span>
                            </div>
                            <div className="flex justify-between border-t border-border-medium pt-3 text-base">
                              <span className="font-bold text-text-primary">Worker Wages</span>
                              <span className="font-extrabold text-text-primary">₹{totalAmount.toLocaleString("en-IN")}</span>
                            </div>
                            <div className="flex justify-between text-emerald-600 text-xs font-semibold">
                              <span>BharatWork Margin Fee</span>
                              <span>₹0 (Free)</span>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={handleStartScan}
                          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-action to-gradient-end text-white px-6 py-4 rounded-xl font-bold transition-all shadow-xl hover:shadow-action/20 hover:-translate-y-0.5 text-base mt-6"
                        >
                          <span>Dispatch Verified Crew</span>
                          <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Scanning / Radar */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-8 space-y-8 text-center"
                  >
                    {/* Pulsing Radar Ring */}
                    <div className="relative w-36 h-36 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-4 border-action/20 animate-ping"></div>
                      <div className="absolute inset-2 rounded-full border-2 border-action/30 animate-pulse"></div>
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-action to-gradient-end flex items-center justify-center text-white text-3xl shadow-xl shadow-action/20">
                        <FaSpinner className="animate-spin" />
                      </div>
                    </div>

                    <div className="space-y-3 max-w-sm">
                      <h4 className="text-2xl font-bold text-text-primary">Dispatching Live...</h4>
                      <div className="bg-screen border border-border-medium rounded-xl p-4 font-mono text-xs text-action font-semibold min-h-[50px] flex items-center justify-center">
                        {radarLog}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Results */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                  >
                    {/* Title */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-border-medium pb-6 gap-4">
                      <div>
                        <h4 className="text-2xl font-extrabold text-text-primary flex items-center gap-2">
                          <FaCheckCircle className="text-emerald-500 text-xl" /> Matching Successful!
                        </h4>
                        <p className="text-sm text-text-secondary mt-1">
                          Connected with {workersCount} active {role.split(" ")[0]}s near your location.
                        </p>
                      </div>
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border-medium hover:border-action text-text-secondary hover:text-action transition-all font-semibold text-sm bg-card shadow-sm"
                      >
                        <FaRedo className="text-xs" /> Book Another Crew
                      </button>
                    </div>

                    {/* Output Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Left: Matched Cards */}
                      <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                        <div className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-2">
                          Matched Crew Profiles
                        </div>
                        {matchedList.map((m, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-4 bg-screen border border-border-medium rounded-xl shadow-sm"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-action/20 to-gradient-end/20 text-action flex items-center justify-center font-bold text-sm">
                                {m.name.split(" ").map(w => w[0]).join("")}
                              </div>
                              <div>
                                <div className="font-bold text-text-primary text-sm flex items-center gap-1.5">
                                  {m.name}
                                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[8px]" title="KYC Verified">✓</span>
                                </div>
                                <div className="text-xs text-text-secondary">{m.role} • {m.distance} km away</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs font-bold text-amber-500">★ {m.rating}</div>
                              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                                Verified
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right: Direct Dispatch Call Status & Final Info */}
                      <div className="space-y-6">
                        {/* IVR Dispatch Call Box */}
                        <div className="bg-action/5 border border-action/20 rounded-2xl p-6 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-16 h-16 bg-action/10 rounded-bl-[50px] flex items-center justify-center">
                            <FaVolumeUp className="text-action text-xs" />
                          </div>
                          
                          <h5 className="font-bold text-text-primary mb-3 flex items-center gap-2 text-sm">
                            <FaPhoneAlt className="text-action text-xs" /> Automated IVR Dispatch Transcript
                          </h5>
                          <p className="text-xs text-text-secondary leading-relaxed mb-4 italic">
                            BharatWork IVR called Ramesh Kumar and logged this confirmation:
                          </p>
                          <div className="bg-white border border-border-medium rounded-xl p-3.5 font-medium text-text-primary text-sm shadow-sm border-l-4 border-action">
                            "Aapko Lucknow Metro site par kaam mila hai. Ha karne ke liye 1 dabayein... **[Keypad 1 Pressed - Dispatch Confirmed]**"
                          </div>
                        </div>

                        {/* Commission comparison Box */}
                        <div className="bg-screen border border-border-medium rounded-2xl p-5 flex items-center justify-between">
                          <div>
                            <div className="text-xs text-text-secondary uppercase tracking-wider mb-1">Contract Total Payout</div>
                            <div className="text-2xl font-black text-text-primary">₹{totalAmount.toLocaleString("en-IN")}</div>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                              0% Commission
                            </span>
                            <div className="text-xs text-text-secondary mt-1">Direct to worker banks</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CrewSimulator;

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  Settings, 
  Volume2, 
  VolumeX, 
  Info, 
  Sliders, 
  Cpu, 
  GraduationCap, 
  HelpCircle,
  TrendingUp,
  Atom,
  Dna,
  Binary,
  Maximize2,
  FileText,
  PhoneCall
} from "lucide-react";

interface VideoTheaterProps {
  onEnquireClick: (courseTitle: string) => void;
}

export default function VideoTheater({ onEnquireClick }: VideoTheaterProps) {
  const [activeConcept, setActiveConcept] = useState<"physics" | "chemistry" | "biology">("physics");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(12); // Simulated progress bar (seconds)
  const [simSpeed, setSimSpeed] = useState(1);
  const [customVariable, setCustomVariable] = useState(60); // Variable slider (e.g., gravity mass or temperature)
  const [interactivePoints, setInteractivePoints] = useState<number>(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const progressInterval = useRef<any>(null);

  const concepts = {
    physics: {
      title: "Planetary Gravitational Fields & Keplerian Orbits",
      subject: "Physics — Class 11 & JEE Advanced Core",
      formula: "F_g = G * (m₁m₂) / r²",
      desc: "Observe how central masses warp local coordinates. Toggle mass parameters to watch elliptical orbits shift, illustrating gravitational acceleration and Kepler's Second Law in real time.",
      badge: "LIVE CLASSROOM SIMULATION",
      variablesLabel: "Mass of Central Core (Sun)",
      variableUnit: "×10²⁴ kg",
      notes: [
        "Centripetal acceleration is supplied entirely by the gravitational force field.",
        "As mass increases, orbital speed at perihelion spikes dramatically.",
        "Notice the conservation of angular momentum as the body approaches."
      ]
    },
    chemistry: {
      title: "Kinetic Theory of Ideal Gases & Thermal Pressures",
      subject: "Chemistry — Class 11 & NEET Thermodynamics",
      formula: "P * V = n * R * T",
      desc: "Simulate micro-collisions of ideal helium molecules against chamber partitions. Raise temperature to watch velocities elevate, dynamically proving the pressure-temperature laws of Boyle & Charles.",
      badge: "THERMODYNAMICS SANDBOX",
      variablesLabel: "Chamber Thermal Energy (K)",
      variableUnit: " Kelvin",
      notes: [
        "Gas molecules are in constant, random motion colliding with boundaries.",
        "Average kinetic energy is directly proportional to absolute Temperature (K).",
        "Collisions are perfectly elastic: total kinetic energy remains conserved."
      ]
    },
    biology: {
      title: "DNA Double Helix Topology & Molecular Base Pairing",
      subject: "Biology — Class 12 & NEET Genetics",
      formula: "Adenine ═ Thymine, Cytosine ≡ Guanine",
      desc: "Analyze the microscopic double-stranded genetic matrix. Control helix wind tension to inspect purine and pyrimidine hydrogen pairings, modeling critical transcription nodes.",
      badge: "GENETICS INTERACTIVE VIEW",
      variablesLabel: "Helix Wind Structural Tension",
      variableUnit: "° Radial Pitch",
      notes: [
        "Adenine binds specifically with Thymine via double hydrogen bonds.",
        "Cytosine binds specifically with Guanine via triple hydrogen bonds.",
        "The anti-parallel 5' to 3' alignment dictates replication direction."
      ]
    }
  };

  // Simulated Video Scrubber Progress Tracker
  useEffect(() => {
    if (progressInterval.current) clearInterval(progressInterval.current);
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= 180) return 0; // Loop every 3 mins
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(progressInterval.current);
  }, [isPlaying]);

  // Combined HTML5 Physics, Chemistry & Biology Canvas Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number; color: string; val?: number }> = [];
    let angle = 0;

    // Initialize simulation particles
    const initSim = () => {
      particles = [];
      if (activeConcept === "chemistry") {
        // Build helium atoms for molecular simulation
        for (let i = 0; i < 24; i++) {
          particles.push({
            x: Math.random() * (canvas.width - 40) + 20,
            y: Math.random() * (canvas.height - 40) + 20,
            vx: (Math.random() - 0.5) * 4 * simSpeed,
            vy: (Math.random() - 0.5) * 4 * simSpeed,
            radius: Math.random() * 4 + 4,
            color: i % 2 === 0 ? "#10b981" : "#0ea5e9"
          });
        }
      } else if (activeConcept === "physics") {
        // Single orbiting planet
        particles.push({
          x: canvas.width / 2 + 100,
          y: canvas.height / 2,
          vx: 0,
          vy: -3.5,
          radius: 8,
          color: "#3b82f6"
        });
      }
    };

    initSim();

    // Responsive Canvas Resize Observer
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight || 320;
      }
      initSim();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Core Drawing & Physics Loop
    const draw = () => {
      if (!ctx || !canvas) return;

      // Dark futuristic chalkboard grid background
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid line tracers for high technical look
      ctx.strokeStyle = "rgba(148, 163, 184, 0.05)";
      ctx.lineWidth = 1;
      const gridSize = 30;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Render Active Concept Simulation
      if (activeConcept === "physics") {
        // --- 1. Gravitational Warping & Kepler Orbit ---
        const centralMass = customVariable * 3.5; // Dynamic Sun mass linked to slider

        // Draw gravitational space-time grid deformation (concentric circles)
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.05 + (customVariable / 200)})`;
        ctx.lineWidth = 1.5;
        for (let r = 30; r < 250; r += 45) {
          ctx.beginPath();
          ctx.arc(centerX, centerY, r - (customVariable * 0.15), 0, Math.PI * 2);
          ctx.stroke();
        }

        // Draw gravitational vector arrows
        ctx.strokeStyle = "rgba(59, 130, 246, 0.12)";
        ctx.lineWidth = 1.2;
        for (let d = 0; d < Math.PI * 2; d += Math.PI / 4) {
          const startX = centerX + Math.cos(d) * 120;
          const startY = centerY + Math.sin(d) * 120;
          const endX = centerX + Math.cos(d) * (70 - (customVariable * 0.1));
          const endY = centerY + Math.sin(d) * (70 - (customVariable * 0.1));
          
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.stroke();

          // Arrow tip
          const arrowAngle = d + Math.PI;
          ctx.beginPath();
          ctx.moveTo(endX, endY);
          ctx.lineTo(endX + Math.cos(arrowAngle - 0.3) * 6, endY + Math.sin(arrowAngle - 0.3) * 6);
          ctx.lineTo(endX + Math.cos(arrowAngle + 0.3) * 6, endY + Math.sin(arrowAngle + 0.3) * 6);
          ctx.fillStyle = "rgba(59, 130, 246, 0.15)";
          ctx.fill();
        }

        // Draw massive central star with pulse glow
        const pulse = Math.sin(angle * 0.05) * 4 + 22;
        const sunGlow = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, pulse + 20);
        sunGlow.addColorStop(0, "#fbbf24");
        sunGlow.addColorStop(0.3, "#f59e0b");
        sunGlow.addColorStop(1, "rgba(245, 158, 11, 0)");
        ctx.fillStyle = sunGlow;
        ctx.beginPath();
        ctx.arc(centerX, centerY, pulse + 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#fff";
        ctx.shadowColor = "#f59e0b";
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow

        // Physics Calculation: Centripetal Gravity orbits
        if (isPlaying && particles.length > 0) {
          const p = particles[0];
          const dx = centerX - p.x;
          const dy = centerY - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // G * M / r^2
          const gravityIntensity = (centralMass) / (distance * distance);
          const forceX = (dx / distance) * gravityIntensity * simSpeed;
          const forceY = (dy / distance) * gravityIntensity * simSpeed;

          p.vx += forceX;
          p.vy += forceY;
          p.x += p.vx * simSpeed;
          p.y += p.vy * simSpeed;

          // Trail renderer
          if (!p.val) p.val = 0;
          p.val += 0.1;
        }

        // Render Orbit Paths
        if (particles.length > 0) {
          const p = particles[0];
          ctx.strokeStyle = "rgba(59, 130, 246, 0.4)";
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.ellipse(centerX, centerY + 10, 115, 80, -0.1, 0, Math.PI * 2);
          ctx.stroke();
          ctx.setLineDash([]);

          // Draw planet sphere
          ctx.fillStyle = "#38bdf8";
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

          // Draw orbital velocity vector arrows (green arrow)
          ctx.strokeStyle = "#10b981";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.vx * 15, p.y + p.vy * 15);
          ctx.stroke();

          ctx.fillStyle = "#10b981";
          ctx.beginPath();
          ctx.arc(p.x + p.vx * 15, p.y + p.vy * 15, 3, 0, Math.PI * 2);
          ctx.fill();

          // Acceleration vector to central mass (red arrow)
          ctx.strokeStyle = "#ef4444";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          const dx = centerX - p.x;
          const dy = centerY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          ctx.lineTo(p.x + (dx / dist) * 35, p.y + (dy / dist) * 35);
          ctx.stroke();
        }

      } else if (activeConcept === "chemistry") {
        // --- 2. Gas Chamber & Kinetic Molecular Sandbox ---
        const thermalK = customVariable * 4.5; // Temperature variable

        // Chamber wall container border
        ctx.strokeStyle = "#334155";
        ctx.lineWidth = 4;
        ctx.strokeRect(15, 15, canvas.width - 30, canvas.height - 30);

        // Animated heat background glow
        const heatOpacity = (customVariable / 100) * 0.12;
        ctx.fillStyle = `rgba(239, 68, 68, ${heatOpacity})`;
        ctx.fillRect(17, 17, canvas.width - 34, canvas.height - 34);

        // Render atoms
        particles.forEach((p) => {
          if (isPlaying) {
            // Apply speed vector proportional to slider temperature
            const tempFactor = 0.4 + (customVariable / 70);
            p.x += p.vx * tempFactor * simSpeed;
            p.y += p.vy * tempFactor * simSpeed;

            // Bounce off left & right walls
            if (p.x - p.radius <= 17) {
              p.x = 17 + p.radius;
              p.vx = -p.vx;
              setInteractivePoints((prev) => (prev + 1) % 1000);
            } else if (p.x + p.radius >= canvas.width - 17) {
              p.x = canvas.width - 17 - p.radius;
              p.vx = -p.vx;
              setInteractivePoints((prev) => (prev + 1) % 1000);
            }

            // Bounce off top & bottom walls
            if (p.y - p.radius <= 17) {
              p.y = 17 + p.radius;
              p.vy = -p.vy;
              setInteractivePoints((prev) => (prev + 1) % 1000);
            } else if (p.y + p.radius >= canvas.height - 17) {
              p.y = canvas.height - 17 - p.radius;
              p.vy = -p.vy;
              setInteractivePoints((prev) => (prev + 1) % 1000);
            }
          }

          // Render atoms with dynamic trail glows
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = isPlaying ? 8 : 0;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        // Chamber specs HUD tag
        ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
        ctx.fillRect(30, 30, 160, 60);
        ctx.strokeStyle = "rgba(51, 65, 85, 0.5)";
        ctx.lineWidth = 1;
        ctx.strokeRect(30, 30, 160, 60);

        ctx.fillStyle = "#fff";
        ctx.font = "bold 10px monospace";
        ctx.fillText(`GAS SYSTEM MONITOR`, 38, 44);
        ctx.fillStyle = "#10b981";
        ctx.fillText(`Temp: ${Math.round(thermalK)} Kelvin`, 38, 58);
        const dynamicPressure = Math.round((thermalK * 24) / 15);
        ctx.fillStyle = "#38bdf8";
        ctx.fillText(`Pressure: ${dynamicPressure} mmHg`, 38, 72);

      } else if (activeConcept === "biology") {
        // --- 3. DNA Double Helix Rotating Matrix ---
        const basePairs = 15;
        const amplitude = 45;
        const pitch = customVariable * 0.15; // Helix wind tension linked to slider

        ctx.lineWidth = 2.5;

        for (let i = 0; i < basePairs; i++) {
          const t = i / basePairs;
          const yPos = 35 + t * (canvas.height - 70);
          
          // Phase angle calculation for double helix rotation
          const phase1 = angle * 0.04 + i * pitch;
          const phase2 = phase1 + Math.PI;

          const x1 = centerX + Math.sin(phase1) * (amplitude + 20);
          const x2 = centerX + Math.sin(phase2) * (amplitude + 20);

          // Alternating color codes for hydrogen nucleic bonds
          // Adenine (Green) <=> Thymine (Sky)
          // Cytosine (Rose) <=> Guanine (Amber)
          let bondColor = "rgba(100, 116, 139, 0.35)";
          let baseLabel = "";
          if (i % 4 === 0) {
            bondColor = "rgba(16, 185, 129, 0.6)"; // A-T Pair
            baseLabel = "A ═ T";
          } else if (i % 4 === 1) {
            bondColor = "rgba(14, 165, 233, 0.6)"; // T-A Pair
            baseLabel = "T ═ A";
          } else if (i % 4 === 2) {
            bondColor = "rgba(244, 63, 94, 0.6)"; // C-G Pair
            baseLabel = "C ≡ G";
          } else {
            bondColor = "rgba(245, 158, 11, 0.6)"; // G-C Pair
            baseLabel = "G ≡ C";
          }

          // Draw vertical horizontal connecting bridges (hydrogen bonds)
          ctx.strokeStyle = bondColor;
          ctx.beginPath();
          ctx.moveTo(x1, yPos);
          ctx.lineTo(x2, yPos);
          ctx.stroke();

          // Micro base pair formulas text
          if (Math.abs(x1 - x2) > 40 && i % 2 === 0) {
            ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
            ctx.font = "9px monospace";
            ctx.textAlign = "center";
            ctx.fillText(baseLabel, centerX, yPos - 4);
          }

          // Base Strand 1 Node (Phosphate group node)
          ctx.fillStyle = "#ec4899";
          ctx.beginPath();
          ctx.arc(x1, yPos, 6, 0, Math.PI * 2);
          ctx.fill();

          // Base Strand 2 Node (Deoxyribose sugar node)
          ctx.fillStyle = "#3b82f6";
          ctx.beginPath();
          ctx.arc(x2, yPos, 6, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw outer running ribbon tracers
        ctx.strokeStyle = "rgba(236, 72, 153, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let y = 30; y < canvas.height - 30; y += 4) {
          const t = (y - 30) / (canvas.height - 60);
          const p = angle * 0.04 + (t * basePairs) * pitch;
          const x = centerX + Math.sin(p) * (amplitude + 20);
          if (y === 30) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.strokeStyle = "rgba(59, 130, 246, 0.4)";
        ctx.beginPath();
        for (let y = 30; y < canvas.height - 30; y += 4) {
          const t = (y - 30) / (canvas.height - 60);
          const p = angle * 0.04 + (t * basePairs) * pitch + Math.PI;
          const x = centerX + Math.sin(p) * (amplitude + 20);
          if (y === 30) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Progress animation phase angle incrementer
      if (isPlaying) {
        angle += 1;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [activeConcept, simSpeed, customVariable, isPlaying]);

  // Handle active concept tab switch & reset variables appropriately
  const selectConcept = (key: "physics" | "chemistry" | "biology") => {
    setActiveConcept(key);
    setInteractivePoints(0);
    if (key === "physics") setCustomVariable(60);
    else if (key === "chemistry") setCustomVariable(40);
    else if (key === "biology") setCustomVariable(55);
  };

  // Convert digital timeline seconds to elegant string MM:SS format
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins}:${remaining < 10 ? "0" : ""}${remaining}`;
  };

  return (
    <section className="py-20 bg-slate-950 text-white overflow-hidden relative">
      {/* Decorative Matrix/Circuit style light vectors */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-[11px] font-bold tracking-widest uppercase text-brand-400 font-mono bg-brand-950/80 border border-brand-800/80 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
            <Cpu className="h-3.5 w-3.5 text-brand-400 animate-spin" />
            DIGITAL SMART-CLASS CONCEPT PLAYGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
            Interactive Video Animations & Simulations
          </h2>
          <div className="h-1 w-16 bg-brand-500 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Experience how our HOD teachers use custom digital physics vector calculators, chemical sandbox simulators, and genetics helix modelers to make concepts 100% crystal clear.
          </p>
        </div>

        {/* Triple Concept Selector Header Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => selectConcept("physics")}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-display font-bold border transition-all cursor-pointer flex items-center gap-2 focus:outline-none ${
              activeConcept === "physics"
                ? "bg-brand-600 text-white border-brand-500 shadow-lg shadow-brand-500/20"
                : "bg-slate-900/60 hover:bg-slate-900 text-slate-300 border-slate-800"
            }`}
          >
            <Atom className="h-4 w-4" />
            Physics: Orbit Vectors
          </button>
          <button
            onClick={() => selectConcept("chemistry")}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-display font-bold border transition-all cursor-pointer flex items-center gap-2 focus:outline-none ${
              activeConcept === "chemistry"
                ? "bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-500/20"
                : "bg-slate-900/60 hover:bg-slate-900 text-slate-300 border-slate-800"
            }`}
          >
            <Binary className="h-4 w-4" />
            Chemistry: Ideal Gas Chamber
          </button>
          <button
            onClick={() => selectConcept("biology")}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-display font-bold border transition-all cursor-pointer flex items-center gap-2 focus:outline-none ${
              activeConcept === "biology"
                ? "bg-pink-600 text-white border-pink-500 shadow-lg shadow-pink-500/20"
                : "bg-slate-900/60 hover:bg-slate-900 text-slate-300 border-slate-800"
            }`}
          >
            <Dna className="h-4 w-4" />
            Biology: Double Helix DNA
          </button>
        </div>

        {/* Core Multi-Column Smart-Theater Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* COLUMN 1: INTERACTIVE SIMULATOR STAGE / LESSON PLAYER (9 COLS) */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-slate-900/40 border border-slate-800/80 rounded-[2rem] p-4 sm:p-6 shadow-2xl shadow-black/50">
            
            {/* Stage Header Tag */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                <span className="font-mono text-slate-400 uppercase tracking-widest text-[10px]">
                  {concepts[activeConcept].badge}
                </span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 font-mono text-[10px]">
                <span>STREAM: 1080P UltraHD</span>
                <span className="bg-slate-800 px-2 py-0.5 rounded text-white text-[9px] font-bold">
                  SIM_ACTIVE
                </span>
              </div>
            </div>

            {/* MAIN CANVAS ELEMENT - SIMULATION ENGINE */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[360px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group">
              <canvas 
                ref={canvasRef} 
                className="w-full h-full block absolute inset-0"
              />

              {/* Watermark branding */}
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur border border-slate-800/50 px-3 py-1.5 rounded-xl pointer-events-none z-10">
                <span className="block text-[8px] font-bold tracking-widest text-slate-500 uppercase font-mono">LAB PLATFORM</span>
                <span className="block text-xs font-bold text-white leading-tight font-display">EVOLUTION ACADEMY</span>
              </div>

              {/* Overlay active prompt formula display */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur border border-slate-800/60 p-3 rounded-xl flex items-center justify-between text-[11px] font-mono z-10 pointer-events-none">
                <div className="flex items-center gap-1.5">
                  <span className="text-brand-400 font-bold">Active Formula:</span>
                  <span className="text-slate-200">{concepts[activeConcept].formula}</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-slate-500">
                  <Info className="h-3 w-3 text-brand-400" />
                  <span>Use variable slider to modify environment constants</span>
                </div>
              </div>

              {/* Real-time soundwave simulated equalizer at the bottom right */}
              <div className="absolute top-4 right-4 flex items-end gap-0.5 h-6 px-2 bg-slate-950/80 backdrop-blur rounded-lg border border-slate-800/50 pointer-events-none">
                <span className="text-[8px] font-bold text-slate-400 font-mono mr-1.5 self-center">AUDIO FEED</span>
                {[12, 18, 8, 22, 14, 19, 5, 11].map((val, idx) => (
                  <span 
                    key={idx}
                    className="w-0.5 bg-brand-400 rounded-full animate-pulse"
                    style={{ 
                      height: isPlaying ? `${val}px` : "2px",
                      animationDuration: `${0.4 + idx * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* VIDEO PLAYER CONTROLS HUB */}
            <div className="mt-4 pt-4 border-t border-slate-800 space-y-4">
              
              {/* Timeline Progress Scrubber Bar */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-slate-400">{formatTime(currentTime)}</span>
                <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden relative cursor-pointer">
                  {/* Active background filler bar */}
                  <div 
                    className="h-full bg-gradient-to-r from-brand-500 to-sky-400 transition-all duration-300 rounded-full"
                    style={{ width: `${(currentTime / 180) * 100}%` }}
                  />
                </div>
                <span className="text-[10px] font-mono text-slate-400">3:00</span>
              </div>

              {/* Operational button row */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                
                {/* Play, Pause, Reset, Sound toggle */}
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`h-11 w-11 rounded-xl flex items-center justify-center transition-all cursor-pointer focus:outline-none shadow-md ${
                      isPlaying 
                        ? "bg-slate-800 text-slate-200 hover:bg-slate-700" 
                        : "bg-brand-600 text-white hover:bg-brand-500 shadow-brand-500/10"
                    }`}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-white" />}
                  </button>

                  <button
                    onClick={() => setCurrentTime(0)}
                    className="h-11 w-11 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-all cursor-pointer focus:outline-none"
                    title="Restart Concept Simulation"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="h-11 w-11 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-all cursor-pointer focus:outline-none"
                    title={isMuted ? "Unmute Teacher Audio Commentary" : "Mute Teacher Commentary"}
                  >
                    {isMuted ? <VolumeX className="h-4 w-4 text-red-400" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                </div>

                {/* Micro timing chapters links */}
                <div className="hidden md:flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                  <span className="font-bold text-slate-200">Lecture Markers:</span>
                  <button onClick={() => setCurrentTime(0)} className="hover:text-brand-400 bg-slate-900 border border-slate-800 px-2 py-1 rounded">0:00 Intro</button>
                  <button onClick={() => setCurrentTime(45)} className="hover:text-brand-400 bg-slate-900 border border-slate-800 px-2 py-1 rounded">0:45 Formula</button>
                  <button onClick={() => setCurrentTime(110)} className="hover:text-brand-400 bg-slate-900 border border-slate-800 px-2 py-1 rounded">1:50 Proof</button>
                </div>

                {/* Simulation velocity adjustments */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">SIM SPEED:</span>
                  <div className="bg-slate-900 border border-slate-800 p-1 rounded-lg flex gap-1">
                    {([0.5, 1, 1.5] as const).map((spd) => (
                      <button
                        key={spd}
                        onClick={() => setSimSpeed(spd)}
                        className={`px-2 py-1 rounded text-[10px] font-mono font-bold cursor-pointer transition-all focus:outline-none ${
                          simSpeed === spd 
                            ? "bg-brand-600 text-white" 
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* COLUMN 2: ACTIVE CONTROL PANEL & ACADEMY NOTES SYNOPSIS (4 COLS) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            
            {/* Concept text details card */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-[2rem] p-6 space-y-4">
              <span className="text-[9px] font-mono font-bold text-brand-400 uppercase tracking-widest bg-brand-950/80 border border-brand-900/50 px-2.5 py-1 rounded-md">
                CONCEPT PROFILE
              </span>
              <h3 className="text-xl font-bold font-display leading-tight text-white mt-1">
                {concepts[activeConcept].title}
              </h3>
              <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">
                {concepts[activeConcept].subject}
              </p>
              <div className="h-px bg-slate-800" />
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {concepts[activeConcept].desc}
              </p>
            </div>

            {/* Realtime environment control sliders (The 'Interact' box) */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-[2rem] p-6 space-y-5">
              <div className="flex items-center gap-2">
                <Sliders className="h-4.5 w-4.5 text-brand-400" />
                <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-200">
                  Parameter Control Desk
                </h4>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">{concepts[activeConcept].variablesLabel}</span>
                  <span className="text-brand-400 font-bold">{customVariable}{concepts[activeConcept].variableUnit}</span>
                </div>
                
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={customVariable}
                  onChange={(e) => setCustomVariable(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500 focus:outline-none"
                />

                <div className="flex justify-between text-[9px] font-mono text-slate-500 pt-1">
                  <span>Minimum Val</span>
                  <span>Maximum Threshold</span>
                </div>
              </div>

              {/* Smart lecture board synopsis list */}
              <div className="space-y-3.5 border-t border-slate-800/60 pt-4">
                <span className="text-[9px] font-mono font-bold text-slate-400 tracking-wider block">
                  KEY SYLLABUS LESSON TAKEAWAYS
                </span>
                <ul className="space-y-2.5 text-xs">
                  {concepts[activeConcept].notes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300 leading-snug">
                      <span className="bg-brand-950 text-brand-400 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Quick Action Enquiry Box */}
            <div className="bg-gradient-to-br from-brand-900/80 to-brand-950 border border-brand-800 rounded-[2rem] p-6 space-y-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-brand-400" />
                <h4 className="text-sm font-bold text-white font-display">Study Under Top Mentors</h4>
              </div>
              <p className="text-[11px] text-brand-200 leading-relaxed">
                Evolution incorporates smart virtual animations into every lecture tower in Lucknow, keeping children highly engaged.
              </p>
              <button
                onClick={() => onEnquireClick(`Interactive Concept Lab: ${concepts[activeConcept].title}`)}
                className="w-full bg-white hover:bg-brand-50 text-brand-950 font-bold text-xs px-4 py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
              >
                <PhoneCall className="h-4 w-4 text-brand-950" />
                Book 1 Free Trial Smart-Class
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

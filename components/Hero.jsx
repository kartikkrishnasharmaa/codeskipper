"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Define fallback icons in case react-icons fails
const Icon = ({ name, className }) => {
  const icons = {
    arrow: "→",
    cpu: "💻",
    code: "</>",
    zap: "⚡",
    globe: "🌐",
    trending: "📈",
    users: "👥",
    award: "🏆",
    brain: "🧠",
    ai: "🤖"
  };
  
  return <span className={className}>{icons[name] || "●"}</span>;
};

const Hero = () => {
  const [activeHologram, setActiveHologram] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Initialize only on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Holographic data
  const holograms = [
    { icon: <Icon name="cpu" />, value: "50K+", label: "Active Coders", color: "from-cyan-400 to-blue-500" },
    { icon: <Icon name="code" />, value: "1K+", label: "Learning Resources", color: "from-purple-400 to-pink-500" },
    { icon: <Icon name="brain" />, value: "50+", label: "Languages", color: "from-green-400 to-emerald-500" },
    { icon: <Icon name="trending" />, value: "5K+", label: "Success Stories", color: "from-orange-400 to-red-500" },
  ];

  // Holographic mesh grid
  const gridLines = Array.from({ length: 20 }).map((_, i) => i);

  const handleMouseMove = (e) => {
    if (containerRef.current && isClient) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  // Rotate holograms
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHologram((prev) => (prev + 1) % holograms.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [holograms.length]);

  // Tech companies for scroll
  const techCompanies = ["Google", "Microsoft", "Amazon", "Meta", "Netflix", "Apple", "Tesla", "SpaceX"];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Quantum Grid Background */}
      <div className="absolute inset-0">
        {gridLines.map((x) => (
          <motion.div
            key={`v-${x}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
            style={{ left: `${x * 5}%` }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 2,
              delay: x * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
        {gridLines.map((y) => (
          <motion.div
            key={`h-${y}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
            style={{ top: `${y * 5}%` }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 2,
              delay: y * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content - Animated Text & CTA */}
          <motion.div 
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* AI Assistant Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/30"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.3)",
                  "0 0 40px rgba(6, 182, 212, 0.6)",
                  "0 0 20px rgba(6, 182, 212, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Icon name="ai" className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI-Powered Learning Platform
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-white">Code The</span>
                <motion.span
                  className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Future
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Master cutting-edge technologies with our <span className="font-semibold text-cyan-300">quantum-inspired</span> learning platform. 
                From <span className="font-semibold text-purple-300">zero to hero</span> in any tech stack.
              </motion.p>
            </div>

            {/* Interactive Stats Hologram */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {holograms.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative p-4 rounded-2xl bg-gradient-to-br ${item.color} bg-opacity-10 backdrop-blur-sm border border-white/10 overflow-hidden group cursor-pointer`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => setActiveHologram(index)}
                  animate={{
                    boxShadow: activeHologram === index 
                      ? ["0 0 30px rgba(255,255,255,0.1)", "0 0 60px rgba(255,255,255,0.3)", "0 0 30px rgba(255,255,255,0.1)"]
                      : "0 0 0px rgba(255,255,255,0)"
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-2xl">{item.icon}</div>
                      <span className="text-2xl font-bold text-white">{item.value}</span>
                    </div>
                    <p className="text-sm text-gray-300">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* 3D Action Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/mcq">
                  <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Start Coding Journey
                      <Icon name="arrow" className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/roadmap">
                  <button className="group relative px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      View Roadmap
                      <Icon name="zap" className="group-hover:rotate-12 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Tech Stack Scroll */}
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="text-gray-400 text-sm mb-4">Trusted by developers at</p>
              <div className="flex overflow-hidden">
                <motion.div 
                  className="flex gap-8"
                  animate={{
                    x: [0, -1000],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {techCompanies.map((company, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300 opacity-40 hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="font-medium">{company}</span>
                    </div>
                  ))}
                  {/* Duplicate for seamless scroll */}
                  {techCompanies.map((company, i) => (
                    <div key={`dup-${i}`} className="flex items-center gap-2 text-gray-300 opacity-40">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="font-medium">{company}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Holographic Display */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            {/* Main Holographic Cube */}
            <div className="relative w-full aspect-square">
              {/* Base platform */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl backdrop-blur-sm border border-white/10" />
              
              {/* Floating Code Elements */}
              {[
                { content: "const future = await AI.learn()", top: "10%", left: "20%" },
                { content: "AI.generateRoadmap(user)", top: "30%", left: "70%" },
                { content: "quantum.compile(code)", top: "60%", left: "15%" },
                { content: "hologram.display(3D)", top: "80%", left: "60%" },
              ].map((code, i) => (
                <motion.div
                  key={i}
                  className="absolute px-4 py-2 rounded-lg bg-black/50 backdrop-blur-sm border border-cyan-500/30"
                  style={{ top: code.top, left: code.left }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                  }}
                >
                  <code className="text-xs text-cyan-300 font-mono">{code.content}</code>
                </motion.div>
              ))}

              {/* Central Holographic Globe */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64"
                animate={{
                  rotateY: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="relative w-full h-full">
                  {/* Wireframe Globe */}
                  <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full" />
                  <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full rotate-45" />
                  <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full rotate-90" />
                  
                  {/* Orbiting Elements */}
                  <motion.div
                    className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    animate={{
                      rotate: 360,
                      x: [0, 120, 0],
                      y: [0, 0, 120],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                    animate={{
                      rotate: -360,
                      x: [0, -100, 0],
                      y: [0, 100, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1,
                    }}
                  />
                </div>
              </motion.div>

              {/* Floating User Avatars */}
              <div className="absolute -top-6 -right-6">
                <motion.div
                  className="relative"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-gray-900" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-gray-900" />
                  </div>
                </motion.div>
              </div>

              {/* Achievement Badge */}
              <motion.div
                className="absolute -bottom-4 -left-4"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30">
                  <div className="flex items-center gap-2">
                    <Icon name="award" className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-semibold text-white">Top 1% Coders</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Interactive Terminal */}
            <motion.div
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-4/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-gray-400 ml-2">terminal</span>
                </div>
                <div className="font-mono text-sm">
                  <motion.div
                    className="text-cyan-300"
                    animate={{
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <span className="text-green-400">$</span> npm start --future
                  </motion.div>
                  <div className="text-gray-400 mt-1">
                    {">"} Loading quantum learning modules...
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-cyan-500/50 flex justify-center">
            <div className="w-1 h-3 rounded-full bg-cyan-400 mt-2" />
          </div>
        </motion.div>
      </div>

      {/* Ambient Light */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Feature = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      title: "Practice Coding",
      desc: "The best way to learn is by doing! Practice hands-on coding with our quantum AI compiler that adapts to your skill level in real-time.",
      img: "/Images/first.png",
      bg: "from-cyan-500/20 to-blue-600/20",
      border: "border-cyan-500/30",
      icon: "💻",
      particles: ["🚀", "⚡", "🎯"],
      gradient: "bg-gradient-to-br",
      delay: 0.1
    },
    {
      title: "Expert Content",
      desc: "Our AI-powered platform continuously crafts tutorials that adapt in real-time. Stay ahead with content that evolves with technology trends.",
      img: "/Images/second.png",
      bg: "from-purple-500/20 to-pink-600/20",
      border: "border-purple-500/30",
      icon: "🧠",
      particles: ["📚", "🎓", "🌟"],
      gradient: "bg-gradient-to-br",
      delay: 0.3
    },
    {
      title: "Beginner Friendly",
      desc: "Learn coding through immersive holographic tutorials. AI adapts complexity based on your progress for optimal learning curve.",
      img: "/Images/third.png",
      bg: "from-emerald-500/20 to-teal-600/20",
      border: "border-emerald-500/30",
      icon: "👨‍🚀",
      particles: ["✨", "🎮", "📈"],
      gradient: "bg-gradient-to-br",
      delay: 0.5
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-gray-950 via-blue-950/50 to-purple-950 py-32 px-4 sm:px-6 lg:px-8">
      {/* Quantum Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgba(6, 182, 212, 0.15)' : 
                i % 3 === 1 ? 'rgba(147, 51, 234, 0.15)' : 
                'rgba(20, 184, 166, 0.15)'
              } 0%, transparent 70%)`,
              width: `${Math.random() * 80 + 20}px`,
              height: `${Math.random() * 80 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 40 - 20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Neural Network Grid */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
            style={{
              width: `${Math.random() * 40 + 10}%`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 200],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/30 mb-6"
            animate={{
              boxShadow: [
                "0 0 20px rgba(6, 182, 212, 0.3)",
                "0 0 40px rgba(6, 182, 212, 0.6)",
                "0 0 20px rgba(6, 182, 212, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-cyan-400 text-2xl">✨</span>
            <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              WHY CHOOSE CODESKIPPER?
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-white">Code The</span>
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block mt-2"
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
              Future Here
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Transform from beginner to expert through our{" "}
            <span className="font-semibold text-cyan-300">quantum-learning ecosystem</span>.
            Whether launching your career or mastering new skills — Code Skipper evolves with you.
          </motion.p>
        </motion.div>

        {/* Holographic Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 80, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: feature.delay,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setHoveredCard(idx)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative"
            >
              {/* Card Glow Effect */}
              <motion.div
                className="absolute -inset-0.5 rounded-3xl blur-xl opacity-0"
                animate={{
                  opacity: hoveredCard === idx ? 0.5 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background: `linear-gradient(45deg, 
                    ${idx === 0 ? '#06b6d4' : idx === 1 ? '#8b5cf6' : '#10b981'}, 
                    ${idx === 0 ? '#3b82f6' : idx === 1 ? '#ec4899' : '#0d9488'})`,
                }}
              />

              {/* Main Card */}
              <div
                className={`relative p-8 rounded-3xl ${feature.gradient} ${feature.bg} backdrop-blur-xl border ${feature.border} overflow-hidden`}
              >
                {/* Animated Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {feature.particles.map((particle, pIdx) => (
                    <motion.div
                      key={pIdx}
                      className="absolute text-2xl opacity-20"
                      style={{
                        left: `${20 + pIdx * 25}%`,
                        top: `${10 + pIdx * 15}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 360, 0],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 3 + pIdx,
                        repeat: Infinity,
                        delay: pIdx * 0.5,
                      }}
                    >
                      {particle}
                    </motion.div>
                  ))}
                </div>

                {/* Image Container */}
                <motion.div
                  className="relative mb-8"
                  animate={{
                    y: hoveredCard === idx ? -10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-48 h-48 mx-auto">
                    {/* Outer Glow Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        boxShadow: hoveredCard === idx 
                          ? [`0 0 40px ${idx === 0 ? 'rgba(6, 182, 212, 0.6)' : idx === 1 ? 'rgba(147, 51, 234, 0.6)' : 'rgba(20, 184, 166, 0.6)'}`]
                          : ["0 0 20px rgba(255,255,255,0.1)"]
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Image with Gradient Border */}
                    <div className="relative w-full h-full rounded-full border-4 border-white/20 p-2 bg-gradient-to-br from-gray-900 to-black">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent" />
                      <motion.div
                        className="relative w-full h-full rounded-full overflow-hidden"
                        animate={{
                          scale: hoveredCard === idx ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={feature.img}
                          alt={feature.title}
                          fill
                          className="object-cover rounded-full"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        {/* Image Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </motion.div>
                    </div>

                    {/* Floating Icon Badge */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 backdrop-blur-sm flex items-center justify-center"
                      animate={{
                        y: [0, -8, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: idx * 0.5,
                      }}
                    >
                      <span className="text-3xl">{feature.icon}</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <motion.h3
                    className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: hoveredCard === idx ? "100% 50%" : "0% 50%",
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 text-center leading-relaxed mb-6"
                    animate={{
                      opacity: hoveredCard === idx ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.desc}
                  </motion.p>

                  {/* Animated Progress Line */}
                  <div className="h-1 bg-gray-800 rounded-full overflow-hidden mb-6">
                    <motion.div
                      className="h-full"
                      style={{
                        background: `linear-gradient(90deg, 
                          ${idx === 0 ? '#06b6d4' : idx === 1 ? '#8b5cf6' : '#10b981'}, 
                          ${idx === 0 ? '#3b82f6' : idx === 1 ? '#ec4899' : '#0d9488'})`,
                      }}
                      initial={{ width: "0%" }}
                      animate={{ width: hoveredCard === idx ? "100%" : "60%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Hover Action Indicator */}
                  <motion.div
                    className="flex items-center justify-center gap-2 text-sm text-gray-400"
                    animate={{
                      opacity: hoveredCard === idx ? 1 : 0.5,
                    }}
                  >
                
                  </motion.div>
                </div>

                {/* Bottom Gradient Accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl"
                  style={{
                    background: `linear-gradient(90deg, 
                      ${idx === 0 ? '#06b6d4' : idx === 1 ? '#8b5cf6' : '#10b981'}, 
                      ${idx === 0 ? '#3b82f6' : idx === 1 ? '#ec4899' : '#0d9488'})`,
                  }}
                  animate={{
                    opacity: hoveredCard === idx ? 1 : 0.5,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

  
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
};

export default Feature;
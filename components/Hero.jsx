"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "50K+", label: "Active Coders" },
  { value: "1K+", label: "Resources" },
  { value: "50+", label: "Tech Stacks" },
  { value: "5K+", label: "Success Stories" },
];

const quickLinks = [
  { name: "Computer Science MCQ", link: "/mcq" },
  { name: "Roadmap to Tech World", link: "/roadmap" },
  { name: "Interview Preparation", link: "/interview" },
  { name: "Computer Fundamental Terms", link: "/glossary" },
  { name: "Online Courses - Personal Training", link: "/courses" },
  { name: "Find Computer Institutes in India", link: "/institute" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT SIDE */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-sm text-cyan-300"
            >
              AI Powered Learning Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Code The{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed"
            >
              Learn modern technologies with structured roadmap,
              interactive coding, and real-world projects.
              From beginner to advanced — everything in one place.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
              {stats.map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl sm:text-2xl font-bold text-cyan-400">
                    {item.value}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="w-full max-w-md space-y-4">

              {quickLinks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    boxShadow: [
                      "0 0 5px rgba(6, 182, 212, 0.4)",
                      "0 0 20px rgba(6, 182, 212, 0.8)",
                      "0 0 5px rgba(6, 182, 212, 0.4)"
                    ]
                  }}
                  transition={{
                    opacity: { duration: 0.5 },
                    boxShadow: { duration: 2, repeat: Infinity }
                  }}
                  className="rounded-lg"
                >
                  <Link href={item.link}>
                    <button className="w-full py-3 rounded-lg bg-white/10 border border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 font-medium text-center">
                      {item.name}
                    </button>
                  </Link>
                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

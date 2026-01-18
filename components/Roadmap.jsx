'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  FaCode,
  FaDatabase,
  FaShieldAlt,
} from 'react-icons/fa';

const roadmapData = [
  {
    id: 8,
    name: "Cyber Security",
    category: ["Cyber Security"],
    link: "/roadmap/cyber-security",
    icon: <FaShieldAlt className="text-4xl text-red-500" />,
    gradient: "from-red-600 to-orange-600",
    description: "Master cyber defense, ethical hacking, and network security fundamentals."
  },
  {
    id: 1,
    name: "Frontend Developer",
    category: ["Web Development"],
    link: "/roadmap/frontend",
    icon: <FaCode className="text-4xl text-green-400" />,
    gradient: "from-green-400 to-blue-500",
    description: "Learn HTML, CSS, JavaScript, and frameworks like React to build user interfaces."
  },
  {
    id: 2,
    name: "Backend Developer",
    category: ["Web Development"],
    link: "/roadmap/backend",
    icon: <FaDatabase className="text-4xl text-blue-400" />,
    gradient: "from-blue-400 to-indigo-500",
    description: "Master Node.js, databases, and APIs to handle server-side logic."
  },
  {
    id: 3,
    name: "Full Stack Developer",
    category: ["Web Development"],
    link: "/roadmap/fullstack",
    icon: <FaCode className="text-4xl text-purple-400" />,
    gradient: "from-purple-400 to-pink-500",
    description: "Combine frontend and backend skills to become a full-stack web developer."
  },
  {
    id: 4,
    name: "React Js",
    category: ["Web Development"],
    link: "/roadmap/react",
    icon: <FaCode className="text-4xl text-cyan-400" />,
    gradient: "from-cyan-400 to-blue-600",
    description: "Dive deep into ReactJS and master modern frontend development."
  },
];

const Roadmaps = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-semibold mb-12"
      >
        Learning Roadmaps
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
        }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
      >
        {roadmapData.map((roadmap, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            className={`rounded-xl border border-gray-700 hover:border-indigo-500 transition-all cursor-pointer p-8 text-center shadow-md hover:shadow-indigo-500/30 bg-gray-800/60`}
            onClick={() => router.push(roadmap.link)}
          >
            <div className="flex justify-center mb-4">{roadmap.icon}</div>
            <h3 className="text-xl font-medium mb-2">{roadmap.name}</h3>
            <p className="text-gray-400 text-sm">{roadmap.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Roadmaps;

'use client';
import React, { useState } from 'react';
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
    link: "/roadmap/cyber-security",
    icon: <FaShieldAlt className="text-4xl text-red-500" />,
    description: "Master cyber defense, ethical hacking, and network security fundamentals."
  },
  {
    id: 1,
    name: "Frontend Developer",
    link: "/roadmap/frontend",
    icon: <FaCode className="text-4xl text-green-500" />,
    description: "Learn HTML, CSS, JavaScript, and frameworks like React to build user interfaces."
  },
  {
    id: 2,
    name: "Backend Developer",
    link: "/roadmap/backend",
    icon: <FaDatabase className="text-4xl text-blue-500" />,
    description: "Master Node.js, databases, and APIs to handle server-side logic."
  },
  {
    id: 3,
    name: "Full Stack Developer",
    link: "/roadmap/fullstack",
    icon: <FaCode className="text-4xl text-purple-500" />,
    description: "Combine frontend and backend skills to become a full-stack web developer."
  },
  {
    id: 4,
    name: "React Js",
    link: "/roadmap/react",
    icon: <FaCode className="text-4xl text-cyan-500" />,
    description: "Dive deep into ReactJS and master modern frontend development."
  },
];

const Roadmaps = () => {
  const router = useRouter();
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-[#ecf0f3] py-20 px-6">

      {/* Heading */}
      <h2 className="text-center text-4xl font-semibold mb-16 text-gray-700">
        Learning Roadmaps
      </h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">

        {roadmapData.map((roadmap, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => router.push(roadmap.link)}
            className={`cursor-pointer p-10 rounded-3xl transition-all duration-300 text-center bg-[#ecf0f3]
            
            ${
              hovered === index
                ? "shadow-[inset_8px_8px_16px_#c5c9cc,inset_-8px_-8px_16px_#ffffff]"
                : "shadow-[8px_8px_16px_#c5c9cc,-8px_-8px_16px_#ffffff]"
            }
            
            `}
          >

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full 
              bg-[#ecf0f3] shadow-[6px_6px_12px_#c5c9cc,-6px_-6px_12px_#ffffff]">
                {roadmap.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              {roadmap.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {roadmap.description}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Roadmaps;
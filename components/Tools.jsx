'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaCode, FaKeyboard, FaBalanceScale,FaPalette, FaBook, FaFileAlt, FaCodeBranch } from 'react-icons/fa';

const toolsData = [
  {
    name: 'Code Editor',
    icon: <FaCode className="text-4xl text-indigo-500" />,
    description: 'Online editor for HTML, CSS, JS & React code.',
    route: '/main/compiler',
  },
  {
    name: 'Unit Converter',
    icon: <FaBalanceScale className="text-4xl text-pink-500" />,
    description: 'Convert length, Data Storage, weight, temperature and more.',
    route: '/tools/education/unit-converter',
  },
  {
    name: 'Typing Speed Test',
    icon: <FaKeyboard className="text-4xl text-green-500" />,
    description: 'Test your typing speed and accuracy.',
    route: '/tools/education/typing-speed',
  },
  {
    name: 'Dictionary',
    icon: <FaBook className="text-4xl text-yellow-500" />,
    description: 'Find definitions and synonyms instantly.',
    route: '/glossary',
  },
  {
    name: 'Word Counter',
    icon: <FaFileAlt className="text-4xl text-blue-500" />,
    description: 'Count words, characters, and sentences in text.',
    route: '/tools/education/word-counter',
  },
  {
    name: 'JSON Formatter',
    icon: <FaCodeBranch className="text-4xl text-red-500" />,
    description: 'Format and beautify your JSON data easily.',
    route: '/tools/education/json-formatter',
  },
   {
    name: 'Color Picker',
    icon: <FaPalette className="text-4xl text-blue-500" />,
    description: 'Pick and generate color gradients.',
    route: '/tools/education/color-picker',
  },
  {
    name: 'Random Data Generator',
    icon: <FaPalette className="text-4xl text-red-500" />,
    description: 'Generate random names, emails, addresses, and phone numbers.',
    route: '/tools/education/fake-data-generator',
  },
  {
    name: 'IP Address & Location Finder',
    icon: <FaPalette className="text-4xl text-green-500" />,
    description: 'Find the location and details of any IP address.',
    route: '/tools/education/ip-checker',
  }
];

const Tools = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-semibold mb-12"
      >
        Educational Tools
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
        {toolsData.map((tool, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-800/60 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all cursor-pointer p-8 text-center shadow-md hover:shadow-indigo-500/30"
            onClick={() => router.push(tool.route)}
          >
            <div className="flex justify-center mb-4">{tool.icon}</div>
            <h3 className="text-xl font-medium mb-2">{tool.name}</h3>
            <p className="text-gray-400 text-sm">{tool.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tools;

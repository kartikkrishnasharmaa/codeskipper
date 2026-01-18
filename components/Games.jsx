'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaBrain, FaQuestion, FaProjectDiagram } from 'react-icons/fa';

const gamesData = [
  {
    name: 'Memory Card Game',
    icon: <FaBrain className="text-4xl text-indigo-400" />,
    description: 'Match tech & programming symbols by flipping cards.',
    route: '/tools/game/memory-game',
  },
  {
    name: 'Hangman',
    icon: <FaQuestion className="text-4xl text-red-400" />,
    description: 'Guess the hidden tech word before it\'s too late!',
    route: '/tools/game/hangman',
  },
  {
    name: 'DSA Sorting Visualizer',
    icon: <FaProjectDiagram className="text-4xl text-green-400" />,
    description: 'Visualize sorting algorithms step by step.',
    route: '/tools/game/sorting',
  },
];

const Games = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-800 to-pink-900 text-white py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-semibold mb-12"
      >
        Fun Games
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
        {gamesData.map((game, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-br from-gray-800/60 via-gray-700/40 to-gray-800/50 rounded-xl border border-gray-700 hover:border-indigo-400 transition-all cursor-pointer p-8 text-center shadow-md hover:shadow-indigo-500/50"
            onClick={() => router.push(game.route)}
          >
            <div className="flex justify-center mb-4">{game.icon}</div>
            <h3 className="text-xl font-medium mb-2">{game.name}</h3>
            <p className="text-gray-300 text-sm">{game.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Games;

'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaBrain, FaQuestion, FaProjectDiagram } from 'react-icons/fa';

const gamesData = [
  {
    name: 'Memory Card Game',
    icon: <FaBrain className="text-3xl text-indigo-500" />,
    description: 'Match tech & programming symbols by flipping cards.',
    route: '/tools/game/memory-game',
  },
  {
    name: 'Hangman',
    icon: <FaQuestion className="text-3xl text-red-500" />,
    description: "Guess the hidden tech word before it's too late!",
    route: '/tools/game/hangman',
  },
  {
    name: 'DSA Sorting Visualizer',
    icon: <FaProjectDiagram className="text-3xl text-green-500" />,
    description: 'Visualize sorting algorithms step by step.',
    route: '/tools/game/sorting',
  },
];

const Games = () => {
  const router = useRouter();
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-[#ecf0f3] py-24 px-6">

      {/* Heading */}
      <h2 className="text-center text-4xl font-bold mb-16 text-gray-700">
        Fun Games
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">

        {gamesData.map((game, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => router.push(game.route)}
            className={`cursor-pointer p-10 rounded-3xl text-center transition-all duration-300 bg-[#ecf0f3]

            ${
              hovered === index
                ? "shadow-[inset_8px_8px_16px_#c5c9cc,inset_-8px_-8px_16px_#ffffff]"
                : "shadow-[8px_8px_16px_#c5c9cc,-8px_-8px_16px_#ffffff]"
            }
            
            `}
          >

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#ecf0f3]
              shadow-[6px_6px_12px_#c5c9cc,-6px_-6px_12px_#ffffff]">
                {game.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              {game.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {game.description}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Games;
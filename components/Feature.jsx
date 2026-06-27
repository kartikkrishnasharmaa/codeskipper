"use client";
import Image from "next/image";
import React, { useState } from "react";

const Feature = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      title: "Practice Coding",
      desc: "The best way to learn is by doing! Practice hands-on coding with our quantum AI compiler that adapts to your skill level in real-time.",
      img: "/Images/first.png",
      icon: "💻",
    },
    {
      title: "Expert Content",
      desc: "Our AI-powered platform continuously crafts tutorials that adapt in real-time. Stay ahead with content that evolves with technology trends.",
      img: "/Images/second.png",
      icon: "🧠",
    },
    {
      title: "Beginner Friendly",
      desc: "Learn coding through immersive tutorials. AI adapts complexity based on your progress for optimal learning curve.",
      img: "/Images/third.png",
      icon: "👨‍🚀",
    },
  ];

  return (
    <section className="w-full bg-[#ecf0f3] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-700 mb-6">
            Why Choose Code Skipper ?
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform from beginner to expert through our learning ecosystem.
            Whether launching your career or mastering new skills — Code Skipper evolves with you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`p-10 rounded-3xl transition-all duration-300 
              
              ${hoveredCard === idx
                  ? "shadow-[inset_8px_8px_16px_#c5c9cc,inset_-8px_-8px_16px_#ffffff]"
                  : "shadow-[8px_8px_16px_#c5c9cc,-8px_-8px_16px_#ffffff]"
                }
              
              bg-[#ecf0f3]`}
            >
              {/* Image */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full flex items-center justify-center 
                shadow-[8px_8px_16px_#c5c9cc,-8px_-8px_16px_#ffffff] bg-[#ecf0f3]">
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    width={80}
                    height={80}
                  />
                </div>
              </div>

              {/* Icon */}
              <div className="text-center text-3xl mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-center text-gray-700 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
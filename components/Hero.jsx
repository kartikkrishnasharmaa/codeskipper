"use client";
import Link from "next/link";
import { useState } from "react";

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
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-[#ecf0f3] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* Tag */}
            <div className="inline-block px-6 py-2 rounded-full text-sm font-medium text-gray-700
            bg-[#ecf0f3] shadow-[6px_6px_12px_#c5c9cc,-6px_-6px_12px_#ffffff]">
              AI Powered Learning Platform
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight">
              Code The <span className="text-indigo-600">Future</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Learn modern technologies with structured roadmap,
              interactive coding, and real-world projects.
              From beginner to advanced — everything in one place.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">

              {stats.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl text-center bg-[#ecf0f3]
                  shadow-[8px_8px_16px_#c5c9cc,-8px_-8px_16px_#ffffff]"
                >
                  <h3 className="text-2xl font-bold text-gray-700">
                    {item.value}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}
         
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {quickLinks.map((item, index) => (
              <Link key={index} href={item.link}>

                <div
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className={`p-6 rounded-2xl cursor-pointer transition text-center
                  bg-[#ecf0f3]

                  ${
                    hovered === index
                      ? "shadow-[inset_8px_8px_16px_#c5c9cc,inset_-8px_-8px_16px_#ffffff]"
                      : "shadow-[8px_8px_16px_#c5c9cc,-8px_-8px_16px_#ffffff]"
                  }

                  `}
                >

                  <p className="text-gray-700 font-semibold">
                    {item.name}
                  </p>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
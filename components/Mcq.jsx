"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const mcqTopics = [
  { title: "HTML", link: "/mcq/html-mcq", image: "/Images/html.png" },
  { title: "DBMS", link: "/mcq/dbms-mcq", image: "/Images/dbmss.png" },
  {
    title: "Computer Networking",
    link: "/mcq/networking-mcq",
    image: "/Images/networking.png",
  },
  { title: "Python", link: "/mcq/python-mcq", image: "/Images/pythonn.png" },
  { title: "CSS", link: "/mcq/css-mcq", image: "/Images/css3.png" },
  {
    title: "JavaScript",
    link: "/mcq/javascript-mcq",
    image: "/Images/javascript.png",
  },
  {
    title: "C Language",
    link: "/mcq/c-language",
    image: "/Images/c-programming.png",
  },
  { title: "MongoDB", link: "/mcq/mongodb-mcq", image: "/Images/mongodb.png" },
];

const Mcq = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-[#ecf0f3] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-700">
            Multiple Choice Questions
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {mcqTopics.map((topic, index) => (
            <Link key={topic.title} href={topic.link}>
              <div
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={`cursor-pointer p-8 rounded-3xl text-center transition-all duration-300 bg-[#ecf0f3]

                ${
                  hovered === index
                    ? "shadow-[inset_8px_8px_16px_#c5c9cc,inset_-8px_-8px_16px_#ffffff]"
                    : "shadow-[8px_8px_16px_#c5c9cc,-8px_-8px_16px_#ffffff]"
                }
                
                `}
              >

                {/* Image */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#ecf0f3]
                  shadow-[6px_6px_12px_#c5c9cc,-6px_-6px_12px_#ffffff]">
                    <Image
                      src={topic.image}
                      width={60}
                      height={60}
                      alt={topic.title}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-700 mb-6">
                  {topic.title}
                </h3>

                {/* Button */}
                <button className="px-6 py-2 text-sm font-semibold rounded-xl bg-[#ecf0f3] text-gray-700
                shadow-[6px_6px_12px_#c5c9cc,-6px_-6px_12px_#ffffff]
                hover:shadow-[inset_6px_6px_12px_#c5c9cc,inset_-6px_-6px_12px_#ffffff] transition">
                  Explore
                </button>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Mcq;
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const bgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (bgRef.current) {
      const { left, top } = bgRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      bgRef.current.style.setProperty("--x", `${x}px`);
      bgRef.current.style.setProperty("--y", `${y}px`);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="text-white w-full bg-white dark:bg-gray-900 body-font relative overflow-hidden"
      onMouseMove={handleMouseMove}
      ref={bgRef}
    >
      {/* Glowing background */}
      <div className="absolute inset-0 dynamic-bg z-0"></div>

      {/* Full width container */}
      <div className="w-full px-12 pb-4  flex md:flex-row flex-col items-center justify-center relative z-10">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="group transition-all duration-500 ease-in-out"
            variants={itemVariants}
          >
            <motion.h1
              className="title-font sm:text-5xl text-4xl mb-6 font-bold text-white font-sans transform transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110 group-hover:rotate-1"
            >
              Learn Anytime &<br className="hidden md:inline" />{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Learn Anywhere
              </span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="mb-8 text-lg text-white leading-relaxed font-sans max-w-lg"
            variants={itemVariants}
          >
            Master computer programming technologies from{" "}
            <span className="font-semibold text-white">Basic to Advanced</span>,
            with real-world practice examples and useful references –{" "}
            <span className="italic text-indigo-400">completely free</span>.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-3"
            variants={containerVariants}
          >
            {[
              {
                href: "/mcq",
                text: "MCQ",
                colors: "from-blue-600 to-indigo-700",
              },

              {
                href: "/test",
                text: "Test",
                colors: "from-emerald-600 to-teal-600",
              },

              {
                href: "/compiler/index.html",
                text: "Online Compiler",
                colors: "from-blue-600 to-indigo-700",
              },
            ].map(({ href, text, colors }, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={href}>
                  <motion.button
                    className={`whitespace-nowrap rounded-xl py-3 px-6 text-white bg-gradient-to-r ${colors} font-bold shadow-lg hover:shadow-xl transition-all duration-300 font-sans`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {text}
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative z-10 group"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div className="relative p-1 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg double-border group-hover:scale-105 transform transition-all duration-500 ease-in-out max-h-[490px]">
            <div className="relative w-full h-0 pb-[127%] rounded-lg overflow-hidden border-4 border-white">
              <Image
                className="absolute top-0 left-0 w-full h-full object-contain object-center group-hover:brightness-110 group-hover:contrast-125 group-hover:scale-105 transition-all duration-500 ease-in-out"
                alt="hero-banner"
                src="/Images/kartik.png"
                fill
                sizes="(max-width: 778px) 100vw, (max-width: 1024px) 50vw, 650px"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

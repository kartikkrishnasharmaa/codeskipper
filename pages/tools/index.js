'use client';
import React from "react";
import SimpleLayout from "@/components/SimpleLayout";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Code,
  FileText,
  Keyboard,
  BookOpen,
  GitBranch,
  Palette,
  Scale,
  Globe,
  Database,
  MapPin,
} from "lucide-react";

// -------------------- Animation Variants --------------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  hover: {
    y: -5,
    scale: 1.02,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};

// -------------------- Categories & Tools --------------------
const categories = [
  {
    title: "Development Utilities",
    description:
      "Smart tools designed to make coding, debugging, and data formatting easier for web developers and learners.",
    color: "from-indigo-500 to-blue-500",
    tools: [
      {
        name: "Code Editor",
        icon: Code,
        href: "/main/compiler",
        description:
          "A fast, responsive online editor supporting HTML, CSS, JavaScript. Ideal for testing code snippets instantly.",
        features: ["Supports HTML, CSS, JS", "Instant Preview", "Clean Syntax UI"],
      },
      {
        name: "Color Picker",
        icon: Palette,
        href: "/tools/education/color-picker",
        description:
          "Pick, adjust, and copy colors in HEX, RGB, or HSL formats. Perfect for developers and designers working with web interfaces.",
        features: ["HEX, RGB, HSL Conversion", "Live Preview", "Clipboard Copy"],
      },
      {
        name: "JSON Formatter",
        icon: GitBranch,
        href: "/tools/education/json-formatter",
        description:
          "Beautify, format, and validate JSON data effortlessly. Detect syntax errors and get structured results instantly.",
        features: ["Auto-formatting", "Syntax Highlight", "Error Detection"],
      },
      // Newly added developer utilities
      {
        name: "Random Data Generator",
        icon: Database,
        href: "/tools/education/fake-data-generator",
        description:
          "Generate realistic dummy data: names, emails, addresses, phone numbers and more. Useful for testing and demos.",
        features: ["Customizable fields", "Bulk generation", "Copy & CSV export"],
      },
      {
        name: "IP Address & Location Finder",
        icon: Globe,
        href: "/tools/education/ip-checker",
        description:
          "Lookup IP addresses to find geolocation, ISP, timezone, and other network details quickly.",
        features: ["IP lookup & geolocation", "ASN/ISP info", "Copyable results"],
      },
    ],
  },
  {
    title: "Learning & Productivity Tools",
    description:
      "Enhance your typing speed, improve vocabulary, and stay accurate with these helpful learning tools.",
    color: "from-green-500 to-emerald-500",
    tools: [
      {
        name: "Typing Speed Test",
        icon: Keyboard,
        href: "/tools/education/typing-speed",
        description:
          "Challenge your typing skills with real-time speed and accuracy tracking. Ideal for students and professionals.",
        features: ["WPM & Accuracy Tracking", "Live Feedback", "Rank Comparison"],
      },
      {
        name: "Dictionary",
        icon: BookOpen,
        href: "/glossary",
        description:
          "Find word meanings, synonyms, and pronunciation in seconds. A reliable companion for learners and writers.",
        features: ["Detailed Meanings", "Synonyms", "Daily Vocabulary"],
      },
      {
        name: "Word Counter",
        icon: FileText,
        href: "/tools/education/word-counter",
        description:
          "Count words, characters, and sentences effortlessly. Perfect for writers, students, and content creators.",
        features: ["Real-time Count", "Character Limit Checker", "Sentence Stats"],
      },
    ],
  },
  {
    title: "Conversion Tools",
    description:
      "Quickly convert between units of measurement — from data storage to temperature, weight, and more.",
    color: "from-pink-500 to-rose-500",
    tools: [
      {
        name: "Unit Converter",
        icon: Scale,
        href: "/tools/education/unit-converter",
        description:
          "Convert values between multiple units — length, data storage, weight, temperature, and more. Designed for precision.",
        features: ["Data Storage Conversion", "Length & Weight Units", "Temperature Scale Support"],
      },
    ],
  },
];

// -------------------- Main Component --------------------
const ToolsPage = () => {
  return (
    <>
      <Head>
        <title>Online Developer Tools | CodeSkipper</title>
        <meta
          name="description"
          content="Explore CodeSkipper's collection of free developer tools for students and developers — from code editor and typing speed test to JSON formatter and dictionary. Perfect for learning, productivity, and development."
        />
        <meta
          name="keywords"
          content="developer tools, code editor, typing speed test, unit converter, JSON formatter, word counter, online dictionary, developers tools, student utilities"
        />
        <meta property="og:title" content="CodeSkipper | Free Online Developer Tools for Students & Developers" />
        <meta
          property="og:description"
          content="Free and interactive tools built for learners, programmers, and educators. Improve productivity, accuracy, and learning efficiency."
        />
        <meta property="og:image" content="/Images/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codeskipper.in/tools" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codeskipper.in/tools" />
      </Head>
      <SimpleLayout>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto px-6 lg:px-12 py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
        >
          {/* Header Section */}
          <motion.div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Educational & Developer Tools
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore free and powerful tools designed to boost your productivity, enhance learning,
              and make coding simpler — all in one place on{' '}
              <strong className="text-blue-600">CodeSkipper</strong>.
            </p>
          </motion.div>
          <motion.div className="text-center mt-20 bg-gray-50 border border-gray-200 rounded-2xl p-10 shadow-inner">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Learn, Build & Explore Freely
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              These tools are designed to simplify your digital journey. Whether you’re a student,
              developer, or educator — CodeSkipper gives you the resources to learn, experiment,
              and grow efficiently.
            </p>
          </motion.div>

          {/* Category Sections */}
          <div className="space-y-16 mt-10">
            {categories.map((category, index) => (
              <motion.section
                key={index}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}
                  ></div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-8">{category.description}</p>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.tools.map((tool, idx) => (
                    <motion.div
                      key={idx}
                      variants={cardVariants}
                      whileHover="hover"
                      className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
                    >
                      <Link href={tool.href}>
                        <div className="flex flex-col h-full">
                          {/* Icon + Title */}
                          <div className="flex items-center space-x-3 mb-3">
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}
                            >
                              <tool.icon className="w-5 h-5 text-black" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                              {tool.name}
                            </h3>
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                            {tool.description}
                          </p>

                          {/* Features */}
                          <ul className="space-y-1 mt-auto">
                            {tool.features.map((feature, fidx) => (
                              <li
                                key={fidx}
                                className="flex items-center text-xs text-gray-500"
                              >
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Footer */}

        </motion.div>
      </SimpleLayout>
    </>
  );
};

export default ToolsPage;

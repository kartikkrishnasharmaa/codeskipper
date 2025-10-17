import RoadmapLayout from "@/components/layouts/RoadmapLayout";
import Head from "next/head";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Icons for roadmap sections (using inline SVG for simplicity)
const icons = {
  html: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#E34F26"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="inline-block mr-2"
    >
      <path d="M1.5 0h21L19.479 21.597 12 24l-7.479-2.403L1.5 0zM17.846 6.502h-3.42v2.606h1.988l-.181 2.037-1.807.499v2.099h.077c1.711-.106 3.364-.616 4.688-1.507l-1.206-2.076c-.552.334-1.175.598-1.888.722l.38-4.36z" />
    </svg>
  ),
  css: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#1572B6"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="inline-block mr-2"
    >
      <path d="M1.5 0h21L19.479 21.597 12 24l-7.479-2.403L1.5 0zM16.931 6.5h-3.23v2.264h1.83l-.15 2.04-1.68.457v2.127h.137c1.418-.096 2.797-.463 4.108-1.117l-1.245-2.05c-.45.228-.938.377-1.464.45l.258-2.36z" />
    </svg>
  ),
  git: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#F05033"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="inline-block mr-2"
    >
      <path d="M12 0c-6.628 0-12 5.372-12 12 0 6.627 5.372 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zM18.615 8.193a2.699 2.699 0 1 0-3.707-3.71 2.7 2.7 0 0 0 3.707 3.71zM9.071 10.998a2.687 2.687 0 1 0-3.703-3.703 2.687 2.687 0 0 0 3.703 3.703zM19.994 17.31a2.68 2.68 0 1 0-3.686-3.685 2.68 2.68 0 0 0 3.686 3.685zM9.009 14.956l7.083-4.324-1.438-2.473-7.09 4.315-.016-.027v1.537c-.001.57.691.915 1.546.97a2.571 2.571 0 0 0 .916-.024z" />
    </svg>
  ),
};

const badgeVariants = {
  important: { backgroundColor: "#EF4444", color: "white" }, // red
  practice: { backgroundColor: "#10B981", color: "white" }, // green
  resource: { backgroundColor: "#3B82F6", color: "white" }, // blue
  tip: { backgroundColor: "#FBBF24", color: "black" }, // yellow
};

const itemTagStyles = {
  important:
    "inline-block bg-red-500 text-white text-xs px-2 py-0.5 rounded ml-2 font-semibold",
  practice:
    "inline-block bg-green-600 text-white text-xs px-2 py-0.5 rounded ml-2 font-semibold",
  resource:
    "inline-block bg-blue-600 text-white text-xs px-2 py-0.5 rounded ml-2 font-semibold",
  tip:
    "inline-block bg-yellow-400 text-black text-xs px-2 py-0.5 rounded ml-2 font-semibold",
};

const roadmapData = [
  {
    id: "basics",
    title: "Basics of Web Development",
    icon: icons.html,
    sections: [
      {
        title: "HTML (HyperText Markup Language)",
        items: [
          {
            text: "Learn HTML5 syntax and structure: <html>, <head>, <body>.",
            type: "important",
          },
          {
            text: "Use semantic tags: <header>, <nav>, <main>, <article>, <section>, <footer>.",
            type: "important",
          },
          {
            text: "Understand attributes: id, class, data-*, alt, src.",
            type: "important",
          },
          {
            text: "Create forms: <form>, <input>, <textarea>, <select>, <button>.",
            type: "practice",
          },
          {
            text: "Implement form validation: required, pattern, minlength, maxlength.",
            type: "practice",
          },
          {
            text: "Learn accessibility (ARIA): role, aria-label, aria-hidden.",
            type: "tip",
          },
          {
            text: "Embed media: <img>, <video>, <audio>, lazy loading with loading='lazy'.",
            type: "resource",
          },
          {
            text: "Structure content with lists: <ul>, <ol>, <li>.",
            type: "important",
          },
          {
            text: "Use meta tags for SEO: <meta name='description'>, <meta name='keywords'>.",
            type: "tip",
          },
          {
            text: "Practice: Build a static portfolio, blog page, or resume page.",
            type: "practice",
          },
        ],
      },
      {
        title: "CSS (Cascading Style Sheets)",
        items: [
          {
            text:
              "Master selectors: element, class (.class), ID (#id), pseudo-classes (:hover, :focus).",
            type: "important",
          },
          {
            text: "Understand the box model: margin, border, padding, content.",
            type: "important",
          },
          {
            text: "Learn CSS properties: color, font-size, background, display.",
            type: "important",
          },
          {
            text: "Explore positioning: static, relative, absolute, fixed, sticky.",
            type: "important",
          },
          {
            text: "Master Flexbox: display: flex, justify-content, align-items, flex-wrap.",
            type: "practice",
          },
          {
            text: "Learn CSS Grid: display: grid, grid-template-columns, gap.",
            type: "practice",
          },
          {
            text: "Use responsive units: px, rem, em, vw, vh, %.",
            type: "important",
          },
          {
            text: "Implement media queries: @media (max-width: 768px).",
            type: "practice",
          },
          {
            text: "Create CSS animations: @keyframes, transition, transform.",
            type: "tip",
          },
          {
            text: "Understand specificity and inheritance: !important, cascade rules.",
            type: "tip",
          },
          {
            text:
              "Explore CSS resets or normalization for cross-browser consistency.",
            type: "resource",
          },
          {
            text: "Practice: Style a responsive landing page or card component.",
            type: "practice",
          },
        ],
      },
      {
        title: "Version Control with Git",
        items: [
          {
            text: "Install Git and configure: git config --global user.name, user.email.",
            type: "important",
          },
          {
            text: "Learn basic commands: git init, git add, git commit, git status.",
            type: "important",
          },
          {
            text: "Understand branching: git branch, git checkout, git merge.",
            type: "tip",
          },
          {
            text:
              "Manage remote repositories: git remote, git push, git pull, git fetch.",
            type: "important",
          },
          {
            text: "Resolve merge conflicts using VS Code or command line.",
            type: "tip",
          },
          {
            text: "Use .gitignore to exclude files (e.g., node_modules/).",
            type: "tip",
          },
          {
            text: "Explore Git workflows: feature branching, Gitflow.",
            type: "resource",
          },
          {
            text: "Practice: Create a local repository and push changes to GitHub.",
            type: "practice",
          },
        ],
      },
    ],
  },
  {
    id: "github",
    title: "GitHub for Collaboration",
    icon: icons.git,
    sections: [
      {
        title: "GitHub Essentials",
        items: [
          {
            text: "Create a GitHub account and set up a profile.",
            type: "important",
          },
          {
            text: "Create repositories: public/private, initialize with README.",
            type: "important",
          },
          {
            text: "Push local projects to GitHub: git push origin main.",
            type: "practice",
          },
          {
            text: "Learn pull requests: create, review, merge.",
            type: "practice",
          },
          {
            text: "Fork repositories and contribute to open-source projects.",
            type: "resource",
          },
          {
            text: "Use GitHub issues to track bugs and tasks.",
            type: "tip",
          },
          {
            text: "Explore GitHub Pages for hosting static websites.",
            type: "resource",
          },
          {
            text: "Practice: Host a simple HTML/CSS project on GitHub Pages.",
            type: "practice",
          },
        ],
      },
    ],
  },
];

const RoadmapItem = ({ text, type }) => {
  return (
    <li className="flex items-center space-x-2">
      <span
        className={`flex-shrink-0 w-3 h-3 rounded-full ${
          type === "important"
            ? "bg-red-500"
            : type === "practice"
            ? "bg-green-600"
            : type === "resource"
            ? "bg-blue-600"
            : "bg-yellow-400"
        }`}
        aria-hidden="true"
      />
      <span>{text}</span>
      <span className={itemTagStyles[type]}>{type.toUpperCase()}</span>
    </li>
  );
};

const Section = ({ section }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded mb-5 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center bg-gray-200 dark:bg-gray-800 px-4 py-3 text-left hover:bg-gray-300 dark:hover:bg-gray-700"
        aria-expanded={open}
      >
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {section.title}
        </h4>
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-600 dark:text-gray-400"
        >
          ▶
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="px-6 py-4 list-disc space-y-3 text-gray-700 dark:text-gray-300"
          >
            {section.items.map((item, idx) => (
              <RoadmapItem key={idx} text={item.text} type={item.type} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const RoadmapSection = ({ section, isActive, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      className="w-full max-w-4xl mx-auto my-8"
    >
      <button
        onClick={onClick}
        className={`flex items-center space-x-3 w-full py-3 px-5 text-left rounded-md shadow-md border transition-colors ${
          isActive
            ? "bg-blue-600 text-white border-blue-700"
            : "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900"
        }`}
        aria-expanded={isActive}
      >
        <span>{section.icon}</span>
        <span className="text-xl font-semibold">{section.title}</span>
      </button>
      {isActive &&
        section.sections.map((subSection, i) => (
          <Section key={i} section={subSection} />
        ))}
    </motion.div>
  );
};

const Home = () => {
  const [activeSection, setActiveSection] = useState(roadmapData[0].id);

  return (
    <RoadmapLayout>
      <Head>
        <title>Frontend Development Roadmap | Unstop Computer</title>
        <meta
          name="description"
          content="Creative and detailed Frontend Development Roadmap with interactive UI, helpful tips, and practice projects."
        />
        <meta
          name="keywords"
          content="frontend roadmap, html, css, git, github, web development, javascript, react"
        />
        <meta property="og:title" content="Frontend Development Roadmap" />
        <meta
          property="og:description"
          content="Master frontend development creatively with an engaging roadmap."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unstopcomputer.tech/roadmap" />
        <link rel="canonical" href="https://unstopcomputer.tech/roadmap" />
      </Head>

      <main className="max-w-5xl mx-auto p-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-5xl font-bold text-blue-700 dark:text-blue-300 mb-8"
        >
          Frontend Development Roadmap
        </motion.h1>

        <div className="flex flex-col space-y-6">
          {roadmapData.map((section) => (
            <RoadmapSection
              key={section.id}
              section={section}
              isActive={activeSection === section.id}
              onClick={() =>
                setActiveSection(
                  activeSection === section.id ? null : section.id
                )
              }
            />
          ))}
        </div>


      </main>
    </RoadmapLayout>
  );
};

export default Home;

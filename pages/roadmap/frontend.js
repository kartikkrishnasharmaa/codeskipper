import RoadmapLayout from "@/components/layouts/RoadmapLayout";
import Head from "next/head";
import { motion } from "framer-motion";

const Home = () => {
  const roadmapVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.4 },
    }),
  };

  const subSectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <RoadmapLayout>
      <Head>
        <title>Frontend Development Roadmap | Unstop Computer</title>
        <meta
          name="description"
          content="Detailed Frontend Development Roadmap focusing on Basics of Web Development, covering HTML, CSS, Git, GitHub, and more."
        />
        <meta
          name="keywords"
          content="frontend roadmap, HTML, CSS, Git, GitHub, web development basics"
        />
        <meta property="og:title" content="Frontend Development Roadmap" />
        <meta
          property="og:description"
          content="Master the basics of frontend development with our detailed roadmap."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unstopcomputer.tech/roadmap" />
        <link rel="canonical" href="https://unstopcomputer.tech/roadmap" />
      </Head>

      <section id="content-wrapper">
        <div className="sm:mx-auto sm:mb-2">
          <section className="mt-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={roadmapVariants}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-blue-300 mb-6">
                Frontend Development Roadmap
              </h1>
            </motion.div>

            <div className="max-w-5xl mx-auto px-4">
              {/* Basics of Web Development */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={roadmapVariants}
                className="mb-8"
              >
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  1. Basics of Web Development
                </h2>

                {/* HTML */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    HTML (HyperText Markup Language)
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Learn HTML5 syntax and structure: <html>, <head>, <body>.",
                      "Use semantic tags: <header>, <nav>, <main>, <article>, <section>, <footer>.",
                      "Understand attributes: id, class, data-*, alt, src.",
                      "Create forms: <form>, <input>, <textarea>, <select>, <button>.",
                      "Implement form validation: required, pattern, minlength, maxlength.",
                      "Learn accessibility (ARIA): role, aria-label, aria-hidden.",
                      "Embed media: <img>, <video>, <audio>, lazy loading with loading='lazy'.",
                      "Structure content with lists: <ul>, <ol>, <li>.",
                      "Use meta tags for SEO: <meta name='description'>, <meta name='keywords'>.",
                      "Practice: Build a static portfolio, blog page, or resume page.",
                      "Resources: MDN Web Docs, W3Schools HTML Tutorial.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* CSS */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    CSS (Cascading Style Sheets)
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Master selectors: element, class (.class), ID (#id), pseudo-classes (:hover, :focus).",
                      "Understand the box model: margin, border, padding, content.",
                      "Learn CSS properties: color, font-size, background, display.",
                      "Explore positioning: static, relative, absolute, fixed, sticky.",
                      "Master Flexbox: display: flex, justify-content, align-items, flex-wrap.",
                      "Learn CSS Grid: display: grid, grid-template-columns, gap.",
                      "Use responsive units: px, rem, em, vw, vh, %.",
                      "Implement media queries: @media (max-width: 768px).",
                      "Create CSS animations: @keyframes, transition, transform.",
                      "Understand specificity and inheritance: !important, cascade rules.",
                      "Explore CSS resets or normalization for cross-browser consistency.",
                      "Practice: Style a responsive landing page or card component.",
                      "Resources: CSS-Tricks, freeCodeCamp CSS Course.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Git */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Version Control with Git
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Install Git and configure: git config --global user.name, user.email.",
                      "Learn basic commands: git init, git add, git commit, git status.",
                      "Understand branching: git branch, git checkout, git merge.",
                      "Manage remote repositories: git remote, git push, git pull, git fetch.",
                      "Resolve merge conflicts using VS Code or command line.",
                      "Use .gitignore to exclude files (e.g., node_modules/).",
                      "Explore Git workflows: feature branching, Gitflow.",
                      "Practice: Create a local repository and push changes to GitHub.",
                      "Resources: Git Documentation, Pro Git Book.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* GitHub */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    GitHub for Collaboration
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Create a GitHub account and set up a profile.",
                      "Create repositories: public/private, initialize with README.",
                      "Push local projects to GitHub: git push origin main.",
                      "Learn pull requests: create, review, merge.",
                      "Fork repositories and contribute to open-source projects.",
                      "Use GitHub issues to track bugs and tasks.",
                      "Explore GitHub Pages for hosting static websites.",
                      "Practice: Host a simple HTML/CSS project on GitHub Pages.",
                      "Resources: GitHub Docs, freeCodeCamp GitHub Tutorial.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Tools & Environment */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Basic Tools & Environment Setup
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Install a code editor: VS Code, Sublime Text, or WebStorm.",
                      "Learn VS Code shortcuts: Ctrl + / (comment), Alt + Up/Down (move lines).",
                      "Install browser extensions: Chrome DevTools, React Developer Tools.",
                      "Use browser DevTools: Inspect elements, debug CSS, analyze network.",
                      "Set up a local development server: live-server or http-server.",
                      "Practice: Debug a webpage layout using Chrome DevTools.",
                      "Resources: VS Code Docs, Chrome DevTools Guide.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Web Development Concepts */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Web Development Concepts
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Understand the Document Object Model (DOM) structure.",
                      "Learn about web accessibility (a11y): screen readers, keyboard navigation.",
                      "Explore basic SEO: meta tags, alt text, semantic HTML.",
                      "Understand cross-browser compatibility: test on Chrome, Firefox, Safari.",
                      "Learn responsive design principles: mobile-first vs. desktop-first.",
                      "Practice: Build an accessible, SEO-friendly static webpage.",
                      "Resources: WebAIM Accessibility Guide, Google SEO Starter Guide.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Projects */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Projects for Practice
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Build a personal portfolio with HTML/CSS.",
                      "Create a blog layout with semantic HTML and responsive CSS.",
                      "Design a simple form with validation and styling.",
                      "Host a project on GitHub Pages and share the link.",
                      "Resources: Frontend Mentor, CodePen for inspiration.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>

            <div className="max-w-5xl mx-auto px-4">
              {/* Intermediate Web Development */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={roadmapVariants}
                className="mb-8"
              >
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  2. Intermediate Web Development
                </h2>

                {/* Advanced CSS */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Advanced CSS
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Master Tailwind CSS: Utility-first classes (flex, grid, p-, m-, bg-, text-).",
                      "Configure Tailwind: Customize tailwind.config.js for themes, colors, breakpoints.",
                      "Build responsive layouts with Tailwind: sm:, md:, lg: prefixes.",
                      "Use Tailwind plugins: @tailwindcss/forms, @tailwindcss/typography.",
                      "Learn CSS Preprocessors (SASS/SCSS): Variables ($color), nesting, mixins.",
                      "Create complex layouts: Multi-column designs with CSS Grid.",
                      "Implement advanced animations: @keyframes for fade, slide, rotate effects.",
                      "Optimize CSS: Use min-w-, max-w-, clamp() for responsive sizing.",
                      "Practice: Build a responsive landing page with Tailwind CSS and SCSS.",
                      "Resources: Tailwind CSS Docs, SASS Guide.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* JavaScript (ES6+) */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    JavaScript (ES6+)
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Learn modern syntax: let, const, arrow functions (=>), template literals.",
                      "Understand destructuring: Objects ({ name, age }) and arrays ([a, b]).",
                      "Use spread/rest operators: ... for arrays/objects, rest for function params.",
                      "Master asynchronous JavaScript: Callbacks, Promises, async/await.",
                      "Fetch data from APIs: Use fetch() with REST APIs (e.g., JSONPlaceholder).",
                      "Manipulate the DOM: querySelector, addEventListener, innerHTML.",
                      "Handle events: Click, input, scroll, and debouncing/throttling.",
                      "Work with localStorage: Store and retrieve data (setItem, getItem).",
                      "Explore modules: import, export for modular JavaScript.",
                      "Practice: Build a to-do list or weather app with API integration.",
                      "Resources: JavaScript.info, MDN JavaScript Docs.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Framer Motion (Basic) */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Framer Motion (Basic)
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Install Framer Motion in a React project: npm install framer-motion.",
                      "Learn basic animations: motion.div, initial, animate, transition.",
                      "Animate properties: opacity, scale, x, y, rotate.",
                      "Use transition: Set duration, ease, delay for smooth effects.",
                      "Implement hover effects: whileHover for scale or opacity changes.",
                      "Practice: Animate a button or card component with fade-in and hover effects.",
                      "Resources: Framer Motion Docs, YouTube tutorials (e.g., Fireship).",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Basic Tooling */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Basic Tooling
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Set up a package manager: npm or yarn for dependency management.",
                      "Use a linter: ESLint for JavaScript, Stylelint for CSS.",
                      "Learn basic build tools: Webpack or Vite for bundling assets.",
                      "Practice: Create a project with Vite, Tailwind, and ESLint.",
                      "Resources: Vite Docs, ESLint Docs.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Projects */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Projects for Practice
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Build an interactive portfolio with Tailwind CSS and JavaScript.",
                      "Create a weather app fetching data from a public API.",
                      "Develop a to-do list with localStorage and Framer Motion animations.",
                      "Resources: Frontend Mentor, CodePen for inspiration.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              {/* Frontend Frameworks & Libraries */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={roadmapVariants}
                className="mb-8"
              >
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  3. Frontend Frameworks & Libraries
                </h2>

                {/* React.js */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    React.js
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Learn React basics: Components, JSX, props, and state.",
                      "Master hooks: useState, useEffect, useRef for state and side effects.",
                      "Understand component lifecycle: Mounting, updating, unmounting.",
                      "Use React Router: BrowserRouter, Route, Link for navigation.",
                      "Implement conditional rendering: Ternary operators, && for UI logic.",
                      "Handle forms: Controlled vs. uncontrolled components, form validation.",
                      "Fetch data: Use fetch or axios for API calls in React.",
                      "Optimize components: Avoid unnecessary re-renders with React.memo.",
                      "Practice: Build a blog or e-commerce app with React Router.",
                      "Resources: React Official Docs, Scrimba React Course.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Framer Motion (Intermediate) */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Framer Motion (Intermediate)
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Use variants for reusable animation configurations.",
                      "Implement page transitions: Fade-in/out for route changes.",
                      "Create staggered animations: Animate lists with staggerChildren.",
                      "Use whileInView for viewport-based animations.",
                      "Explore gestures: whileHover, whileTap for interactive effects.",
                      "Practice: Animate a list of cards with staggered fade-in and hover scaling.",
                      "Resources: Framer Motion Docs (Variants), Egghead.io.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* State Management */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    State Management
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Learn React Context API: Create and consume context for global state.",
                      "Explore Redux: Actions, reducers, store for complex apps.",
                      "Use Redux Toolkit: Simplify Redux setup with createSlice.",
                      "Manage form state: Libraries like react-hook-form or formik.",
                      "Practice: Build a shopping cart with Context API or Redux.",
                      "Resources: Redux Docs, Kent C. Dodds’ Context API Tutorials.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* React Ecosystem */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    React Ecosystem
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Learn component libraries: Material-UI, Ant Design for pre-built UI.",
                      "Use react-query or swr for data fetching and caching.",
                      "Explore static site generation: Next.js for SEO-friendly apps.",
                      "Practice: Build a blog with Next.js and a component library.",
                      "Resources: Next.js Docs, React Query Docs.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Projects */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Projects for Practice
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Build an e-commerce app with React, React Router, and Framer Motion.",
                      "Create a dashboard with state management and API integration.",
                      "Develop a portfolio with animated page transitions using Framer Motion.",
                      "Resources: Frontend Mentor, GitHub for project ideas.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>

            <div className="max-w-5xl mx-auto px-4">
              {/* Tools & Ecosystem */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={roadmapVariants}
                className="mb-8"
              >
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  4. Tools & Ecosystem
                </h2>

                {/* Build Tools */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Build Tools
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Learn Vite: Fast build tool, configure with vite.config.js.",
                      "Explore Webpack: Customize bundling, loaders (e.g., css-loader), plugins.",
                      "Understand Parcel: Zero-config bundler for quick setups.",
                      "Learn module systems: ES Modules (import/export) vs. CommonJS.",
                      "Set up a project with Vite + React + Tailwind CSS.",
                      "Optimize assets: Minify CSS/JS, bundle images with vite-plugin-image-optimizer.",
                      "Practice: Create a React project with Vite and bundle for production.",
                      "Resources: Vite Docs, Webpack Documentation.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Code Quality Tools */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Code Quality Tools
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Use ESLint: Enforce JavaScript coding standards, integrate with VS Code.",
                      "Configure Prettier: Auto-format code (prettier.config.js).",
                      "Learn Stylelint: Lint CSS/SCSS for errors and style issues.",
                      "Set up Husky: Run linting/formatting on Git commits with pre-commit hooks.",
                      "Practice: Add ESLint, Prettier, and Husky to a React project.",
                      "Resources: ESLint Docs, Prettier Docs, Stylelint Docs.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Testing Frameworks */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Testing Frameworks
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Learn Jest: Write unit tests for JavaScript and React components.",
                      "Use React Testing Library: Test component rendering and behavior.",
                      "Explore Cypress: Write end-to-end (E2E) tests for user flows.",
                      "Understand mocking: Mock APIs and modules in Jest for isolated testing.",
                      "Practice: Write unit tests for a React component and E2E tests for a form.",
                      "Resources: Jest Docs, React Testing Library Docs, Cypress Docs.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* GitHub (Advanced) */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    GitHub (Advanced)
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Set up GitHub Actions: Create CI/CD pipelines for testing/deployment.",
                      "Automate tasks: Run ESLint, Jest, and deploy to Vercel via GitHub Actions.",
                      "Use GitHub Dependabot: Auto-update dependencies for security patches.",
                      "Explore GitHub Codespaces: Cloud-based development environment setup.",
                      "Practice: Create a CI/CD pipeline for a React app using GitHub Actions.",
                      "Resources: GitHub Actions Docs, freeCodeCamp CI/CD Tutorials.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Other Tools */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Other Tools
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Learn package managers: npm, yarn, or pnpm for dependency management.",
                      "Use Postman: Test APIs and mock responses for frontend development.",
                      "Explore browser DevTools extensions: React Developer Tools, Redux DevTools.",
                      "Practice: Test an API with Postman and debug a React app with DevTools.",
                      "Resources: npm Docs, Postman Learning Center.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Projects */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Projects for Practice
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Build a React app with Vite, ESLint, and Jest for testing.",
                      "Set up a CI/CD pipeline with GitHub Actions for a portfolio site.",
                      "Create a project with automated formatting using Prettier and Husky.",
                      "Resources: Frontend Mentor, GitHub for project ideas.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              {/* Deployment & Hosting */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={roadmapVariants}
                className="mb-8"
              >
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  5. Deployment & Hosting
                </h2>

                {/* Deployment Platforms */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Deployment Platforms
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Learn Vercel: Deploy React/Next.js apps with Git integration.",
                      "Explore Netlify: Host static sites, set up domain and SSL.",
                      "Use Firebase Hosting: Deploy static assets with Firebase CLI.",
                      "Understand environment variables: Manage API keys with .env files.",
                      "Set up custom domains: Configure DNS settings for Vercel/Netlify.",
                      "Practice: Deploy a React app to Vercel with a custom domain.",
                      "Resources: Vercel Docs, Netlify Docs, Firebase Hosting Guide.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Performance Optimization */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Performance Optimization
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Optimize images: Use next/image or vite-plugin-image-optimizer.",
                      "Implement lazy loading: Lazy-load images and components with React.lazy.",
                      "Minify assets: Use build tools to reduce CSS/JS file sizes.",
                      "Enable caching: Set HTTP headers for static assets in Vercel/Netlify.",
                      "Use Lighthouse: Audit performance, SEO, and accessibility scores.",
                      "Practice: Optimize a React app and improve Lighthouse score to 90+.",
                      "Resources: Google Lighthouse, Web.dev Performance Guide.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* SEO */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    SEO (Search Engine Optimization)
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Implement meta tags: <meta name='description'>, <meta name='keywords'>.",
                      "Use structured data: JSON-LD for rich snippets (e.g., schema.org).",
                      "Optimize URLs: Use clean, descriptive URLs with Next.js routing.",
                      "Generate sitemaps: Create sitemap.xml for search engine crawling.",
                      "Practice: Add SEO meta tags and structured data to a Next.js app.",
                      "Resources: Moz SEO Guide, Google Search Console.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Accessibility */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Accessibility (a11y)
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Ensure keyboard navigation: Use tabindex, focus management.",
                      "Add ARIA attributes: aria-label, aria-live for screen readers.",
                      "Test with screen readers: NVDA, VoiceOver for accessibility compliance.",
                      "Use semantic HTML: <nav>, <main>, <button> for better a11y.",
                      "Practice: Audit a webpage with axe DevTools and fix accessibility issues.",
                      "Resources: WebAIM Accessibility Checklist, axe DevTools.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Monitoring and Maintenance */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monitoring and Maintenance
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Set up analytics: Google Analytics or Vercel Analytics for user tracking.",
                      "Monitor uptime: Use tools like UptimeRobot for site availability.",
                      "Handle errors: Implement error boundaries in React for crash recovery.",
                      "Update dependencies: Use npm outdated or Dependabot for security.",
                      "Practice: Add Google Analytics to a deployed app and monitor performance.",
                      "Resources: Google Analytics Docs, UptimeRobot.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Projects */}
                <motion.div
                  variants={subSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6"
                >
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Projects for Practice
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {[
                      "Deploy a React portfolio to Vercel with optimized performance.",
                      "Create a blog with Next.js, SEO, and accessibility features.",
                      "Set up a CI/CD pipeline with GitHub Actions for auto-deployment.",
                      "Resources: Vercel Examples, Netlify Tutorials.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </div>
      </section>
    </RoadmapLayout>
  );
};

export default Home;

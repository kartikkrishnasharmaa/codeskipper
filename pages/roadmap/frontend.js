// pages/roadmaps/frontend-developer.js
import { motion } from 'framer-motion';
import {
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNpm,
  FaMobile,
  FaRocket,
  FaCheckCircle,
  FaBook,
  FaVideo,
  FaProjectDiagram,
  FaTools,
  FaSearch,
  FaPalette,
  FaServer,
  FaShieldAlt,
  FaBolt,
  FaGraduationCap,
  FaClock,
  FaExternalLinkAlt
} from 'react-icons/fa';
import Head from 'next/head';
import { useState } from 'react';
import RoadmapLayout from "@/components/layouts/RoadmapLayout";


export default function FrontendDeveloperRoadmap() {
  const [activePhase, setActivePhase] = useState(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Head>
        <title>Complete Frontend Developer Roadmap 2024 | CodeSkipper.in</title>
        <meta
          name="description"
          content="Master frontend development with our complete roadmap. Learn HTML, CSS, JavaScript, React, and modern tools. Step-by-step guide with projects and resources."
        />
        <meta name="keywords" content="frontend developer roadmap, web development, HTML CSS JavaScript, React, frontend framework, web developer career" />
        <link rel="canonical" href="https://codeskipper.in/roadmap/frontend" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Frontend Developer Roadmap",
            "description": "Complete step-by-step guide to becoming a frontend developer",
            "totalTime": "P6M",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Learn HTML Fundamentals",
                "text": "Start with HTML5 semantic elements and structure"
              },
              {
                "@type": "HowToStep",
                "name": "Master CSS and Layouts",
                "text": "Learn CSS3, Flexbox, Grid and responsive design"
              }
            ]
          })}
        </script>
      </Head>
      <RoadmapLayout>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {/* Hero Section */}
          <section className="pt-24 pb-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 transform skew-y-3 scale-125"></div>
            <div className="max-w-7xl mx-auto relative">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-block mb-6"
                >
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                    Updated for 2025
                  </span>
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                  Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Frontend Developer</span> Roadmap
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Your step-by-step guide to becoming a job-ready frontend developer.
                  Learn modern technologies, build real projects, and launch your career in 6-8 months.
                </p>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto"
                >
                  {quickStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 bg-white rounded-xl shadow-lg"
                    >
                      <div className="text-2xl text-blue-600 mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Roadmap Navigation */}
          <section className="py-8 px-4 bg-white sticky top-0 z-40 shadow-sm">
            <div className="max-w-7xl mx-auto">
              <div className="flex overflow-x-auto space-x-2 py-2 hide-scrollbar">
                {roadmapPhases.map((phase, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActivePhase(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold transition-all ${activePhase === index
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {phase.title}
                  </motion.button>
                ))}
              </div>
            </div>
          </section>

          {/* Roadmap Content */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              {roadmapPhases.map((phase, phaseIndex) => (
                <motion.div
                  key={phaseIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: phaseIndex === activePhase ? 1 : 0.3 }}
                  className={`${phaseIndex === activePhase ? 'block' : 'hidden'}`}
                >
                  {/* Phase Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-4">
                      {phaseIndex + 1}
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">{phase.title}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{phase.description}</p>
                    <div className="flex items-center justify-center mt-4 text-gray-500">
                      <FaClock className="mr-2" />
                      <span>{phase.duration}</span>
                    </div>
                  </motion.div>

                  {/* Phase Content */}
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Learning Topics */}
                    <motion.div
                      variants={slideInLeft}
                      initial="hidden"
                      animate="visible"
                    >
                      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <FaBook className="mr-3 text-blue-600" />
                        What You'll Learn
                      </h3>
                      <div className="space-y-4">
                        {phase.topics.map((topic, topicIndex) => (
                          <motion.div
                            key={topicIndex}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className="flex items-start p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                          >
                            <FaCheckCircle className="text-green-500 mt-1 mr-4 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-1">{topic.title}</h4>
                              <p className="text-gray-600 text-sm">{topic.description}</p>
                              {topic.subTopics && (
                                <div className="mt-2 flex flex-wrap gap-1">
                                  {topic.subTopics.map((sub, subIndex) => (
                                    <span
                                      key={subIndex}
                                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                                    >
                                      {sub}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Projects & Resources */}
                    <motion.div
                      variants={slideInRight}
                      initial="hidden"
                      animate="visible"
                    >
                      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <FaProjectDiagram className="mr-3 text-green-600" />
                        Hands-on Projects
                      </h3>
                      <div className="space-y-4 mb-8">
                        {phase.projects.map((project, projectIndex) => (
                          <motion.div
                            key={projectIndex}
                            variants={itemVariants}
                            className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                          >
                            <div className="flex items-start">
                              <div className="bg-green-100 text-green-600 p-2 rounded-lg mr-4">
                                {project.icon}
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-1">{project.title}</h4>
                                <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                                <div className="flex flex-wrap gap-1">
                                  {project.technologies.map((tech, techIndex) => (
                                    <span
                                      key={techIndex}
                                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Learning Resources */}
                      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <FaVideo className="mr-3 text-purple-600" />
                        Learning Resources
                      </h3>
                      <div className="space-y-3">
                        {phase.resources.map((resource, resourceIndex) => (
                          <motion.a
                            key={resourceIndex}
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="flex items-center p-3 bg-white rounded-lg shadow hover:shadow-md transition-all border-l-4 border-blue-500"
                          >
                            <div className="text-blue-600 mr-3">{resource.icon}</div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-800">{resource.title}</div>
                              <div className="text-gray-600 text-sm">{resource.type}</div>
                            </div>
                            <FaExternalLinkAlt className="text-gray-400" />
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Phase Completion Checklist */}
                  {phase.checklist && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-12 bg-blue-50 rounded-2xl p-8"
                    >
                      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <FaCheckCircle className="mr-3 text-blue-600" />
                        Phase Completion Checklist
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {phase.checklist.map((item, index) => (
                          <div key={index} className="flex items-center">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label className="ml-2 text-gray-700">{item}</label>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Career Path Section */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Frontend Career Path</h2>
                <p className="text-xl text-gray-600">Where this roadmap can take you</p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8"
              >
                {careerPaths.map((path, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all border border-blue-100"
                  >
                    <div className="text-4xl text-blue-600 mb-4">{path.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{path.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{path.description}</p>
                    <div className="text-lg font-semibold text-blue-600">{path.salary}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Tools & Technologies */}
          <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Essential Tools & Technologies</h2>
                <p className="text-xl text-gray-600">Master the modern frontend development stack</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-lg text-center"
                  >
                    <div className="text-4xl mb-4" style={{ color: tech.color }}>
                      {tech.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{tech.name}</h3>
                    <p className="text-gray-600 text-sm">{tech.purpose}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <FaRocket className="text-5xl mx-auto mb-6 text-blue-200" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Start Your Frontend Journey?
                </h2>
                <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                  Join <strong>50,000+ students</strong> who are building their tech careers with CodeSkipper
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Start Learning Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Download PDF Roadmap
                  </motion.button>
                </div>
                <p className="mt-6 text-blue-100">
                  Free forever • Practice exercises • Real projects • Community support
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </RoadmapLayout>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}

// Data Arrays
const quickStats = [
  { icon: <FaClock />, value: "6-8 Months", label: "To Complete" },
  { icon: <FaCode />, value: "50+", label: "Skills to Learn" },
  { icon: <FaProjectDiagram />, value: "15+", label: "Projects" },
  { icon: <FaGraduationCap />, value: "100%", label: "Job Ready" }
];

const roadmapPhases = [
  {
    title: "Web Fundamentals",
    description: "Master the building blocks of the web - HTML, CSS, and basic JavaScript",
    duration: "4-6 Weeks",
    topics: [
      {
        title: "HTML5 & Semantic Markup",
        description: "Learn modern HTML5 elements and semantic structure",
        subTopics: ["HTML5 tags", "Forms & Inputs", "Accessibility", "SEO Basics"]
      },
      {
        title: "CSS3 & Styling",
        description: "Master CSS including layouts, animations, and responsive design",
        subTopics: ["Flexbox", "CSS Grid", "Animations", "Variables"]
      },
      {
        title: "JavaScript Basics",
        description: "Learn programming fundamentals with JavaScript",
        subTopics: ["Variables", "Functions", "DOM Manipulation", "Events"]
      },
      {
        title: "Responsive Design",
        description: "Create websites that work on all devices",
        subTopics: ["Media Queries", "Mobile First", "Viewport Units"]
      }
    ],
    projects: [
      {
        icon: "🌐",
        title: "Personal Portfolio Website",
        description: "Build your first responsive portfolio with HTML and CSS",
        technologies: ["HTML5", "CSS3", "Responsive Design"]
      },
      {
        icon: "🎨",
        title: "CSS Art Project",
        description: "Create artwork using pure CSS to master styling skills",
        technologies: ["CSS3", "Animations", "Transforms"]
      }
    ],
    resources: [
      {
        icon: <FaBook />,
        title: "MDN Web Docs - HTML",
        type: "Documentation",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        icon: <FaVideo />,
        title: "CSS Grid Complete Guide",
        type: "Tutorial",
        link: "https://css-tricks.com/snippets/css/complete-guide-grid/"
      },
      {
        icon: <FaBook />,
        title: "JavaScript.info",
        type: "Free Book",
        link: "https://javascript.info"
      }
    ],
    checklist: [
      "Build 3 responsive websites",
      "Understand CSS Flexbox and Grid",
      "Complete basic JavaScript exercises",
      "Create a mobile-first design",
      "Learn browser developer tools"
    ]
  },
  {
    title: "Advanced JavaScript",
    description: "Dive deep into modern JavaScript features and programming concepts",
    duration: "6-8 Weeks",
    topics: [
      {
        title: "ES6+ Features",
        description: "Master modern JavaScript syntax and features",
        subTopics: ["Arrow Functions", "Destructuring", "Modules", "Template Literals"]
      },
      {
        title: "Asynchronous JavaScript",
        description: "Learn to handle async operations with Promises and Async/Await",
        subTopics: ["Callbacks", "Promises", "Async/Await", "Fetch API"]
      },
      {
        title: "DOM Manipulation",
        description: "Advanced techniques for interacting with web pages",
        subTopics: ["Event Handling", "Dynamic Content", "Performance"]
      },
      {
        title: "Object-Oriented Programming",
        description: "Learn OOP principles in JavaScript",
        subTopics: ["Classes", "Inheritance", "Encapsulation"]
      }
    ],
    projects: [
      {
        icon: "📝",
        title: "Todo List Application",
        description: "Build a feature-rich todo app with local storage",
        technologies: ["JavaScript", "Local Storage", "DOM API"]
      },
      {
        icon: "🌦️",
        title: "Weather App",
        description: "Create a weather application using external APIs",
        technologies: ["Fetch API", "JSON", "Async/Await"]
      }
    ],
    resources: [
      {
        icon: <FaBook />,
        title: "You Don't Know JS",
        type: "Book Series",
        link: "https://github.com/getify/You-Dont-Know-JS"
      },
      {
        icon: <FaVideo />,
        title: "JavaScript30",
        type: "Free Course",
        link: "https://javascript30.com"
      },
      {
        icon: <FaBook />,
        title: "MDN JavaScript Guide",
        type: "Documentation",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      }
    ],
    checklist: [
      "Master ES6+ syntax",
      "Build apps with async JavaScript",
      "Understand closures and scope",
      "Practice functional programming",
      "Complete API integration projects"
    ]
  },
  {
    title: "Frontend Frameworks",
    description: "Learn React and modern frontend development tools",
    duration: "8-10 Weeks",
    topics: [
      {
        title: "React Fundamentals",
        description: "Learn component-based architecture with React",
        subTopics: ["JSX", "Components", "Props", "State"]
      },
      {
        title: "Hooks & Advanced React",
        description: "Master modern React patterns with Hooks",
        subTopics: ["useState", "useEffect", "Custom Hooks", "Context API"]
      },
      {
        title: "State Management",
        description: "Manage complex application state efficiently",
        subTopics: ["Redux", "Zustand", "React Query"]
      },
      {
        title: "Routing & SPAs",
        description: "Build single page applications with routing",
        subTopics: ["React Router", "Dynamic Routes", "Protected Routes"]
      }
    ],
    projects: [
      {
        icon: "🛒",
        title: "E-commerce Store",
        description: "Build a complete online store with cart and checkout",
        technologies: ["React", "React Router", "Context API"]
      },
      {
        icon: "📊",
        title: "Dashboard Application",
        description: "Create an admin dashboard with charts and data",
        technologies: ["React", "Chart.js", "API Integration"]
      }
    ],
    resources: [
      {
        icon: <FaBook />,
        title: "React Official Documentation",
        type: "Documentation",
        link: "https://reactjs.org/docs"
      },
      {
        icon: <FaVideo />,
        title: "React Tutorial by FreeCodeCamp",
        type: "Free Course",
        link: "https://www.freecodecamp.org/news/react-tutorial/"
      },
      {
        icon: <FaBook />,
        title: "Epic React by Kent C. Dodds",
        type: "Paid Course",
        link: "https://epicreact.dev"
      }
    ],
    checklist: [
      "Build 3 React applications",
      "Understand component lifecycle",
      "Master React Hooks",
      "Implement routing in SPA",
      "Learn state management patterns"
    ]
  },
  {
    title: "Advanced Tools & Deployment",
    description: "Master build tools, testing, and deployment strategies",
    duration: "4-6 Weeks",
    topics: [
      {
        title: "Build Tools & Bundlers",
        description: "Learn modern JavaScript build tools and bundlers",
        subTopics: ["Webpack", "Vite", "Parcel", "npm/yarn"]
      },
      {
        title: "Testing",
        description: "Write tests for your applications",
        subTopics: ["Jest", "React Testing Library", "Cypress"]
      },
      {
        title: "Performance Optimization",
        description: "Optimize your applications for speed and efficiency",
        subTopics: ["Lazy Loading", "Code Splitting", "Bundle Analysis"]
      },
      {
        title: "Deployment & CI/CD",
        description: "Deploy your applications and set up continuous integration",
        subTopics: ["Vercel", "Netlify", "GitHub Actions", "Docker"]
      }
    ],
    projects: [
      {
        icon: "🚀",
        title: "Production Ready App",
        description: "Take a previous project through full deployment pipeline",
        technologies: ["React", "Testing", "CI/CD", "Deployment"]
      },
      {
        icon: "⚡",
        title: "Performance Optimized App",
        description: "Optimize an existing application for maximum performance",
        technologies: ["Performance", "Lazy Loading", "Bundle Optimization"]
      }
    ],
    resources: [
      {
        icon: <FaBook />,
        title: "Webpack Documentation",
        type: "Documentation",
        link: "https://webpack.js.org"
      },
      {
        icon: <FaVideo />,
        title: "Testing JavaScript",
        type: "Course",
        link: "https://testingjavascript.com"
      },
      {
        icon: <FaBook />,
        title: "Vite Guide",
        type: "Documentation",
        link: "https://vitejs.dev/guide/"
      }
    ],
    checklist: [
      "Set up build process for project",
      "Write unit tests for components",
      "Deploy application to production",
      "Set up CI/CD pipeline",
      "Optimize bundle size and loading"
    ]
  }
];

const careerPaths = [
  {
    icon: "💼",
    title: "Junior Frontend Developer",
    description: "Entry-level position focusing on implementing designs and basic functionality",
    salary: "₹4-8 LPA"
  },
  {
    icon: "🚀",
    title: "Frontend Developer",
    description: "Mid-level role building complex applications and components",
    salary: "₹8-15 LPA"
  },
  {
    icon: "🎯",
    title: "Senior Frontend Engineer",
    description: "Lead development,architecture decisions, and mentor junior developers",
    salary: "₹15-30 LPA"
  }
];

const technologies = [
  {
    name: "HTML5",
    purpose: "Structure & Semantics",
    icon: <FaHtml5 />,
    color: "#E34F26"
  },
  {
    name: "CSS3",
    purpose: "Styling & Layout",
    icon: <FaCss3Alt />,
    color: "#1572B6"
  },
  {
    name: "JavaScript",
    purpose: "Interactivity & Logic",
    icon: <FaJs />,
    color: "#F7DF1E"
  },
  {
    name: "React",
    purpose: "UI Framework",
    icon: <FaReact />,
    color: "#61DAFB"
  },
  {
    name: "Git",
    purpose: "Version Control",
    icon: <FaGitAlt />,
    color: "#F05032"
  },
  {
    name: "npm",
    purpose: "Package Management",
    icon: <FaNpm />,
    color: "#CB3837"
  },
  {
    name: "TypeScript",
    purpose: "Type Safety",
    icon: <FaShieldAlt />,
    color: "#3178C6"
  },
  {
    name: "Webpack",
    purpose: "Module Bundler",
    icon: <FaTools />,
    color: "#8DD6F9"
  }
];

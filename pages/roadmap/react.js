// pages/roadmaps/reactjs-developer.js
import { motion } from 'framer-motion';
import {
    FaReact,
    FaCode,
    FaMobile,
    FaRocket,
    FaCheckCircle,
    FaBook,
    FaVideo,
    FaProjectDiagram,
    FaTools,
    FaShieldAlt,
    FaBolt,
    FaGraduationCap,
    FaClock,
    FaExternalLinkAlt,
    FaGitAlt,
    FaNpm,
    FaPalette,
    FaServer,
    FaSearch
} from 'react-icons/fa';
import {
    SiRedux,
    SiTypescript,
    SiJest,
    SiNextdotjs,
    SiVite,
    SiTailwindcss,
    SiStyledcomponents,
    SiReactrouter
} from 'react-icons/si';
import Head from 'next/head';
import { useState } from 'react';
import RoadmapLayout from "@/components/layouts/RoadmapLayout";

export default function ReactJsDeveloperRoadmap() {
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
                <title>Complete React.js Developer Roadmap 2024 | CodeSkipper.in</title>
                <meta
                    name="description"
                    content="Master React.js development with our complete roadmap. Learn React fundamentals, hooks, state management, testing, and build modern web applications."
                />
                <meta name="keywords" content="react.js roadmap, react developer, frontend development, javascript framework, react hooks, redux, next.js" />
                <link rel="canonical" href="https://codeskipper.in/roadmaps/reactjs-developer" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "React.js Developer Roadmap",
                        "description": "Complete step-by-step guide to becoming a React.js developer",
                        "totalTime": "P4M",
                        "step": [
                            {
                                "@type": "HowToStep",
                                "name": "Learn React Fundamentals",
                                "text": "Master components, JSX, props, and state management"
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Advanced React Patterns",
                                "text": "Learn hooks, context API, and performance optimization"
                            }
                        ]
                    })}
                </script>
            </Head>
            <RoadmapLayout>
                <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
                    {/* Hero Section */}
                    <section className="pt-24 pb-20 px-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 to-blue-600/5 transform skew-y-3 scale-125"></div>
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
                                    <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                                        Most Popular Frontend Library
                                    </span>
                                </motion.div>
                                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                                    Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">React.js</span> Developer Roadmap
                                </h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Master the world's most popular JavaScript library for building user interfaces.
                                    Learn React fundamentals, advanced patterns, and build modern, scalable web applications.
                                </p>

                                {/* React Ecosystem Icons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex justify-center items-center space-x-8 mt-12"
                                >
                                    {reactEcosystem.map((tech, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.2, y: -5 }}
                                            className="text-center"
                                        >
                                            <div className="text-4xl mb-2" style={{ color: tech.color }}>
                                                {tech.icon}
                                            </div>
                                            <div className="text-sm font-semibold text-gray-700">{tech.name}</div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Quick Stats */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto"
                                >
                                    {quickStats.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.05 }}
                                            className="text-center p-4 bg-white rounded-xl shadow-lg"
                                        >
                                            <div className="text-2xl text-cyan-600 mb-2">{stat.icon}</div>
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
                                                ? 'bg-cyan-600 text-white shadow-lg'
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
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600 text-white rounded-full text-2xl font-bold mb-4">
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
                                                <FaBook className="mr-3 text-cyan-600" />
                                                Core Concepts & Skills
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
                                                                            className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded text-xs"
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
                                                <FaProjectDiagram className="mr-3 text-blue-600" />
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
                                                            <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-4">
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
                                                        className="flex items-center p-3 bg-white rounded-lg shadow hover:shadow-md transition-all border-l-4 border-cyan-500"
                                                    >
                                                        <div className="text-cyan-600 mr-3">{resource.icon}</div>
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
                                            className="mt-12 bg-cyan-50 rounded-2xl p-8"
                                        >
                                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                                <FaCheckCircle className="mr-3 text-cyan-600" />
                                                Phase Completion Checklist
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {phase.checklist.map((item, index) => (
                                                    <div key={index} className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500"
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

                    {/* React Ecosystem */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">React.js Ecosystem</h2>
                                <p className="text-xl text-gray-600">Essential tools and libraries for modern React development</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {reactEcosystemDetailed.map((category, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl text-center hover:shadow-xl transition-all border border-cyan-100"
                                    >
                                        <div className="text-4xl mb-4" style={{ color: category.color }}>
                                            {category.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{category.category}</h3>
                                        <div className="space-y-2">
                                            {category.tools.map((tool, toolIndex) => (
                                                <div key={toolIndex} className="text-gray-600 text-sm">
                                                    {tool}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Career Path Section */}
                    <section className="py-20 px-4 bg-gray-50">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">React.js Career Path</h2>
                                <p className="text-xl text-gray-600">High-demand roles and growth opportunities</p>
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
                                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-cyan-500"
                                    >
                                        <div className="text-4xl text-cyan-600 mb-4">{path.icon}</div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{path.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">{path.description}</p>
                                        <div className="text-lg font-semibold text-cyan-600 mb-4">{path.salary}</div>
                                        <div className="flex flex-wrap gap-1">
                                            {path.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded text-xs"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    {/* Tools & Best Practices */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Essential Tools & Best Practices</h2>
                                <p className="text-xl text-gray-600">Master the tools that make React development efficient</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {tools.map((tool, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center"
                                    >
                                        <div className="text-4xl mb-4" style={{ color: tool.color }}>
                                            {tool.icon}
                                        </div>
                                        <h3 className="font-bold text-gray-800 mb-2">{tool.name}</h3>
                                        <p className="text-gray-600 text-sm">{tool.purpose}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Best Practices */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl p-8"
                            >
                                <h3 className="text-2xl font-bold mb-6 text-center">React Best Practices</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {bestPractices.map((practice, index) => (
                                        <div key={index} className="flex items-start">
                                            <FaCheckCircle className="text-cyan-200 mt-1 mr-3 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold mb-2">{practice.title}</h4>
                                                <p className="text-cyan-100 text-sm">{practice.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <FaRocket className="text-5xl mx-auto mb-6 text-cyan-200" />
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    Ready to Master React.js?
                                </h2>
                                <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                                    Join <strong>60,000+ developers</strong> who are building modern web applications with CodeSkipper
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                                    >
                                        Start React Journey
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-cyan-600 transition-colors"
                                    >
                                        Download PDF Roadmap
                                    </motion.button>
                                </div>
                                <p className="mt-6 text-cyan-100">
                                    Free tutorials • Component libraries • State management • Performance optimization
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
const reactEcosystem = [
    {
        name: "React",
        icon: <FaReact />,
        color: "#61DAFB"
    },
    {
        name: "Redux",
        icon: <SiRedux />,
        color: "#764ABC"
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "#000000"
    },
    {
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "#3178C6"
    }
];

const quickStats = [
    { icon: <FaClock />, value: "4-5 Months", label: "To Complete" },
    { icon: <FaCode />, value: "40+", label: "Skills to Master" },
    { icon: <FaProjectDiagram />, value: "10+", label: "React Projects" },
    { icon: <FaGraduationCap />, value: "100%", label: "Job Ready" }
];

const roadmapPhases = [
    {
        title: "React Fundamentals",
        description: "Master the core concepts of React and build your first components",
        duration: "4-5 Weeks",
        topics: [
            {
                title: "React Basics",
                description: "Understand React philosophy and component-based architecture",
                subTopics: ["Virtual DOM", "JSX Syntax", "Components", "Elements"]
            },
            {
                title: "Components & Props",
                description: "Learn to create reusable components and pass data with props",
                subTopics: ["Functional Components", "Props", "Component Composition"]
            },
            {
                title: "State & Events",
                description: "Manage component state and handle user interactions",
                subTopics: ["useState Hook", "Event Handling", "Controlled Components"]
            },
            {
                title: "Conditional Rendering",
                description: "Render components conditionally based on state and props",
                subTopics: ["Conditional Operators", "Ternary Operators", "Short-circuiting"]
            }
        ],
        projects: [
            {
                icon: "📝",
                title: "Interactive Todo List",
                description: "Build a todo app with add, delete, and toggle functionality",
                technologies: ["React Components", "useState", "Event Handling"]
            },
            {
                icon: "🎯",
                title: "Counter Application",
                description: "Create a counter with increment, decrement, and reset features",
                technologies: ["State Management", "Event Handlers", "Conditional Rendering"]
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
                title: "React Tutorial for Beginners",
                type: "Free Course",
                link: "https://react-tutorial.app"
            },
            {
                icon: <FaBook />,
                title: "JavaScript.info React",
                type: "Tutorial",
                link: "https://javascript.info/react"
            }
        ],
        checklist: [
            "Build 3 basic React applications",
            "Understand JSX and component structure",
            "Master useState hook",
            "Handle user events properly",
            "Create reusable components"
        ]
    },
    {
        title: "Advanced React Patterns",
        description: "Learn hooks, context API, and advanced React patterns",
        duration: "5-6 Weeks",
        topics: [
            {
                title: "React Hooks Deep Dive",
                description: "Master all built-in React hooks and their use cases",
                subTopics: ["useEffect", "useContext", "useReducer", "Custom Hooks"]
            },
            {
                title: "Context API",
                description: "Manage global state without prop drilling",
                subTopics: ["React.createContext", "Context.Provider", "useContext Hook"]
            },
            {
                title: "Forms in React",
                description: "Handle complex forms with validation and submission",
                subTopics: ["Controlled Components", "Form Validation", "Form Libraries"]
            },
            {
                title: "Custom Hooks",
                description: "Create reusable custom hooks for complex logic",
                subTopics: ["Hook Rules", "Reusable Logic", "Hook Composition"]
            }
        ],
        projects: [
            {
                icon: "🛒",
                title: "Shopping Cart",
                description: "Build an e-commerce cart with add/remove items and total calculation",
                technologies: ["useReducer", "Context API", "Custom Hooks"]
            },
            {
                icon: "📊",
                title: "Expense Tracker",
                description: "Create an expense tracker with categories and monthly reports",
                technologies: ["Forms", "Validation", "Chart Integration"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "React Hooks Documentation",
                type: "Documentation",
                link: "https://reactjs.org/docs/hooks-intro.html"
            },
            {
                icon: <FaVideo />,
                title: "Advanced React Patterns",
                type: "Course",
                link: "https://epicreact.dev"
            },
            {
                icon: <FaBook />,
                title: "useHooks Collection",
                type: "Custom Hooks",
                link: "https://usehooks.com"
            }
        ],
        checklist: [
            "Master useEffect for side effects",
            "Implement Context API for global state",
            "Create custom hooks",
            "Build complex forms with validation",
            "Understand hook dependencies and rules"
        ]
    },
    {
        title: "State Management & Routing",
        description: "Master state management solutions and client-side routing",
        duration: "4-5 Weeks",
        topics: [
            {
                title: "Redux Toolkit",
                description: "Manage complex application state with Redux",
                subTopics: ["Store", "Actions", "Reducers", "RTK Query"]
            },
            {
                title: "React Router",
                description: "Implement client-side routing in single-page applications",
                subTopics: ["Routes", "Navigation", "Dynamic Routes", "Protected Routes"]
            },
            {
                title: "Alternative State Solutions",
                description: "Explore other state management libraries",
                subTopics: ["Zustand", "Recoil", "Jotai", "SWR"]
            },
            {
                title: "API Integration",
                description: "Fetch and manage data from external APIs",
                subTopics: ["Fetch API", "Axios", "React Query", "Error Handling"]
            }
        ],
        projects: [
            {
                icon: "🎬",
                title: "Movie Database App",
                description: "Build a movie app with search, favorites, and detailed views",
                technologies: ["React Router", "API Integration", "Redux Toolkit"]
            },
            {
                icon: "👥",
                title: "Social Media Dashboard",
                description: "Create a dashboard with user profiles, posts, and real-time updates",
                technologies: ["Routing", "State Management", "Real-time Features"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "Redux Toolkit Documentation",
                type: "Documentation",
                link: "https://redux-toolkit.js.org"
            },
            {
                icon: <FaVideo />,
                title: "React Router Tutorial",
                type: "Tutorial",
                link: "https://reactrouter.com/en/main/start/tutorial"
            },
            {
                icon: <FaBook />,
                title: "React Query Documentation",
                type: "Documentation",
                link: "https://tanstack.com/query/latest"
            }
        ],
        checklist: [
            "Implement Redux for state management",
            "Set up React Router with navigation",
            "Integrate with external APIs",
            "Handle loading and error states",
            "Protect routes with authentication"
        ]
    },
    {
        title: "Performance & Optimization",
        description: "Optimize React applications for speed and efficiency",
        duration: "3-4 Weeks",
        topics: [
            {
                title: "Performance Optimization",
                description: "Identify and fix performance bottlenecks",
                subTopics: ["React.memo", "useMemo", "useCallback", "Code Splitting"]
            },
            {
                title: "React Patterns & Best Practices",
                description: "Learn advanced patterns for scalable applications",
                subTopics: ["Compound Components", "Render Props", "Higher-Order Components"]
            },
            {
                title: "Error Boundaries",
                description: "Handle errors gracefully in React applications",
                subTopics: ["Error Boundaries", "Error Reporting", "Fallback UIs"]
            },
            {
                title: "Testing React Applications",
                description: "Write tests for React components and hooks",
                subTopics: ["Jest", "React Testing Library", "Testing Hooks", "Mocking"]
            }
        ],
        projects: [
            {
                icon: "⚡",
                title: "Performance Optimized App",
                description: "Take an existing app and optimize it for maximum performance",
                technologies: ["React.memo", "useMemo", "Code Splitting", "Lazy Loading"]
            },
            {
                icon: "🧪",
                title: "Fully Tested Application",
                description: "Build an app with comprehensive test coverage",
                technologies: ["Jest", "React Testing Library", "Test Coverage"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "React Performance Guide",
                type: "Documentation",
                link: "https://reactjs.org/docs/optimizing-performance.html"
            },
            {
                icon: <FaVideo />,
                title: "Testing React Apps",
                type: "Course",
                link: "https://testingjavascript.com"
            },
            {
                icon: <FaBook />,
                title: "React Patterns",
                type: "Guide",
                link: "https://reactpatterns.com"
            }
        ],
        checklist: [
            "Optimize component re-renders",
            "Implement code splitting",
            "Write comprehensive tests",
            "Use error boundaries",
            "Apply React best practices"
        ]
    },
    {
        title: "Advanced Ecosystem & Deployment",
        description: "Master the React ecosystem and deploy production applications",
        duration: "4-5 Weeks",
        topics: [
            {
                title: "Next.js Framework",
                description: "Build production-ready React applications with Next.js",
                subTopics: ["SSR", "SSG", "API Routes", "File-based Routing"]
            },
            {
                title: "TypeScript with React",
                description: "Add type safety to React applications",
                subTopics: ["TypeScript Basics", "React with TS", "Type Definitions"]
            },
            {
                title: "Styling Solutions",
                description: "Explore different styling approaches in React",
                subTopics: ["Styled Components", "Tailwind CSS", "CSS Modules", "Emotion"]
            },
            {
                title: "Deployment & CI/CD",
                description: "Deploy React applications to production",
                subTopics: ["Vercel", "Netlify", "Docker", "CI/CD Pipelines"]
            }
        ],
        projects: [
            {
                icon: "🚀",
                title: "Production Next.js App",
                description: "Build and deploy a full-stack application with Next.js",
                technologies: ["Next.js", "TypeScript", "API Routes", "Deployment"]
            },
            {
                icon: "🎨",
                title: "Design System",
                description: "Create a reusable component library with Storybook",
                technologies: ["Component Library", "Storybook", "Design Tokens"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "Next.js Documentation",
                type: "Documentation",
                link: "https://nextjs.org/docs"
            },
            {
                icon: <FaVideo />,
                title: "TypeScript with React",
                type: "Tutorial",
                link: "https://react-typescript-cheatsheet.netlify.app"
            },
            {
                icon: <FaBook />,
                title: "Styled Components Docs",
                type: "Documentation",
                link: "https://styled-components.com/docs"
            }
        ],
        checklist: [
            "Build applications with Next.js",
            "Add TypeScript to React projects",
            "Master modern styling solutions",
            "Deploy applications to production",
            "Set up CI/CD pipelines"
        ]
    }
];

const reactEcosystemDetailed = [
    {
        category: "State Management",
        icon: <SiRedux />,
        color: "#764ABC",
        tools: ["Redux Toolkit", "Context API", "Zustand", "Recoil", "Jotai"]
    },
    {
        category: "Routing",
        icon: <SiReactrouter />,
        color: "#CA4245",
        tools: ["React Router", "Next.js Routing", "Reach Router", "Wouter"]
    },
    {
        category: "Styling",
        icon: <FaPalette />,
        color: "#E44D26",
        tools: ["Styled Components", "Tailwind CSS", "Emotion", "CSS Modules", "Material-UI"]
    },
    {
        category: "Testing",
        icon: <SiJest />,
        color: "#C21325",
        tools: ["Jest", "React Testing Library", "Cypress", "Enzyme", "Vitest"]
    }
];

const careerPaths = [
    {
        icon: "💻",
        title: "React Developer",
        description: "Frontend developer specializing in React.js and modern JavaScript",
        salary: "₹5-12 LPA",
        skills: ["React", "JavaScript", "HTML/CSS", "State Management", "APIs"]
    },
    {
        icon: "🚀",
        title: "Senior React Developer",
        description: "Lead React projects and make architectural decisions",
        salary: "₹10-20 LPA",
        skills: ["Performance", "Testing", "Architecture", "Mentoring", "Code Review"]
    },
    {
        icon: "🎯",
        title: "Frontend Architect",
        description: "Design system architecture and lead frontend teams",
        salary: "₹18-35 LPA",
        skills: ["System Design", "Micro Frontends", "Design Systems", "Team Leadership"]
    }
];

const tools = [
    {
        name: "VS Code",
        purpose: "Code Editor",
        icon: <FaCode />,
        color: "#007ACC"
    },
    {
        name: "React DevTools",
        purpose: "Debugging",
        icon: <FaReact />,
        color: "#61DAFB"
    },
    {
        name: "Next.js",
        purpose: "React Framework",
        icon: <SiNextdotjs />,
        color: "#000000"
    },
    {
        name: "Vite",
        purpose: "Build Tool",
        icon: <SiVite />,
        color: "#646CFF"
    },
    {
        name: "Tailwind CSS",
        purpose: "Styling",
        icon: <SiTailwindcss />,
        color: "#06B6D4"
    },
    {
        name: "Styled Components",
        purpose: "CSS-in-JS",
        icon: <SiStyledcomponents />,
        color: "#DB7093"
    },
    {
        name: "Jest",
        purpose: "Testing",
        icon: <SiJest />,
        color: "#C21325"
    },
    {
        name: "TypeScript",
        purpose: "Type Safety",
        icon: <SiTypescript />,
        color: "#3178C6"
    }
];

const bestPractices = [
    {
        title: "Component Composition",
        description: "Prefer composition over inheritance for reusable and maintainable code"
    },
    {
        title: "Single Responsibility",
        description: "Each component should have a single, clear responsibility"
    },
    {
        title: "Controlled Components",
        description: "Use controlled components for form inputs and state management"
    },
    {
        title: "Custom Hooks",
        description: "Extract reusable logic into custom hooks for better code organization"
    },
    {
        title: "Performance Optimization",
        description: "Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders"
    },
    {
        title: "Error Boundaries",
        description: "Implement error boundaries to handle errors gracefully"
    }
];
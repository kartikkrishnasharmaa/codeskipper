// pages/roadmaps/mern-stack-developer.js
import { motion } from 'framer-motion';
import {
    FaCode,
    FaDatabase,
    FaReact,
    FaNodeJs,
    FaAws,
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
    FaServer,
    FaPalette
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiTypescript, SiJest, SiDocker, SiPostman } from 'react-icons/si';
import Head from 'next/head';
import { useState } from 'react';
import RoadmapLayout from "@/components/layouts/RoadmapLayout";

export default function MernStackDeveloperRoadmap() {
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
                <title>Complete MERN Stack Developer Roadmap 2024 | CodeSkipper.in</title>
                <meta
                    name="description"
                    content="Master MERN Stack development with our complete roadmap. Learn MongoDB, Express.js, React, Node.js and build full-stack applications. Step-by-step guide with projects."
                />
                <meta name="keywords" content="mern stack roadmap, full stack developer, mongodb, express.js, react, node.js, javascript, web development" />
                <link rel="canonical" href="https://codeskipper.in/roadmaps/mern-stack-developer" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "MERN Stack Developer Roadmap",
                        "description": "Complete step-by-step guide to becoming a MERN stack developer",
                        "totalTime": "P7M",
                        "step": [
                            {
                                "@type": "HowToStep",
                                "name": "Learn Frontend with React",
                                "text": "Master React.js and modern frontend development"
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Master Backend with Node.js",
                                "text": "Learn Node.js, Express.js and server-side development"
                            }
                        ]
                    })}
                </script>
            </Head>
            <RoadmapLayout>
                <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
                    {/* Hero Section */}
                    <section className="pt-24 pb-20 px-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 transform skew-y-3 scale-125"></div>
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
                                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                                        Most Popular Stack 2025
                                    </span>
                                </motion.div>
                                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                                    Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">MERN Stack</span> Developer Roadmap
                                </h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Master the most popular full-stack JavaScript framework. Learn MongoDB, Express.js, React, and Node.js
                                    to build modern web applications from frontend to backend.
                                </p>

                                {/* MERN Stack Icons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex justify-center items-center space-x-8 mt-12"
                                >
                                    {mernIcons.map((icon, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.2, y: -5 }}
                                            className="text-center"
                                        >
                                            <div className="text-4xl mb-2" style={{ color: icon.color }}>
                                                {icon.icon}
                                            </div>
                                            <div className="text-sm font-semibold text-gray-700">{icon.name}</div>
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
                                            <div className="text-2xl text-purple-600 mb-2">{stat.icon}</div>
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
                                                ? 'bg-purple-600 text-white shadow-lg'
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
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full text-2xl font-bold mb-4">
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
                                                <FaBook className="mr-3 text-purple-600" />
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
                                                                            className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs"
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
                                                <FaProjectDiagram className="mr-3 text-pink-600" />
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
                                                            <div className="bg-pink-100 text-pink-600 p-2 rounded-lg mr-4">
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
                                                <FaVideo className="mr-3 text-blue-600" />
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
                                                        className="flex items-center p-3 bg-white rounded-lg shadow hover:shadow-md transition-all border-l-4 border-purple-500"
                                                    >
                                                        <div className="text-purple-600 mr-3">{resource.icon}</div>
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
                                            className="mt-12 bg-purple-50 rounded-2xl p-8"
                                        >
                                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                                <FaCheckCircle className="mr-3 text-purple-600" />
                                                Phase Completion Checklist
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {phase.checklist.map((item, index) => (
                                                    <div key={index} className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
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

                    {/* MERN Stack Architecture */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">MERN Stack Architecture</h2>
                                <p className="text-xl text-gray-600">Understanding how all pieces work together</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {mernArchitecture.map((layer, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl text-center hover:shadow-xl transition-all border border-purple-100"
                                    >
                                        <div className="text-4xl mb-4" style={{ color: layer.color }}>
                                            {layer.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{layer.component}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{layer.role}</p>
                                        <div className="space-y-2 text-left">
                                            {layer.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                                                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                                                    {feature}
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
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">MERN Stack Career Path</h2>
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
                                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-purple-500"
                                    >
                                        <div className="text-4xl text-purple-600 mb-4">{path.icon}</div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{path.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">{path.description}</p>
                                        <div className="text-lg font-semibold text-purple-600 mb-4">{path.salary}</div>
                                        <div className="flex flex-wrap gap-1">
                                            {path.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs"
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

                    {/* Tools & Technologies */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Essential MERN Stack Tools</h2>
                                <p className="text-xl text-gray-600">Complete development ecosystem</p>
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
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-700 text-white">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <FaRocket className="text-5xl mx-auto mb-6 text-purple-200" />
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    Ready to Become a MERN Stack Developer?
                                </h2>
                                <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                                    Join <strong>40,000+ developers</strong> who are building full-stack applications with CodeSkipper
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                                    >
                                        Start MERN Journey
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
                                    >
                                        Download PDF Roadmap
                                    </motion.button>
                                </div>
                                <p className="mt-6 text-purple-100">
                                    Free tutorials • Real projects • Database integration • Deployment guides
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
const mernIcons = [
    {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "#47A248"
    },
    {
        name: "Express.js",
        icon: <SiExpress />,
        color: "#000000"
    },
    {
        name: "React",
        icon: <FaReact />,
        color: "#61DAFB"
    },
    {
        name: "Node.js",
        icon: <FaNodeJs />,
        color: "#339933"
    }
];

const quickStats = [
    { icon: <FaClock />, value: "6-8 Months", label: "To Complete" },
    { icon: <FaCode />, value: "50+", label: "Skills to Master" },
    { icon: <FaProjectDiagram />, value: "12+", label: "Full Projects" },
    { icon: <FaGraduationCap />, value: "100%", label: "Job Ready" }
];

const roadmapPhases = [
    {
        title: "Frontend Foundation with React",
        description: "Master modern React development and frontend technologies",
        duration: "8-10 Weeks",
        topics: [
            {
                title: "React Fundamentals",
                description: "Learn component-based architecture and JSX syntax",
                subTopics: ["Components", "JSX", "Props", "State", "Event Handling"]
            },
            {
                title: "React Hooks & Advanced Patterns",
                description: "Master modern React with hooks and advanced patterns",
                subTopics: ["useState", "useEffect", "Custom Hooks", "Context API"]
            },
            {
                title: "State Management",
                description: "Manage complex application state efficiently",
                subTopics: ["Redux Toolkit", "Context API", "State Patterns"]
            },
            {
                title: "Modern CSS & Styling",
                description: "Create beautiful UIs with modern CSS techniques",
                subTopics: ["Styled Components", "CSS Modules", "Tailwind CSS"]
            }
        ],
        projects: [
            {
                icon: "🛒",
                title: "E-commerce Frontend",
                description: "Build a responsive e-commerce UI with product listings and cart",
                technologies: ["React", "Redux", "Styled Components", "Responsive Design"]
            },
            {
                icon: "📊",
                title: "Dashboard Application",
                description: "Create an admin dashboard with charts and data visualization",
                technologies: ["React", "Chart.js", "Component Library", "API Integration"]
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
                title: "Redux Toolkit Documentation",
                type: "Documentation",
                link: "https://redux-toolkit.js.org"
            }
        ],
        checklist: [
            "Build 3 React applications",
            "Master React Hooks",
            "Implement state management with Redux",
            "Create responsive designs",
            "Understand component lifecycle"
        ]
    },
    {
        title: "Backend Development with Node.js & Express",
        description: "Build robust server-side applications and RESTful APIs",
        duration: "6-8 Weeks",
        topics: [
            {
                title: "Node.js Fundamentals",
                description: "Master server-side JavaScript with Node.js",
                subTopics: ["Event Loop", "Modules", "File System", "Streams"]
            },
            {
                title: "Express.js Framework",
                description: "Build web applications and APIs with Express.js",
                subTopics: ["Routing", "Middleware", "Error Handling", "Template Engines"]
            },
            {
                title: "RESTful API Design",
                description: "Design and build professional REST APIs",
                subTopics: ["HTTP Methods", "Status Codes", "API Documentation", "Versioning"]
            },
            {
                title: "Authentication & Security",
                description: "Implement secure authentication and authorization",
                subTopics: ["JWT", "bcrypt", "Passport.js", "CORS", "Helmet"]
            }
        ],
        projects: [
            {
                icon: "🔐",
                title: "Authentication API",
                description: "Build a complete auth system with login, register, and password reset",
                technologies: ["Node.js", "Express", "JWT", "bcrypt", "Email Service"]
            },
            {
                icon: "🛍️",
                title: "E-commerce Backend API",
                description: "Create a full e-commerce API with products, orders, and payments",
                technologies: ["REST API", "Stripe Integration", "Order Management", "Inventory"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "Node.js Official Docs",
                type: "Documentation",
                link: "https://nodejs.org/docs"
            },
            {
                icon: <FaVideo />,
                title: "Express.js Crash Course",
                type: "Tutorial",
                link: "https://www.youtube.com/watch?v=L72fhGm1tfE"
            },
            {
                icon: <FaBook />,
                title: "REST API Best Practices",
                type: "Guide",
                link: "https://restfulapi.net"
            }
        ],
        checklist: [
            "Build 2-3 RESTful APIs",
            "Implement JWT authentication",
            "Create custom middleware",
            "Handle file uploads",
            "Document APIs with Swagger"
        ]
    },
    {
        title: "Database Integration with MongoDB",
        description: "Master NoSQL databases and data modeling with MongoDB",
        duration: "4-6 Weeks",
        topics: [
            {
                title: "MongoDB Fundamentals",
                description: "Learn document-based database concepts",
                subTopics: ["Collections", "Documents", "BSON", "Data Types"]
            },
            {
                title: "MongoDB Operations",
                description: "Master CRUD operations and queries",
                subTopics: ["Create", "Read", "Update", "Delete", "Aggregation"]
            },
            {
                title: "Mongoose ODM",
                description: "Use Mongoose for object data modeling",
                subTopics: ["Schemas", "Models", "Validation", "Middleware", "Populate"]
            },
            {
                title: "Database Relationships",
                description: "Model relationships between data entities",
                subTopics: ["References", "Embedding", "Data Modeling", "Indexing"]
            }
        ],
        projects: [
            {
                icon: "💾",
                title: "Blog Database",
                description: "Design and implement a blog database with users, posts, and comments",
                technologies: ["MongoDB", "Mongoose", "Data Modeling", "Relationships"]
            },
            {
                icon: "👥",
                title: "Social Media Database",
                description: "Create a social media database with users, posts, and interactions",
                technologies: ["Database Design", "Aggregation", "Indexing", "Performance"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "MongoDB University",
                type: "Free Courses",
                link: "https://university.mongodb.com"
            },
            {
                icon: <FaVideo />,
                title: "Mongoose Crash Course",
                type: "Tutorial",
                link: "https://www.youtube.com/watch?v=DZBGEVgL2eE"
            },
            {
                icon: <FaBook />,
                title: "MongoDB Documentation",
                type: "Documentation",
                link: "https://docs.mongodb.com"
            }
        ],
        checklist: [
            "Design database schemas",
            "Implement CRUD operations",
            "Use Mongoose for data modeling",
            "Create complex queries",
            "Optimize database performance"
        ]
    },
    {
        title: "Full Stack Integration",
        description: "Connect frontend and backend to build complete applications",
        duration: "6-8 Weeks",
        topics: [
            {
                title: "API Integration",
                description: "Connect React frontend with Node.js backend",
                subTopics: ["Axios/Fetch", "Error Handling", "Loading States", "Caching"]
            },
            {
                title: "State Management Integration",
                description: "Sync frontend state with backend data",
                subTopics: ["Redux Thunk", "RTK Query", "Data Fetching", "Optimistic Updates"]
            },
            {
                title: "Real-time Features",
                description: "Implement real-time functionality with WebSockets",
                subTopics: ["Socket.io", "Real-time Updates", "Notifications", "Live Chat"]
            },
            {
                title: "File Upload & Management",
                description: "Handle file uploads and cloud storage",
                subTopics: ["Multer", "Cloudinary", "AWS S3", "Image Processing"]
            }
        ],
        projects: [
            {
                icon: "🚀",
                title: "Complete MERN Application",
                description: "Build a full-stack application with authentication and CRUD operations",
                technologies: ["React", "Node.js", "MongoDB", "JWT", "Full Stack"]
            },
            {
                icon: "💬",
                title: "Real-time Chat Application",
                description: "Create a chat app with real-time messaging and online status",
                technologies: ["Socket.io", "React", "Node.js", "MongoDB", "Real-time"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "Full Stack Open",
                type: "Free Course",
                link: "https://fullstackopen.com/en"
            },
            {
                icon: <FaVideo />,
                title: "MERN Stack Tutorial",
                type: "Project Tutorial",
                link: "https://www.youtube.com/watch?v=7CqJlxBYj-M"
            },
            {
                icon: <FaBook />,
                title: "Socket.io Documentation",
                type: "Documentation",
                link: "https://socket.io/docs/v4"
            }
        ],
        checklist: [
            "Build 2 full-stack applications",
            "Implement real-time features",
            "Handle file uploads",
            "Connect frontend with backend APIs",
            "Deploy full-stack application"
        ]
    },
    {
        title: "Deployment & DevOps",
        description: "Deploy MERN applications and implement DevOps practices",
        duration: "4-6 Weeks",
        topics: [
            {
                title: "Application Deployment",
                description: "Deploy MERN applications to production",
                subTopics: ["Vercel/Netlify", "Heroku", "AWS", "Docker"]
            },
            {
                title: "Environment Configuration",
                description: "Manage different environments and configurations",
                subTopics: ["Environment Variables", "Config Management", "Secrets"]
            },
            {
                title: "Performance Optimization",
                description: "Optimize application performance and speed",
                subTopics: ["Code Splitting", "Lazy Loading", "Caching", "CDN"]
            },
            {
                title: "Testing & Quality Assurance",
                description: "Implement testing and ensure code quality",
                subTopics: ["Jest", "React Testing Library", "Cypress", "ESLint"]
            }
        ],
        projects: [
            {
                icon: "☁️",
                title: "Production Deployment",
                description: "Deploy a MERN application to production with CI/CD",
                technologies: ["Vercel", "Heroku", "MongoDB Atlas", "CI/CD Pipeline"]
            },
            {
                icon: "⚡",
                title: "Optimized MERN App",
                description: "Optimize and deploy a high-performance MERN application",
                technologies: ["Performance", "SEO", "PWA", "Monitoring"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "Deployment Guides",
                type: "Documentation",
                link: "https://vercel.com/guides"
            },
            {
                icon: <FaVideo />,
                title: "Docker for MERN Stack",
                type: "Tutorial",
                link: "https://www.youtube.com/watch?v=0d6eQnVIo1c"
            },
            {
                icon: <FaBook />,
                title: "Testing JavaScript",
                type: "Course",
                link: "https://testingjavascript.com"
            }
        ],
        checklist: [
            "Deploy 2 MERN applications",
            "Set up CI/CD pipeline",
            "Implement testing suite",
            "Optimize application performance",
            "Configure production environment"
        ]
    }
];

const mernArchitecture = [
    {
        component: "MongoDB",
        role: "Document Database",
        icon: <SiMongodb />,
        color: "#47A248",
        features: [
            "NoSQL document storage",
            "Flexible schema design",
            "Horizontal scaling",
            "Aggregation framework"
        ]
    },
    {
        component: "Express.js",
        role: "Backend Framework",
        icon: <SiExpress />,
        color: "#000000",
        features: [
            "Minimal and flexible",
            "Middleware support",
            "RESTful API routing",
            "Template engines"
        ]
    },
    {
        component: "React",
        role: "Frontend Library",
        icon: <FaReact />,
        color: "#61DAFB",
        features: [
            "Component-based architecture",
            "Virtual DOM",
            "Unidirectional data flow",
            "Rich ecosystem"
        ]
    },
    {
        component: "Node.js",
        role: "Runtime Environment",
        icon: <FaNodeJs />,
        color: "#339933",
        features: [
            "JavaScript on server",
            "Event-driven architecture",
            "Non-blocking I/O",
            "NPM ecosystem"
        ]
    }
];

const careerPaths = [
    {
        icon: "💻",
        title: "MERN Stack Developer",
        description: "Full-stack developer specializing in MongoDB, Express, React, and Node.js",
        salary: "₹6-15 LPA",
        skills: ["React", "Node.js", "MongoDB", "REST APIs", "JavaScript"]
    },
    {
        icon: "🚀",
        title: "Senior Full Stack Developer",
        description: "Lead full-stack projects and make architectural decisions",
        salary: "₹12-25 LPA",
        skills: ["System Design", "Performance", "DevOps", "Team Leadership"]
    },
    {
        icon: "🏢",
        title: "Tech Lead / Architect",
        description: "Design system architecture and lead development teams",
        salary: "₹20-40 LPA",
        skills: ["Architecture", "Microservices", "Cloud", "Mentoring"]
    }
];

const tools = [
    {
        name: "Postman",
        purpose: "API Testing",
        icon: <SiPostman />,
        color: "#FF6C37"
    },
    {
        name: "Git",
        purpose: "Version Control",
        icon: <FaGitAlt />,
        color: "#F05032"
    },
    {
        name: "Redux",
        purpose: "State Management",
        icon: <SiRedux />,
        color: "#764ABC"
    },
    {
        name: "TypeScript",
        purpose: "Type Safety",
        icon: <SiTypescript />,
        color: "#3178C6"
    },
    {
        name: "Jest",
        purpose: "Testing Framework",
        icon: <SiJest />,
        color: "#C21325"
    },
    {
        name: "Docker",
        purpose: "Containerization",
        icon: <SiDocker />,
        color: "#2496ED"
    },
    {
        name: "VS Code",
        purpose: "Code Editor",
        icon: <FaCode />,
        color: "#007ACC"
    },
    {
        name: "npm",
        purpose: "Package Manager",
        icon: <FaNpm />,
        color: "#CB3837"
    }
];
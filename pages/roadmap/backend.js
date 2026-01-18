// pages/roadmaps/backend-developer.js
import { motion } from 'framer-motion';
import {
    FaServer,
    FaDatabase,
    FaNodeJs,
    FaPython,
    FaJava,
    FaAws,
    FaDocker,
    FaGitAlt,
    FaShieldAlt,
    FaRocket,
    FaCheckCircle,
    FaBook,
    FaVideo,
    FaProjectDiagram,
    FaTools,
    FaCloud,
    FaCode,
    FaNetworkWired,
    FaLock,
    FaBolt,
    FaGraduationCap,
    FaClock,
    FaExternalLinkAlt,
    FaLinux,
    FaTerminal
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostgresql, SiRedis, SiKubernetes, SiNginx } from 'react-icons/si';
import Head from 'next/head';
import { useState } from 'react';
import RoadmapLayout from "@/components/layouts/RoadmapLayout";

export default function BackendDeveloperRoadmap() {
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
                <title>Complete Backend Developer Roadmap 2024 | CodeSkipper.in</title>
                <meta
                    name="description"
                    content="Master backend development with our complete roadmap. Learn Node.js, Python, databases, APIs, cloud services, and system design. Step-by-step guide with projects."
                />
                <meta name="keywords" content="backend developer roadmap, node.js, python, database, API development, cloud computing, system design, server development" />
                <link rel="canonical" href="https://codeskipper.in/roadmap/backend" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "Backend Developer Roadmap",
                        "description": "Complete step-by-step guide to becoming a backend developer",
                        "totalTime": "P8M",
                        "step": [
                            {
                                "@type": "HowToStep",
                                "name": "Learn Programming Fundamentals",
                                "text": "Start with a backend language like Node.js or Python"
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Master Databases and APIs",
                                "text": "Learn SQL, NoSQL, and RESTful API design"
                            }
                        ]
                    })}
                </script>
            </Head>
            <RoadmapLayout>
                <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
                    {/* Hero Section */}
                    <section className="pt-24 pb-20 px-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-blue-600/5 transform skew-y-3 scale-125"></div>
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
                                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                                        Industry-Focused 2025
                                    </span>
                                </motion.div>
                                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                                    Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Backend Developer</span> Roadmap
                                </h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Master server-side development, databases, APIs, and cloud infrastructure.
                                    Build scalable backend systems and become a full-stack engineer in 8-10 months.
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
                                            <div className="text-2xl text-green-600 mb-2">{stat.icon}</div>
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
                                                ? 'bg-green-600 text-white shadow-lg'
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
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full text-2xl font-bold mb-4">
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
                                                <FaBook className="mr-3 text-green-600" />
                                                Core Concepts & Technologies
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
                                                                            className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs"
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
                                                        className="flex items-center p-3 bg-white rounded-lg shadow hover:shadow-md transition-all border-l-4 border-green-500"
                                                    >
                                                        <div className="text-green-600 mr-3">{resource.icon}</div>
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
                                            className="mt-12 bg-green-50 rounded-2xl p-8"
                                        >
                                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                                <FaCheckCircle className="mr-3 text-green-600" />
                                                Phase Completion Checklist
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {phase.checklist.map((item, index) => (
                                                    <div key={index} className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
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

                    {/* Backend Technologies Stack */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Backend Technology Stack</h2>
                                <p className="text-xl text-gray-600">Master the modern backend development ecosystem</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {techStack.map((stack, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl text-center hover:shadow-xl transition-all border border-green-100"
                                    >
                                        <div className="text-4xl mb-4" style={{ color: stack.color }}>
                                            {stack.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{stack.category}</h3>
                                        <div className="space-y-2">
                                            {stack.technologies.map((tech, techIndex) => (
                                                <div key={techIndex} className="text-gray-600 text-sm">
                                                    {tech}
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
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Backend Career Path</h2>
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
                                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-green-500"
                                    >
                                        <div className="text-4xl text-green-600 mb-4">{path.icon}</div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{path.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">{path.description}</p>
                                        <div className="text-lg font-semibold text-green-600">{path.salary}</div>
                                        <div className="mt-4 flex flex-wrap gap-1">
                                            {path.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs"
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

                    {/* Tools & Infrastructure */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Essential Tools & Infrastructure</h2>
                                <p className="text-xl text-gray-600">Master the tools that power modern backend systems</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                        <p className="text-gray-600 text-sm mb-3">{tool.purpose}</p>
                                        <div className="text-xs text-gray-500">{tool.useCase}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-700 text-white">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <FaRocket className="text-5xl mx-auto mb-6 text-green-200" />
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    Ready to Build Scalable Backend Systems?
                                </h2>
                                <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                                    Join <strong>30,000+ developers</strong> who are mastering backend development with CodeSkipper
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                                    >
                                        Start Backend Journey
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 transition-colors"
                                    >
                                        Download PDF Roadmap
                                    </motion.button>
                                </div>
                                <p className="mt-6 text-green-100">
                                    Free resources • Real projects • Database exercises • Cloud deployment guides
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
    { icon: <FaClock />, value: "8-10 Months", label: "To Complete" },
    { icon: <FaCode />, value: "60+", label: "Skills to Master" },
    { icon: <FaDatabase />, value: "10+", label: "Database Types" },
    { icon: <FaCloud />, value: "100%", label: "Cloud Ready" }
];

const roadmapPhases = [
    {
        title: "Programming Fundamentals",
        description: "Master a backend programming language and core programming concepts",
        duration: "6-8 Weeks",
        topics: [
            {
                title: "Choose Your Language",
                description: "Start with Node.js, Python, or Java for backend development",
                subTopics: ["JavaScript/Node.js", "Python", "Java", "Go"]
            },
            {
                title: "Programming Basics",
                description: "Learn variables, data types, functions, and control structures",
                subTopics: ["Data Structures", "Algorithms", "OOP", "Functional Programming"]
            },
            {
                title: "Development Environment",
                description: "Set up your development environment and tools",
                subTopics: ["VS Code", "Terminal", "Git", "Package Managers"]
            },
            {
                title: "Basic Projects",
                description: "Build simple CLI tools and scripts to practice fundamentals",
                subTopics: ["CLI Applications", "File Operations", "Data Processing"]
            }
        ],
        projects: [
            {
                icon: "🔢",
                title: "CLI Calculator",
                description: "Build a command-line calculator with basic operations",
                technologies: ["Node.js/Python", "CLI", "Functions"]
            },
            {
                icon: "📊",
                title: "Data Analyzer",
                description: "Create a tool to process and analyze data files",
                technologies: ["File I/O", "Data Structures", "Algorithms"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "Node.js Official Docs",
                type: "Documentation",
                link: "https://nodejs.org/docs/"
            },
            {
                icon: <FaVideo />,
                title: "Python for Everybody",
                type: "Free Course",
                link: "https://www.py4e.com"
            },
            {
                icon: <FaBook />,
                title: "Eloquent JavaScript",
                type: "Free Book",
                link: "https://eloquentjavascript.net"
            }
        ],
        checklist: [
            "Complete basic programming exercises",
            "Build 2-3 CLI applications",
            "Understand OOP concepts",
            "Master Git basics",
            "Set up development environment"
        ]
    },
    {
        title: "Databases & APIs",
        description: "Learn database management and build RESTful APIs",
        duration: "8-10 Weeks",
        topics: [
            {
                title: "SQL Databases",
                description: "Master relational databases and SQL queries",
                subTopics: ["PostgreSQL", "MySQL", "Schema Design", "Normalization"]
            },
            {
                title: "NoSQL Databases",
                description: "Learn document-based and key-value databases",
                subTopics: ["MongoDB", "Redis", "Data Modeling", "Aggregation"]
            },
            {
                title: "RESTful APIs",
                description: "Design and build RESTful web services",
                subTopics: ["HTTP Methods", "Status Codes", "API Design", "Documentation"]
            },
            {
                title: "API Security",
                description: "Implement authentication and authorization",
                subTopics: ["JWT", "OAuth", "CORS", "Rate Limiting"]
            }
        ],
        projects: [
            {
                icon: "🏪",
                title: "E-commerce API",
                description: "Build a complete REST API for an online store",
                technologies: ["Node.js/Express", "MongoDB", "JWT Auth"]
            },
            {
                icon: "📝",
                title: "Blog API",
                description: "Create a blogging platform API with user management",
                technologies: ["REST API", "PostgreSQL", "Authentication"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "PostgreSQL Tutorial",
                type: "Documentation",
                link: "https://www.postgresqltutorial.com"
            },
            {
                icon: <FaVideo />,
                title: "MongoDB University",
                type: "Free Courses",
                link: "https://university.mongodb.com"
            },
            {
                icon: <FaBook />,
                title: "REST API Design Guide",
                type: "Best Practices",
                link: "https://restfulapi.net"
            }
        ],
        checklist: [
            "Design and implement database schemas",
            "Build 2-3 RESTful APIs",
            "Implement authentication systems",
            "Write complex SQL queries",
            "Document APIs with OpenAPI/Swagger"
        ]
    },
    {
        title: "Backend Frameworks & Architecture",
        description: "Master backend frameworks and application architecture patterns",
        duration: "8-10 Weeks",
        topics: [
            {
                title: "Backend Frameworks",
                description: "Learn popular frameworks for rapid development",
                subTopics: ["Express.js", "Django", "Spring Boot", "Nest.js"]
            },
            {
                title: "Application Architecture",
                description: "Design scalable and maintainable backend systems",
                subTopics: ["MVC", "Microservices", "Clean Architecture", "DDD"]
            },
            {
                title: "Authentication & Authorization",
                description: "Implement secure user management systems",
                subTopics: ["Passport.js", "OAuth 2.0", "Role-based Access", "Sessions"]
            },
            {
                title: "File Handling & Uploads",
                description: "Manage file uploads and storage efficiently",
                subTopics: ["Multer", "Cloud Storage", "File Validation", "CDN"]
            }
        ],
        projects: [
            {
                icon: "🎵",
                title: "Music Streaming API",
                description: "Build a backend for music streaming with user playlists",
                technologies: ["Express.js", "PostgreSQL", "File Uploads"]
            },
            {
                icon: "💬",
                title: "Real-time Chat API",
                description: "Create a chat application backend with rooms and messages",
                technologies: ["WebSockets", "Redis", "Authentication"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "Express.js Guide",
                type: "Documentation",
                link: "https://expressjs.com/en/guide.html"
            },
            {
                icon: <FaVideo />,
                title: "Django for Beginners",
                type: "Free Course",
                link: "https://djangoforbeginners.com"
            },
            {
                icon: <FaBook />,
                title: "Clean Architecture",
                type: "Book",
                link: "https://www.oreilly.com/library/view/clean-architecture-a/9780134494272/"
            }
        ],
        checklist: [
            "Build applications with 2+ frameworks",
            "Implement microservices architecture",
            "Create secure authentication systems",
            "Handle file uploads and storage",
            "Apply design patterns in projects"
        ]
    },
    {
        title: "DevOps & Deployment",
        description: "Master deployment, containerization, and cloud services",
        duration: "6-8 Weeks",
        topics: [
            {
                title: "Containerization",
                description: "Learn Docker and container orchestration",
                subTopics: ["Docker", "Docker Compose", "Kubernetes", "Container Registry"]
            },
            {
                title: "Cloud Platforms",
                description: "Deploy applications on cloud infrastructure",
                subTopics: ["AWS", "Google Cloud", "Azure", "Serverless"]
            },
            {
                title: "CI/CD Pipelines",
                description: "Set up continuous integration and deployment",
                subTopics: ["GitHub Actions", "Jenkins", "GitLab CI", "Automated Testing"]
            },
            {
                title: "Monitoring & Logging",
                description: "Implement application monitoring and logging",
                subTopics: ["Logging", "Metrics", "APM", "Alerting"]
            }
        ],
        projects: [
            {
                icon: "🐳",
                title: "Dockerized Application",
                description: "Containerize a full-stack application with Docker",
                technologies: ["Docker", "Docker Compose", "Multi-stage Builds"]
            },
            {
                icon: "☁️",
                title: "Cloud Deployment",
                description: "Deploy application to AWS with auto-scaling",
                technologies: ["AWS EC2", "Load Balancer", "Auto Scaling"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "Docker Documentation",
                type: "Documentation",
                link: "https://docs.docker.com"
            },
            {
                icon: <FaVideo />,
                title: "AWS Training",
                type: "Free Courses",
                link: "https://aws.amazon.com/training/"
            },
            {
                icon: <FaBook />,
                title: "Kubernetes Basics",
                type: "Tutorial",
                link: "https://kubernetes.io/docs/tutorials/kubernetes-basics/"
            }
        ],
        checklist: [
            "Containerize applications with Docker",
            "Deploy to cloud platform (AWS/GCP/Azure)",
            "Set up CI/CD pipeline",
            "Implement monitoring and logging",
            "Configure auto-scaling and load balancing"
        ]
    },
    {
        title: "Advanced Concepts & System Design",
        description: "Master advanced backend concepts and system architecture",
        duration: "6-8 Weeks",
        topics: [
            {
                title: "System Design",
                description: "Design scalable and reliable systems",
                subTopics: ["Load Balancing", "Caching", "CDN", "Database Sharding"]
            },
            {
                title: "Message Queues",
                description: "Implement asynchronous communication",
                subTopics: ["RabbitMQ", "Apache Kafka", "Message Brokers", "Event-driven"]
            },
            {
                title: "Performance Optimization",
                description: "Optimize backend performance and efficiency",
                subTopics: ["Caching Strategies", "Database Indexing", "Query Optimization"]
            },
            {
                title: "Security Best Practices",
                description: "Implement advanced security measures",
                subTopics: ["Encryption", "Security Headers", "Vulnerability Scanning"]
            }
        ],
        projects: [
            {
                icon: "⚡",
                title: "High-traffic API",
                description: "Build an API designed to handle millions of requests",
                technologies: ["Caching", "Load Balancing", "Database Optimization"]
            },
            {
                icon: "📨",
                title: "Event-driven System",
                description: "Create a system using message queues and microservices",
                technologies: ["Kafka/RabbitMQ", "Microservices", "Event Sourcing"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "System Design Primer",
                type: "GitHub Repository",
                link: "https://github.com/donnemartin/system-design-primer"
            },
            {
                icon: <FaVideo />,
                title: "Kafka Tutorials",
                type: "Video Series",
                link: "https://www.youtube.com/playlist?list=PLGRDMO4rOGcNXD2fKdS6Hso1NlC0A4LKS"
            },
            {
                icon: <FaBook />,
                title: "OWASP Security Guide",
                type: "Security Best Practices",
                link: "https://owasp.org/www-project-top-ten/"
            }
        ],
        checklist: [
            "Design and diagram complex systems",
            "Implement message queue systems",
            "Optimize application performance",
            "Apply advanced security measures",
            "Prepare for technical interviews"
        ]
    }
];

const techStack = [
    {
        category: "Backend Languages",
        icon: <FaCode />,
        color: "#E44D26",
        technologies: ["Node.js", "Python", "Java", "Go", "C#"]
    },
    {
        category: "Databases",
        icon: <FaDatabase />,
        color: "#336791",
        technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"]
    },
    {
        category: "Frameworks",
        icon: <FaServer />,
        color: "#68A063",
        technologies: ["Express.js", "Django", "Spring Boot", "Nest.js", "FastAPI"]
    },
    {
        category: "Cloud & DevOps",
        icon: <FaCloud />,
        color: "#FF9900",
        technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"]
    }
];

const careerPaths = [
    {
        icon: "💻",
        title: "Backend Developer",
        description: "Focus on server-side logic, database management, and API development",
        salary: "₹6-12 LPA",
        skills: ["Node.js/Python", "REST APIs", "Database Design", "Authentication"]
    },
    {
        icon: "☁️",
        title: "Cloud Engineer",
        description: "Specialize in cloud infrastructure, deployment, and scalability",
        salary: "₹10-20 LPA",
        skills: ["AWS/Azure/GCP", "Docker", "Kubernetes", "Infrastructure as Code"]
    },
    {
        icon: "🏗️",
        title: "System Architect",
        description: "Design complex systems and make high-level technical decisions",
        salary: "₹18-35 LPA",
        skills: ["System Design", "Microservices", "Performance", "Security"]
    }
];

const tools = [
    {
        name: "Docker",
        purpose: "Containerization",
        useCase: "Package and deploy applications",
        icon: <FaDocker />,
        color: "#2496ED"
    },
    {
        name: "PostgreSQL",
        purpose: "Relational Database",
        useCase: "Structured data storage",
        icon: <SiPostgresql />,
        color: "#336791"
    },
    {
        name: "Redis",
        purpose: "In-memory Data Store",
        useCase: "Caching and session storage",
        icon: <SiRedis />,
        color: "#DC382D"
    },
    {
        name: "AWS",
        purpose: "Cloud Platform",
        useCase: "Infrastructure and services",
        icon: <FaAws />,
        color: "#FF9900"
    },
    {
        name: "Kubernetes",
        purpose: "Container Orchestration",
        useCase: "Managing containerized apps",
        icon: <SiKubernetes />,
        color: "#326CE5"
    },
    {
        name: "NGINX",
        purpose: "Web Server & Proxy",
        useCase: "Load balancing and reverse proxy",
        icon: <SiNginx />,
        color: "#009639"
    }
];
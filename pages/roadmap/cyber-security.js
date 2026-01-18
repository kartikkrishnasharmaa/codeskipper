// pages/roadmaps/cyber-security-expert.js
import { motion } from 'framer-motion';
import {
    FaShieldAlt,
    FaLock,
    FaUserSecret,
    FaCode,
    FaNetworkWired,
    FaRocket,
    FaCheckCircle,
    FaBook,
    FaVideo,
    FaProjectDiagram,
    FaTools,
    FaBolt,
    FaGraduationCap,
    FaClock,
    FaExternalLinkAlt,
    FaGitAlt,
    FaLinux,
    FaWindows,
    FaCloud,
    FaDatabase,
    FaMobile
} from 'react-icons/fa';
import {
    SiKalilinux,
    SiPython,
    SiWindows,
    SiLinux,
    SiDocker,
    SiAmazonaws,
    SiGooglecloud
} from 'react-icons/si';
import Head from 'next/head';
import { useState } from 'react';
import RoadmapLayout from "@/components/layouts/RoadmapLayout";


export default function CyberSecurityExpertRoadmap() {
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
                <title>Complete Cyber Security Expert Roadmap 2024 | CodeSkipper.in</title>
                <meta
                    name="description"
                    content="Master Cyber Security with our complete roadmap. Learn ethical hacking, network security, penetration testing, digital forensics, and become a security expert."
                />
                <meta name="keywords" content="cyber security roadmap, ethical hacking, network security, penetration testing, digital forensics, information security, cyber security career" />
                <link rel="canonical" href="https://codeskipper.in/roadmaps/cyber-security-expert" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "Cyber Security Expert Roadmap",
                        "description": "Complete step-by-step guide to becoming a cyber security expert",
                        "totalTime": "P12M",
                        "step": [
                            {
                                "@type": "HowToStep",
                                "name": "Learn Networking Fundamentals",
                                "text": "Master TCP/IP, network protocols, and network architecture"
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Operating System Security",
                                "text": "Learn Linux and Windows security fundamentals"
                            }
                        ]
                    })}
                </script>
            </Head>
            <RoadmapLayout>
                <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
                    {/* Hero Section */}
                    <section className="pt-24 pb-20 px-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 transform skew-y-3 scale-125"></div>
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
                                        High-Demand Career Path
                                    </span>
                                </motion.div>
                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                    Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Cyber Security</span> Expert Roadmap
                                </h1>
                                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                    Master the art of protecting digital systems and networks from cyber threats.
                                    Learn ethical hacking, penetration testing, digital forensics, and become a guardian of the digital world.
                                </p>

                                {/* Security Domains Icons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex justify-center items-center space-x-8 mt-12"
                                >
                                    {securityDomains.map((domain, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.2, y: -5 }}
                                            className="text-center"
                                        >
                                            <div className="text-4xl mb-2 text-blue-400">
                                                {domain.icon}
                                            </div>
                                            <div className="text-sm font-semibold text-gray-300">{domain.name}</div>
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
                                            className="text-center p-4 bg-gray-800 rounded-xl shadow-lg border border-gray-700"
                                        >
                                            <div className="text-2xl text-blue-400 mb-2">{stat.icon}</div>
                                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                                            <div className="text-gray-400 text-sm">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Roadmap Navigation */}
                    <section className="py-8 px-4 bg-gray-800 sticky top-0 z-40 shadow-lg border-b border-gray-700">
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
                                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
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
                                        <h2 className="text-4xl font-bold text-white mb-4">{phase.title}</h2>
                                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">{phase.description}</p>
                                        <div className="flex items-center justify-center mt-4 text-gray-400">
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
                                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                                <FaBook className="mr-3 text-blue-400" />
                                                Core Concepts & Skills
                                            </h3>
                                            <div className="space-y-4">
                                                {phase.topics.map((topic, topicIndex) => (
                                                    <motion.div
                                                        key={topicIndex}
                                                        variants={itemVariants}
                                                        whileHover={{ scale: 1.02, x: 10 }}
                                                        className="flex items-start p-4 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-700"
                                                    >
                                                        <FaCheckCircle className="text-green-500 mt-1 mr-4 flex-shrink-0" />
                                                        <div>
                                                            <h4 className="font-semibold text-white mb-1">{topic.title}</h4>
                                                            <p className="text-gray-400 text-sm">{topic.description}</p>
                                                            {topic.subTopics && (
                                                                <div className="mt-2 flex flex-wrap gap-1">
                                                                    {topic.subTopics.map((sub, subIndex) => (
                                                                        <span
                                                                            key={subIndex}
                                                                            className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs"
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
                                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                                <FaProjectDiagram className="mr-3 text-purple-400" />
                                                Hands-on Labs & Projects
                                            </h3>
                                            <div className="space-y-4 mb-8">
                                                {phase.projects.map((project, projectIndex) => (
                                                    <motion.div
                                                        key={projectIndex}
                                                        variants={itemVariants}
                                                        className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-700"
                                                    >
                                                        <div className="flex items-start">
                                                            <div className="bg-purple-900 text-purple-400 p-2 rounded-lg mr-4">
                                                                {project.icon}
                                                            </div>
                                                            <div>
                                                                <h4 className="font-semibold text-white mb-1">{project.title}</h4>
                                                                <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                                                                <div className="flex flex-wrap gap-1">
                                                                    {project.technologies.map((tech, techIndex) => (
                                                                        <span
                                                                            key={techIndex}
                                                                            className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
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
                                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                                <FaVideo className="mr-3 text-blue-400" />
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
                                                        className="flex items-center p-3 bg-gray-800 rounded-lg shadow hover:shadow-md transition-all border-l-4 border-blue-500 border border-gray-700"
                                                    >
                                                        <div className="text-blue-400 mr-3">{resource.icon}</div>
                                                        <div className="flex-1">
                                                            <div className="font-semibold text-white">{resource.title}</div>
                                                            <div className="text-gray-400 text-sm">{resource.type}</div>
                                                        </div>
                                                        <FaExternalLinkAlt className="text-gray-500" />
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
                                            className="mt-12 bg-blue-900/20 rounded-2xl p-8 border border-blue-800"
                                        >
                                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                                <FaCheckCircle className="mr-3 text-blue-400" />
                                                Phase Completion Checklist
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {phase.checklist.map((item, index) => (
                                                    <div key={index} className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                                                        />
                                                        <label className="ml-2 text-gray-300">{item}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Cyber Security Domains */}
                    <section className="py-20 px-4 bg-gray-800">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-white mb-6">Cyber Security Domains</h2>
                                <p className="text-xl text-gray-300">Major specializations in cyber security career</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {cyberSecurityDomains.map((domain, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gradient-to-br from-gray-800 to-blue-900/20 p-6 rounded-2xl text-center hover:shadow-xl transition-all border border-gray-700"
                                    >
                                        <div className="text-4xl mb-4 text-blue-400">
                                            {domain.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{domain.domain}</h3>
                                        <p className="text-gray-400 text-sm mb-4">{domain.description}</p>
                                        <div className="space-y-2 text-left">
                                            {domain.skills.map((skill, skillIndex) => (
                                                <div key={skillIndex} className="flex items-center text-sm text-gray-300">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Career Path Section */}
                    <section className="py-20 px-4 bg-gray-900">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-white mb-6">Cyber Security Career Path</h2>
                                <p className="text-xl text-gray-300">High-demand roles and growth opportunities</p>
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
                                        className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-500 border border-gray-700"
                                    >
                                        <div className="text-4xl text-blue-400 mb-4">{path.icon}</div>
                                        <h3 className="text-xl font-bold text-white mb-3">{path.title}</h3>
                                        <p className="text-gray-400 leading-relaxed mb-4">{path.description}</p>
                                        <div className="text-lg font-semibold text-blue-400 mb-4">{path.salary}</div>
                                        <div className="flex flex-wrap gap-1">
                                            {path.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs"
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
                    <section className="py-20 px-4 bg-gray-800">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-white mb-6">Essential Security Tools</h2>
                                <p className="text-xl text-gray-300">Industry-standard tools for cyber security professionals</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {tools.map((tool, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-600 text-center"
                                    >
                                        <div className="text-4xl mb-4 text-blue-400">
                                            {tool.icon}
                                        </div>
                                        <h3 className="font-bold text-white mb-2">{tool.name}</h3>
                                        <p className="text-gray-400 text-sm">{tool.purpose}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Certifications */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white rounded-2xl p-8 border border-blue-700"
                            >
                                <h3 className="text-2xl font-bold mb-6 text-center">Industry Certifications</h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="flex items-start">
                                            <FaCheckCircle className="text-blue-300 mt-1 mr-3 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold mb-1">{cert.name}</h4>
                                                <p className="text-blue-200 text-sm">{cert.level} • {cert.focus}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <FaRocket className="text-5xl mx-auto mb-6 text-blue-300" />
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    Ready to Protect the Digital World?
                                </h2>
                                <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                                    Join <strong>25,000+ security professionals</strong> who are building safer digital environments with CodeSkipper
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                                    >
                                        Start Security Journey
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
                                    >
                                        Download PDF Roadmap
                                    </motion.button>
                                </div>
                                <p className="mt-6 text-blue-200">
                                    Free labs • Hands-on exercises • Virtual environments • Career guidance
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
const securityDomains = [
    {
        name: "Network Security",
        icon: <FaNetworkWired />
    },
    {
        name: "Ethical Hacking",
        icon: <FaUserSecret />
    },
    {
        name: "Digital Forensics",
        icon: <FaLock />
    },
    {
        name: "Cloud Security",
        icon: <FaCloud />
    }
];

const quickStats = [
    { icon: <FaClock />, value: "12-18 Months", label: "To Complete" },
    { icon: <FaCode />, value: "70+", label: "Skills to Master" },
    { icon: <FaProjectDiagram />, value: "20+", label: "Hands-on Labs" },
    { icon: <FaGraduationCap />, value: "100%", label: "Industry Ready" }
];

const roadmapPhases = [
    {
        title: "Foundations & Networking",
        description: "Build strong fundamentals in IT, networking, and basic security concepts",
        duration: "3-4 Months",
        topics: [
            {
                title: "Networking Fundamentals",
                description: "Master TCP/IP, network protocols, and network architecture",
                subTopics: ["TCP/IP Model", "Subnetting", "DNS", "DHCP", "HTTP/HTTPS"]
            },
            {
                title: "Operating Systems",
                description: "Learn Linux and Windows administration and security",
                subTopics: ["Linux Commands", "Windows Server", "User Management", "File Systems"]
            },
            {
                title: "Basic Security Concepts",
                description: "Understand core security principles and terminology",
                subTopics: ["CIA Triad", "Risk Management", "Security Policies", "Threat Landscape"]
            },
            {
                title: "Programming Basics",
                description: "Learn scripting and programming for security automation",
                subTopics: ["Python", "Bash Scripting", "PowerShell", "Regular Expressions"]
            }
        ],
        projects: [
            {
                icon: "🌐",
                title: "Home Lab Setup",
                description: "Build a virtual home lab with multiple operating systems",
                technologies: ["VirtualBox/VMware", "Linux", "Windows Server", "Networking"]
            },
            {
                icon: "🔧",
                title: "Network Scanner",
                description: "Create a Python-based network scanner tool",
                technologies: ["Python", "Socket Programming", "Network Protocols"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "Network+ Guide",
                type: "Study Guide",
                link: "https://www.comptia.org/certifications/network"
            },
            {
                icon: <FaVideo />,
                title: "Linux for Beginners",
                type: "Free Course",
                link: "https://www.youtube.com/playlist?list=PLtK75qxsQaMLZSo7KL-PmiRarU7hrpnwK"
            },
            {
                icon: <FaBook />,
                title: "Python for Security",
                type: "Book",
                link: "https://nostarch.com/black-hat-python2"
            }
        ],
        checklist: [
            "Set up virtual lab environment",
            "Master basic Linux commands",
            "Understand TCP/IP model",
            "Write basic Python scripts",
            "Configure network services"
        ]
    },
    {
        title: "System Security & Hardening",
        description: "Learn to secure operating systems and implement security controls",
        duration: "3-4 Months",
        topics: [
            {
                title: "Linux Security",
                description: "Secure Linux systems and implement security controls",
                subTopics: ["SELinux/AppArmor", "Firewall Configuration", "Log Analysis", "PAM"]
            },
            {
                title: "Windows Security",
                description: "Harden Windows systems and implement security policies",
                subTopics: ["Group Policy", "Windows Defender", "BitLocker", "Event Logs"]
            },
            {
                title: "Vulnerability Management",
                description: "Identify and manage system vulnerabilities",
                subTopics: ["Vulnerability Scanning", "Patch Management", "Risk Assessment"]
            },
            {
                title: "Identity & Access Management",
                description: "Manage user identities and access controls",
                subTopics: ["Active Directory", "LDAP", "MFA", "RBAC"]
            }
        ],
        projects: [
            {
                icon: "🛡️",
                title: "System Hardening",
                description: "Harden Linux and Windows systems following security benchmarks",
                technologies: ["CIS Benchmarks", "Security Policies", "Hardening Scripts"]
            },
            {
                icon: "🔍",
                title: "Vulnerability Assessment",
                description: "Perform vulnerability assessment on test systems",
                technologies: ["Nessus", "OpenVAS", "Vulnerability Scanning"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "Linux Security Guide",
                type: "Documentation",
                link: "https://linuxsecurity.com/guides"
            },
            {
                icon: <FaVideo />,
                title: "Windows Security",
                type: "Course",
                link: "https://www.udemy.com/course/windows-server-security"
            },
            {
                icon: <FaBook />,
                title: "CIS Benchmarks",
                type: "Security Standards",
                link: "https://www.cisecurity.org/cis-benchmarks"
            }
        ],
        checklist: [
            "Harden Linux and Windows systems",
            "Configure and manage firewalls",
            "Perform vulnerability assessments",
            "Implement access controls",
            "Analyze system logs"
        ]
    },
    {
        title: "Network Security & Defense",
        description: "Master network security, firewalls, intrusion detection, and monitoring",
        duration: "3-4 Months",
        topics: [
            {
                title: "Firewalls & Network Security",
                description: "Configure and manage network security devices",
                subTopics: ["iptables", "Cisco ASA", "Palo Alto", "Network Segmentation"]
            },
            {
                title: "Intrusion Detection/Prevention",
                description: "Implement and manage IDS/IPS systems",
                subTopics: ["Snort", "Suricata", "Signature Writing", "Alert Management"]
            },
            {
                title: "Network Monitoring",
                description: "Monitor network traffic and detect anomalies",
                subTopics: ["Wireshark", "tcpdump", "SIEM", "Network Flow Analysis"]
            },
            {
                title: "VPN & Cryptography",
                description: "Implement secure communications and encryption",
                subTopics: ["IPSec", "SSL/TLS", "Cryptographic Algorithms", "PKI"]
            }
        ],
        projects: [
            {
                icon: "🚨",
                title: "IDS Implementation",
                description: "Set up and configure Snort IDS with custom rules",
                technologies: ["Snort", "Rule Writing", "Alert Monitoring", "Log Analysis"]
            },
            {
                icon: "📊",
                title: "Network Monitoring",
                description: "Build a network monitoring dashboard with SIEM",
                technologies: ["ELK Stack", "Wireshark", "Network Analysis"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "Network Security Bible",
                type: "Book",
                link: "https://www.wiley.com/en-us/Network+Security+Bible%2C+2nd+Edition-p-9781118083220"
            },
            {
                icon: <FaVideo />,
                title: "Wireshark Tutorial",
                type: "Course",
                link: "https://www.youtube.com/playlist?list=PLW8bTPyXHB8x4edS2fuBIsDzg4ht3J5MY"
            },
            {
                icon: <FaBook />,
                title: "Snort Documentation",
                type: "Official Docs",
                link: "https://www.snort.org/documents"
            }
        ],
        checklist: [
            "Configure and manage firewalls",
            "Write custom IDS rules",
            "Analyze network traffic",
            "Implement VPN solutions",
            "Set up network monitoring"
        ]
    },
    {
        title: "Ethical Hacking & Penetration Testing",
        description: "Learn offensive security techniques and penetration testing methodologies",
        duration: "4-5 Months",
        topics: [
            {
                title: "Penetration Testing Methodology",
                description: "Follow structured penetration testing approaches",
                subTopics: ["OSINT", "Scanning", "Enumeration", "Exploitation", "Post-Exploitation"]
            },
            {
                title: "Web Application Security",
                description: "Identify and exploit web application vulnerabilities",
                subTopics: ["OWASP Top 10", "SQL Injection", "XSS", "CSRF", "API Security"]
            },
            {
                title: "Network Exploitation",
                description: "Exploit network services and protocols",
                subTopics: ["Metasploit", "Password Attacks", "Privilege Escalation", "Lateral Movement"]
            },
            {
                title: "Social Engineering",
                description: "Understand and defend against human factors",
                subTopics: ["Phishing", "Physical Security", "Security Awareness"]
            }
        ],
        projects: [
            {
                icon: "🎯",
                title: "Full Penetration Test",
                description: "Perform complete penetration test on test environment",
                technologies: ["Kali Linux", "Metasploit", "Burp Suite", "Nmap"]
            },
            {
                icon: "🕸️",
                title: "Web App Security Assessment",
                description: "Conduct security assessment of web applications",
                technologies: ["OWASP Testing", "Burp Suite", "SQLMap", "Custom Scripts"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "Penetration Testing Execution Standard",
                type: "Framework",
                link: "http://www.pentest-standard.org"
            },
            {
                icon: <FaVideo />,
                title: "Ethical Hacking Course",
                type: "Certification Prep",
                link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh"
            },
            {
                icon: <FaBook />,
                title: "Web Application Hacker's Handbook",
                type: "Book",
                link: "https://www.wiley.com/en-us/The+Web+Application+Hacker%27s+Handbook%3A+Finding+and+Exploiting+Security+Flaws%2C+2nd+Edition-p-9781118026472"
            }
        ],
        checklist: [
            "Perform complete penetration tests",
            "Exploit web application vulnerabilities",
            "Use Metasploit framework",
            "Conduct social engineering assessments",
            "Write comprehensive penetration test reports"
        ]
    },
    {
        title: "Advanced Security & Specializations",
        description: "Master advanced security domains and choose specializations",
        duration: "3-4 Months",
        topics: [
            {
                title: "Cloud Security",
                description: "Secure cloud environments and services",
                subTopics: ["AWS Security", "Azure Security", "Container Security", "Serverless Security"]
            },
            {
                title: "Digital Forensics",
                description: "Investigate security incidents and collect evidence",
                subTopics: ["Disk Forensics", "Memory Analysis", "Network Forensics", "Mobile Forensics"]
            },
            {
                title: "Incident Response",
                description: "Respond to and recover from security incidents",
                subTopics: ["IR Planning", "Malware Analysis", "Threat Hunting", "Recovery Procedures"]
            },
            {
                title: "Security Architecture",
                description: "Design secure systems and architectures",
                subTopics: ["Zero Trust", "Defense in Depth", "Security Frameworks", "Compliance"]
            }
        ],
        projects: [
            {
                icon: "☁️",
                title: "Cloud Security Assessment",
                description: "Assess and secure cloud infrastructure",
                technologies: ["AWS/Azure", "CloudTrail", "Security Groups", "IAM Policies"]
            },
            {
                icon: "🔎",
                title: "Digital Forensics Investigation",
                description: "Conduct digital forensics investigation on sample cases",
                technologies: ["FTK", "Volatility", "Autopsy", "Forensic Tools"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "Cloud Security Alliance",
                type: "Framework",
                link: "https://cloudsecurityalliance.org"
            },
            {
                icon: <FaVideo />,
                title: "Digital Forensics Course",
                type: "Training",
                link: "https://www.sans.org/cyber-security-courses/digital-forensics-fundamentals"
            },
            {
                icon: <FaBook />,
                title: "NIST Cybersecurity Framework",
                type: "Standards",
                link: "https://www.nist.gov/cyberframework"
            }
        ],
        checklist: [
            "Secure cloud environments",
            "Perform digital forensics investigations",
            "Respond to security incidents",
            "Design secure architectures",
            "Prepare for industry certifications"
        ]
    }
];

const cyberSecurityDomains = [
    {
        domain: "Network Security",
        description: "Protect network infrastructure and data in transit",
        icon: <FaNetworkWired />,
        skills: ["Firewall Management", "IDS/IPS", "VPN", "Network Monitoring"]
    },
    {
        domain: "Application Security",
        description: "Secure software applications throughout development lifecycle",
        icon: <FaCode />,
        skills: ["Code Review", "Penetration Testing", "SAST/DAST", "API Security"]
    },
    {
        domain: "Cloud Security",
        description: "Protect cloud infrastructure and services",
        icon: <FaCloud />,
        skills: ["Cloud Compliance", "Identity Management", "Data Protection", "Container Security"]
    },
    {
        domain: "Digital Forensics",
        description: "Investigate cyber crimes and security incidents",
        icon: <FaUserSecret />,
        skills: ["Evidence Collection", "Malware Analysis", "Incident Response", "Legal Procedures"]
    }
];

const careerPaths = [
    {
        icon: "🔐",
        title: "Security Analyst",
        description: "Monitor security systems and respond to incidents",
        salary: "₹6-12 LPA",
        skills: ["SIEM", "Incident Response", "Threat Monitoring", "Security Tools"]
    },
    {
        icon: "🎯",
        title: "Penetration Tester",
        description: "Ethically hack systems to find vulnerabilities",
        salary: "₹8-18 LPA",
        skills: ["Ethical Hacking", "Vulnerability Assessment", "Reporting", "Tools Mastery"]
    },
    {
        icon: "🏢",
        title: "Security Architect",
        description: "Design and build secure IT infrastructure",
        salary: "₹15-30 LPA",
        skills: ["System Design", "Security Frameworks", "Risk Assessment", "Architecture"]
    }
];

const tools = [
    {
        name: "Kali Linux",
        purpose: "Penetration Testing",
        icon: <SiKalilinux />
    },
    {
        name: "Wireshark",
        purpose: "Network Analysis",
        icon: <FaNetworkWired />
    },
    {
        name: "Metasploit",
        purpose: "Exploitation Framework",
        icon: <FaCode />
    },
    {
        name: "Nmap",
        purpose: "Network Scanning",
        icon: <FaNetworkWired />
    },
    {
        name: "Burp Suite",
        purpose: "Web Application Testing",
        icon: <FaCode />
    },
    {
        name: "Splunk",
        purpose: "SIEM & Log Analysis",
        icon: <FaDatabase />
    },
    {
        name: "Nessus",
        purpose: "Vulnerability Scanner",
        icon: <FaShieldAlt />
    },
    {
        name: "Autopsy",
        purpose: "Digital Forensics",
        icon: <FaUserSecret />
    }
];

const certifications = [
    {
        name: "CompTIA Security+",
        level: "Entry",
        focus: "Foundational Security"
    },
    {
        name: "CEH (Certified Ethical Hacker)",
        level: "Intermediate",
        focus: "Ethical Hacking"
    },
    {
        name: "CISSP",
        level: "Advanced",
        focus: "Security Management"
    },
    {
        name: "OSCP",
        level: "Advanced",
        focus: "Penetration Testing"
    },
    {
        name: "CISM",
        level: "Advanced",
        focus: "Security Management"
    },
    {
        name: "GSEC",
        level: "Intermediate",
        focus: "Technical Security"
    }
];
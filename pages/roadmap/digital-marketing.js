// pages/roadmaps/digital-marketing-expert.js
import { motion } from 'framer-motion';
import {
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
    FaMobile,
    FaChartLine,
    FaSearch,
    FaHashtag,
    FaEnvelope,
    FaShoppingCart,
    FaLaptop,
    FaUsers,
    FaCamera,
    FaPenFancy,
    FaMoneyBillWave,
    FaGlobe,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaGoogle,
    FaLinkedin
} from 'react-icons/fa';
import {
    SiGoogleads,
    SiFacebook,
    SiInstagram,
    SiTwitter,
    SiYoutube,
    SiLinkedin,
    SiTiktok,
    SiShopify,
    SiWordpress,
    SiGoogleanalytics
} from 'react-icons/si';
import Head from 'next/head';
import { useState } from 'react';
import RoadmapLayout from "@/components/layouts/RoadmapLayout";

export default function DigitalMarketingRoadmap() {
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
                <title>Complete Digital Marketing Expert Roadmap 2025 | CodeSkipper.in</title>
                <meta
                    name="description"
                    content="Master Digital Marketing with our complete roadmap. Learn SEO, social media marketing, content creation, paid advertising, analytics, and become a marketing expert."
                />
                <meta name="keywords" content="digital marketing roadmap, SEO, social media marketing, content marketing, paid advertising, email marketing, analytics" />
                <link rel="canonical" href="https://codeskipper.in/roadmap/digital-marketing" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "Digital Marketing Expert Roadmap",
                        "description": "Complete step-by-step guide to becoming a digital marketing expert",
                        "totalTime": "P8M",
                        "step": [
                            {
                                "@type": "HowToStep",
                                "name": "Learn Marketing Fundamentals",
                                "text": "Master marketing principles, consumer behavior, and digital marketing channels"
                            },
                            {
                                "@type": "HowToStep",
                                "name": "Search Engine Optimization",
                                "text": "Learn SEO techniques to improve website visibility"
                            }
                        ]
                    })}
                </script>
            </Head>
            <RoadmapLayout>
                <div className="min-h-screen">
                    {/* Hero Section */}
                    <section className="pt-24 pb-20 px-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-purple-600/10 transform skew-y-3 scale-125"></div>
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
                                    <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                                        High-Growth Career Path
                                    </span>
                                </motion.div>
                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                    Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Digital Marketing</span> Expert Roadmap
                                </h1>
                                <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                                    Master the art of digital promotion and brand building. Learn SEO, social media marketing, 
                                    content creation, paid advertising, and drive business growth in the digital world.
                                </p>

                                {/* Marketing Channels Icons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex justify-center items-center space-x-8 mt-12"
                                >
                                    {marketingChannels.map((channel, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.2, y: -5 }}
                                            className="text-center"
                                        >
                                            <div className="text-4xl mb-2 text-pink-400">
                                                {channel.icon}
                                            </div>
                                            <div className="text-sm font-semibold text-gray-200">{channel.name}</div>
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
                                            className="text-center p-4 bg-purple-800 rounded-xl shadow-lg border border-purple-700"
                                        >
                                            <div className="text-2xl text-pink-400 mb-2">{stat.icon}</div>
                                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                                            <div className="text-gray-300 text-sm">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Roadmap Navigation */}
                    <section className="py-8 px-4 bg-purple-800 sticky top-0 z-40 shadow-lg border-b border-purple-700">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex overflow-x-auto space-x-2 py-2 hide-scrollbar">
                                {roadmapPhases.map((phase, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => setActivePhase(index)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold transition-all ${activePhase === index
                                                ? 'bg-pink-600 text-white shadow-lg'
                                                : 'bg-purple-700 text-gray-300 hover:bg-purple-600'
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
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-600 text-white rounded-full text-2xl font-bold mb-4">
                                            {phaseIndex + 1}
                                        </div>
                                        <h2 className="text-4xl font-bold text-white mb-4">{phase.title}</h2>
                                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">{phase.description}</p>
                                        <div className="flex items-center justify-center mt-4 text-gray-300">
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
                                                <FaBook className="mr-3 text-pink-400" />
                                                Core Concepts & Skills
                                            </h3>
                                            <div className="space-y-4">
                                                {phase.topics.map((topic, topicIndex) => (
                                                    <motion.div
                                                        key={topicIndex}
                                                        variants={itemVariants}
                                                        whileHover={{ scale: 1.02, x: 10 }}
                                                        className="flex items-start p-4 bg-purple-800 rounded-xl shadow-lg hover:shadow-xl transition-all border border-purple-700"
                                                    >
                                                        <FaCheckCircle className="text-green-400 mt-1 mr-4 flex-shrink-0" />
                                                        <div>
                                                            <h4 className="font-semibold text-white mb-1">{topic.title}</h4>
                                                            <p className="text-gray-300 text-sm">{topic.description}</p>
                                                            {topic.subTopics && (
                                                                <div className="mt-2 flex flex-wrap gap-1">
                                                                    {topic.subTopics.map((sub, subIndex) => (
                                                                        <span
                                                                            key={subIndex}
                                                                            className="bg-pink-900 text-pink-300 px-2 py-1 rounded text-xs"
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
                                                Hands-on Projects
                                            </h3>
                                            <div className="space-y-4 mb-8">
                                                {phase.projects.map((project, projectIndex) => (
                                                    <motion.div
                                                        key={projectIndex}
                                                        variants={itemVariants}
                                                        className="bg-purple-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all border border-purple-700"
                                                    >
                                                        <div className="flex items-start">
                                                            <div className="bg-pink-900 text-pink-400 p-2 rounded-lg mr-4">
                                                                {project.icon}
                                                            </div>
                                                            <div>
                                                                <h4 className="font-semibold text-white mb-1">{project.title}</h4>
                                                                <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                                                                <div className="flex flex-wrap gap-1">
                                                                    {project.technologies.map((tech, techIndex) => (
                                                                        <span
                                                                            key={techIndex}
                                                                            className="bg-purple-700 text-gray-300 px-2 py-1 rounded text-xs"
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
                                                <FaVideo className="mr-3 text-pink-400" />
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
                                                        className="flex items-center p-3 bg-purple-800 rounded-lg shadow hover:shadow-md transition-all border-l-4 border-pink-500 border border-purple-700"
                                                    >
                                                        <div className="text-pink-400 mr-3">{resource.icon}</div>
                                                        <div className="flex-1">
                                                            <div className="font-semibold text-white">{resource.title}</div>
                                                            <div className="text-gray-300 text-sm">{resource.type}</div>
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
                                            className="mt-12 bg-pink-900/20 rounded-2xl p-8 border border-pink-800"
                                        >
                                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                                <FaCheckCircle className="mr-3 text-pink-400" />
                                                Phase Completion Checklist
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {phase.checklist.map((item, index) => (
                                                    <div key={index} className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 text-pink-600 bg-purple-700 border-purple-600 rounded focus:ring-pink-500"
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

                    {/* Marketing Specializations */}
                    <section className="py-20 px-4 bg-purple-800">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-white mb-6">Digital Marketing Specializations</h2>
                                <p className="text-xl text-gray-200">Major focus areas in digital marketing career</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {marketingSpecializations.map((specialization, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gradient-to-br from-purple-800 to-pink-900/20 p-6 rounded-2xl text-center hover:shadow-xl transition-all border border-purple-700"
                                    >
                                        <div className="text-4xl mb-4 text-pink-400">
                                            {specialization.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{specialization.domain}</h3>
                                        <p className="text-gray-300 text-sm mb-4">{specialization.description}</p>
                                        <div className="space-y-2 text-left">
                                            {specialization.skills.map((skill, skillIndex) => (
                                                <div key={skillIndex} className="flex items-center text-sm text-gray-300">
                                                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
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
                    <section className="py-20 px-4 bg-purple-900">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-white mb-6">Digital Marketing Career Path</h2>
                                <p className="text-xl text-gray-200">High-demand roles and growth opportunities</p>
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
                                        className="bg-purple-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-pink-500 border border-purple-700"
                                    >
                                        <div className="text-4xl text-pink-400 mb-4">{path.icon}</div>
                                        <h3 className="text-xl font-bold text-white mb-3">{path.title}</h3>
                                        <p className="text-gray-300 leading-relaxed mb-4">{path.description}</p>
                                        <div className="text-lg font-semibold text-pink-400 mb-4">{path.salary}</div>
                                        <div className="flex flex-wrap gap-1">
                                            {path.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="bg-pink-900 text-pink-300 px-2 py-1 rounded text-xs"
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

                    {/* Tools & Platforms */}
                    <section className="py-20 px-4">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-white mb-6">Essential Marketing Tools</h2>
                                <p className="text-xl text-gray-200">Industry-standard tools for digital marketing professionals</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {tools.map((tool, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-purple-700 p-6 rounded-xl shadow-lg border border-purple-600 text-center"
                                    >
                                        <div className="text-4xl mb-4 text-pink-400">
                                            {tool.icon}
                                        </div>
                                        <h3 className="font-bold text-white mb-2">{tool.name}</h3>
                                        <p className="text-gray-300 text-sm">{tool.purpose}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Certifications */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-16 bg-gradient-to-r from-pink-900 to-purple-900 text-white rounded-2xl p-8 border border-pink-700"
                            >
                                <h3 className="text-2xl font-bold mb-6 text-center">Industry Certifications</h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="flex items-start">
                                            <FaCheckCircle className="text-pink-300 mt-1 mr-3 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold mb-1">{cert.name}</h4>
                                                <p className="text-pink-200 text-sm">{cert.level} • {cert.focus}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className="py-20 px-4 bg-gradient-to-r from-pink-900 to-purple-900 text-white">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <FaRocket className="text-5xl mx-auto mb-6 text-pink-300" />
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    Ready to Dominate Digital Marketing?
                                </h2>
                                <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                                    Join <strong>30,000+ marketers</strong> who are driving business growth with CodeSkipper
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white text-pink-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                                    >
                                        Start Marketing Journey
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-pink-900 transition-colors"
                                    >
                                        Download PDF Roadmap
                                    </motion.button>
                                </div>
                                <p className="mt-6 text-pink-200">
                                    Free templates • Real campaigns • Analytics training • Career guidance
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
const marketingChannels = [
    {
        name: "SEO",
        icon: <FaSearch />
    },
    {
        name: "Social Media",
        icon: <FaHashtag />
    },
    {
        name: "Content",
        icon: <FaPenFancy />
    },
    {
        name: "Email",
        icon: <FaEnvelope />
    }
];

const quickStats = [
    { icon: <FaClock />, value: "6-9 Months", label: "To Complete" },
    { icon: <FaChartLine />, value: "50+", label: "Skills to Master" },
    { icon: <FaProjectDiagram />, value: "15+", label: "Real Projects" },
    { icon: <FaGraduationCap />, value: "100%", label: "Industry Ready" }
];

const roadmapPhases = [
    {
        title: "Marketing Fundamentals",
        description: "Build strong foundation in marketing principles and digital landscape",
        duration: "1-2 Months",
        topics: [
            {
                title: "Marketing Principles",
                description: "Understand core marketing concepts and consumer behavior",
                subTopics: ["4Ps of Marketing", "Customer Journey", "Brand Positioning", "Market Research"]
            },
            {
                title: "Digital Marketing Landscape",
                description: "Overview of digital marketing channels and strategies",
                subTopics: ["Channel Overview", "Digital vs Traditional", "Career Paths", "Industry Trends"]
            },
            {
                title: "Content Marketing Basics",
                description: "Learn to create engaging content that attracts audience",
                subTopics: ["Content Strategy", "Blog Writing", "Visual Content", "Storytelling"]
            },
            {
                title: "Analytics Foundation",
                description: "Introduction to marketing analytics and metrics",
                subTopics: ["KPIs", "Google Analytics", "Conversion Tracking", "ROI Measurement"]
            }
        ],
        projects: [
            {
                icon: "📊",
                title: "Marketing Plan",
                description: "Create comprehensive digital marketing strategy for a business",
                technologies: ["Strategy Development", "Channel Planning", "Budget Allocation"]
            },
            {
                icon: "📝",
                title: "Content Calendar",
                description: "Develop 30-day content calendar for social media and blog",
                technologies: ["Content Planning", "Scheduling", "Platform Strategy"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "Digital Marketing for Dummies",
                type: "Book",
                link: "https://www.dummies.com/book/business-careers-money/business/marketing/digital-marketing-2-274299/"
            },
            {
                icon: <FaVideo />,
                title: "Marketing Fundamentals",
                type: "Free Course",
                link: "https://www.coursera.org/learn/marketing-fundamentals"
            },
            {
                icon: <FaBook />,
                title: "HubSpot Academy",
                type: "Free Certification",
                link: "https://academy.hubspot.com/courses/digital-marketing"
            }
        ],
        checklist: [
            "Understand marketing fundamentals",
            "Create content calendar",
            "Set up Google Analytics",
            "Define target audience",
            "Develop marketing strategy"
        ]
    },
    {
        title: "SEO & Content Marketing",
        description: "Master search engine optimization and content creation strategies",
        duration: "2-3 Months",
        topics: [
            {
                title: "Technical SEO",
                description: "Optimize website structure and technical elements",
                subTopics: ["Website Crawling", "Indexing", "Site Speed", "Mobile Optimization"]
            },
            {
                title: "On-Page SEO",
                description: "Optimize individual web pages for search engines",
                subTopics: ["Keyword Research", "Meta Tags", "Content Optimization", "Internal Linking"]
            },
            {
                title: "Off-Page SEO",
                description: "Build authority and credibility through external signals",
                subTopics: ["Link Building", "Local SEO", "Brand Mentions", "Social Signals"]
            },
            {
                title: "Content Strategy",
                description: "Create and distribute valuable content",
                subTopics: ["Blog Writing", "Video Content", "Infographics", "Content Promotion"]
            }
        ],
        projects: [
            {
                icon: "🔍",
                title: "SEO Audit",
                description: "Perform complete SEO audit of a website and provide recommendations",
                technologies: ["Technical Analysis", "Content Review", "Backlink Analysis"]
            },
            {
                icon: "📈",
                title: "Keyword Strategy",
                description: "Develop comprehensive keyword strategy for business",
                technologies: ["Keyword Research", "Competitor Analysis", "Content Mapping"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "SEO Starter Guide",
                type: "Official Guide",
                link: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
            },
            {
                icon: <FaVideo />,
                title: "SEO Fundamentals",
                type: "Course",
                link: "https://www.udemy.com/course/seo-training-course"
            },
            {
                icon: <FaBook />,
                title: "Moz Beginner's Guide",
                type: "Guide",
                link: "https://moz.com/beginners-guide-to-seo"
            }
        ],
        checklist: [
            "Perform SEO audit",
            "Create keyword strategy",
            "Optimize website content",
            "Build backlink profile",
            "Track SEO performance"
        ]
    },
    {
        title: "Social Media Marketing",
        description: "Master social media platforms and engagement strategies",
        duration: "2 Months",
        topics: [
            {
                title: "Platform Strategies",
                description: "Develop platform-specific marketing strategies",
                subTopics: ["Facebook Marketing", "Instagram Strategy", "LinkedIn B2B", "Twitter Engagement"]
            },
            {
                title: "Content Creation",
                description: "Create engaging social media content",
                subTopics: ["Visual Design", "Video Content", "Stories/Reels", "Carousels"]
            },
            {
                title: "Community Management",
                description: "Build and engage with online communities",
                subTopics: ["Audience Engagement", "Response Strategy", "Crisis Management", "Brand Voice"]
            },
            {
                title: "Social Media Advertising",
                description: "Run effective paid campaigns on social platforms",
                subTopics: ["Ad Targeting", "Budget Optimization", "Creative Testing", "Performance Tracking"]
            }
        ],
        projects: [
            {
                icon: "📱",
                title: "Social Media Campaign",
                description: "Plan and execute complete social media marketing campaign",
                technologies: ["Content Creation", "Scheduling", "Engagement", "Analytics"]
            },
            {
                icon: "🎯",
                title: "Paid Social Ads",
                description: "Create and run Facebook/Instagram advertising campaign",
                technologies: ["Ad Creation", "Audience Targeting", "Budget Management", "ROI Analysis"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "Facebook Blueprint",
                type: "Free Certification",
                link: "https://www.facebook.com/business/learn"
            },
            {
                icon: <FaVideo />,
                title: "Social Media Marketing",
                type: "Course",
                link: "https://www.coursera.org/learn/social-media-marketing"
            },
            {
                icon: <FaBook />,
                title: "Hootsuite Academy",
                type: "Free Courses",
                link: "https://education.hootsuite.com"
            }
        ],
        checklist: [
            "Create social media strategy",
            "Build content calendar",
            "Run paid ad campaigns",
            "Grow engaged audience",
            "Analyze social media metrics"
        ]
    },
    {
        title: "Paid Advertising & Analytics",
        description: "Master paid advertising campaigns and data-driven decision making",
        duration: "2 Months",
        topics: [
            {
                title: "Google Ads",
                description: "Run effective search and display advertising campaigns",
                subTopics: ["Search Campaigns", "Display Network", "Shopping Ads", "Remarketing"]
            },
            {
                title: "PPC Strategy",
                description: "Develop comprehensive paid advertising strategy",
                subTopics: ["Keyword Planning", "Bid Management", "Quality Score", "Conversion Tracking"]
            },
            {
                title: "Marketing Analytics",
                description: "Measure and analyze marketing performance",
                subTopics: ["Google Analytics", "Conversion Funnels", "Attribution Models", "ROI Calculation"]
            },
            {
                title: "A/B Testing",
                description: "Optimize campaigns through systematic testing",
                subTopics: ["Test Design", "Statistical Significance", "Landing Page Testing", "Ad Copy Testing"]
            }
        ],
        projects: [
            {
                icon: "💰",
                title: "Google Ads Campaign",
                description: "Plan and execute complete Google Ads campaign with budget",
                technologies: ["Campaign Setup", "Keyword Research", "Ad Creation", "Performance Tracking"]
            },
            {
                icon: "📊",
                title: "Analytics Dashboard",
                description: "Create comprehensive marketing analytics dashboard",
                technologies: ["Google Analytics", "Data Visualization", "KPI Tracking", "Reporting"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "Google Ads Certification",
                type: "Official Certification",
                link: "https://skillshop.exceedlms.com/student/path/18141-google-ads-certifications"
            },
            {
                icon: <FaVideo />,
                title: "Google Analytics Course",
                type: "Free Course",
                link: "https://analytics.google.com/analytics/academy"
            },
            {
                icon: <FaBook />,
                title: "PPC University",
                type: "Free Resource",
                link: "https://www.ppcuniversity.com"
            }
        ],
        checklist: [
            "Run Google Ads campaigns",
            "Set up conversion tracking",
            "Create analytics reports",
            "Perform A/B testing",
            "Calculate marketing ROI"
        ]
    },
    {
        title: "Advanced Strategies & Specializations",
        description: "Master advanced marketing techniques and choose specializations",
        duration: "1-2 Months",
        topics: [
            {
                title: "Email Marketing",
                description: "Build and execute effective email marketing campaigns",
                subTopics: ["List Building", "Automation", "Segmentation", "Personalization"]
            },
            {
                title: "Marketing Automation",
                description: "Implement automated marketing workflows",
                subTopics: ["CRM Integration", "Lead Nurturing", "Workflow Design", "Performance Tracking"]
            },
            {
                title: "E-commerce Marketing",
                description: "Specialize in online store marketing strategies",
                subTopics: ["Product Listing Ads", "Abandoned Cart", "Customer Retention", "Marketplace Strategy"]
            },
            {
                title: "Strategy & Planning",
                description: "Develop comprehensive marketing strategies",
                subTopics: ["Budget Planning", "Channel Strategy", "Competitive Analysis", "Performance Forecasting"]
            }
        ],
        projects: [
            {
                icon: "📧",
                title: "Email Campaign Series",
                description: "Create automated email marketing campaign series",
                technologies: ["Email Platform", "Automation", "Segmentation", "Performance Analysis"]
            },
            {
                icon: "🛒",
                title: "E-commerce Strategy",
                description: "Develop complete marketing strategy for online store",
                technologies: ["Platform Selection", "Channel Strategy", "Budget Planning", "ROI Projection"]
            }
        ],
        resources: [
            {
                icon: <FaBook />,
                title: "Email Marketing Guide",
                type: "Comprehensive Guide",
                link: "https://mailchimp.com/marketing-glossary/email-marketing"
            },
            {
                icon: <FaVideo />,
                title: "Marketing Automation",
                type: "Course",
                link: "https://www.udemy.com/course/marketing-automation"
            },
            {
                icon: <FaBook />,
                title: "E-commerce Marketing",
                type: "Book",
                link: "https://www.amazon.com/Ecommerce-Marketing-2023-Digital-Strategies/dp/B0BSNR1Q5J"
            }
        ],
        checklist: [
            "Build email marketing campaign",
            "Implement marketing automation",
            "Develop e-commerce strategy",
            "Create comprehensive marketing plan",
            "Prepare marketing portfolio"
        ]
    }
];

const marketingSpecializations = [
    {
        domain: "SEO Specialist",
        description: "Optimize websites for search engine visibility",
        icon: <FaSearch />,
        skills: ["Technical SEO", "Content Strategy", "Link Building", "Analytics"]
    },
    {
        domain: "Social Media Manager",
        description: "Manage brand presence across social platforms",
        icon: <FaHashtag />,
        skills: ["Content Creation", "Community Management", "Advertising", "Analytics"]
    },
    {
        domain: "PPC Specialist",
        description: "Manage paid advertising campaigns",
        icon: <FaMoneyBillWave />,
        skills: ["Google Ads", "Facebook Ads", "Bid Management", "ROI Optimization"]
    },
    {
        domain: "Content Marketer",
        description: "Create and distribute valuable content",
        icon: <FaPenFancy />,
        skills: ["Content Strategy", "SEO Writing", "Video Production", "Distribution"]
    }
];

const careerPaths = [
    {
        icon: "📱",
        title: "Digital Marketing Specialist",
        description: "Execute marketing campaigns across multiple channels",
        salary: "₹4-8 LPA",
        skills: ["SEO", "Social Media", "Content Creation", "Analytics"]
    },
    {
        icon: "🎯",
        title: "PPC Specialist",
        description: "Manage and optimize paid advertising campaigns",
        salary: "₹6-12 LPA",
        skills: ["Google Ads", "Facebook Ads", "Analytics", "ROI Optimization"]
    },
    {
        icon: "📊",
        title: "Marketing Manager",
        description: "Lead marketing strategy and team management",
        salary: "₹10-20 LPA",
        skills: ["Strategy", "Team Leadership", "Budget Management", "Analytics"]
    }
];

const tools = [
    {
        name: "Google Analytics",
        purpose: "Web Analytics",
        icon: <SiGoogleanalytics />
    },
    {
        name: "Google Ads",
        purpose: "Paid Advertising",
        icon: <SiGoogleads />
    },
    {
        name: "Facebook/Instagram",
        purpose: "Social Media Marketing",
        icon: <SiFacebook />
    },
    {
        name: "WordPress",
        purpose: "Content Management",
        icon: <SiWordpress />
    },
    {
        name: "Shopify",
        purpose: "E-commerce Platform",
        icon: <SiShopify />
    },
    {
        name: "Mailchimp",
        purpose: "Email Marketing",
        icon: <FaEnvelope />
    },
    {
        name: "Canva",
        purpose: "Visual Content Creation",
        icon: <FaPenFancy />
    },
    {
        name: "SEMrush",
        purpose: "SEO & Competitor Analysis",
        icon: <FaSearch />
    }
];

const certifications = [
    {
        name: "Google Analytics Certification",
        level: "Fundamental",
        focus: "Web Analytics"
    },
    {
        name: "Google Ads Certification",
        level: "Intermediate",
        focus: "Paid Advertising"
    },
    {
        name: "HubSpot Content Marketing",
        level: "Fundamental",
        focus: "Content Marketing"
    },
    {
        name: "Facebook Blueprint",
        level: "Intermediate",
        focus: "Social Media Advertising"
    },
    {
        name: "HubSpot Inbound Marketing",
        level: "Fundamental",
        focus: "Inbound Methodology"
    },
    {
        name: "Google Digital Marketing",
        level: "Comprehensive",
        focus: "Digital Marketing Fundamentals"
    }
];
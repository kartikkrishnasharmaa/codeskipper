import { useState } from "react";
import Layout from '@/components/layouts/InterviewLayout';
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FaCode, 
  FaLaptopCode, 
  FaDatabase, 
  FaCloud, 
  FaMobile, 
  FaShieldAlt,
  FaRobot,
  FaNetworkWired,
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux
} from 'react-icons/fa';

const InterviewHome = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Main categories with icons, colors and links
  const mainCategories = [
    {
      title: "Programming Fundamentals",
      icon: FaCode,
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
      technologies: ["Data Structures", "Algorithms", "OOP", "System Design"],
      link: "/interview-questions/programming-fundamentals"
    },
    {
      title: "Web Development",
      icon: FaLaptopCode,
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      borderColor: "border-green-200",
      technologies: ["Frontend", "Backend", "Full Stack", "Web Technologies"],
      link: "/interview-questions/web-development"
    },
    {
      title: "Database Technologies",
      icon: FaDatabase,
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
      technologies: ["SQL", "NoSQL", "Database Design", "Optimization"],
      link: "/interview-questions/database"
    },
    {
      title: "Cloud & DevOps",
      icon: FaCloud,
      color: "from-orange-500 to-orange-700",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      borderColor: "border-orange-200",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      link: "/interview-questions/cloud-devops"
    },
    {
      title: "Mobile Development",
      icon: FaMobile,
      color: "from-pink-500 to-pink-700",
      bgColor: "bg-pink-50",
      textColor: "text-pink-700",
      borderColor: "border-pink-200",
      technologies: ["Android", "iOS", "React Native", "Flutter"],
      link: "/interview-questions/mobile-development"
    },
    {
      title: "Cybersecurity",
      icon: FaShieldAlt,
      color: "from-red-500 to-red-700",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      borderColor: "border-red-200",
      technologies: ["Network Security", "Cryptography", "Ethical Hacking"],
      link: "/interview-questions/cybersecurity"
    },
    {
      title: "AI & Machine Learning",
      icon: FaRobot,
      color: "from-indigo-500 to-indigo-700",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
      borderColor: "border-indigo-200",
      technologies: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
      link: "/interview-questions/ai-ml"
    },
    {
      title: "Networking",
      icon: FaNetworkWired,
      color: "from-teal-500 to-teal-700",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
      borderColor: "border-teal-200",
      technologies: ["TCP/IP", "DNS", "HTTP/HTTPS", "Network Protocols"],
      link: "/interview-questions/networking"
    }
  ];

  // Popular technologies with icons and links
  const popularTechnologies = [
    { 
      name: "Python", 
      icon: FaPython, 
      color: "text-yellow-600", 
      bg: "bg-yellow-50",
      link: "/interview/python"
    },
    // { 
    //   name: "Java", 
    //   icon: FaJava, 
    //   color: "text-red-600", 
    //   bg: "bg-red-50",
    //   link: "/interview-questions/java"
    // },
    // { 
    //   name: "JavaScript", 
    //   icon: FaJs, 
    //   color: "text-yellow-500", 
    //   bg: "bg-yellow-50",
    //   link: "/interview-questions/javascript"
    // },
    { 
      name: "HTML5", 
      icon: FaHtml5, 
      color: "text-orange-600", 
      bg: "bg-orange-50",
      link: "/interview/html"
    },
    // { 
    //   name: "CSS3", 
    //   icon: FaCss3Alt, 
    //   color: "text-blue-600", 
    //   bg: "bg-blue-50",
    //   link: "/interview-questions/css"
    // },
    // { 
    //   name: "React", 
    //   icon: FaReact, 
    //   color: "text-blue-500", 
    //   bg: "bg-blue-50",
    //   link: "/interview-questions/react"
    // },
    // { 
    //   name: "Node.js", 
    //   icon: FaNodeJs, 
    //   color: "text-green-600", 
    //   bg: "bg-green-50",
    //   link: "/interview-questions/nodejs"
    // },
    // { 
    //   name: "AWS", 
    //   icon: FaAws, 
    //   color: "text-orange-500", 
    //   bg: "bg-orange-50",
    //   link: "/interview-questions/aws"
    // },
    // { 
    //   name: "Docker", 
    //   icon: FaDocker, 
    //   color: "text-blue-400", 
    //   bg: "bg-blue-50",
    //   link: "/interview-questions/docker"
    // },
    // { 
    //   name: "Git", 
    //   icon: FaGitAlt, 
    //   color: "text-orange-600", 
    //   bg: "bg-orange-50",
    //   link: "/interview-questions/git"
    // },
    // { 
    //   name: "Linux", 
    //   icon: FaLinux, 
    //   color: "text-yellow-700", 
    //   bg: "bg-yellow-50",
    //   link: "/interview-questions/linux"
    // }
  ];

  // Difficulty levels with links
  const difficultyLevels = [
    {
      level: "Beginner",
      description: "Basic concepts and fundamentals",
      questions: "500+ Questions",
      color: "from-green-400 to-green-600",
      textColor: "text-green-700",
      bgColor: "bg-green-50",
      link: "/interview-questions/beginner"
    },
    {
      level: "Intermediate",
      description: "Practical scenarios and problem-solving",
      questions: "800+ Questions",
      color: "from-blue-400 to-blue-600",
      textColor: "text-blue-700",
      bgColor: "bg-blue-50",
      link: "/interview-questions/intermediate"
    },
    {
      level: "Advanced",
      description: "Complex algorithms and system design",
      questions: "300+ Questions",
      color: "from-purple-400 to-purple-600",
      textColor: "text-purple-700",
      bgColor: "bg-purple-50",
      link: "/interview-questions/advanced"
    },
    {
      level: "Expert",
      description: "Architecture and leadership scenarios",
      questions: "200+ Questions",
      color: "from-red-400 to-red-600",
      textColor: "text-red-700",
      bgColor: "bg-red-50",
      link: "/interview-questions/expert"
    }
  ];

  // Featured interview tips
  const interviewTips = [
    {
      title: "Master Problem Solving",
      description: "Learn to break down complex problems into manageable steps",
      icon: "💡"
    },
    {
      title: "Practice Coding",
      description: "Regular practice on data structures and algorithms",
      icon: "👨‍💻"
    },
    {
      title: "System Design",
      description: "Understand how to design scalable systems",
      icon: "🏗️"
    },
    {
      title: "Behavioral Questions",
      description: "Prepare for situational and experience-based questions",
      icon: "👥"
    },
    {
      title: "Mock Interviews",
      description: "Practice with real interview scenarios",
      icon: "🎯"
    },
    {
      title: "Stay Updated",
      description: "Keep up with latest technologies and trends",
      icon: "📚"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Technical Interview Questions & Answers 2024 | Code Skipper</title>
        <meta
          name="description"
          content="Comprehensive collection of technical interview questions for software developers, engineers, and IT professionals. Prepare for FAANG companies and top tech interviews."
        />
        <meta
          name="keywords"
          content="technical interview questions, coding interview, programming questions, software engineer interview, FAANG interview, computer science interview, IT job interview"
        />
        <meta property="og:title" content="Technical Interview Questions & Answers 2024 | Code Skipper" />
        <meta
          property="og:description"
          content="Master your next technical interview with our comprehensive question bank. Practice coding problems, system design, and behavioral questions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codeskipper.in/interview-questions" />
        <link rel="canonical" href="https://codeskipper.in/interview-questions" />
      </Head>

      <section id="interview-wrapper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center py-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ace Your <span className="text-blue-600">Technical Interview</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master the art of technical interviews with our comprehensive collection of questions, 
              coding challenges, and real-world scenarios from top tech companies.
            </p>
            
      
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2000+</div>
              <div className="text-gray-600">Interview Questions</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Company Patterns</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Updated Content</div>
            </div>
          </motion.div>

          {/* Main Categories */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mainCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Link href={category.link} key={category.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className={`rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300`}
                    >
                      <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                        <div className="flex items-center justify-between">
                          <IconComponent className="text-3xl" />
                          <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
                            {category.technologies.length} areas
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mt-4">{category.title}</h3>
                      </div>
                      <div className={`${category.bgColor} p-4`}>
                        <div className="flex flex-wrap gap-2">
                          {category.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className={`text-xs ${category.textColor} bg-white px-2 py-1 rounded-full border ${category.borderColor}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.section>

          {/* Popular Technologies */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Technologies</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-4">
              {popularTechnologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <Link href={tech.link} key={tech.name}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.1 }}
                      className={`flex flex-col items-center p-4 rounded-lg ${tech.bg} cursor-pointer transform transition-all duration-300`}
                    >
                      <IconComponent className={`text-3xl ${tech.color} mb-2`} />
                      <span className="text-sm font-medium text-gray-700 text-center">{tech.name}</span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.section>

          {/* Difficulty Levels */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Choose Your Challenge Level</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {difficultyLevels.map((level, index) => (
                <Link href={level.link} key={level.level}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index }}
                    whileHover={{ scale: 1.05 }}
                    className={`rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300`}
                  >
                    <div className={`bg-gradient-to-r ${level.color} p-6 text-white`}>
                      <h3 className="text-2xl font-bold mb-2">{level.level}</h3>
                      <p className="text-white text-opacity-90 mb-4">{level.description}</p>
                      <div className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full inline-block">
                        {level.questions}
                      </div>
                    </div>
                    <div className={`${level.bgColor} p-4 text-center`}>
                      <span className={`${level.textColor} font-semibold hover:underline`}>
                        Explore Questions →
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.section>

          {/* Interview Tips */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pro Interview Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interviewTips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500 transform transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">{tip.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-center py-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Master Your Next Interview?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of developers who landed their dream jobs with our interview preparation resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/interview-questions/all-topics">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition duration-300">
                    Start Practicing Now
                  </button>
                </Link>
                <Link href="/interview-questions/study-plans">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition duration-300">
                    View Study Plans
                  </button>
                </Link>
              </div>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How often are questions updated?</h3>
                <p className="text-gray-600">We update our question bank weekly with new patterns from recent interviews at top tech companies.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Are solutions provided for coding problems?</h3>
                <p className="text-gray-600">Yes, every coding question comes with multiple optimized solutions and detailed explanations.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you cover company-specific questions?</h3>
                <p className="text-gray-600">We have dedicated sections for FAANG and other top tech companies with their specific interview patterns.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Is there a mobile app available?</h3>
                <p className="text-gray-600">Our website is fully responsive and works perfectly on all mobile devices. Native apps coming soon!</p>
              </div>
            </div>
          </motion.section>
        </div>
      </section>

      <style jsx>{`
        #interview-wrapper {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
        }
      `}</style>
    </Layout>
  );
};

export default InterviewHome;
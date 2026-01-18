// pages/about.js
import { motion } from 'framer-motion';
import {
  FaRocket, FaUsers, FaCode, FaTrophy, FaHeart,
  FaLaptopCode, FaBook, FaRoad, FaLightbulb, FaBriefcase,
  FaMoneyBillWave, FaFileAlt, FaTools, FaUserFriends, FaDownload,
  FaSearchDollar, FaComments, FaShieldAlt, FaGlobe, FaMobileAlt,
  FaGamepad, FaChartLine, FaCertificate, FaPalette, FaDatabase, FaClock
} from 'react-icons/fa';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import SimpleLayout from '@/components/SimpleLayout';
import Link from 'next/link';
export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>About CodeSkipper.in - Learn Coding, Projects, and Interview Prep</title>
        <meta
          name="description"
          content="Learn about CodeSkipper.in — India's most trusted coding education platform offering structured courses, interactive MCQs, real-world projects, interview preparation, and career roadmaps to help you master programming from scratch."
        />
        <meta
          name="keywords"
          content="CodeSkipper, coding education, programming tutorials, learn coding online, interview preparation, coding projects, MCQ practice, career roadmaps, web development, data science, Code Skipper India"
        />
        <meta name="author" content="Kartik Sharma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://codeskipper.in/main/about" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="About CodeSkipper.in - Learn Coding, Projects, and Interview Prep" />
        <meta property="og:description" content="Explore CodeSkipper.in — a complete platform for coding education with projects, MCQs, tutorials, and career guidance." />
        <meta property="og:image" content="https://codeskipper.in/Images/logo.png" /> {/* Replace with actual OG image */}
      
        <meta property="og:url" content="https://codeskipper.in/main/about" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About CodeSkipper.in - Complete Coding Education Platform" />
        <meta name="twitter:description" content="Learn more about CodeSkipper.in, India’s leading coding platform for interview prep, projects, and roadmaps." />
        <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />

        {/* Favicon */}
        <link rel="icon" href="/Images/favicon.ico" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About CodeSkipper.in",
              "url": "https://codeskipper.in/main/about",
              "description": "CodeSkipper.in is India's most comprehensive platform for coding education, projects, and interview preparation.",
              "publisher": {
                "@type": "Organization",
                "name": "Code Skipper",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://codeskipper.in/Images/logo.png"
                }
              }
            })
          }}
        />
      </Head>

      <SimpleLayout>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          {/* Navigation Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50"
          />

          {/* Hero Section */}
          <section className="pt-24 pb-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 transform skew-y-3 scale-125"></div>
            <div className="max-w-7xl mx-auto relative">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="inline-block mb-6"
                >
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                    Trusted by 50,000+ Students
                  </span>
                </motion.div>
                <h1 className="text-4xl md:text-4xl sm:text-xl font-bold text-gray-800 mb-6 leading-tight">
                  Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">CodeSkipper</span>
                </h1>
                <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Your ultimate destination for comprehensive coding education, interview preparation,
                  and career growth. We transform beginners into industry-ready professionals through
                  practical learning and real-world projects.
                </p>
              </motion.div>

              {/* Animated Stats */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              >
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="text-3xl mb-3 text-blue-600">{stat.icon}</div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl font-bold text-gray-800 mb-6">Our Core Philosophy</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We believe in making quality coding education accessible to everyone, everywhere
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-10 rounded-3xl shadow-2xl"
                >
                  <FaRocket className="text-5xl mb-6 text-blue-200" />
                  <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                  <p className="text-lg leading-relaxed text-blue-100 mb-6">
                    To democratize coding education by providing comprehensive, affordable, and
                    industry-relevant learning resources to every student in India and beyond.
                    We break down complex concepts into simple, digestible content that anyone can understand.
                  </p>
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-200 rounded-full mr-3"></span>
                      Make coding education accessible to rural and urban students alike
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-200 rounded-full mr-3"></span>
                      Bridge the gap between academic learning and industry requirements
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-200 rounded-full mr-3"></span>
                      Empower students with practical skills and confidence
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-10 rounded-3xl shadow-2xl"
                >
                  <FaUsers className="text-5xl mb-6 text-purple-200" />
                  <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                  <p className="text-lg leading-relaxed text-purple-100 mb-6">
                    To become India's most trusted coding education platform, creating a community
                    of 1 million successful developers who not only excel in their careers but
                    also contribute back to the learning ecosystem.
                  </p>
                  <ul className="space-y-3 text-purple-100">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-200 rounded-full mr-3"></span>
                      Build the largest community of passionate coders in India
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-200 rounded-full mr-3"></span>
                      Partner with 100+ companies for campus placements
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-200 rounded-full mr-3"></span>
                      Launch in multiple regional languages to reach every student
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Core Learning Sections */}
          <SectionWrapper title="Core Learning Resources" subtitle="Everything you need to master coding">
            <FeatureGrid features={coreLearningFeatures} />
          </SectionWrapper>

          {/* Career Development */}
          <SectionWrapper title="Career Development" subtitle="From learning to earning" bg="gray">
            <FeatureGrid features={careerFeatures} />
          </SectionWrapper>

          {/* Educational Tools */}
          <SectionWrapper title="Educational Tools" subtitle="Powerful tools to enhance your learning">
            <FeatureGrid features={toolFeatures} />
          </SectionWrapper>

          {/* Community Features */}
          <SectionWrapper title="Community & Growth" subtitle="Learn together, grow together" bg="gray">
            <FeatureGrid features={communityFeatures} />
          </SectionWrapper>

          {/* Free Resources */}
          <SectionWrapper title="Free Learning Resources" subtitle="Quality education should be free">
            <FeatureGrid features={freeResources} />
          </SectionWrapper>

          {/* Placement Preparation */}
          <SectionWrapper title="Placement Preparation" subtitle="Ace your campus placements">
            <FeatureGrid features={placementFeatures} />
          </SectionWrapper>



          {/* Final CTA */}
          <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <FaHeart className="text-5xl mx-auto mb-6 text-pink-400" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Start Your Coding Journey?
                </h2>
                <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                  Join <strong>50,000+ students</strong> who are transforming their careers with CodeSkipper
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/mcq">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                    >
                      MCQ Practice
                    </motion.button>
                  </Link>

                  {/* Button 2 - Go to /courses */}
                  <Link href="/tools">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                    >
                      Explore Tools
                    </motion.button>
                  </Link>
                </div>

              </motion.div>
            </div>
          </section>
        </div>
      </SimpleLayout>
    </>
  );
}

// Reusable Section Wrapper Component
const SectionWrapper = ({ title, subtitle, children, bg = "white" }) => {
  const bgClass = bg === "gray" ? "bg-gray-50" : "bg-white";

  return (
    <section className={`py-20 px-4 ${bgClass}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>
        {children}
      </div>
    </section>
  );
};

// Reusable Feature Grid Component
const FeatureGrid = ({ features }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5
              }
            }
          }}
          whileHover={{
            scale: 1.03,
            y: -5,
            transition: { duration: 0.2 }
          }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all"
        >
          <div className="text-4xl text-blue-600 mb-4">{feature.icon}</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          {feature.subFeatures && (
            <ul className="mt-4 space-y-2">
              {feature.subFeatures.map((sub, subIndex) => (
                <li key={subIndex} className="flex items-center text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  {sub}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Data Arrays
const heroStats = [
  { icon: <FaUsers />, value: "50,000+", label: "Active Students" },
  { icon: <FaBook />, value: "1000+", label: "Learning Resources" },
  { icon: <FaCode />, value: "50+", label: "Programming Languages" },
  { icon: <FaTrophy />, value: "5000+", label: "Success Stories" }
];

const coreLearningFeatures = [
  {
    icon: <FaComments />,
    title: "Interview Questions",
    description: "Comprehensive collection of real interview questions from top companies with detailed solutions and explanations.",
    subFeatures: ["Company-wise questions", "Role-specific questions", "Behavioral questions", "Technical deep dives"]
  },
  {
    icon: <FaLightbulb />,
    title: "MCQ Practice",
    description: "Thousands of multiple-choice questions with instant feedback and detailed explanations for better understanding.",
    subFeatures: ["Topic-wise practice", "Mock tests", "Performance analytics", "Competitive exams"]
  },
  {
    icon: <FaBook />,
    title: "Detailed Notes",
    description: "Well-structured notes covering all programming concepts from basics to advanced topics with code examples.",
    subFeatures: ["PDF downloads", "Revision notes", "Code snippets", "Visual explanations"]
  },
  {
    icon: <FaRoad />,
    title: "Learning Roadmaps",
    description: "Step-by-step guided paths for different career tracks with clear milestones and project suggestions.",
    subFeatures: ["Frontend development", "Backend development", "Data Science", "Mobile development"]
  },
  {
    icon: <FaLaptopCode />,
    title: "Project Ideas",
    description: "Curated list of mini and major projects with requirements, tech stacks, and implementation guides.",
    subFeatures: ["Beginner to advanced", "Real-world applications", "Portfolio ready", "Open source contributions"]
  },
  {
    icon: <FaBriefcase />,
    title: "Job Roles Explained",
    description: "Detailed insights into different tech roles, responsibilities, required skills, and career growth paths.",
    subFeatures: ["Salary benchmarks", "Skill requirements", "Career progression", "Industry demand"]
  }
];

const careerFeatures = [
  {
    icon: <FaMoneyBillWave />,
    title: "Salary Insights",
    description: "Country-wise and city-wise salary data for different tech roles based on experience and skills.",
    subFeatures: ["India specific data", "International comparisons", "Experience-wise breakdown", "Skill-based analysis"]
  },
  {
    icon: <FaFileAlt />,
    title: "Resume Templates",
    description: "Professional resume templates and tips specifically designed for tech roles and coding positions.",
    subFeatures: ["ATS friendly templates", "Fresher to experienced", "Role-specific resumes", "Cover letter samples"]
  },
  {
    icon: <FaSearchDollar />,
    title: "Job Search Support",
    description: "Complete guidance on job search strategies, application process, and interview preparation.",
    subFeatures: ["Job portals guide", "Referral strategies", "Application tracking", "Follow-up templates"]
  },
  {
    icon: <FaUserFriends />,
    title: "HR Round Preparation",
    description: "Comprehensive preparation for HR rounds including common questions and effective answering strategies.",
    subFeatures: ["Behavioral questions", "Salary negotiation", "Company research", "Cultural fit assessment"]
  },
  {
    icon: <FaShieldAlt />,
    title: "Company-wise Preparation",
    description: "Detailed preparation guides for specific companies including their interview patterns and question banks.",
    subFeatures: ["FAANG companies", "Startup interviews", "Service-based companies", "Product-based companies"]
  },
  {
    icon: <FaChartLine />,
    title: "Career Growth Guidance",
    description: "Long-term career planning and growth strategies for advancing in your tech career.",
    subFeatures: ["Skill development plan", "Certification guidance", "Networking strategies", "Promotion preparation"]
  }
];

const toolFeatures = [
  {
    icon: <FaLaptopCode />,
    title: "Built-in Code Editor",
    description: "Powerful online code editor with syntax highlighting, auto-completion, and multiple language support.",
    subFeatures: ["50+ languages", "Real-time output", "Code sharing", "Collaborative coding"]
  },
  {
    icon: <FaTools />,
    title: "Unit Converter",
    description: "Comprehensive unit conversion tools for developers including time, storage, data, and measurement units.",
    subFeatures: ["Programming units", "Time conversions", "Data storage", "Network speed"]
  },
  {
    icon: <FaClock />,
    title: "Typing Speed Test",
    description: "Advanced typing test with programming-specific content to improve your coding speed and accuracy.",
    subFeatures: ["Code snippets", "Accuracy metrics", "Speed tracking", "Progress analytics"]
  },
  {
    icon: <FaBook />,
    title: "Programming Dictionary",
    description: "Comprehensive dictionary of programming terms, concepts, and technologies with examples.",
    subFeatures: ["Technical terms", "Framework definitions", "Algorithm explanations", "Latest technologies"]
  },
  {
    icon: <FaDatabase />,
    title: "JSON Formatter",
    description: "Smart JSON formatting and validation tool with syntax checking and beautification features.",
    subFeatures: ["JSON validation", "Formatting options", "Minification", "Schema validation"]
  },
  {
    icon: <FaPalette />,
    title: "Developer Utilities",
    description: "Collection of essential developer tools including color pickers, regex testers, and API testing.",
    subFeatures: ["Color utilities", "Regex tools", "API testers", "Data validators"]
  }
];

const communityFeatures = [
  {
    icon: <FaTrophy />,
    title: "Leaderboard System",
    description: "Global and category-wise leaderboards to track your progress and compete with fellow learners.",
    subFeatures: ["Weekly rankings", "Category leaders", "Achievement badges", "Progress tracking"]
  },
  {
    icon: <FaLaptopCode />,
    title: "Project Showcase",
    description: "Showcase your projects to the community, get feedback, and feature on our homepage.",
    subFeatures: ["Project gallery", "Peer reviews", "Featured projects", "Collaboration opportunities"]
  },
  {
    icon: <FaCertificate />,
    title: "Exams & Certification",
    description: "Regular exams and skill assessment tests with verifiable certificates for your profile.",
    subFeatures: ["Skill assessments", "Verified certificates", "Performance reports", "Skill badges"]
  },
  {
    icon: <FaUserFriends />,
    title: "Mentorship Program",
    description: "Connect with experienced developers and industry experts for guidance and career advice.",
    subFeatures: ["One-on-one sessions", "Career guidance", "Code reviews", "Interview preparation"]
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Community",
    description: "Active communities on WhatsApp, Telegram, and Discord for instant help and discussions.",
    subFeatures: ["Technical support", "Study groups", "Job alerts", "Event notifications"]
  },
  {
    icon: <FaGlobe />,
    title: "Campus Ambassador",
    description: "Become a campus leader, promote coding education, and earn certificates and rewards.",
    subFeatures: ["Leadership opportunities", "Networking events", "Certificates", "Exclusive goodies"]
  }
];

const freeResources = [
  {
    icon: <FaDownload />,
    title: "PDF Notes Download",
    description: "High-quality PDF notes covering all programming concepts available for free download.",
    subFeatures: ["Subject-wise notes", "Revision notes", "Cheat sheets", "Quick references"]
  },
  {
    icon: <FaBook />,
    title: "Free Ebooks",
    description: "Curated collection of free programming ebooks and learning materials from beginner to advanced.",
    subFeatures: ["Programming languages", "Framework guides", "Project tutorials", "Interview preparation"]
  },
  {
    icon: <FaLightbulb />,
    title: "Cheat Sheets",
    description: "Comprehensive cheat sheets for quick reference of syntax, commands, and best practices.",
    subFeatures: ["Syntax reference", "Command cheats", "Best practices", "Common patterns"]
  },
  {
    icon: <FaFileAlt />,
    title: "Templates Library",
    description: "Collection of ready-to-use code templates, project structures, and configuration files.",
    subFeatures: ["Project templates", "Code snippets", "Config files", "Starter kits"]
  }
];

const placementFeatures = [
  {
    icon: <FaBriefcase />,
    title: "Aptitude Preparation",
    description: "Complete aptitude training with practice questions, shortcuts, and problem-solving techniques.",
    subFeatures: ["Quantitative aptitude", "Logical reasoning", "Verbal ability", "Data interpretation"]
  },
  {
    icon: <FaComments />,
    title: "Technical Interviews",
    description: "Comprehensive preparation for technical interviews with coding problems and system design.",
    subFeatures: ["Coding rounds", "System design", "Database questions", "OOP concepts"]
  },
  {
    icon: <FaUserFriends />,
    title: "HR Round Mastery",
    description: "Complete guidance for HR rounds including communication skills and personality development.",
    subFeatures: ["Communication skills", "Body language", "Company research", "Cultural fit"]
  },
  {
    icon: <FaFileAlt />,
    title: "Resume Building",
    description: "Professional resume building service with ATS optimization and industry-specific templates.",
    subFeatures: ["ATS optimization", "Industry templates", "Content writing", "Review services"]
  }
];



const gameFeatures = [
  {
    icon: <FaGamepad />,
    title: "Code Snippet Guessing",
    description: "Guess the programming language from code snippets in this engaging learning game."
  },
  {
    icon: <FaGamepad />,
    title: "Tech Memory Cards",
    description: "Memory matching game with programming symbols and technology logos."
  },
  {
    icon: <FaGamepad />,
    title: "Programming Hangman",
    description: "Classic hangman game with tech terminology and programming concepts."
  },
  {
    icon: <FaGamepad />,
    title: "DSA Visualization",
    description: "Interactive visualization of sorting algorithms and data structures."
  }];
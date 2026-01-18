import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import SimpleLayout from "@/components/SimpleLayout";
import { motion } from "framer-motion";
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaHeart,
  FaClock,
  FaDollarSign,
  FaGlobeAmericas,
  FaUsers,
  FaChartBar
} from "react-icons/fa";

const Career = () => {
  const [activeDepartment, setActiveDepartment] = useState("engineering");
  const [hoveredJob, setHoveredJob] = useState(null);

  const departments = {
    engineering: {
      name: "Engineering & Development",
      jobs: [
        {
          id: 1,
          title: "Senior JavaScript Developer",
          type: "Full-time",
          location: "Remote",
          experience: "3+ years",
          description: "Lead development of interactive learning platforms using modern JavaScript frameworks.",
          skills: ["React", "Node.js", "TypeScript", "Next.js"]
        },
        {
          id: 2,
          title: "Full Stack Developer",
          type: "Full-time",
          location: "Remote",
          experience: "2+ years",
          description: "Build end-to-end features for our coding education platform.",
          skills: ["JavaScript", "Python", "MongoDB", "Express"]
        }
      ]
    },
    content: {
      name: "Content & Education",
      jobs: [
        {
          id: 3,
          title: "Technical Content Writer",
          type: "Full-time",
          location: "Remote",
          experience: "2+ years",
          description: "Create engaging programming tutorials and documentation.",
          skills: ["JavaScript", "Technical Writing", "Markdown", "Git"]
        },
        {
          id: 4,
          title: "Curriculum Developer",
          type: "Contract",
          location: "Remote",
          experience: "3+ years",
          description: "Design learning paths and educational content for coding courses.",
          skills: ["Curriculum Design", "JavaScript", "Pedagogy", "Assessment"]
        }
      ]
    },
    design: {
      name: "Design & UX",
      jobs: [
        {
          id: 5,
          title: "UI/UX Designer",
          type: "Full-time",
          location: "Remote",
          experience: "2+ years",
          description: "Create intuitive and engaging learning experiences for developers.",
          skills: ["Figma", "UI Design", "User Research", "Prototyping"]
        }
      ]
    }
  };

  const benefits = [
    {
      icon: <FaGlobeAmericas className="w-8 h-8" />,
      title: "Remote First",
      description: "Work from anywhere in the world with flexible hours"
    },
    {
      icon: <FaDollarSign className="w-8 h-8" />,
      title: "Competitive Salary",
      description: "Industry-competitive compensation with performance bonuses"
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Learning Budget",
      description: "Annual budget for courses, books, and conferences"
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Flexible PTO",
      description: "Unlimited paid time off to recharge and explore"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Team Retreats",
      description: "Annual company retreats in amazing locations"
    }
  ];

  const values = [
    {
      title: "Learning First",
      description: "We believe in continuous growth and knowledge sharing"
    },
    {
      title: "Student Success",
      description: "Every decision is made with our learners in mind"
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and teaching methods"
    },
    {
      title: "Collaboration",
      description: "Great things happen when we work together"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <SimpleLayout>
      <Head>
        <title>Career Opportunities at CodeSkipper - Join Our EdTech Mission</title>
        <meta
          name="description"
          content="Join CodeSkipper's mission to revolutionize coding education. Remote positions for developers, content creators, and educators. Competitive benefits and growth opportunities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="coding jobs, remote developer jobs, edtech careers, JavaScript jobs, programming education careers, tech jobs remote, coding education jobs"
        />
        <link rel="canonical" href="https://codeskipper.in/main/career" />
        <meta property="og:title" content="Career Opportunities at CodeSkipper - Join Our EdTech Mission" />
        <meta
          property="og:description"
          content="Transform coding education with CodeSkipper. Remote positions, competitive benefits, and meaningful work helping millions learn to code."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codeskipper.in//main/career" />
        <meta
          property="og:image"
          content="https://codeskipper.in/Images/logo.png"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Career Opportunities at CodeSkipper" />
        <meta name="twitter:description" content="Join our mission to revolutionize coding education. Remote positions available." />
      </Head>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white"
      >
        <div className="container mx-auto px-5 py-24 flex md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="title-font sm:text-5xl text-4xl mb-6 font-bold"
            >
              Build the Future of
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Coding Education
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8 text-xl leading-relaxed text-blue-100 max-w-2xl"
            >
              Join CodeSkipper in our mission to make coding education accessible, engaging, 
              and effective for millions of learners worldwide. Your work will directly impact 
              the next generation of developers.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a href="#open-positions" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-center">
                View Open Positions
              </a>
              <a href="#why-join-us" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-center">
                Why Join Us?
              </a>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative"
          >
            <div className="relative">
              <Image
                className="object-cover object-center rounded-2xl shadow-2xl"
                alt="CodeSkipper Team Collaboration"
                width={500}
                height={400}
                src="/Images/kartik.png"
                priority
              />
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg shadow-lg font-bold"
              >
                🚀 Remote First
              </motion.div>
              <motion.div 
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-4 -left-4 bg-green-400 text-blue-900 px-4 py-2 rounded-lg shadow-lg font-bold"
              >
                💼 Impact-Driven
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Join Us Section */}
      <motion.section 
        id="why-join-us"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-5">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why You'll Love Working at CodeSkipper
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building more than just a company - we're creating a movement 
              to transform how people learn to code.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Our Values */}
          <motion.div variants={containerVariants} className="bg-white rounded-2xl shadow-lg p-8">
            <motion.h3 variants={itemVariants} className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Core Values
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaHeart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Recruitment Process */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-5">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent, respectful, and designed to find the right fit for both you and us.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full hidden lg:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12 lg:space-y-0">
              {[
                {
                  step: 1,
                  title: "Application Review",
                  description: "We carefully review every application to ensure a great fit for both parties.",
                  duration: "1-3 days",
                  color: "blue"
                },
                {
                  step: 2,
                  title: "Initial Interview",
                  description: "Let's get to know each other! We'll discuss your experience and our mutual expectations.",
                  duration: "30-45 mins",
                  color: "purple"
                },
                {
                  step: 3,
                  title: "Technical Assessment",
                  description: "A practical project that reflects the work you'd be doing. No leetcode puzzles!",
                  duration: "Take-home",
                  color: "green"
                },
                {
                  step: 4,
                  title: "Team Interview",
                  description: "Meet the team you'll be working with and discuss technical challenges.",
                  duration: "60 mins",
                  color: "orange"
                },
                {
                  step: 5,
                  title: "Offer & Onboarding",
                  description: "Welcome to the team! We'll ensure you have everything needed to succeed.",
                  duration: "1-2 weeks",
                  color: "red"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  variants={itemVariants}
                  className={`flex flex-col lg:flex-row items-center lg:items-start ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:pl-8'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className={`bg-${item.color}-100 border-${item.color}-200 border-2 rounded-2xl p-6 shadow-lg`}
                    >
                      <h3 className={`text-${item.color}-700 text-xl font-bold mb-2`}>
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {item.description}
                      </p>
                      <div className={`inline-flex items-center text-${item.color}-600 font-semibold`}>
                        <FaClock className="w-4 h-4 mr-1" />
                        {item.duration}
                      </div>
                    </motion.div>
                  </div>

                  {/* Step Number */}
                  <div className="flex items-center justify-center my-4 lg:my-0 lg:mx-4">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 bg-${item.color}-600 rounded-full flex items-center justify-center shadow-lg z-10`}
                    >
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="lg:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Open Positions */}
      <motion.section 
        id="open-positions"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-5">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to make an impact? Explore our current openings and find your perfect role.
            </p>
          </motion.div>

          {/* Department Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(departments).map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDepartment(dept)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeDepartment === dept
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow'
                }`}
              >
                {departments[dept].name}
              </button>
            ))}
          </motion.div>

          {/* Jobs List */}
          <motion.div 
            key={activeDepartment}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {departments[activeDepartment].jobs.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ y: -5, scale: 1.02 }}
                onHoverStart={() => setHoveredJob(job.id)}
                onHoverEnd={() => setHoveredJob(null)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {job.title}
                    </h3>
                    <motion.div
                      animate={{ 
                        scale: hoveredJob === job.id ? 1.1 : 1,
                        rotate: hoveredJob === job.id ? 5 : 0
                      }}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {job.type}
                    </motion.div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <FaBriefcase className="w-4 h-4 mr-1" />
                      {job.experience}
                    </div>
                    <div className="flex items-center">
                      <FaGlobeAmericas className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:kartikkrishnasharma@zohomail.in"
                    className="w-auto bg-blue-600 text-white py-3 px-9 mt-5 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    Apply Now
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Jobs Message */}
          {departments[activeDepartment].jobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <FaGraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">
                No Open Positions
              </h3>
              <p className="text-gray-500 max-w-md mx-auto">
                We don't have any open positions in this department right now, 
                but check back soon! We're growing fast.
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white"
      >
        <div className="container mx-auto px-5 text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Coding Education?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join us in building the world's most effective and engaging platform for learning to code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#open-positions"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg"
              >
                View All Openings
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:kartikkrishnasharma@zohomail.in"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Contact Our Team
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </SimpleLayout>
  );
};

export default Career;
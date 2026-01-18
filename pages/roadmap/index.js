import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaMobileAlt, FaCloud, FaRobot, FaShieldAlt } from "react-icons/fa";
import SimpleLayout from "@/components/SimpleLayout";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const mcqsubjects = [
    // Web Development
    {
      id: 1,
      name: "Frontend",
      category: ["Web Development"],
      link: "/roadmap/frontend",
      icon: <FaCode size={50} />,
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 2,
      name: "Backend",
      category: ["Web Development"],
      link: "/roadmap/backend",
      icon: <FaDatabase size={50} />,
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 3,
      name: "Full Stack",
      category: ["Web Development"],
      link: "/roadmap/fullstack",
      icon: <FaCode size={50} />,
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 4,
      name: "React",
      category: ["Web Development"],
      link: "/roadmap/react",
      icon: <FaCode size={50} />,
      gradient: "from-green-400 to-blue-500",
    },
   
    {
      id: 6,
      name: "Digital Marketing",
      category: ["Digital Marketing"],
      link: "/roadmap/digital-marketing",
      icon: <FaCloud size={50} />,
      gradient: "from-blue-500 to-cyan-500",
    },
  
    {
      id: 8,
      name: "Cyber Security",
      category: ["Cyber Security"],
      link: "/roadmap/cyber-security",
      icon: <FaShieldAlt size={50} />,
      gradient: "from-red-600 to-orange-600",
    },
  ];

  const categories = [...new Set(mcqsubjects.flatMap((subject) => subject.category))];

  const filteredSubjects = selectedCategory
    ? mcqsubjects.filter((s) =>
        Array.isArray(s.category)
          ? s.category.includes(selectedCategory)
          : s.category === selectedCategory
      )
    : mcqsubjects;

  return (
    <SimpleLayout>
      <Head>
        <title>Roadmap | Code Skipper</title>
        <meta
          name="description"
          content="Comprehensive collection of computer science MCQs with answers. Test your knowledge in programming, web development, databases, networking, and more."
        />
      </Head>

      <section className="pt-10 pb-20 bg-white">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-blue-700"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Roadmap
          </motion.h1>
          <motion.p
            className="mt-4 text-gray-700 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Explore our roadmap-style MCQ collection covering{" "}
            <span className="font-semibold">
              Programming, Web Development, Database, and Emerging Technologies
            </span>{" "}
            to master Computer Science.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${selectedCategory === category
                  ? "bg-blue-700 text-white"
                  : "bg-white border text-blue-700"
                } border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-xl shadow-md transition duration-300`}
            >
              {category}
            </button>
          ))}
          <button
            onClick={() => setSelectedCategory(null)}
            className="bg-white border border-gray-400 text-gray-700 hover:bg-gray-400 hover:text-white px-4 py-2 rounded-xl shadow-md transition duration-300"
          >
            Clear Filter
          </button>
        </motion.div>

        {/* MCQ Subject Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto px-4"
        >
          {filteredSubjects.map((subject) => (
            <motion.div
              key={subject.id}
              whileHover={{ scale: 1.05 }}
              className="transition-all duration-300 transform shadow-md hover:shadow-xl rounded-xl overflow-hidden"
            >
              <Link href={subject.link} aria-label={`${subject.name} MCQs`}>
                <div className="flex flex-col items-center justify-center p-6 h-full">
                  <div
                    className={`bg-gradient-to-br ${subject.gradient} w-32 h-32 flex items-center justify-center rounded-full text-white`}
                  >
                    {subject.icon}
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-semibold text-blue-700">
                      {subject.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </SimpleLayout>
  );
};

export default Home;

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import SimpleLayout from "@/components/SimpleLayout";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const mcqsubjects = [
    // Web Development
    {
      id: 1,
      name: "Frontend",
      category: ["Web Development"],
      link: "",
      image: "",
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 2,
      name: "Backend",
      category: ["Web Development"],
      link: "",
      image: "",
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 3,
      name: "Full Stack",
      category: ["Web Development"],
      link: "",
      image: "",
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 4,
      name: "React",
      category: ["Web Development"],
      link: "",
      image: "",
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 5,
      name: "Vue",
      category: ["Web Development"],
      link: "",
      image: "",
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 6,
      name: "Angular",
      category: ["Web Development"],
      link: "",
      image: "",
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 7,
      name: "JavaScript",
      category: ["Web Development"],
      link: "",
      image: "",
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 8,
      name: "TypeScript",
      category: ["Web Development"],
      link: "",
      image: "",
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 9,
      name: "React Native",
      category: ["Web Development", "Mobile Development"],
      link: "",
      image: "",
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 10,
      name: "Flutter",
      category: ["Web Development", "Mobile Development"],
      link: "",
      image: "",
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 11,
      name: "UX Design",
      category: ["Web Development"],
      link: "",
      image: "",
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 12,
      name: "Design System",
      category: ["Web Development"],
      link: "",
      image: "",
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 13,
      name: "API Design",
      category: ["Web Development"],
      link: "",
      image: "",
      gradient: "from-green-400 to-blue-500",
    },

    // Mobile Development
    {
      id: 14,
      name: "Android",
      category: ["Mobile Development"],
      link: "",
      image: "",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      id: 15,
      name: "iOS",
      category: ["Mobile Development"],
      link: "",
      image: "",
      gradient: "from-yellow-400 to-orange-500",
    },

    // Data Science & AI
    {
      id: 16,
      name: "Artificial Intelligence",
      category: ["Data Science & AI", "Emerging Technologies"],
      link: "",
      image: "",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      id: 17,
      name: "AI Engineer",
      category: ["Data Science & AI"],
      link: "",
      image: "",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      id: 18,
      name: "AI and Data Scientist",
      category: ["Data Science & AI"],
      link: "",
      image: "",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      id: 19,
      name: "Data Analyst",
      category: ["Data Science & AI"],
      link: "",
      image: "",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      id: 20,
      name: "MLOps",
      category: ["Data Science & AI", "Emerging Technologies"],
      link: "",
      image: "",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      id: 21,
      name: "Prompt Engineering",
      category: ["Data Science & AI", "Emerging Technologies"],
      link: "",
      image: "",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      id: 22,
      name: "Python",
      category: ["Data Science & AI", "Programming Languages"],
      link: "",
      image: "",
      gradient: "from-purple-500 to-indigo-500",
    },

    // DevOps & Cloud
    {
      id: 23,
      name: "DevOps",
      category: ["DevOps & Cloud"],
      link: "",
      image: "",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 24,
      name: "Docker",
      category: ["DevOps & Cloud"],
      link: "",
      image: "",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 25,
      name: "Kubernetes",
      category: ["DevOps & Cloud"],
      link: "",
      image: "",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 26,
      name: "Terraform",
      category: ["DevOps & Cloud"],
      link: "",
      image: "",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 27,
      name: "AWS",
      category: ["DevOps & Cloud"],
      link: "",
      image: "",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 28,
      name: "Linux",
      category: ["DevOps & Cloud"],
      link: "",
      image: "",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 29,
      name: "Cloudflare",
      category: ["DevOps & Cloud"],
      link: "",
      image: "",
      gradient: "from-blue-500 to-cyan-500",
    },

    // Programming Languages
    {
      id: 30,
      name: "Java",
      category: ["Programming Languages"],
      link: "",
      image: "",
      gradient: "from-pink-500 to-red-500",
    },
    {
      id: 31,
      name: "C++",
      category: ["Programming Languages"],
      link: "",
      image: "",
      gradient: "from-pink-500 to-red-500",
    },
    {
      id: 32,
      name: "Go Roadmap",
      category: ["Programming Languages"],
      link: "",
      image: "",
      gradient: "from-pink-500 to-red-500",
    },
    {
      id: 33,
      name: "Rust",
      category: ["Programming Languages"],
      link: "",
      image: "",
      gradient: "from-pink-500 to-red-500",
    },
    {
      id: 34,
      name: "PHP",
      category: ["Programming Languages"],
      link: "",
      image: "",
      gradient: "from-pink-500 to-red-500",
    },

    // Software Engineering
    {
      id: 35,
      name: "Software Architect",
      category: ["Software Engineering"],
      link: "",
      image: "",
      gradient: "from-gray-500 to-gray-700",
    },
    {
      id: 36,
      name: "QA",
      category: ["Software Engineering"],
      link: "",
      image: "",
      gradient: "from-gray-500 to-gray-700",
    },
    {
      id: 37,
      name: "Technical Writer",
      category: ["Software Engineering"],
      link: "",
      image: "",
      gradient: "from-gray-500 to-gray-700",
    },
    {
      id: 38,
      name: "Product Manager",
      category: ["Software Engineering"],
      link: "",
      image: "",
      gradient: "from-gray-500 to-gray-700",
    },
    {
      id: 39,
      name: "Engineering Manager",
      category: ["Software Engineering"],
      link: "",
      image: "",
      gradient: "from-gray-500 to-gray-700",
    },
    {
      id: 40,
      name: "Developer Relations",
      category: ["Software Engineering"],
      link: "",
      image: "",
      gradient: "from-gray-500 to-gray-700",
    },
    {
      id: 41,
      name: "Code Review",
      category: ["Software Engineering"],
      link: "",
      image: "",
      gradient: "from-gray-500 to-gray-700",
    },
    {
      id: 42,
      name: "Software Design and Architecture",
      category: ["Software Engineering"],
      link: "",
      image: "",
      gradient: "from-gray-500 to-gray-700",
    },
    {
      id: 43,
      name: "System Design",
      category: ["Software Engineering", "Computer Science"],
      link: "",
      image: "",
      gradient: "from-gray-500 to-gray-700",
    },

    // Emerging Technologies
    {
      id: 44,
      name: "Blockchain",
      category: ["Emerging Technologies"],
      link: "",
      image: "",
      gradient: "from-fuchsia-500 to-purple-600",
    },

    // Computer Science Core
    {
      id: 45,
      name: "Computer Science",
      category: ["Computer Science Core"],
      link: "",
      image: "",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      id: 46,
      name: "Data Structures & Algorithms",
      category: ["Computer Science Core"],
      link: "",
      image: "",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      id: 47,
      name: "SQL",
      category: ["Computer Science Core", "Programming Languages"],
      link: "",
      image: "",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      id: 48,
      name: "PostgreSQL",
      category: ["Computer Science Core", "Web Development"],
      link: "",
      image: "",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      id: 49,
      name: "MongoDB",
      category: ["Computer Science Core", "Web Development"],
      link: "",
      image: "",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      id: 50,
      name: "Git and GitHub",
      category: ["Computer Science Core"],
      link: "",
      image: "",
      gradient: "from-teal-500 to-emerald-500",
    },

    // Cyber Security
    {
      id: 51,
      name: "Cyber Security",
      category: ["Cyber Security"],
      link: "",
      image: "",
      gradient: "from-red-600 to-orange-600",
    },

    // Game Dev
    {
      id: 52,
      name: "Game Developer",
      category: ["Emerging Technologies"],
      link: "",
      image: "",
      gradient: "from-pink-500 to-purple-500",
    },

    // Add more subjects as needed...
  ];

  const categories = [
    ...new Set(mcqsubjects.flatMap((subject) => subject.category)),
  ];

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
        <title>Roadmap | Unstop Computer</title>
        <meta
          name="description"
          content="Comprehensive collection of 1000+ computer science multiple choice questions with answers. Test your knowledge in programming, web development, databases, networking, and more."
        />
        <meta
          name="keywords"
          content="computer science MCQs, programming MCQs, technical quizzes, coding questions, data structure MCQs, web development questions"
        />
        <meta
          property="og:title"
          content="5000+ Computer Science MCQs with Answers"
        />
        <meta
          property="og:description"
          content="Test your computer science knowledge with our comprehensive collection of multiple choice questions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unstopcomputer.tech/mcq" />
        <link rel="canonical" href="https://unstopcomputer.tech/mcq" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: mcqsubjects.map((subject, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "WebPage",
                url: `https://unstopcomputer.tech${subject.link}`,
                name: `${subject.name} MCQs`,
              },
            })),
          })}
        </script>
      </Head>

      <section className="pt-10 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-blue-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Roadmap
          </motion.h1>
          <motion.p
            className="mt-4 text-gray-700 dark:text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Explore our roadmap-style MCQ collection covering{" "}
            <span className="font-semibold dark:text-white">
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
              className={`${
                selectedCategory === category
                  ? "bg-blue-700 text-white"
                  : "bg-white dark:bg-gray-800 border text-blue-700 dark:text-blue-300"
              } border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-xl shadow-md transition duration-300`}
            >
              {category}
            </button>
          ))}
          <button
            onClick={() => setSelectedCategory(null)}
            className="bg-white dark:bg-gray-800 border border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-xl shadow-md transition duration-300"
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
              className="transition-all duration-300 transform shadow-md hover:shadow-xl rounded-xl relative overflow-hidden"
            >
              <Link href={subject.link} aria-label={`${subject.name} MCQs`}>
                <div className="flex flex-col h-full">
                  <div
                    className={`bg-gradient-to-br ${subject.gradient} w-full h-[150px] flex items-center justify-center rounded-t-xl`}
                  >
                    <Image
                      src={subject.image}
                      width={150}
                      height={150}
                      alt={`${subject.name} MCQs`}
                      className="object-contain max-w-[80%] max-h-[80%]"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center mt-4 p-2">
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
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

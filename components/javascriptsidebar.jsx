import { useRouter } from "next/router";
import Link from "next/link";

export default function CourseSidebar({ isOpen, setSidebarOpen }) {
  const router = useRouter();

  const sections = [
    {
      id: 1,
      title: "1. Introduction to JavaScript",
      topics: [
        { name: "What is JavaScript?", link: "/tutorial/javascript" },
        { name: "History and Evolution of JavaScript", link: "/tutorial/javascript/history-and-evolution" },
        { name: "Features and Advantages", link: "/tutorial/javascript/features-of-javascript" },
        { name: "How JavaScript Works", link: "/tutorial/javascript/how-javascript-works" },
        { name: "Setting up Environment", link: "/tutorial/javascript/setup-javascript" },
        { name: "Your First JavaScript Program", link: "/tutorial/javascript/javascript-first-program" },
        { name: "Inline, Internal, External JS", link: "/tutorial/javascript/javascript-types" },
        { name: "Comments in JavaScript", link: "/tutorial/javascript/javascript-comment" },
      ],
    },
    {
      id: 2,
      title: "2. JavaScript Basics",
      topics: [
        { name: "Syntax and Rules", link: "/tutorial/javascript/basics/syntax-and-rules" },
        { name: "Variables and Constants", link: "/tutorial/javascript/basics/variables-and-constants" },
        { name: "var, let, const", link: "/tutorial/javascript/basics/var-let-const" },
        { name: "Hoisting Concept", link: "/tutorial/javascript/basics/hoisting" },
        { name: "Data Types", link: "/tutorial/javascript/basics/data-types" },
        { name: "Operators", link: "/tutorial/javascript/basics/operators" },
      ],
    },
    {
      id: 3,
      title: "3. Control Flow Statements",
      topics: [
        { name: "Conditional Statements", link: "/course/conditions" },
        { name: "Loops", link: "/course/loops" },
        { name: "break and continue", link: "/course/break-continue" },
      ],
    },
    {
      id: 4,
      title: "4. Functions",
      topics: [
        { name: "Function Declaration and Invocation", link: "/course/functions" },
        { name: "Parameters and Arguments", link: "/course/parameters" },
        { name: "Return Statement", link: "/course/return" },
      ],
    },
  ];

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full bg-gray-900 text-white w-72 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0 md:w-72
      `}
    >
      {/* Sidebar Header */}
      <div className="p-4 text-xl font-bold border-b border-gray-700 flex justify-between items-center mt-16 md:mt-0">
        <span>📘 JS Course</span>
        <button className="md:hidden text-lg" onClick={() => setSidebarOpen(false)}>
          ✕
        </button>
      </div>

      {/* Sidebar Sections */}
      <ul className="space-y-4 p-4 overflow-y-auto h-[calc(100%-64px)] pb-24">
        {sections.map((section) => (
          <li key={section.id}>
            {/* Section Title (Non-clickable) */}
            <div className="font-bold text-md py-2 px-3 bg-gray-800 rounded-lg">
              {section.title}
            </div>

            {/* Subtopics (Clickable Links) */}
            <ul className="ml-4 mt-2 space-y-1">
              {section.topics.map((topic, index) => {
                const isActive = router.pathname === topic.link;
                return (
                  <li key={index}>
                    <Link href={topic.link} onClick={() => setSidebarOpen(false)}>
                      <div
                        className={`p-2 rounded-lg text-sm hover:bg-gray-700 transition ${
                          isActive ? "bg-blue-600 font-semibold" : ""
                        }`}
                      >
                        {topic.name}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
}

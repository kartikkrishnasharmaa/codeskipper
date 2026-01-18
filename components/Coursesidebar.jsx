import { useRouter } from "next/router";
import Link from "next/link";

export default function CourseSidebar({ isOpen, setSidebarOpen }) {
  const router = useRouter();

  const mcqsubjects = [
    { id: 0, name: "MCQ's", link: "/mcq" },
    { id: 1, name: "Artificial Intelligence", link: "/mcq/artificial-intelligence" },
    { id: 2, name: "Angular Js", link: "/mcq/angularjs-mcq" },
    { id: 3, name: "Blockchain", link: "/mcq/blockchain" },
    { id: 4, name: "C Language", link: "/mcq/c-language" },
    { id: 5, name: "Computer Fundamental", link: "/mcq/computer-fundamental" },
    { id: 6, name: "Computer Memory", link: "/mcq/computer-memory" },
    { id: 7, name: "Cloud Computing", link: "/mcq/cloud-mcq" },
    { id: 8, name: "C++", link: "/mcq/cpp-language" },
    { id: 9, name: "Computer Networking", link: "/mcq/networking-mcq" },
    { id: 10, name: "CSS", link: "/mcq/css-mcq" },
    { id: 11, name: "Data Structure", link: "/mcq/data-structure-mcq" },
    { id: 12, name: "DBMS", link: "/mcq/dbms-mcq" },
    { id: 13, name: "Ethical Hacking", link: "/mcq/ethical-hacking-mcq" },
    { id: 14, name: "HTML", link: "/mcq/html-mcq" },
    { id: 15, name: "Java", link: "/mcq/java-mcq" },
    { id: 16, name: "JavaScript", link: "/mcq/javascript-mcq" },
    { id: 17, name: "Python", link: "/mcq/python-mcq" },
    { id: 18, name: "ReactJs", link: "/mcq/react-mcq" },
  ];

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full bg-gray-900 text-white w-64 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0 md:w-64
      `}
    >
      {/* Sidebar Header */}
      <div
        className="p-4 text-xl font-bold border-b border-gray-700 flex justify-between items-center mt-16 md:mt-0"
      >
        <button
          className="md:hidden text-lg"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>
      </div>


      {/* Sidebar List */}
      <ul className="space-y-2 p-4 pb-24 overflow-y-auto h-[calc(100%-64px)]">
        {mcqsubjects.map((subject) => {
          const isActive = router.pathname === subject.link;
          return (
            <li key={subject.id}>
              <Link href={subject.link} onClick={() => setSidebarOpen(false)}>
                <div
                  className={`p-2 rounded-lg cursor-pointer flex items-center gap-2 hover:bg-gray-700 ${isActive ? "bg-blue-600 font-bold" : ""
                    }`}
                >
                  📘 {subject.name}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

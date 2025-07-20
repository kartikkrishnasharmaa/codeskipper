import { useRouter } from "next/router";
import Link from "next/link";
export default function Sidebar({ isOpen, setSidebarOpen }) {
  const router = useRouter();
  const mcqsubjects = [
    {
      id: 1,
      name: "Artificial Intelligence",
      link: "/mcq/artificial-intelligence",
    },
    { id: 2, name: "Angular Js", link: "/mcq/angularjs-mcq" },
    { id: 3, name: "Blockchain", link: "/mcq/blockchain" },
    { id: 4, name: "C Language", link: "/mcq/c-language" },
    { id: 5, name: "Computer Fundamental", link: "/mcq/computer-fundamental" },
    { id: 6, name: "Computer Memory", link: "/mcq/computer-memory" },
    { id: 7, name: "Cloud Computing", link: "/mcq/cloud-mcq" },
    { id: 8, name: "C++", link: "/mcq/cpp-language" },
    { id: 9, name: "Computer Networking", link: "/mcq/networking-mcq" },
    { id: 8, name: "CSS", link: "/mcq/css-mcq" },

    { id: 10, name: "Data Structure", link: "/mcq/data-structure-mcq" },
    { id: 11, name: "DBMS", link: "/mcq/dbms-mcq" },
    { id: 12, name: "Ethical Hacking ", link: "/mcq/ethical-hacking-mcq" },
    { id: 13, name: "HTML", link: "/mcq/html-mcq" },
    { id: 14, name: "I/O Devices", link: "/mcq/io-device" },
    { id: 16, name: "Java", link: "/mcq/java-mcq" },
    { id: 17, name: "JavaScript", link: "/mcq/javascript-mcq" },
    { id: 18, name: "Machine Learning", link: "/mcq/machine-learning-mcq" },
    { id: 19, name: "MongoDB", link: "/mcq/mongodb-mcq" },
    {
      id: 20,
      name: "Mobile Communication",
      link: "/mcq/mobile-communication-mcq",
    },
    { id: 21, name: "Multimedia", link: "/mcq/multimedia-mcq" },
    { id: 22, name: "Node Js", link: "/mcq/node-mcq" },
    { id: 23, name: "Operating System", link: "/mcq/operating-system" },
    { id: 24, name: "Python", link: "/mcq/python-mcq" },
    { id: 25, name: "ReactJs", link: "/mcq/react-mcq" },
    {
      id: 26,
      name: "System Analysis & Design",
      link: "/mcq/system-design-analysis-mcq",
    },
  
    // Add more subjects here
  ];
  return (
    <aside
      className={`
  bg-gray-800 dark:bg-gray-900 text-white w-64 absolute md:static h-auto z-50 transition-transform duration-300 ease-in-out
  ${isOpen ? "translate-x-0" : "-translate-x-full"}
  md:translate-x-0 overflow-y-auto
`}
    >
      <ul className="space-y-4 p-4">
        {mcqsubjects.map((subject) => (
          <li key={subject.id}>
            <Link href={subject.link}>
              <div
                className={`sidebar-link ${
                  router.pathname === subject.link ? "active" : ""
                }`}
              >
                <i className="fa fa-home" />
                {subject.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

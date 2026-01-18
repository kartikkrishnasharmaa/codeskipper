import { useRouter } from "next/router";
import Link from "next/link";
export default function Sidebar({ isOpen, setSidebarOpen }) {
  const router = useRouter();
  const roadmapSubjects = [
    {
      id: 1,
      name: "Home",
      link: "/roadmap",
    },
    { id: 2, name: "Frontend Developer", link: "/roadmap/frontend" },
    { id: 3, name: "Backend Developer", link: "/roadmap/backend" },
    { id: 4, name: "Full Stack Web Developer", link: "/roadmap/fullstack" },
    { id: 5, name: "React Developer", link: "/roadmap/react" },
    { id: 6, name: "Cyber Security", link: "/roadmap/cyber-security" },


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
        {roadmapSubjects.map((subject) => (
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

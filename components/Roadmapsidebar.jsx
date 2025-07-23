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

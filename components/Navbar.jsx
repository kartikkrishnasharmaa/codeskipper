"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar({ setSidebarOpen }) {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [openMegaMenu, setOpenMegaMenu] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [items, setItems] = useState([]);
  const scrollableRef = useRef(null);

  // --- Auto Scroll Topics ---
  const scrollItemsData = [
    { text: "Android Developer", path: "/interview-question/android-developer" },
    { text: "Data Structure", path: "/interview-question/data-structure" },
    { text: "CSS", path: "/interview-question/css" },
    { text: "Flutter", path: "/interview-question/flutter" },
    { text: "HTML", path: "/interview-question/html" },
    { text: "MERN Stack", path: "/interview-question/mern-stack" },
    { text: "Next Js", path: "/interview-question/nextjs" },
    { text: "Node Js", path: "/interview-question/nodejs" },
    { text: "React Js", path: "/interview-question/reactjs" },
    { text: "Python", path: "/interview-question/python" },
  ];

  useEffect(() => setItems([...scrollItemsData, ...scrollItemsData]), []);

  useEffect(() => {
    const scrollContainer = scrollableRef.current;
    if (!scrollContainer || isPaused || items.length === 0) return;

    const scrollSpeed = 1;
    let animationFrame;
    let scrollAmount = 0;
    const itemWidth = scrollContainer.children[0]?.offsetWidth + 16;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;
      if (scrollAmount >= scrollItemsData.length * itemWidth) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(scroll);
    };
    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, items]);

  // --- Navigation Items ---
  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Interview Preparation",
      path: "/interview-question",
      megaMenu: [
        { title: "Frontend", items: ["React", "Next.js", "CSS", "HTML"] },
        { title: "Backend", items: ["Node.js", "Express", "MongoDB", "Python"] },
        { title: "Mobile", items: ["Flutter", "React Native", "Android"] },
      ],
    },
    {
      name: "Roadmap",
      path: "/roadmap",
      megaMenu: [
        { title: "Beginner", items: ["HTML", "CSS", "JS"] },
        { title: "Advanced", items: ["React", "Next.js", "MERN"] },
      ],
    },
    { name: "Computer Dictionary", path: "/glossary" },
    { name: "MCQ", path: "/mcq" },
    { name: "Test", path: "/test" },
    { name: "Online Compiler", path: "/main/compiler" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { y: -10, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-gray-900 dark:to-gray-800 shadow-lg backdrop-blur-lg">
      <nav className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Images/logo.webp"
              alt="Logo"
              width={140}
              height={40}
              className="transition-transform duration-300 hover:scale-110"
            />
          </Link>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            initial="hidden"
            animate="show"
            variants={container}
          >
            {navItems.map((nav, i) => {
              const isActive = pathname === nav.path;
              return (
                <motion.div
                  key={nav.name}
                  variants={item}
                  className="relative group"
                  onMouseEnter={() => setOpenMegaMenu(nav.name)}
                  onMouseLeave={() => setOpenMegaMenu(null)}
                >
                  <Link
                    href={nav.path}
                    className={`flex items-center gap-1 text-sm font-semibold ${isActive
                        ? "text-white border-b-2 border-white"
                        : "text-white hover:text-yellow-300"
                      }`}
                  >
                    {nav.name}
                    {nav.megaMenu && <ChevronDown size={16} />}
                  </Link>

                  {/* Mega Menu */}
                  {nav.megaMenu && (
                    <AnimatePresence>
                      {openMegaMenu === nav.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
className="absolute left-0 top-8 z-[999] bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-xl shadow-2xl grid grid-cols-3 gap-8 w-[600px] border border-gray-200 dark:border-gray-700"
                        >
                          {nav.megaMenu.map((section, idx) => (
                            <div key={idx}>
                              <h4 className="font-bold mb-2 text-blue-600 dark:text-yellow-300">
                                {section.title}
                              </h4>
                              <ul className="space-y-1">
                                {section.items.map((itm, id) => (
                                  <li
                                    key={id}
                                    className="hover:text-blue-600 dark:hover:text-yellow-400 cursor-pointer transition"
                                  >
                                    {itm}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              );
            })}

      
          </motion.div>

          {/* Mobile Buttons */}
          <div className="flex items-center md:hidden space-x-3">
            <button onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? (
                <X size={26} className="text-white" />
              ) : (
                <Menu size={26} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg"
            >
              {navItems.map((nav, i) => (
                <div key={i} className="mb-3">
                  <button
                    onClick={() =>
                      setOpenMegaMenu(openMegaMenu === nav.name ? null : nav.name)
                    }
                    className="w-full flex justify-between items-center text-left text-gray-800 dark:text-white font-semibold"
                  >
                    {nav.name}
                    {nav.megaMenu && (
                      <ChevronDown
                        className={`transform transition-transform ${openMegaMenu === nav.name ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </button>

                  {/* Mobile Mega Menu */}
                  {nav.megaMenu && openMegaMenu === nav.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 mt-2 space-y-2"
                    >
                      {nav.megaMenu.map((section, idx) => (
                        <div key={idx}>
                          <h4 className="font-bold text-blue-600 mt-2">{section.title}</h4>
                          <ul className="ml-2 space-y-1">
                            {section.items.map((itm, id) => (
                              <li
                                key={id}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 cursor-pointer"
                              >
                                {itm}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

      
            </motion.div>
          )}
        </AnimatePresence>

        {/* Auto Scrolling Tags */}
        {/* Auto Scrolling Tags */}
        <div
          className={`mt-3 relative overflow-hidden transition-all duration-300 ${openMegaMenu ? "z-0 opacity-60 pointer-events-none" : "z-30"
            }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          <div
            ref={scrollableRef}
            className="flex overflow-x-auto whitespace-nowrap py-2 scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style jsx>{`
              .scrollbar-none::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {items.map((item, index) => (
              <Link
                key={`${item.text}-${index}`}
                href={item.path}
                className="inline-block px-4 py-1 mx-2 bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 transition-all shadow-sm hover:shadow-md"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

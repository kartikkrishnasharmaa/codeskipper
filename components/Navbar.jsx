
"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function Navbar({ setSidebarOpen }) {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [items, setItems] = useState([]);
  const scrollableRef = useRef(null);
  const megaMenuRef = useRef(null);

  // Close mega menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setOpenMegaMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollItemsData = [
    { text: "Artificial Intelligence", path: "/mcq/artificial-intelligence" },
    { text: "Angular Js", path: "/mcq/angularjs-mcq" },
    { text: "Blockchain", path: "/mcq/blockchain" },
    { text: "C Language", path: "/mcq/c-language" },
    { text: "Computer Fundamental", path: "/mcq/computer-fundamental" },
    { text: "C++", path: "/mcq/cpp-language" },
    { text: "DBMS", path: "/mcq/dbms-mcq" },
    { text: "Ethical Hacking", path: "/mcq/ethical-hacking-mcq" },
    { text: "HTML", path: "/mcq/html-mcq" },
    { text: "JavaScript", path: "/mcq/javascript-mcq" },
    { text: "ReactJs", path: "/mcq/react-mcq" },
    { text: "Python", path: "/mcq/python-mcq" },
    { text: "Operating System", path: "/mcq/operating-system" },
    { text: "Machine Learning", path: "/mcq/machine-learning-mcq" },
  ];

  useEffect(() => setItems([...scrollItemsData, ...scrollItemsData]), []);

  // Auto-scroll for MCQ section
  useEffect(() => {
    const scrollContainer = scrollableRef.current;
    if (!scrollContainer || isPaused || items.length === 0) return;

    const scrollSpeed = 1;
    let scrollAmount = 0;
    let animationFrame;
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

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "MCQ",
      path: "/mcq",
      megaMenu: [
        {
          title: "Programming",
          items: [
            { name: "C Language", path: "/mcq/c-language" },
            { name: "C++", path: "/mcq/cpp-language" },
            { name: "Java", path: "/mcq/java-mcq" },
            { name: "Python", path: "/mcq/python-mcq" },
            { name: "C#", path: "/mcq/c-sharp" },
            { name: "PHP", path: "/mcq/php-mcq" },
          ],
        },
        {
          title: "Web Development",
          items: [
            { name: "HTML", path: "/mcq/html-mcq" },
            { name: "CSS", path: "/mcq/css-mcq" },
            { name: "JavaScript", path: "/mcq/javascript-mcq" },
            { name: "ReactJs", path: "/mcq/react-mcq" },
            { name: "Angular", path: "/mcq/angularjs-mcq" },
            { name: "Vue.js", path: "/mcq/vuejs-mcq" },
          ],
        },
      ],
    },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Computer Dictionary", path: "/glossary" },
    { name: "Test", path: "/test" },
    { name: "Online Compiler", path: "/main/compiler" },
  ];

  return (
    <header className="sticky top-0 z-[99999] w-full dark:bg-gray-900 shadow-lg backdrop-blur-lg overflow-visible">
      <nav className="mx-auto px-4 sm:px-6 py-3 relative">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center z-50">
            <Image
              src="/Images/logo.webp"
              alt="Logo"
              width={140}
              height={40}
              className="transition-transform duration-300 hover:scale-110"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((nav) => {
              const isActive = pathname === nav.path;
              return (
                <div
                  key={nav.name}
                  className="relative group"
                  onMouseEnter={() => nav.megaMenu && setOpenMegaMenu(nav.name)}
                  onMouseLeave={() => nav.megaMenu && setOpenMegaMenu(null)}
                  ref={nav.megaMenu ? megaMenuRef : null}
                >
                  <Link
                    href={nav.path}
                    className={`flex items-center gap-1 text-sm font-semibold transition-all duration-200 px-3 py-2 rounded-lg ${
                      isActive
                        ? "text-white bg-blue-700 shadow-md"
                        : "text-white hover:text-yellow-300 hover:bg-blue-700/50"
                    }`}
                  >
                    {nav.name}
                    {nav.megaMenu && (
                      <ChevronDown
                        size={16}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    )}
                  </Link>

                  {/* Mega Menu */}
                  {nav.megaMenu && openMegaMenu === nav.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="fixed left-1/2 top-[64px] transform -translate-x-1/2 w-[85vw] max-w-[1400px] bg-white shadow-2xl border border-gray-200 z-[99999] rounded-xl overflow-hidden h-[500px]"
                    >
                      <div className="p-8 overflow-y-auto h-full">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                          {nav.megaMenu.map((section, idx) => (
                            <div key={idx} className="space-y-3">
                              <h3 className="font-bold text-blue-700 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                                {section.title}
                              </h3>
                              <ul className="space-y-2">
                                {section.items.map((itm, id) => (
                                  <li key={id}>
                                    <Link
                                      href={itm.path}
                                      className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm py-1 hover:translate-x-1 transform transition-transform"
                                      onClick={() => setOpenMegaMenu(null)}
                                    >
                                      {itm.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {navOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
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
              className="lg:hidden bg-gray-900/90 mt-2 rounded-xl overflow-hidden"
            >
              <ul className="flex flex-col px-4 py-2 space-y-2">
                {navItems.map((nav) => (
                  <li key={nav.name}>
                    {nav.megaMenu ? (
                      <div>
                        <button
                          onClick={() =>
                            setOpenMegaMenu(openMegaMenu === nav.name ? null : nav.name)
                          }
                          className="flex justify-between items-center w-full px-3 py-2 text-white font-semibold hover:bg-blue-700 rounded-lg"
                        >
                          {nav.name}
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              openMegaMenu === nav.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openMegaMenu === nav.name && (
                          <div className="pl-4 pt-2">
                            {nav.megaMenu.map((section, idx) => (
                              <div key={idx} className="mb-2">
                                <h3 className="font-bold text-blue-400 text-sm">
                                  {section.title}
                                </h3>
                                <ul className="pl-2">
                                  {section.items.map((itm, id) => (
                                    <li key={id}>
                                      <Link
                                        href={itm.path}
                                        className="block py-1 text-gray-200 hover:text-yellow-300"
                                        onClick={() => setNavOpen(false)}
                                      >
                                        {itm.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={nav.path}
                        className="block px-3 py-2 text-white font-semibold hover:bg-blue-700 rounded-lg"
                        onClick={() => setNavOpen(false)}
                      >
                        {nav.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scrolling MCQ Section */}
        <div
          className="mt-3 relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollableRef}
            className="flex overflow-x-auto whitespace-nowrap py-2 scrollbar-none"
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
                className="inline-flex px-4 py-1.5 mx-2 bg-white hover:bg-gray-100 rounded-full text-sm font-medium text-gray-800 transition-all shadow-sm hover:shadow-md border border-gray-200 min-w-max"
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

"use client";
import { useState, useEffect,useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, LayoutDashboard, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar({ setSidebarOpen }) {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
  const [items, setItems] = useState([]);
  const scrollableRef = useRef(null);

  const scrollItemsData = [
    {
      text: "Android Developer",
      path: "/interview-question/android-developer",
    },
    {
      text: "Data Structure",
      path: "/interview-question/data-structure",
    },
    {
      text: "CSS",
      path: "/interview-question/css",
    },
    {
      text: "Flutter",
      path: "/interview-question/flutter",
    },
    {
      text: "HTML",
      path: "/interview-question/html",
    },
    {
      text: "MERN Stack",
      path: "/interview-question/mern-stack",
    },
    {
      text: "Next Js",
      path: "/interview-question/nextjs",
    },
    {
      text: "Node Js",
      path: "/interview-question/nodejs",
    },
    {
      text: "React Js",
      path: "/interview-question/reactjs",
    },
    {
      text: "React Native",
      path: "/interview-question/react-native",
    },
    {
      text: "Python",
      path: "/interview-question/python",
    },
    {
      text: "MS Excel",
      path: "/interview-question/excel",
    },
    {
      text: "Microsoft Power BI",
      path: "/interview-question/powerbi",
    },
    {
      text: "PHP",
      path: "/interview-question/php",
    },
    {
      text: "Django",
      path: "/interview-question/django",
    },
  ];
  // Initialize items with duplicates for seamless looping
  useEffect(() => {
    setItems([...scrollItemsData, ...scrollItemsData]);
  }, []);

  // Auto-scroll effect with infinite loop
  useEffect(() => {
    const scrollContainer = scrollableRef.current;
    if (!scrollContainer || isPaused || items.length === 0) return;

    const scrollSpeed = 1;
    let animationFrame;
    let scrollAmount = 0;
    const itemWidth = scrollContainer.children[0]?.offsetWidth + 16; // 16px for margin

    const scroll = () => {
      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;

      // When we've scrolled past the first set of items, reset scroll position seamlessly
      if (scrollAmount >= scrollItemsData.length * itemWidth) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, items]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    setNavOpen(false); // Close mobile menu on route change
  }, [pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Computer Dictionary", path: "/glossary" },
    { name: "Roadmap", path: "/blog" },
    { name: "MCQ", path: "/mcq" },
    { name: "Test", path: "/test" },
    { name: "Interview Preparation", path: "/interview-question" },
    { name: "Online Compiler", path: "/main/compiler" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: -10, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const mobileMenu = {
    hidden: { height: 0, opacity: 0 },
    show: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-blue-600 dark:bg-gray-900 shadow-sm backdrop-blur-md">
      <nav className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Images/logo.webp"
              alt="Logo"
              width={140}
              height={40}
              className="transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex items-center space-x-8 lg:space-x-12"
            initial="hidden"
            animate="show"
            variants={container}
          >
            {navItems.map((itemData, index) => {
              const isActive = pathname === itemData.path;
              return (
                <motion.div
                  key={itemData.path}
                  className="relative"
                  variants={item}
                  onHoverStart={() => setHoveredItem(index)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <Link
                    href={itemData.path}
                    className={`text-sm font-medium px-2 py-1 transition-colors ${
                      isActive
                        ? "text-white font-bold"
                        : "text-white hover:text-blue-300"
                    }`}
                  >
                    {itemData.name}
                    {(hoveredItem === index || isActive) && (
                      <motion.span
                        layoutId="navHover"
                        className={`absolute left-0 bottom-0 h-0.5 ${
                          isActive ? "bg-white" : "bg-blue-400"
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}

            {/* Dark Mode Button */}
            <button
              onClick={() => setIsDark((prev) => !prev)}
              className="ml-4 p-2 rounded-full hover:bg-white/10 transition"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </motion.div>

          {/* Mobile Buttons */}
          <div className="flex items-center space-x-3 md:hidden">
            <button onClick={() => setSidebarOpen((prev) => !prev)}>
              <LayoutDashboard size={24} className="text-white" />
            </button>
            <button onClick={() => setNavOpen((prev) => !prev)}>
              {navOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
            <button
              onClick={() => setIsDark((prev) => !prev)}
              className="p-2 rounded-full hover:bg-white/10"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              className="md:hidden mt-4"
              variants={mobileMenu}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.div
                className="flex flex-col space-y-2 py-2"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {navItems.map((itemData) => {
                  const isActive = pathname === itemData.path;
                  return (
                    <motion.div key={itemData.path} variants={item}>
                      <Link
                        href={itemData.path}
                        onClick={() => setNavOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                          isActive
                            ? "bg-blue-50 text-blue-600 font-semibold"
                            : "text-white hover:bg-gray-800"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-base ${
                              isActive ? "text-blue-600" : "text-gray-400"
                            }`}
                          >
                            →
                          </span>
                          {itemData.name}
                          {isActive && (
                            <span className="ml-2 text-blue-400">●</span>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className="mt-2 relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollableRef}
            className="flex overflow-x-auto whitespace-nowrap py-2 scrollbar-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              .scrollbar-none::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {items.map((item, index) => (
              <Link
                key={`${item.text}-${index}`} // Unique key for duplicated items
                href={item.path}
                className="inline-block px-4 py-1 mx-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors duration-200 flex-shrink-0"
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

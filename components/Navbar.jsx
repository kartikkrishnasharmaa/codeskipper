"use client";
import { useState, useEffect } from "react";
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
    { name: "Online Compiler", path: "/compiler/index.html" },
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
      <nav className="mx-auto max-w-screen-xl px-6 py-4">
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
                      isActive ? "text-white font-bold" : "text-white hover:text-blue-300"
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
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
              {navOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
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
                          <span className={`text-base ${isActive ? "text-blue-600" : "text-gray-400"}`}>→</span>
                          {itemData.name}
                          {isActive && <span className="ml-2 text-blue-400">●</span>}
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

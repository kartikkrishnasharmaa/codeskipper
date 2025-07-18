import Navbar from "../Navbar";
import CourseSidebar from "../Coursesidebar";
import Footer from "../Footer";
import { useState } from "react";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Navbar setSidebarOpen={setSidebarOpen} setNavOpen={setNavOpen} />

      {/* Main Content */}
      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <CourseSidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Overlay for Mobile */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          ></div>
        )}

        {/* Main Content */}
       <main className="flex-1 p-4 overflow-auto bg-gray-100 dark:bg-gray-800 text-black dark:text-white min-h-[calc(100vh-64px-48px)] md:min-h-0">
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

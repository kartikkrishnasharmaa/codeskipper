import Navbar from "../Navbar";
import JavascriptSidebar from "../javascriptsidebar";
import Footer from "../Footer";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Floating Hamburger Button (visible only on mobile/tablet) */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden ml-1 z-50 text-black p-2 rounded-md shadow-lg"
        aria-label="Open sidebar"
      >
        <FaBars className="text-2xl" />
      </button>

      {/* Main Content */}
      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <JavascriptSidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Overlay (only on mobile) */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-auto bg-gray-100 text-black dark:text-white">
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

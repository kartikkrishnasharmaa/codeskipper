import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { useState } from "react";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  return (
   <div className="overflow-x-hidden w-full">
      <Navbar setSidebarOpen={setSidebarOpen} setNavOpen={setNavOpen} />

      <div className="flex flex-1 relative">
        <Sidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          ></div>
        )}

        <main className="flex-1 p-4 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-800 text-black dark:text-white min-h-[calc(100vh-64px-48px)] md:min-h-0">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}

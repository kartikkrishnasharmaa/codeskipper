"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {

  return (
    <footer
      className="relative overflow-hidden bg-white text-gray-800 z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.2)]"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* 🔮 Parallax Background Layer */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-blue-100 via-indigo-50 to-white z-0"
        style={{
          transform: "translateZ(-10px) scale(1.2)",
        }}
      ></div>

      {/* Divider Line */}
      <div className="h-1 bg-gradient-to-br from-blue-900 to-purple-900 relative z-10"></div>

      {/* Main Footer Content */}
      <div className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-20 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* 🧠 Left Section */}
        <div className="flex flex-col items-start text-left">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Image
              src="/Images/logo.png"
              alt="CodeSkipper"
              width={140}
              height={140}
            />
          </Link>
          <p className="text-gray-700 leading-relaxed text-[15px]">
            Learn the essentials of computer programming technologies from Basic
            to Advanced, with real life examples and references — all free!
          </p>
        </div>

        {/* 🧭 Middle Section */}
        <div className="text-left sm:text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 border-l-4 border-indigo-500 pl-2">
            CodeSkipper
          </h2>
          <ul className="space-y-2 text-[15px]">
            {[
              { name: "About Us", link: "/main/about" },
              { name: "Advertise with Us", link: "/main/advertise" },
              { name: "Career", link: "/main/career" },
              { name: "Contact Us", link: "/main/contact" },
              { name: "Support Us", link: "/main/donate" },
              { name: "Privacy Policy", link: "/main/privacy-policy" },
              { name: "Terms & Conditions", link: "/main/terms-and-condition" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.link}
                  className="hover:text-indigo-600 transition duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🕓 Right Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 border-l-4 border-indigo-500 pl-2">
              Stay Connected
            </h2>
            <div className="flex space-x-5 mt-3">
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/thecodeskipper"
                className="p-2 bg-gray-100 rounded-full hover:bg-pink-100 hover:scale-110 transition duration-300"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6 text-pink-500"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </Link>

              {/* YouTube */}
              <Link
                href="https://www.youtube.com/@CodeSkipper44"
                className="p-2 bg-gray-100 rounded-full hover:bg-red-100 hover:scale-110 transition duration-300"
              >
                <svg
                  fill="currentColor"
                  stroke="none"
                  className="w-6 h-6 text-red-600"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 15l5.19-3L10 9v6zm12-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://whatsapp.com/channel/0029Vb7VU8wKwqSMA7l1yL0r"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-full hover:bg-green-100 hover:scale-110 transition duration-300"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-green-600"
                >
                  <path d="M16.67 14.86c-.27-.14-1.59-.79-1.84-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.85 1.06-.16.18-.31.2-.58.07-.27-.14-1.12-.41-2.14-1.31-.79-.7-1.31-1.56-1.47-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.47-.84-2.02-.22-.52-.44-.45-.61-.46-.16-.01-.34-.01-.52-.01s-.47.07-.72.34c-.25.27-.95.92-.95 2.25s.97 2.61 1.1 2.79c.14.18 1.91 2.91 4.63 4.08.65.28 1.16.45 1.56.57.65.21 1.24.18 1.7.11.52-.08 1.59-.65 1.81-1.27.22-.61.22-1.13.15-1.27-.07-.14-.25-.22-.52-.36z" />
                  <path d="M20.52 3.48A11.76 11.76 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.56 4.18 1.62 6.01L0 24l6.19-1.61A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zm-8.52 18.26c-1.99 0-3.93-.54-5.62-1.57l-.4-.24-3.68.96.98-3.59-.26-.37A9.46 9.46 0 012.54 12c0-5.23 4.24-9.46 9.46-9.46 2.53 0 4.91.99 6.71 2.78a9.42 9.42 0 012.75 6.68c0 5.23-4.24 9.46-9.46 9.46z" />
                </svg>
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* 🌈 Bottom Bar */}
      <div className="relative z-10 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 py-4 text-center text-sm text-white shadow-inner">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">CodeSkipper</span>. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;

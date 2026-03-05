"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#ecf0f3] text-gray-700 pt-20">

      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pb-16">

        {/* Logo + Description */}
        <div>
          <Link href="/" className="flex items-center mb-6">
            <Image
              src="/Images/logo.png"
              alt="CodeSkipper"
              width={140}
              height={140}
            />
          </Link>

          <p className="text-gray-600 leading-relaxed text-[15px]">
            Learn computer programming technologies from basic to advanced
            with real-world examples and references — completely free.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-gray-700">
            CodeSkipper
          </h2>

          <ul className="space-y-3 text-[15px]">
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
                  className="hover:text-indigo-600 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-gray-700">
            Stay Connected
          </h2>

          <div className="flex gap-5">

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/thecodeskipper"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ecf0f3]
              shadow-[6px_6px_12px_#c5c9cc,-6px_-6px_12px_#ffffff]
              hover:shadow-[inset_6px_6px_12px_#c5c9cc,inset_-6px_-6px_12px_#ffffff]
              transition"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5 text-pink-500"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </Link>

            {/* YouTube */}
            <Link
              href="https://www.youtube.com/@thecodeskipper"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ecf0f3]
              shadow-[6px_6px_12px_#c5c9cc,-6px_-6px_12px_#ffffff]
              hover:shadow-[inset_6px_6px_12px_#c5c9cc,inset_-6px_-6px_12px_#ffffff]
              transition"
            >
              <svg
                fill="currentColor"
                className="w-5 h-5 text-red-600"
                viewBox="0 0 24 24"
              >
                <path d="M10 15l5.19-3L10 9v6z" />
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://whatsapp.com/channel/0029Vb7VU8wKwqSMA7l1yL0r"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ecf0f3]
              shadow-[6px_6px_12px_#c5c9cc,-6px_-6px_12px_#ffffff]
              hover:shadow-[inset_6px_6px_12px_#c5c9cc,inset_-6px_-6px_12px_#ffffff]
              transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 text-green-600"
                fill="currentColor"
              >
                <path d="M16.04 2.003c-7.72 0-13.99 6.27-13.99 13.99 0 2.47.65 4.89 1.88 7.02L2 30l7.18-1.88a13.9 13.9 0 006.86 1.75h.01c7.72 0 13.99-6.27 13.99-13.99S23.76 2.003 16.04 2.003zm0 25.42c-2.13 0-4.22-.57-6.05-1.64l-.43-.25-4.26 1.11 1.14-4.15-.28-.43a11.42 11.42 0 01-1.75-6.09c0-6.32 5.14-11.46 11.46-11.46 3.06 0 5.94 1.19 8.1 3.35a11.39 11.39 0 013.36 8.11c0 6.32-5.14 11.45-11.45 11.45zm6.28-8.54c-.34-.17-2.01-.99-2.32-1.1-.31-.11-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.32-.2.23-.39.26-.73.09-.34-.17-1.43-.53-2.72-1.7-1-.89-1.67-1.99-1.86-2.33-.2-.34-.02-.52.15-.69.15-.15.34-.39.51-.58.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.05-2.55-.27-.65-.55-.56-.77-.57l-.65-.01c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85 0 1.67 1.23 3.29 1.4 3.52.17.23 2.42 3.7 5.86 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.01-.82 2.29-1.61.28-.79.28-1.46.2-1.61-.09-.14-.31-.23-.65-.4z" />
              </svg>
            </Link>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center py-6 bg-[#ecf0f3]
      shadow-[inset_8px_8px_16px_#c5c9cc,inset_-8px_-8px_16px_#ffffff] text-gray-600 text-sm">

        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-700">CodeSkipper</span>. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;
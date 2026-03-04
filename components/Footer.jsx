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
              href="https://www.youtube.com/@CodeSkipper44"
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
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
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
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-green-600"
              >
                <path d="M16.67 14.86c-.27-.14-1.59-.79-1.84-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.85 1.06-.16.18-.31.2-.58.07-.27-.14-1.12-.41-2.14-1.31-.79-.7-1.31-1.56-1.47-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.47-.84-2.02z"/>
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
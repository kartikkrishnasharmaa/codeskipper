"use client";

import { useRef, useState } from "react";
import SimpleLayout from "@/components/SimpleLayout";
import Head from "next/head";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const form = formRef.current;
    const name = form.from_name.value;
    const email = form.reply_to.value;
    const message = form.message.value;

    // Create email body
    const subject = encodeURIComponent(`New Contact Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Gmail compose link
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=kartik.thedeveloper@gmail.com&su=${subject}&body=${body}`;

    // Open Gmail in new tab
    window.open(gmailURL, "_blank");

    setSending(false);
    form.reset();
    alert("Gmail is opening… Please send the email manually.");
  };

  return (
    <SimpleLayout>
      <Head>
        <title>Contact Us | Code Skipper</title>
        <meta
          name="description"
          content="Reach out to Code Skipper. We are here to answer your questions, provide support, and assist you with your inquiries."
        />
      </Head>

      <main className="flex w-full min-h-screen justify-center items-center bg-gray-50 py-12">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-xl rounded-lg p-8 w-full max-w-2xl mx-4"
        >
          <header className="text-center mb-6">
            <h1 className="text-3xl font-bold text-blue-700 mb-2">Contact Us</h1>
            <p className="text-gray-600">
              We would love to hear from you. Please fill out the form below to get in touch with us.
            </p>
          </header>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="flex-1 px-4 py-2 text-black border rounded-lg"
                required
              />
              <input
                type="email"
                name="reply_to"
                placeholder="Your Email"
                className="flex-1 px-4 py-2 text-black border rounded-lg"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 text-black border rounded-lg resize-none"
              required
            />

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold mt-4"
            >
              {sending ? "OPENING..." : "SEND MESSAGE"}
            </motion.button>
          </form>

          {/* Contact Info */}
          <section className="text-center mt-8 text-gray-700">
            <p>
              Email:{" "}
              <a
                className="text-blue-700 underline"
                href="mailto:kartik.thedeveloper@gmail.com"
              >
                kartik.thedeveloper@gmail.com
              </a>
            </p>
            <p>Location: India 🇮🇳</p>
          </section>
        </motion.section>
      </main>
    </SimpleLayout>
  );
};

export default Contact;

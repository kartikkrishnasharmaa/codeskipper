import { useState } from "react";
import CourseLayout from "@/components/layouts/JavascriptLayout";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
const Home = () => {
  return (
    <CourseLayout>
      <Head>
        <title>What is JavaScript? Complete Beginner's Guide 2024 | Code Skipper</title>
        <meta
          name="description"
          content="Learn what JavaScript really is - from basic definitions to real-world applications. Understand why JavaScript powers 98% of modern websites and how to start coding today."
        />
        <meta
          name="keywords"
          content="what is javascript, javascript tutorial, learn javascript, javascript programming, web development, coding for beginners"
        />
        <meta property="og:title" content="What is JavaScript? Complete Beginner's Guide 2024" />
        <meta
          property="og:description"
          content="Master JavaScript fundamentals with our easy-to-understand guide. Perfect for absolute beginners starting their coding journey."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://codeskipper.in/javascript/introduction" />
        <link rel="canonical" href="https://codeskipper.in/javascript/introduction" />
      </Head>

      <section id="content-wrapper">
        <div className="sm:mx-auto sm:mb-2">
          <section className="mt-4">
            {/* Animated Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
                What is JavaScript? Your First Step into Web Magic
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover the language that brings websites to life - making them interactive, dynamic, and absolutely fascinating
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
              
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">The Digital Conversation Starter</h2>
                <p className="text-gray-700 mb-4">
                  Imagine visiting your favorite online store. You click a button, and a shopping cart smoothly slides open. 
                  You type in a search box, and suggestions instantly appear. You fill out a form, and helpful hints guide you. 
                  That seamless, responsive experience? That's JavaScript working behind the scenes.
                </p>
                <p className="text-gray-700">
                  Think of JavaScript as the friendly assistant that takes a static webpage (like a printed brochure) and 
                  transforms it into an engaging, interactive conversation between you and the website.
                </p>
              </motion.div>

              {/* Simple Definition */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">In Simple Terms:</h3>
                <p className="text-gray-700">
                  <strong>JavaScript is the programming language that makes web pages interactive.</strong> While HTML creates 
                  the structure (like building walls and rooms) and CSS handles the decoration (paint and furniture), 
                  JavaScript adds the electricity - lights that turn on, doors that open automatically, and appliances that respond to your touch.
                </p>
              </motion.div>

              {/* Real World Examples */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">JavaScript in Action - See It Everywhere</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">🎯 Interactive Forms</h4>
                    <p className="text-gray-700">When you see instant validation messages while typing your email or password</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">🔄 Dynamic Content</h4>
                    <p className="text-gray-700">News feeds that update without refreshing the entire page</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">🎮 Smooth Animations</h4>
                    <p className="text-gray-700">Buttons that change color when hovered, images that slide in gracefully</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">📱 Mobile Apps</h4>
                    <p className="text-gray-700">Many popular apps built using JavaScript frameworks</p>
                  </div>
                </div>
              </motion.div>

              {/* First Code Example */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Your First Taste of JavaScript Magic</h2>
                <p className="text-gray-700 mb-4">
                  Let's create a simple example that shows JavaScript's power. We'll make a button that changes text when clicked:
                </p>
                
                <div className="bg-gray-800 text-white p-6 rounded-lg mb-4">
                  <pre className="overflow-x-auto">
                    <code>{`<!-- HTML Structure -->
<button id="magicButton">Click for Surprise!</button>
<p id="message">Waiting for your click...</p>

<!-- JavaScript Magic -->
<script>
  document.getElementById('magicButton').addEventListener('click', function() {
    document.getElementById('message').textContent = '🎉 Wow! You just used JavaScript!';
    this.textContent = 'Clicked!';
  });
</script>`}</code>
                  </pre>
                </div>

                {/* Live Demo */}
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg text-center">
                  <h4 className="font-semibold mb-4">Try It Yourself:</h4>
                  <button 
                    id="demoButton"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300 mb-4"
                    onClick={() => {
                      document.getElementById('demoMessage').textContent = '🎉 Wow! You just used JavaScript!';
                      document.getElementById('demoButton').textContent = 'Clicked!';
                    }}
                  >
                    Click for Surprise!
                  </button>
                  <p id="demoMessage" className="text-gray-700">Waiting for your click...</p>
                </div>
              </motion.div>

              {/* Why Learn JavaScript */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Why JavaScript is Your Golden Ticket</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700"><strong>Runs Everywhere:</strong> Works on all browsers without any special installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700"><strong>High Demand:</strong> Over 97% of websites use JavaScript - endless job opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700"><strong>Beginner-Friendly:</strong> Easy to start, with instant visible results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700"><strong>Versatile:</strong> Build websites, mobile apps, desktop apps, and even games</span>
                  </li>
                </ul>
              </motion.div>

              {/* Common Misconceptions */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Clearing Up Common Confusions</h2>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded">
                  <p className="text-gray-700">
                    <strong>JavaScript ≠ Java:</strong> Despite the similar name, they're completely different languages. 
                    It's like comparing a car to a carpet - totally unrelated!
                  </p>
                </div>
                <p className="text-gray-700">
                  JavaScript was created in just 10 days back in 1995 and has evolved into the most widely-used programming 
                  language in the world. It's not just for small website tricks anymore - it powers complex applications 
                  used by billions of people daily.
                </p>
              </motion.div>

              {/* Next Steps */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold mb-4">Ready to Continue Your Journey?</h2>
                <p className="mb-4 opacity-90">
                  Now that you understand what JavaScript is, let's dive deeper into how it works and start writing your own code.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href="/tutorial/javascript/history-and-evolution">
                  <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Next: JavaScript History →
                  </button>
                  </Link>
                  {/* <button className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                    Practice Exercises
                  </button> */}
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </section>

      <style jsx>{`
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        code {
          font-family: 'Courier New', monospace;
          line-height: 1.4;
        }
      `}</style>
    </CourseLayout>
  );
};

export default Home;
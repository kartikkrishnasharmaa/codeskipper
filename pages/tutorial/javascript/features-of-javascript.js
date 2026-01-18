import { useState } from "react";
import CourseLayout from "@/components/layouts/JavascriptLayout";
import Head from "next/head";
import { motion } from "framer-motion";

const FeaturesAndAdvantages = () => {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <CourseLayout>
      <Head>
        <title>JavaScript Features & Advantages: Why Learn JS in 2024 | Code Skipper</title>
        <meta
          name="description"
          content="Discover 25+ powerful JavaScript features and advantages that make it the world's most popular programming language. Perfect for beginners deciding which language to learn."
        />
        <meta
          name="keywords"
          content="javascript features, advantages of javascript, why learn javascript, javascript benefits, programming language comparison"
        />
        <meta property="og:title" content="JavaScript Features & Advantages: Complete 2024 Guide" />
        <meta
          property="og:description"
          content="Learn why JavaScript dominates web development with its unique features and career advantages. Make informed decisions about your coding journey."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://codeskipper.in/javascript/features-advantages" />
        <link rel="canonical" href="https://codeskipper.in/javascript/features-advantages" />
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
                Why JavaScript? The Superpowers That Made It #1
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover the secret sauce that turned a 10-day project into the world's most loved programming language
              </p>
            </motion.div>

            {/* Tab Navigation */}
            <div className="max-w-6xl mx-auto mb-8">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("features")}
                  className={`py-4 px-6 font-semibold border-b-2 transition-all ${
                    activeTab === "features"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  🚀 Technical Features
                </button>
                <button
                  onClick={() => setActiveTab("advantages")}
                  className={`py-4 px-6 font-semibold border-b-2 transition-all ${
                    activeTab === "advantages"
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  💼 Practical Advantages
                </button>
                <button
                  onClick={() => setActiveTab("comparison")}
                  className={`py-4 px-6 font-semibold border-b-2 transition-all ${
                    activeTab === "comparison"
                      ? "border-purple-500 text-purple-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  ⚖️ Language Comparison
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
              
              {/* Features Tab */}
              {activeTab === "features" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                    JavaScript's Technical Superpowers
                  </h2>

                  {/* Interpreted Language */}
                  <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-800 mb-3">🧠 Interpreted & Just-In-Time Compiled</h3>
                    <p className="text-gray-700 mb-4">
                      JavaScript doesn't need complicated compilation steps. You write code, refresh your browser, 
                      and see results instantly. It's like having a conversation with your computer where it 
                      understands you immediately without needing a translator to prepare a formal speech first.
                    </p>
                    <div className="bg-white p-4 rounded border">
                      <p className="text-sm text-gray-600 mb-2"><strong>Real-world analogy:</strong></p>
                      <p className="text-gray-700">
                        <strong>Compiled languages (C++, Java)</strong> are like baking a cake - mix ingredients, 
                        bake for 30 minutes, then taste.<br/>
                        <strong>JavaScript</strong> is like making a sandwich - put ingredients together and 
                        enjoy immediately!
                      </p>
                    </div>
                  </div>

                  {/* Dynamic Typing */}
                  <div className="mb-8 p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-800 mb-3">🎭 Dynamic Typing - The Flexible Friend</h3>
                    <p className="text-gray-700 mb-4">
                      JavaScript doesn't force you to declare variable types. A variable can be a number one moment 
                      and a string the next. This flexibility lets you prototype ideas rapidly without getting 
                      bogged down in type declarations.
                    </p>
                    <div className="bg-gray-800 text-white p-4 rounded mb-4">
                      <pre className="overflow-x-auto">
                        <code>{`// No type declarations needed!
let myVariable = 42;        // It's a number
myVariable = "Hello!";      // Now it's a string  
myVariable = true;          // Now it's a boolean
myVariable = {name: "John"}; // Now it's an object

// Try this in Java or C# - it would scream in protest!`}</code>
                      </pre>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
                      <p className="text-sm text-yellow-800">
                        <strong>Note:</strong> This flexibility is great for beginners but can cause bugs in large projects. 
                        That's why TypeScript (which adds types to JavaScript) became popular for big applications.
                      </p>
                    </div>
                  </div>

                  {/* First-Class Functions */}
                  <div className="mb-8 p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-800 mb-3">🎯 First-Class Functions - Functions as Superheroes</h3>
                    <p className="text-gray-700 mb-4">
                      In JavaScript, functions are treated like any other variable. You can pass them as arguments, 
                      return them from other functions, and store them in objects or arrays. This enables powerful 
                      programming patterns that are much harder in other languages.
                    </p>
                    <div className="bg-gray-800 text-white p-4 rounded">
                      <pre className="overflow-x-auto">
                        <code>{`// Functions can be assigned to variables
const greet = function(name) {
  return \`Hello, \${name}!\`;
};

// Functions can be passed as arguments
function processUser(name, callback) {
  return callback(name);
}

// Functions can return other functions
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10 - Magic!`}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Prototype-based OOP */}
                  <div className="mb-8 p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <h3 className="text-xl font-bold text-red-800 mb-3">🔗 Prototype-based Inheritance - The Family Tree</h3>
                    <p className="text-gray-700 mb-4">
                      Instead of classical inheritance (like Java's classes), JavaScript uses prototypes. 
                      Objects can inherit properties and methods from other objects. Think of it as family traits 
                      - you inherit characteristics from your parents without being an exact copy.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-gray-600 mb-2">Traditional Inheritance (Java/C#):</h4>
                        <p className="text-sm text-gray-600">Like building with blueprints - rigid but predictable</p>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-gray-600 mb-2">JavaScript Prototypes:</h4>
                        <p className="text-sm text-gray-600">Like evolution - flexible and adaptable to change</p>
                      </div>
                    </div>
                  </div>

                  {/* Event-Driven */}
                  <div className="mb-8 p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
                    <h3 className="text-xl font-bold text-indigo-800 mb-3">⚡ Event-Driven Architecture - The Mind Reader</h3>
                    <p className="text-gray-700 mb-4">
                      JavaScript excels at handling user interactions. Instead of constantly checking "did something happen?", 
                      it waits patiently and responds immediately when events occur. This makes it perfect for creating 
                      responsive user interfaces.
                    </p>
                    <div className="bg-white p-4 rounded border text-center">
                      <button 
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300 mb-2"
                        onClick={() => alert('See? JavaScript responded instantly to your click!')}
                      >
                        Click me to see event handling!
                      </button>
                      <p className="text-sm text-gray-600">This button uses JavaScript's event-driven nature</p>
                    </div>
                  </div>

                  {/* Single-Threaded with Async */}
                  <div className="p-6 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                    <h3 className="text-xl font-bold text-teal-800 mb-3">🎪 Single-Threaded but Non-Blocking - The Juggler</h3>
                    <p className="text-gray-700 mb-4">
                      JavaScript is like a master juggler with one brain but amazing coordination. It can handle 
                      multiple tasks simultaneously without getting confused, thanks to its event loop and 
                      asynchronous programming model.
                    </p>
                    <div className="bg-gray-100 p-4 rounded">
                      <p className="text-gray-700">
                        <strong>Example:</strong> While waiting for data from a server (which takes time), 
                        JavaScript doesn't freeze. It continues handling button clicks, animations, and other 
                        user interactions smoothly.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Advantages Tab */}
              {activeTab === "advantages" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
                    Practical Advantages That Will Supercharge Your Career
                  </h2>

                  {/* Universal Availability */}
                  <div className="mb-8 p-6 bg-green-50 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-3">🌍 Runs Everywhere - The Digital Passport</h3>
                    <p className="text-gray-700 mb-4">
                      JavaScript comes built into every modern web browser. No installation, no setup, no fees. 
                      Your code runs on Windows, Mac, Linux, Android, iOS - anywhere there's a browser.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="bg-white p-3 rounded shadow-sm">
                        <div className="text-2xl mb-1">💻</div>
                        <div className="text-sm font-semibold">Desktops</div>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <div className="text-2xl mb-1">📱</div>
                        <div className="text-sm font-semibold">Mobile</div>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <div className="text-2xl mb-1">🖥️</div>
                        <div className="text-sm font-semibold">Servers</div>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <div className="text-2xl mb-1">📟</div>
                        <div className="text-sm font-semibold">IoT Devices</div>
                      </div>
                    </div>
                  </div>

                  {/* Job Market */}
                  <div className="mb-8 p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-3">💼 Insane Job Demand - The Golden Ticket</h3>
                    <p className="text-gray-700 mb-4">
                      JavaScript developers are among the most sought-after professionals in tech. The demand 
                      consistently outpaces supply, creating incredible opportunities worldwide.
                    </p>
                    <div className="bg-white p-6 rounded-lg border-2 border-blue-200 mb-4">
                      <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-3xl font-bold text-green-600">#1</div>
                          <div className="text-sm text-gray-600">Most Popular Language</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-blue-600">300K+</div>
                          <div className="text-sm text-gray-600">Job Openings (US)</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-purple-600">$85K-$150K</div>
                          <div className="text-sm text-gray-600">Average Salary</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      <strong>Bottom line:</strong> Learning JavaScript significantly increases your employability 
                      and earning potential in the tech industry.
                    </p>
                  </div>

                  {/* Ecosystem */}
                  <div className="mb-8 p-6 bg-purple-50 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-3">🏗️ Massive Ecosystem - The Digital LEGO Store</h3>
                    <p className="text-gray-700 mb-4">
                      npm (Node Package Manager) is the largest software registry in the world, with over 2 million 
                      reusable code packages. Whatever functionality you need, someone has probably already built it.
                    </p>
                    <div className="bg-gray-800 text-white p-4 rounded mb-4">
                      <pre className="overflow-x-auto text-sm">
                        <code>{`// Need to add functionality? Just install a package!
npm install react          // For building user interfaces
npm install express        // For creating web servers  
npm install lodash         // For utility functions
npm install axios          // For making HTTP requests
npm install three.js       // For 3D graphics
// And 2,000,000+ more options...`}</code>
                      </pre>
                    </div>
                    <p className="text-gray-700">
                      This means you can build complex applications by combining existing building blocks, 
                      dramatically reducing development time.
                    </p>
                  </div>

                  {/* Gentle Learning Curve */}
                  <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-800 mb-3">🎓 Gentle Learning Curve - The Friendly Teacher</h3>
                    <p className="text-gray-700 mb-4">
                      JavaScript is remarkably beginner-friendly. You can start with simple scripts and gradually 
                      progress to complex applications. The instant feedback in browsers makes learning engaging 
                      and rewarding.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-green-600 mb-2">For Beginners:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Simple syntax similar to English</li>
                          <li>• No complex setup required</li>
                          <li>• Immediate visual results</li>
                          <li>• Huge learning community</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-blue-600 mb-2">For Experts:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Advanced functional programming</li>
                          <li>• Complex architectural patterns</li>
                          <li>• Performance optimization</li>
                          <li>• Full-stack capabilities</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Versatility */}
                  <div className="p-6 bg-red-50 rounded-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-3">🔄 Incredible Versatility - The Swiss Army Knife</h3>
                    <p className="text-gray-700 mb-4">
                      JavaScript is no longer just for web pages. It has expanded to almost every area of software 
                      development, making it one of the most versatile languages ever created.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white p-4 rounded text-center">
                        <div className="text-2xl mb-2">🌐</div>
                        <div className="font-semibold">Web Frontend</div>
                        <div className="text-xs text-gray-500 mt-1">React, Vue, Angular</div>
                      </div>
                      <div className="bg-white p-4 rounded text-center">
                        <div className="text-2xl mb-2">🖥️</div>
                        <div className="font-semibold">Web Backend</div>
                        <div className="text-xs text-gray-500 mt-1">Node.js, Express</div>
                      </div>
                      <div className="bg-white p-4 rounded text-center">
                        <div className="text-2xl mb-2">📱</div>
                        <div className="font-semibold">Mobile Apps</div>
                        <div className="text-xs text-gray-500 mt-1">React Native</div>
                      </div>
                      <div className="bg-white p-4 rounded text-center">
                        <div className="text-2xl mb-2">💻</div>
                        <div className="font-semibold">Desktop Apps</div>
                        <div className="text-xs text-gray-500 mt-1">Electron</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Comparison Tab */}
              {activeTab === "comparison" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
                    JavaScript vs Other Languages: Finding Your Perfect Match
                  </h2>

                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <p className="text-gray-700 mb-6 text-center">
                      Every language has its strengths. Here's how JavaScript compares to other popular choices:
                    </p>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white rounded-lg shadow-sm">
                        <thead>
                          <tr className="bg-gray-700">
                            <th className="p-4 text-left">Language</th>
                            <th className="p-4 text-left">Best For</th>
                            <th className="p-4 text-left">Learning Curve</th>
                            <th className="p-4 text-left">Job Market</th>
                            <th className="p-4 text-left">JavaScript's Edge</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-800">
                          <tr className="border-b">
                            <td className="p-4 font-semibold">Python</td>
                            <td className="p-4">Data Science, AI, Backend</td>
                            <td className="p-4">🟢 Easy</td>
                            <td className="p-4">🟢 Excellent</td>
                            <td className="p-4">Frontend dominance, faster execution</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 font-semibold">Java</td>
                            <td className="p-4">Enterprise, Android, Big Systems</td>
                            <td className="p-4">🔴 Steep</td>
                            <td className="p-4">🟢 Strong</td>
                            <td className="p-4">Faster development, web focus</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 font-semibold">C#</td>
                            <td className="p-4">Windows Apps, Games</td>
                            <td className="p-4">🟡 Medium</td>
                            <td className="p-4">🟡 Good</td>
                            <td className="p-4">Platform independence, web focus</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">JavaScript</td>
                            <td className="p-4">Web, Full-Stack, Cross-platform</td>
                            <td className="p-4">🟢 Easy</td>
                            <td className="p-4">🟢 Exceptional</td>
                            <td className="p-4">Universal, massive ecosystem</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* When to Choose JavaScript */}
                  <div className="mb-8 p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">🎯 When JavaScript is Your Best Bet</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-yellow-300">Choose JavaScript when:</h4>
                        <ul className="space-y-2">
                          <li>✅ Building interactive websites</li>
                          <li>✅ Creating web applications</li>
                          <li>✅ Developing cross-platform apps</li>
                          <li>✅ Starting your programming journey</li>
                          <li>✅ Wanting maximum job opportunities</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-yellow-300">Consider alternatives when:</h4>
                        <ul className="space-y-2">
                          <li>❌ Building system-level software</li>
                          <li>❌ High-performance scientific computing</li>
                          <li>❌ Native mobile app development</li>
                          <li>❌ Memory-constrained environments</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* The Verdict */}
                  <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-200">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">🏆 The Final Verdict</h3>
                    <p className="text-gray-700 mb-4 text-lg">
                      <strong>JavaScript is the undisputed king of web development</strong> and an excellent 
                      choice for beginners. Its versatility, job opportunities, and gentle learning curve make 
                      it one of the best investments for your programming career.
                    </p>
                    <p className="text-gray-600">
                      Most professional developers know multiple languages, but JavaScript is increasingly 
                      becoming the essential foundation.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-12 p-8 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg"
              >
                <h2 className="text-2xl font-bold mb-4">Ready to Harness These Superpowers?</h2>
                <p className="mb-6 opacity-90 text-lg">
                  You've seen why JavaScript is special. Now it's time to start your journey and 
                  experience these advantages firsthand!
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg">
                    Start Learning: JavaScript Basics →
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition">
                    Practice Exercises
                  </button>
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
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th, td {
          border: 1px solid #e5e7eb;
        }
      `}</style>
    </CourseLayout>
  );
};

export default FeaturesAndAdvantages;
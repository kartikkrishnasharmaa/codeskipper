import { useState } from "react";
import CourseLayout from "@/components/layouts/JavascriptLayout";
import Head from "next/head";
import { motion } from "framer-motion";

const SettingUpEnvironment = () => {
  const [activeTab, setActiveTab] = useState("browser");
  const [currentStep, setCurrentStep] = useState(1);
  const [showTerminalDemo, setShowTerminalDemo] = useState(false);

  return (
    <CourseLayout>
      <Head>
        <title>JavaScript Environment Setup: VS Code, Node.js, Browser 2024 | Code Skipper</title>
        <meta
          name="description"
          content="Step-by-step guide to set up perfect JavaScript development environment. Install VS Code, Node.js, browser tools and create your first project with best practices."
        />
        <meta
          name="keywords"
          content="javascript setup, vs code setup, node.js installation, javascript development environment, web development setup"
        />
        <meta property="og:title" content="JavaScript Environment Setup: Complete 2024 Guide" />
        <meta
          property="og:description"
          content="Learn to set up professional JavaScript development environment with VS Code, Node.js, and modern tools. Perfect for beginners starting coding journey."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://codeskipper.in/javascript/setup-environment" />
        <link rel="canonical" href="https://codeskipper.in/javascript/setup-environment" />
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
                Your JavaScript Workshop: Setting Up the Perfect Development Environment
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Transform your computer into a JavaScript powerhouse with professional tools that make coding joyful
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
              
              {/* Quick Start Overview */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                  🛠️ Your Development Toolkit: What You'll Need
                </h2>
                
                <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">The Three Musketeers of JavaScript Development</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                      <div className="text-4xl mb-4">🌐</div>
                      <h4 className="text-xl font-bold mb-2">Browser</h4>
                      <p className="text-sm opacity-90">Where your code comes to life</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                      <div className="text-4xl mb-4">⚡</div>
                      <h4 className="text-xl font-bold mb-2">Node.js</h4>
                      <p className="text-sm opacity-90">JavaScript outside the browser</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                      <div className="text-4xl mb-4">💻</div>
                      <h4 className="text-xl font-bold mb-2">VS Code</h4>
                      <p className="text-sm opacity-90">Your coding superpower</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg">
                  Think of setting up your development environment like preparing a chef's kitchen. You need the right 
                  tools, organized workspace, and quality ingredients. Let's build your perfect coding kitchen!
                </p>
              </motion.div>

              {/* Tab Navigation */}
              <div className="max-w-6xl mx-auto mb-8">
                <div className="flex flex-wrap border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab("browser")}
                    className={`py-4 px-6 font-semibold border-b-2 transition-all ${
                      activeTab === "browser"
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    🌐 Browser Setup
                  </button>
                  <button
                    onClick={() => setActiveTab("nodejs")}
                    className={`py-4 px-6 font-semibold border-b-2 transition-all ${
                      activeTab === "nodejs"
                        ? "border-green-500 text-green-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    ⚡ Node.js Setup
                  </button>
                  <button
                    onClick={() => setActiveTab("vscode")}
                    className={`py-4 px-6 font-semibold border-b-2 transition-all ${
                      activeTab === "vscode"
                        ? "border-purple-500 text-purple-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    💻 VS Code Setup
                  </button>
                  <button
                    onClick={() => setActiveTab("firstproject")}
                    className={`py-4 px-6 font-semibold border-b-2 transition-all ${
                      activeTab === "firstproject"
                        ? "border-orange-500 text-orange-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    🚀 First Project
                  </button>
                </div>
              </div>

              {/* Browser Setup Tab */}
              {activeTab === "browser" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                    🌐 Browser Setup: Your JavaScript Playground
                  </h2>

                  <div className="mb-8 p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Choosing Your Browser</h3>
                    <p className="text-gray-700 mb-6">
                      While JavaScript runs in all modern browsers, developers prefer ones with excellent 
                      developer tools. Here's the lineup:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg border-2 border-red-200 text-center">
                        <div className="text-4xl mb-4">🔴</div>
                        <h4 className="text-xl font-bold text-red-700 mb-3">Google Chrome</h4>
                        <p className="text-gray-600 mb-4 text-sm">Most popular among developers</p>
                        <ul className="text-left text-sm text-gray-600 space-y-2">
                          <li>• Excellent DevTools</li>
                          <li>• Fast updates</li>
                          <li>• Great performance</li>
                        </ul>
                        <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                          Download Chrome
                        </a>
                      </div>

                      <div className="bg-white p-6 rounded-lg border-2 border-orange-200 text-center">
                        <div className="text-4xl mb-4">🟠</div>
                        <h4 className="text-xl font-bold text-orange-700 mb-3">Mozilla Firefox</h4>
                        <p className="text-gray-600 mb-4 text-sm">Privacy-focused with great tools</p>
                        <ul className="text-left text-sm text-gray-600 space-y-2">
                          <li>• Amazing CSS inspector</li>
                          <li>• Privacy first</li>
                          <li>• Open source</li>
                        </ul>
                        <a href="https://www.mozilla.org/firefox/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                          Download Firefox
                        </a>
                      </div>

                      <div className="bg-white p-6 rounded-lg border-2 border-blue-200 text-center">
                        <div className="text-4xl mb-4">🔵</div>
                        <h4 className="text-xl font-bold text-blue-700 mb-3">Microsoft Edge</h4>
                        <p className="text-gray-600 mb-4 text-sm">Built on Chromium, Windows integrated</p>
                        <ul className="text-left text-sm text-gray-600 space-y-2">
                          <li>• Chrome compatibility</li>
                          <li>• Windows integration</li>
                          <li>• Good performance</li>
                        </ul>
                        <a href="https://www.microsoft.com/edge" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                          Download Edge
                        </a>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-6">
                      <p className="text-yellow-800">
                        <strong>💡 Pro Tip:</strong> Install at least two browsers. Test your websites in both 
                        to ensure they work for all your users!
                      </p>
                    </div>
                  </div>

                  {/* Browser DevTools */}
                  <div className="p-6 bg-green-50 rounded-lg">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">🛠️ Mastering Browser Developer Tools</h3>
                    <p className="text-gray-700 mb-6">
                      Developer Tools (DevTools) are your superpower for debugging and understanding JavaScript. 
                      Here's how to access them:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-green-700 mb-3">Keyboard Shortcuts:</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li><code>F12</code> - Open DevTools (Windows)</li>
                          <li><code>Cmd + Option + I</code> (Mac)</li>
                          <li><code>Ctrl + Shift + I</code> (Windows/Linux)</li>
                          <li><code>Right-click → Inspect</code></li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-green-700 mb-3">Essential Tabs:</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li><strong>Console:</strong> Run JavaScript, see errors</li>
                          <li><strong>Elements:</strong> Inspect HTML/CSS</li>
                          <li><strong>Sources:</strong> Debug JavaScript</li>
                          <li><strong>Network:</strong> Monitor requests</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-800 text-white p-4 rounded mb-4">
                      <p className="text-center mb-2">Try this right now in your browser:</p>
                      <pre className="bg-gray-900 p-4 rounded text-yellow-300 text-sm overflow-x-auto">
                        {`// Press F12, go to Console tab, and type:
console.log("Hello, JavaScript World!");
2 + 2
document.title = "I'm learning JavaScript!";`}
                      </pre>
                    </div>

                    <div className="text-center">
                      <button 
                        onClick={() => window.open('https://developer.chrome.com/docs/devtools/', '_blank')}
                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold"
                      >
                        🎓 Learn More About DevTools
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Node.js Setup Tab */}
              {activeTab === "nodejs" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
                    ⚡ Node.js Setup: JavaScript Beyond the Browser
                  </h2>

                  <div className="mb-8 p-6 bg-green-50 rounded-lg">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">What is Node.js?</h3>
                    <p className="text-gray-700 mb-6">
                      Node.js lets you run JavaScript on your computer (server-side), not just in browsers. 
                      It's like giving JavaScript a passport to travel anywhere! With Node.js, you can build:
                    </p>

                    <div className="grid md:grid-cols-4 gap-4 mb-8 text-center">
                      <div className="bg-white p-4 rounded border">
                        <div className="text-2xl mb-2">🖥️</div>
                        <div className="font-semibold">Web Servers</div>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <div className="text-2xl mb-2">🛠️</div>
                        <div className="font-semibold">Tools & Scripts</div>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <div className="text-2xl mb-2">📱</div>
                        <div className="font-semibold">APIs</div>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <div className="text-2xl mb-2">⚡</div>
                        <div className="font-semibold">Desktop Apps</div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border-2 border-green-200 mb-6">
                      <h4 className="text-xl font-bold text-green-700 mb-4 text-center">📥 Installation Guide</h4>
                      
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">Download Node.js</h5>
                            <p className="text-gray-600 mb-2">Visit the official Node.js website:</p>
                            <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-semibold">
                              https://nodejs.org
                            </a>
                            <p className="text-sm text-gray-500 mt-1">
                              <strong>Recommendation:</strong> Download the <strong>LTS version</strong> (Long Term Support) - it's more stable
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">Run the Installer</h5>
                            <p className="text-gray-600 mb-2">Follow the installation wizard. Use default settings - they're perfect for beginners.</p>
                            <div className="bg-gray-100 p-3 rounded text-sm">
                              <p className="text-gray-600"><strong>💡 What gets installed:</strong></p>
                              <ul className="list-disc list-inside text-gray-600 space-y-1 mt-1">
                                <li>Node.js runtime</li>
                                <li>npm (Node Package Manager)</li>
                                <li>Core libraries</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">Verify Installation</h5>
                            <p className="text-gray-600 mb-2">Open your terminal/command prompt and type:</p>
                            <div className="bg-gray-800 text-white p-4 rounded mb-2">
                              <pre className="overflow-x-auto text-green-300">
                                node --version
                                {"\n"}
                                npm --version
                              </pre>
                            </div>
                            <p className="text-sm text-gray-500">You should see version numbers - congratulations, Node.js is installed! 🎉</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                      <h4 className="font-semibold text-blue-800 mb-2">🎯 What's npm?</h4>
                      <p className="text-gray-700">
                        <strong>npm (Node Package Manager)</strong> comes with Node.js and gives you access to over 2 million 
                        reusable code packages. It's like having a giant library of building blocks for your projects!
                      </p>
                    </div>
                  </div>

                  {/* Terminal Basics */}
                  <div className="p-6 bg-purple-50 rounded-lg">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">💻 Terminal Basics: Your New Best Friend</h3>
                    <p className="text-gray-700 mb-6">
                      The terminal (command line) might seem scary, but it's incredibly powerful. Here's a quick guide:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-purple-700 mb-3">Opening Terminal:</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li><strong>Windows:</strong> Press <code>Win + R</code>, type <code>cmd</code></li>
                          <li><strong>Mac:</strong> Press <code>Cmd + Space</code>, type "Terminal"</li>
                          <li><strong>Linux:</strong> <code>Ctrl + Alt + T</code></li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-purple-700 mb-3">Essential Commands:</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li><code>cd folder_name</code> - Change directory</li>
                          <li><code>ls</code> (Mac/Linux) or <code>dir</code> (Windows) - List files</li>
                          <li><code>mkdir project</code> - Create new folder</li>
                          <li><code>node file.js</code> - Run JavaScript file</li>
                        </ul>
                      </div>
                    </div>

                    <div className="text-center">
                      <button 
                        onClick={() => setShowTerminalDemo(!showTerminalDemo)}
                        className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition font-semibold mb-4"
                      >
                        {showTerminalDemo ? "Hide" : "Show"} Terminal Demo
                      </button>

                      {showTerminalDemo && (
                        <div className="bg-gray-900 text-white p-6 rounded-lg border-2 border-purple-500">
                          <div className="flex items-center mb-4">
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <div className="text-gray-400 text-sm">terminal</div>
                          </div>
                          <pre className="text-green-300 overflow-x-auto">
                            {`# Navigate to your projects folder
$ cd Desktop
$ mkdir my-javascript-projects
$ cd my-javascript-projects

# Create your first JavaScript file
$ echo "console.log('Hello from Node.js!');" > app.js

# Run it with Node.js
$ node app.js
Hello from Node.js!

# 🎉 Congratulations! You just ran JavaScript outside the browser!`}
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* VS Code Setup Tab */}
              {activeTab === "vscode" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
                    💻 VS Code: Your Coding Superpower
                  </h2>

                  <div className="mb-8 p-6 bg-purple-50 rounded-lg">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">Why VS Code is Every Developer's Favorite</h3>
                    <p className="text-gray-700 mb-6">
                      Visual Studio Code (VS Code) is like a Swiss Army knife for coding - free, powerful, 
                      and customizable. It's used by millions of developers worldwide because it just works.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg border text-center">
                        <div className="text-4xl mb-4">🎯</div>
                        <h4 className="text-xl font-bold text-purple-700 mb-3">Intelligent Code Completion</h4>
                        <p className="text-gray-600 text-sm">VS Code suggests code as you type, catching errors before they happen</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg border text-center">
                        <div className="text-4xl mb-4">🔧</div>
                        <h4 className="text-xl font-bold text-purple-700 mb-3">Built-in Terminal</h4>
                        <p className="text-gray-600 text-sm">Run commands without leaving your editor</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg border text-center">
                        <div className="text-4xl mb-4">🎨</div>
                        <h4 className="text-xl font-bold text-purple-700 mb-3">Thousands of Extensions</h4>
                        <p className="text-gray-600 text-sm">Customize everything to match your workflow</p>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border-2 border-purple-200 mb-6">
                      <h4 className="text-xl font-bold text-purple-700 mb-4 text-center">🚀 Installation & Setup</h4>
                      
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">Download VS Code</h5>
                            <p className="text-gray-600 mb-2">Get the free download from:</p>
                            <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 font-semibold">
                              https://code.visualstudio.com
                            </a>
                            <p className="text-sm text-gray-500 mt-1">Choose the version for your operating system</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">Run the Installer</h5>
                            <p className="text-gray-600 mb-2">Use the default settings, but make sure to check these options:</p>
                            <div className="bg-gray-100 p-3 rounded text-sm">
                              <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li><strong>"Add to PATH"</strong> - Lets you open VS Code from terminal</li>
                                <li><strong>"Register as supported file types"</strong> - Opens files in VS Code by default</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">First Launch</h5>
                            <p className="text-gray-600">When VS Code opens, you'll see a clean, professional interface ready for coding!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Essential Extensions */}
                  <div className="p-6 bg-indigo-50 rounded-lg">
                    <h3 className="text-2xl font-bold text-indigo-800 mb-4">🔌 Must-Have Extensions for JavaScript</h3>
                    <p className="text-gray-700 mb-6">
                      Extensions turn VS Code from great to incredible. Here are the essential ones for JavaScript development:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-indigo-700 mb-3">🎯 Core JavaScript Extensions</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="font-medium text-gray-600">ESLint</span>
                            <button className="bg-indigo-500 text-white px-3 py-1 rounded text-sm hover:bg-indigo-600">Install</button>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="font-medium text-gray-600">Prettier</span>
                            <button className="bg-indigo-500 text-white px-3 py-1 rounded text-sm hover:bg-indigo-600">Install</button>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="font-medium text-gray-600">JavaScript (ES6) code snippets</span>
                            <button className="bg-indigo-500 text-white px-3 py-1 rounded text-sm hover:bg-indigo-600">Install</button>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-indigo-700 mb-3">✨ Quality of Life Extensions</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="font-medium text-gray-600">Live Server</span>
                            <button className="bg-indigo-500 text-white px-3 py-1 rounded text-sm hover:bg-indigo-600">Install</button>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="font-medium text-gray-600">Auto Rename Tag</span>
                            <button className="bg-indigo-500 text-white px-3 py-1 rounded text-sm hover:bg-indigo-600">Install</button>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="font-medium text-gray-600">Bracket Pair Colorizer</span>
                            <button className="bg-indigo-500 text-white px-3 py-1 rounded text-sm hover:bg-indigo-600">Install</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800 text-white p-4 rounded">
                      <h4 className="text-yellow-300 mb-3">How to Install Extensions:</h4>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="text-center">
                          <div className="bg-gray-700 p-2 rounded mb-1">1</div>
                          <div>Click Extensions icon</div>
                        </div>
                        <div className="text-gray-400">→</div>
                        <div className="text-center">
                          <div className="bg-gray-700 p-2 rounded mb-1">2</div>
                          <div>Search extension name</div>
                        </div>
                        <div className="text-gray-400">→</div>
                        <div className="text-center">
                          <div className="bg-gray-700 p-2 rounded mb-1">3</div>
                          <div>Click Install</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* First Project Tab */}
              {activeTab === "firstproject" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-orange-200 pb-2">
                    🚀 Creating Your First JavaScript Project
                  </h2>

                  <div className="mb-8 p-6 bg-orange-50 rounded-lg">
                    <h3 className="text-2xl font-bold text-orange-800 mb-4">Let's Build Something Real!</h3>
                    <p className="text-gray-700 mb-6">
                      Now that you have all the tools, let's create your first proper JavaScript project. 
                      We'll build a simple interactive webpage that responds to user actions.
                    </p>

                    {/* Step-by-Step Guide */}
                    <div className="bg-white p-6 rounded-lg border-2 border-orange-200">
                      <h4 className="text-xl font-bold text-orange-700 mb-6 text-center">🎯 Step-by-Step Project Setup</h4>
                      
                      <div className="space-y-8">
                        {/* Step 1 */}
                        <div className={`p-4 rounded-lg transition-all ${currentStep >= 1 ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                          <div className="flex items-center mb-4">
                            <div className={`rounded-full w-8 h-8 flex items-center justify-center mr-4 ${
                              currentStep >= 1 ? 'bg-green-500 text-white' : 'bg-gray-300'
                            }`}>1</div>
                            <h5 className={`font-semibold ${currentStep >= 1 ? 'text-green-800' : 'text-gray-500'}`}>
                              Create Project Folder
                            </h5>
                            {currentStep === 1 && (
                              <button 
                                onClick={() => setCurrentStep(2)}
                                className="ml-auto bg-orange-500 text-white px-4 py-1 rounded text-sm hover:bg-orange-600"
                              >
                                Next Step →
                              </button>
                            )}
                          </div>
                          {currentStep >= 1 && (
                            <div className="ml-12">
                              <p className="text-gray-600 mb-3">Create a new folder for your project:</p>
                              <div className="bg-gray-800 text-white p-4 rounded mb-3">
                                <pre className="text-green-300 overflow-x-auto">
                                  {`# Using terminal/command prompt
mkdir my-first-js-project
cd my-first-js-project`}
                                </pre>
                              </div>
                              <p className="text-sm text-gray-500">Or create the folder using your computer's file explorer</p>
                            </div>
                          )}
                        </div>

                        {/* Step 2 */}
                        <div className={`p-4 rounded-lg transition-all ${currentStep >= 2 ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                          <div className="flex items-center mb-4">
                            <div className={`rounded-full w-8 h-8 flex items-center justify-center mr-4 ${
                              currentStep >= 2 ? 'bg-green-500 text-white' : 'bg-gray-300'
                            }`}>2</div>
                            <h5 className={`font-semibold ${currentStep >= 2 ? 'text-green-800' : 'text-gray-500'}`}>
                              Open in VS Code
                            </h5>
                            {currentStep === 2 && (
                              <button 
                                onClick={() => setCurrentStep(3)}
                                className="ml-auto bg-orange-500 text-white px-4 py-1 rounded text-sm hover:bg-orange-600"
                              >
                                Next Step →
                              </button>
                            )}
                          </div>
                          {currentStep >= 2 && (
                            <div className="ml-12">
                              <p className="text-gray-600 mb-3">Open your project folder in VS Code:</p>
                              <div className="bg-gray-800 text-white p-4 rounded mb-3">
                                <pre className="text-green-300 overflow-x-auto">
                                  {`# From terminal, in your project folder
code .

# Or open VS Code and use File → Open Folder`}
                                </pre>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Step 3 */}
                        <div className={`p-4 rounded-lg transition-all ${currentStep >= 3 ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                          <div className="flex items-center mb-4">
                            <div className={`rounded-full w-8 h-8 flex items-center justify-center mr-4 ${
                              currentStep >= 3 ? 'bg-green-500 text-white' : 'bg-gray-300'
                            }`}>3</div>
                            <h5 className={`font-semibold ${currentStep >= 3 ? 'text-green-800' : 'text-gray-500'}`}>
                              Create HTML File
                            </h5>
                            {currentStep === 3 && (
                              <button 
                                onClick={() => setCurrentStep(4)}
                                className="ml-auto bg-orange-500 text-white px-4 py-1 rounded text-sm hover:bg-orange-600"
                              >
                                Next Step →
                              </button>
                            )}
                          </div>
                          {currentStep >= 3 && (
                            <div className="ml-12">
                              <p className="text-gray-600 mb-3">Create <code>index.html</code> with this content:</p>
                              <div className="bg-gray-800 text-white p-4 rounded mb-3">
                                <pre className="text-yellow-300 overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html>
<head>
    <title>My First JS Project</title>
</head>
<body>
    <h1>Hello JavaScript! 🎉</h1>
    <button id="clickButton">Click Me!</button>
    <p id="message">Waiting for your click...</p>
    
    <script src="script.js"></script>
</body>
</html>`}
                                </pre>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Step 4 */}
                        <div className={`p-4 rounded-lg transition-all ${currentStep >= 4 ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                          <div className="flex items-center mb-4">
                            <div className={`rounded-full w-8 h-8 flex items-center justify-center mr-4 ${
                              currentStep >= 4 ? 'bg-green-500 text-white' : 'bg-gray-300'
                            }`}>4</div>
                            <h5 className={`font-semibold ${currentStep >= 4 ? 'text-green-800' : 'text-gray-500'}`}>
                              Create JavaScript File
                            </h5>
                            {currentStep === 4 && (
                              <button 
                                onClick={() => setCurrentStep(5)}
                                className="ml-auto bg-orange-500 text-white px-4 py-1 rounded text-sm hover:bg-orange-600"
                              >
                                Next Step →
                              </button>
                            )}
                          </div>
                          {currentStep >= 4 && (
                            <div className="ml-12">
                              <p className="text-gray-600 mb-3">Create <code>script.js</code> with this interactive code:</p>
                              <div className="bg-gray-800 text-white p-4 rounded mb-3">
                                <pre className="text-green-300 overflow-x-auto text-sm">
{`// Get HTML elements
const button = document.getElementById('clickButton');
const message = document.getElementById('message');

// Add click event listener
button.addEventListener('click', function() {
    message.textContent = '🎉 You did it! JavaScript is working!';
    button.textContent = 'Clicked!';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
});

// Bonus: Add mouseover effect
button.addEventListener('mouseover', function() {
    button.style.transform = 'scale(1.1)';
});

button.addEventListener('mouseout', function() {
    button.style.transform = 'scale(1)';
});

console.log('JavaScript is loaded and ready!');`}
                                </pre>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Step 5 */}
                        <div className={`p-4 rounded-lg transition-all ${currentStep >= 5 ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                          <div className="flex items-center mb-4">
                            <div className={`rounded-full w-8 h-8 flex items-center justify-center mr-4 ${
                              currentStep >= 5 ? 'bg-green-500 text-white' : 'bg-gray-300'
                            }`}>5</div>
                            <h5 className={`font-semibold ${currentStep >= 5 ? 'text-green-800' : 'text-gray-500'}`}>
                              Run Your Project!
                            </h5>
                          </div>
                          {currentStep >= 5 && (
                            <div className="ml-12">
                              <p className="text-gray-600 mb-3">Open <code>index.html</code> in your browser:</p>
                              <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-white p-4 rounded border">
                                  <h6 className="font-semibold mb-2">Method 1: Simple</h6>
                                  <p className="text-sm text-gray-600">Right-click index.html → Open with → Your Browser</p>
                                </div>
                                <div className="bg-white p-4 rounded border">
                                  <h6 className="font-semibold mb-2">Method 2: Professional</h6>
                                  <p className="text-sm text-gray-600">Install "Live Server" extension in VS Code, then right-click HTML file and "Open with Live Server"</p>
                                </div>
                              </div>
                              
                              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                                <p className="text-yellow-800 font-semibold">🎉 Congratulations!</p>
                                <p className="text-yellow-700 text-sm mt-1">
                                  You've just set up a complete JavaScript development environment and created your first interactive project! 
                                  Click the button in your browser to see JavaScript in action.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="text-center mt-6">
                        <button 
                          onClick={() => setCurrentStep(1)}
                          className="bg-gray-500 text-white px-6 py-2 rounded mr-2 hover:bg-gray-600"
                        >
                          Reset Steps
                        </button>
                        <button 
                          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                          className="bg-blue-500 text-white px-6 py-2 rounded mr-2 hover:bg-blue-600"
                        >
                          Previous
                        </button>
                        <button 
                          onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}
                          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Next Steps */}
                  <div className="p-6 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">🚀 What's Next?</h3>
                    <p className="mb-6 opacity-90 text-lg">
                      You now have a professional development environment ready for any JavaScript project! 
                      Here's what you can build next:
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div className="bg-white bg-opacity-20 p-4 rounded">
                        <div className="text-2xl mb-2">🎮</div>
                        <div className="font-semibold">Interactive Games</div>
                      </div>
                      <div className="bg-white bg-opacity-20 p-4 rounded">
                        <div className="text-2xl mb-2">📱</div>
                        <div className="font-semibold">Web Applications</div>
                      </div>
                      <div className="bg-white bg-opacity-20 p-4 rounded">
                        <div className="text-2xl mb-2">🛠️</div>
                        <div className="font-semibold">Tools & Utilities</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Final CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-12 p-8 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg"
              >
                <h2 className="text-2xl font-bold mb-4">Ready to Start Your JavaScript Journey?</h2>
                <p className="mb-6 opacity-90 text-lg">
                  Your environment is set up, your tools are ready. Now let's dive into real JavaScript programming!
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg">
                    Next: Your First JavaScript Program →
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">
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
      `}</style>
    </CourseLayout>
  );
};

export default SettingUpEnvironment;
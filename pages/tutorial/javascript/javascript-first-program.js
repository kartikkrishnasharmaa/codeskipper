import { useState } from "react";
import CourseLayout from "@/components/layouts/JavascriptLayout";
import Head from "next/head";
import { motion } from "framer-motion";

const YourFirstJavaScriptProgram = () => {
  const [activeMethod, setActiveMethod] = useState("browser");
  const [codeOutput, setCodeOutput] = useState("");
  const [userCode, setUserCode] = useState(`console.log("Hello, World!");`);
  const [showSuccess, setShowSuccess] = useState(false);

  const runCode = () => {
    try {
      // Capture console.log output
      const originalLog = console.log;
      let output = "";
      console.log = (...args) => {
        output += args.join(" ") + "\n";
      };
      
      // Execute the code
      eval(userCode);
      
      console.log = originalLog;
      setCodeOutput(output || "Code executed successfully! ✓");
      setShowSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      setCodeOutput(`Error: ${error.message}`);
    }
  };

  const resetCode = () => {
    setUserCode(`console.log("Hello, World!");`);
    setCodeOutput("");
  };

  return (
    <CourseLayout>
      <Head>
        <title>Your First JavaScript Program: Hello World Tutorial 2024 | Code Skipper</title>
        <meta
          name="description"
          content="Step-by-step guide to write your first JavaScript program. Learn Hello World in browser console, HTML file, and Node.js with interactive examples."
        />
        <meta
          name="keywords"
          content="first javascript program, hello world javascript, javascript beginner tutorial, learn javascript coding, javascript console.log"
        />
        <meta property="og:title" content="Your First JavaScript Program: Complete Hello World Guide" />
        <meta
          property="og:description"
          content="Write your first JavaScript code with our interactive tutorial. Perfect for absolute beginners starting their programming journey."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://codeskipper.in/javascript/first-program" />
        <link rel="canonical" href="https://codeskipper.in/javascript/first-program" />
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
                Writing Your First JavaScript Program: The "Hello World" Moment
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Experience the magic moment when you make the computer speak your language for the very first time
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
              
              {/* The Magic Moment */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                  🎉 Your "Aha!" Moment Awaits
                </h2>
                
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">Why "Hello World" is Special</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                      <div className="text-4xl mb-4">🚀</div>
                      <h4 className="text-xl font-bold mb-2">The First Step</h4>
                      <p className="text-sm opacity-90">Every expert programmer started here</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                      <div className="text-4xl mb-4">💡</div>
                      <h4 className="text-xl font-bold mb-2">Instant Feedback</h4>
                      <p className="text-sm opacity-90">See immediate results from your code</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                      <div className="text-4xl mb-4">🎯</div>
                      <h4 className="text-xl font-bold mb-2">Foundation Building</h4>
                      <p className="text-sm opacity-90">Learn core concepts from day one</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Remember the first time you learned to write your name? That feeling of creating something 
                  that represents <strong>you</strong>? Writing your first JavaScript program is exactly like that - 
                  but for the digital world. In the next few minutes, you'll go from reading about programming 
                  to actually <em>doing</em> it.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">📚 Programming Tradition</h4>
                  <p className="text-gray-700">
                    Since the 1970s, "Hello World" has been the traditional first program for every new programmer. 
                    You're joining a community of millions who started exactly where you are right now!
                  </p>
                </div>
              </motion.div>

              {/* Method Selection */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
                  🛠️ Choose Your Learning Path
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <button
                    onClick={() => setActiveMethod("browser")}
                    className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 ${
                      activeMethod === "browser"
                        ? "border-blue-500 bg-blue-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-blue-300"
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-4xl mb-3 ${activeMethod === "browser" ? "text-blue-600" : "text-gray-400"}`}>
                        🌐
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${activeMethod === "browser" ? "text-blue-800" : "text-gray-700"}`}>
                        Browser Console
                      </h3>
                      <p className="text-sm text-gray-600">Quickest way to start • No setup needed</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveMethod("html")}
                    className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 ${
                      activeMethod === "html"
                        ? "border-green-500 bg-green-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-green-300"
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-4xl mb-3 ${activeMethod === "html" ? "text-green-600" : "text-gray-400"}`}>
                        📄
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${activeMethod === "html" ? "text-green-800" : "text-gray-700"}`}>
                        HTML File
                      </h3>
                      <p className="text-sm text-gray-600">Real web pages • Professional approach</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveMethod("node")}
                    className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 ${
                      activeMethod === "node"
                        ? "border-purple-500 bg-purple-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-purple-300"
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-4xl mb-3 ${activeMethod === "node" ? "text-purple-600" : "text-gray-400"}`}>
                        ⚡
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${activeMethod === "node" ? "text-purple-800" : "text-gray-700"}`}>
                        Node.js
                      </h3>
                      <p className="text-sm text-gray-600">Backend power • Server-side JavaScript</p>
                    </div>
                  </button>
                </div>
              </motion.div>

              {/* Browser Console Method */}
              {activeMethod === "browser" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                    🌐 Method 1: Browser Console - The Instant Playground
                  </h2>

                  <div className="bg-blue-50 p-6 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Why Start Here?</h3>
                    <p className="text-gray-700 mb-6">
                      The browser console is like a digital scratchpad where you can experiment with JavaScript 
                      immediately. No files, no setup - just pure, instant coding magic.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-blue-700 mb-3">✅ Advantages</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Instant results - see output immediately</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Perfect for learning and experimenting</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Built into every modern browser</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-blue-700 mb-3">🎯 Perfect For</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Quick tests and experiments</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Learning JavaScript syntax</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Debugging existing code</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Step-by-Step Instructions */}
                  <div className="bg-white border-2 border-blue-200 rounded-lg p-6 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">📝 Step-by-Step Guide</h3>
                    
                    <div className="space-y-8">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="md:w-1/3">
                          <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                            1
                          </div>
                          <h4 className="text-xl font-bold text-blue-800 mb-2">Open Developer Tools</h4>
                          <p className="text-gray-600">
                            Right-click anywhere on this page and select <strong>"Inspect"</strong> or press <code>F12</code>
                          </p>
                        </div>
                        <div className="md:w-2/3 bg-gray-800 text-white p-4 rounded">
                          <p className="text-yellow-300 text-sm mb-2">Keyboard Shortcuts:</p>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div><code>F12</code> - Universal</div>
                            <div><code>Ctrl+Shift+I</code> - Windows/Linux</div>
                            <div><code>Cmd+Option+I</code> - Mac</div>
                            <div><code>Right-click → Inspect</code></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="md:w-1/3">
                          <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                            2
                          </div>
                          <h4 className="text-xl font-bold text-blue-800 mb-2">Find the Console Tab</h4>
                          <p className="text-gray-600">
                            Click on the <strong>"Console"</strong> tab in the Developer Tools window
                          </p>
                        </div>
                        <div className="md:w-2/3 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                          <p className="text-yellow-800 text-sm">
                            <strong>Tip:</strong> The console is where you can have a conversation with JavaScript. 
                            You type commands, and it responds immediately!
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="md:w-1/3">
                          <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                            3
                          </div>
                          <h4 className="text-xl font-bold text-blue-800 mb-2">Type Your First Code</h4>
                          <p className="text-gray-600">
                            Click in the console and type this exact code:
                          </p>
                        </div>
                        <div className="md:w-2/3">
                          <div className="bg-gray-900 text-white p-4 rounded mb-4">
                            <pre className="text-green-300 overflow-x-auto text-lg">
                              console.log("Hello, World!");
                            </pre>
                          </div>
                          <p className="text-gray-600 text-sm">
                            Then press <code>Enter</code> to see the magic happen!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Code Editor */}
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-center">💻 Try It Right Here!</h3>
                    <p className="text-center mb-6 opacity-90">
                      Don't want to switch tabs? Practice right here in our interactive code editor:
                    </p>

                    <div className="bg-gray-900 rounded-lg p-6 mb-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-green-400 font-mono">script.js</span>
                        <div className="flex space-x-2">
                          <button 
                            onClick={resetCode}
                            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition text-sm"
                          >
                            Reset
                          </button>
                          <button 
                            onClick={runCode}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition text-sm font-semibold"
                          >
                            Run Code
                          </button>
                        </div>
                      </div>
                      
                      <textarea
                        value={userCode}
                        onChange={(e) => setUserCode(e.target.value)}
                        className="w-full h-40 bg-gray-800 text-green-300 font-mono p-4 rounded border border-gray-600 resize-none focus:outline-none focus:border-blue-500"
                        spellCheck="false"
                      />
                    </div>

                    {codeOutput && (
                      <div className="bg-black bg-opacity-50 p-4 rounded">
                        <h4 className="text-yellow-300 mb-2 font-semibold">Output:</h4>
                        <pre className="text-white whitespace-pre-wrap">{codeOutput}</pre>
                      </div>
                    )}

                    {showSuccess && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-500 text-white p-4 rounded text-center mt-4"
                      >
                        🎉 Congratulations! You just ran your first JavaScript code!
                      </motion.div>
                    )}
                  </div>

                  {/* Practice Exercises */}
                  <div className="mt-8 bg-green-50 p-6 rounded-lg border-2 border-green-200">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">🎯 Practice Makes Perfect</h3>
                    <p className="text-gray-700 mb-4">
                      Try these variations in the console or editor above to build your confidence:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-green-700 mb-2">Basic Variations</h4>
                        <div className="space-y-2 text-sm">
                          <code className="block bg-gray-100 p-2 rounded">console.log("Hello, " + "World!");</code>
                          <code className="block bg-gray-100 p-2 rounded">console.log(2 + 3);</code>
                          <code className="block bg-gray-100 p-2 rounded">console.log("I'm learning JavaScript!");</code>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-green-700 mb-2">Fun Experiments</h4>
                        <div className="space-y-2 text-sm">
                          <code className="block bg-gray-100 p-2 rounded">console.log("🎉 " + "JavaScript is fun!");</code>
                          <code className="block bg-gray-100 p-2 rounded">console.log(10 * 5);</code>
                          <code className="block bg-gray-100 p-2 rounded">console.log("Today is awesome! 😊");</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* HTML File Method */}
              {activeMethod === "html" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
                    📄 Method 2: HTML File - Building Real Web Pages
                  </h2>

                  <div className="bg-green-50 p-6 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Creating Web Magic</h3>
                    <p className="text-gray-700 mb-6">
                      This method shows you how JavaScript works in real web pages. You'll create an HTML file 
                      that brings together structure (HTML), style (CSS), and behavior (JavaScript) - the three 
                      pillars of web development.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-green-700 mb-3">🏗️ The Web Trinity</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                            <div><strong>HTML</strong> - The skeleton (structure)</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                            <div><strong>CSS</strong> - The skin (appearance)</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                            <div><strong>JavaScript</strong> - The muscles (behavior)</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-green-700 mb-3">🎯 Real-World Usage</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Interactive websites</li>
                          <li>• Form validation</li>
                          <li>• Dynamic content updates</li>
                          <li>• User interaction handling</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Complete HTML Example */}
                  <div className="bg-white border-2 border-green-200 rounded-lg p-6 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">🚀 Create Your First Web Page</h3>
                    
                    <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-yellow-300 font-mono text-sm">index.html</span>
                        <button 
                          onClick={() => {
                            const code = document.getElementById('html-code').textContent;
                            navigator.clipboard.writeText(code);
                            alert('Code copied to clipboard!');
                          }}
                          className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                        >
                          Copy Code
                        </button>
                      </div>
                      <pre id="html-code" className="text-green-300 overflow-x-auto text-sm leading-relaxed">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First JavaScript Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            text-align: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        .container {
            background: rgba(255,255,255,0.1);
            padding: 40px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
        button {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 18px;
            border-radius: 8px;
            cursor: pointer;
            margin: 20px;
            transition: transform 0.2s;
        }
        button:hover {
            transform: scale(1.05);
            background: #45a049;
        }
        #output {
            margin: 20px 0;
            padding: 20px;
            background: rgba(255,255,255,0.2);
            border-radius: 8px;
            font-size: 18px;
            min-height: 60px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎉 My First JavaScript Page</h1>
        <p>Click the button to see JavaScript in action!</p>
        
        <button onclick="showMessage()">Click Me!</button>
        
        <div id="output">Waiting for your interaction...</div>
    </div>

    <script>
        function showMessage() {
            const output = document.getElementById('output');
            output.innerHTML = '🎊 Congratulations! You just used JavaScript!<br>';
            output.innerHTML += '<small>You made the webpage respond to your click!</small>';
            
            // Bonus: Change button text
            event.target.textContent = 'Clicked! 🎯';
            event.target.style.background = '#ff6b6b';
            
            // Console log for developers
            console.log('Button clicked! User interacted with the page.');
        }
        
        // Additional welcome message in console
        console.log('🌍 Welcome to JavaScript programming!');
        console.log('💡 This message appears in the browser console.');
    </script>
</body>
</html>`}
                      </pre>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-4 rounded border">
                        <h4 className="font-semibold text-blue-800 mb-3">📋 How to Use This Code</h4>
                        <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside">
                          <li>Copy the code above</li>
                          <li>Open VS Code (or any text editor)</li>
                          <li>Create a new file called <code>index.html</code></li>
                          <li>Paste the code and save the file</li>
                          <li>Double-click the HTML file to open in browser</li>
                        </ol>
                      </div>
                      <div className="bg-purple-50 p-4 rounded border">
                        <h4 className="font-semibold text-purple-800 mb-3">🎨 What You'll See</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• A beautiful gradient background</li>
                          <li>• A centered container with a button</li>
                          <li>• Interactive message when clicked</li>
                          <li>• Visual feedback (color changes)</li>
                          <li>• Console messages for learning</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Understanding the Code */}
                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                    <h3 className="text-2xl font-bold text-yellow-800 mb-4">🧠 Understanding What You Built</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 mb-3">HTML Structure</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li><code>&lt;button&gt;</code> - Creates clickable button</li>
                          <li><code>onclick</code> - Calls JavaScript when clicked</li>
                          <li><code>id="output"</code> - Identifies element for JavaScript</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 mb-3">JavaScript Magic</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li><code>document.getElementById()</code> - Finds HTML element</li>
                          <li><code>innerHTML</code> - Changes content of element</li>
                          <li><code>console.log()</code> - Shows messages in console</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Node.js Method */}
              {activeMethod === "node" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
                    ⚡ Method 3: Node.js - Server-Side Power
                  </h2>

                  <div className="bg-purple-50 p-6 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">JavaScript Beyond the Browser</h3>
                    <p className="text-gray-700 mb-6">
                      Node.js lets you run JavaScript on your computer or server, opening up a world of 
                      possibilities beyond web pages. You can build servers, tools, scripts, and much more!
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-purple-700 mb-3">🚀 What You Can Build</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Web servers and APIs</li>
                          <li>• Command-line tools</li>
                          <li>• Desktop applications</li>
                          <li>• Automation scripts</li>
                          <li>• Real-time applications</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-purple-700 mb-3">🎯 Why Learn Node.js</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Use JavaScript everywhere</li>
                          <li>• Huge job market demand</li>
                          <li>• Massive package ecosystem (npm)</li>
                          <li>• Excellent performance</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Node.js Setup Instructions */}
                  <div className="bg-white border-2 border-purple-200 rounded-lg p-6 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">⚡ Creating Your First Node.js Program</h3>
                    
                    <div className="space-y-8">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="md:w-1/3">
                          <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                            1
                          </div>
                          <h4 className="text-xl font-bold text-purple-800 mb-2">Create JavaScript File</h4>
                          <p className="text-gray-600">
                            Create a new file called <code>app.js</code> in your project folder
                          </p>
                        </div>
                        <div className="md:w-2/3 bg-gray-900 text-white p-4 rounded">
                          <pre className="text-green-300 overflow-x-auto">
                            {`// app.js - Your First Node.js Program
console.log("🚀 Welcome to Node.js!");
console.log("This is JavaScript running on your computer!");

// Simple calculation
const result = 15 * 3;
console.log(\`15 multiplied by 3 is: \${result}\`);

// Working with arrays
const fruits = ['apple', 'banana', 'orange'];
console.log(\`My favorite fruits are: \${fruits.join(', ')}\`);

// Creating a simple function
function greet(name) {
    return \`Hello, \${name}! 👋\`;
}

console.log(greet("Node.js Developer"));

// Current directory info
console.log(\`This script is running in: \${__dirname}\`);`}
                          </pre>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="md:w-1/3">
                          <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                            2
                          </div>
                          <h4 className="text-xl font-bold text-purple-800 mb-2">Run Your Program</h4>
                          <p className="text-gray-600">
                            Open terminal in your project folder and run:
                          </p>
                        </div>
                        <div className="md:w-2/3">
                          <div className="bg-black text-white p-4 rounded mb-4">
                            <pre className="text-green-300 overflow-x-auto">
                              node app.js
                            </pre>
                          </div>
                          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                            <p className="text-yellow-800 text-sm">
                              <strong>Tip:</strong> Make sure you have Node.js installed. If you see "command not found", 
                              download and install Node.js from the official website.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="md:w-1/3">
                          <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                            3
                          </div>
                          <h4 className="text-xl font-bold text-purple-800 mb-2">See the Results</h4>
                          <p className="text-gray-600">
                            You should see output like this in your terminal:
                          </p>
                        </div>
                        <div className="md:w-2/3 bg-gray-800 text-white p-4 rounded">
                          <pre className="text-green-300 overflow-x-auto">
                            {`🚀 Welcome to Node.js!
This is JavaScript running on your computer!
15 multiplied by 3 is: 45
My favorite fruits are: apple, banana, orange
Hello, Node.js Developer! 👋
This script is running in: /your/project/path`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Node.js Project Structure */}
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-center">🏗️ Building a Proper Node.js Project</h3>
                    
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg mb-6">
                      <h4 className="text-xl font-bold mb-4">Project Structure</h4>
                      <div className="bg-black bg-opacity-50 p-4 rounded font-mono text-sm">
                        <div className="text-yellow-300">my-first-node-project/</div>
                        <div className="ml-4">
                          <div className="text-green-300">📁 node_modules/ <span className="text-gray-400"># Dependencies (auto-created)</span></div>
                          <div className="text-blue-300">📄 package.json <span className="text-gray-400"># Project configuration</span></div>
                          <div className="text-blue-300">📄 app.js <span className="text-gray-400"># Your main JavaScript file</span></div>
                          <div className="text-blue-300">📄 README.md <span className="text-gray-400"># Project documentation</span></div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white bg-opacity-20 p-4 rounded">
                        <h5 className="font-bold mb-2">Initialize Project</h5>
                        <div className="bg-black bg-opacity-50 p-3 rounded font-mono text-sm">
                          <div className="text-green-300">npm init -y</div>
                        </div>
                        <p className="text-sm opacity-90 mt-2">Creates package.json with default settings</p>
                      </div>
                      <div className="bg-white bg-opacity-20 p-4 rounded">
                        <h5 className="font-bold mb-2">Run Your Program</h5>
                        <div className="bg-black bg-opacity-50 p-3 rounded font-mono text-sm">
                          <div className="text-green-300">node app.js</div>
                        </div>
                        <p className="text-sm opacity-90 mt-2">Executes your JavaScript file</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Common Elements Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-orange-200 pb-2">
                  🎯 Understanding console.log(): Your New Best Friend
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-orange-800 mb-4">What is console.log()?</h3>
                    <p className="text-gray-700 mb-4">
                      <code>console.log()</code> is like a digital megaphone that lets your code "speak" to you. 
                      It's the most important tool for beginners (and experts!) to understand what's happening in their code.
                    </p>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-orange-700 mb-3">🎤 How It Works</h4>
                      <pre className="bg-gray-800 text-green-300 p-3 rounded text-sm overflow-x-auto">
                        {`console.log("Your message here");
// Output: Your message here

console.log(2 + 2);
// Output: 4

console.log("Hello", "World", "!");
// Output: Hello World !`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Why console.log() is Essential</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>Debugging:</strong> See what's happening in your code</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>Learning:</strong> Understand how JavaScript works</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>Testing:</strong> Check if your code is working correctly</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>Monitoring:</strong> Track values as your program runs</span>
                      </li>
                    </ul>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mt-4">
                      <p className="text-yellow-800 text-sm">
                        <strong>Pro Tip:</strong> Professional developers use <code>console.log()</code> constantly. 
                        It's not just for beginners - it's a vital tool throughout your programming career!
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Celebration Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-center bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold mb-4">🎉 You Did It! Welcome to JavaScript Programming!</h2>
                <p className="mb-6 opacity-90 text-lg">
                  You've just crossed the most important threshold in your programming journey. 
                  From this moment forward, you're not just learning about code - <strong>you're a coder</strong>.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <div className="text-2xl mb-2">🚀</div>
                    <div className="font-semibold">First Step Taken</div>
                    <div className="text-sm opacity-80 mt-1">You wrote real code</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <div className="text-2xl mb-2">💡</div>
                    <div className="font-semibold">Foundation Built</div>
                    <div className="text-sm opacity-80 mt-1">Core concepts understood</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="font-semibold">Future Ready</div>
                    <div className="text-sm opacity-80 mt-1">Path to mastery begun</div>
                  </div>
                </div>

                <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">🌟 What You've Accomplished</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-left">
                    <ul className="space-y-2">
                      <li>✅ Wrote your first JavaScript program</li>
                      <li>✅ Learned multiple ways to run JavaScript</li>
                      <li>✅ Understood console.log() and its importance</li>
                      <li>✅ Created interactive web pages</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>✅ Ran server-side JavaScript with Node.js</li>
                      <li>✅ Practiced with interactive examples</li>
                      <li>✅ Built confidence in coding</li>
                      <li>✅ Joined the programming community</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Next Steps */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center mt-8 p-8 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg"
              >
                <h2 className="text-2xl font-bold mb-4">🚀 Ready for the Next Adventure?</h2>
                <p className="mb-6 opacity-90 text-lg">
                  You've tasted the magic of JavaScript. Now let's build on this foundation and explore the 
                  incredible world of programming together!
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg">
                    Next: JavaScript Syntax & Rules →
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

export default YourFirstJavaScriptProgram;
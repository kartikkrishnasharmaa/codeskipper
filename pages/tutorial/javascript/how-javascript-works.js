import { useState } from "react";
import CourseLayout from "@/components/layouts/JavascriptLayout";
import Head from "next/head";
import { motion } from "framer-motion";

const HowJavaScriptWorks = () => {
  const [activeStage, setActiveStage] = useState("parsing");
  const [engineView, setEngineView] = useState("overview");

  return (
    <CourseLayout>
      <Head>
        <title>How JavaScript Works: JS Engine, Interpreter, Compiler Guide | Code Skipper</title>
        <meta
          name="description"
          content="Deep dive into JavaScript internals: V8 engine, JIT compilation, call stack, memory heap. Understand how your code becomes living applications."
        />
        <meta
          name="keywords"
          content="javascript engine, v8 engine, interpreter vs compiler, JIT compilation, call stack, memory heap, event loop"
        />
        <meta property="og:title" content="How JavaScript Works: Complete Engine Architecture Guide" />
        <meta
          property="og:description"
          content="Learn JavaScript internals from parsing to execution. Perfect for developers wanting to understand performance and write better code."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://codeskipper.in/javascript/how-js-works" />
        <link rel="canonical" href="https://codeskipper.in/javascript/how-js-works" />
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
                The Magic Behind the Curtain: How JavaScript Really Works
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover the incredible journey your code takes from simple text to living, breathing applications
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
              
              {/* The Big Picture */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                  From Your Keyboard to the Screen: The Complete Journey
                </h2>
                
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">🏗️ The JavaScript Factory</h3>
                  <p className="text-center mb-6 text-lg opacity-90">
                    Think of JavaScript execution as a highly efficient factory that transforms your code into actions. 
                    Let's take a tour of this amazing digital factory!
                  </p>
                  
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div className="bg-white bg-opacity-20 p-4 rounded">
                      <div className="text-2xl mb-2">📝</div>
                      <div className="font-semibold">1. Writing Code</div>
                      <div className="text-xs opacity-80 mt-1">You type JavaScript</div>
                    </div>
                    <div className="bg-white bg-opacity-20 p-4 rounded">
                      <div className="text-2xl mb-2">🔍</div>
                      <div className="font-semibold">2. JS Engine</div>
                      <div className="text-xs opacity-80 mt-1">Browser processes it</div>
                    </div>
                    <div className="bg-white bg-opacity-20 p-4 rounded">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="font-semibold">3. Execution</div>
                      <div className="text-xs opacity-80 mt-1">Magic happens</div>
                    </div>
                    <div className="bg-white bg-opacity-20 p-4 rounded">
                      <div className="text-2xl mb-2">🖥️</div>
                      <div className="font-semibold">4. Result</div>
                      <div className="text-xs opacity-80 mt-1">You see output</div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg">
                  When you write JavaScript, you're not just typing text - you're creating instructions for a 
                  sophisticated system that includes engines, compilers, and runtime environments. Understanding 
                  this process will make you a much better developer.
                </p>
              </motion.div>

              {/* JS Engine Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                  The JavaScript Engine: Your Code's Interpreter
                </h2>

                <div className="flex flex-col lg:flex-row gap-8 mb-8">
                  <div className="lg:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-700 mb-4">🏎️ What Exactly is a JS Engine?</h3>
                    <p className="text-gray-700 mb-4">
                      A JavaScript engine is like a specialized translator that converts your human-readable 
                      code into machine instructions that computers can understand and execute. Each major 
                      browser has its own optimized engine:
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
                        <h4 className="font-bold text-red-800 mb-2">V8 Engine</h4>
                        <p className="text-sm text-gray-700">Chrome, Node.js, Edge</p>
                        <p className="text-xs text-gray-600 mt-1">Google's speed demon</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500">
                        <h4 className="font-bold text-orange-800 mb-2">SpiderMonkey</h4>
                        <p className="text-sm text-gray-700">Firefox</p>
                        <p className="text-xs text-gray-600 mt-1">The original JS engine</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                        <h4 className="font-bold text-blue-800 mb-2">JavaScriptCore</h4>
                        <p className="text-sm text-gray-700">Safari</p>
                        <p className="text-xs text-gray-600 mt-1">Apple's optimized engine</p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-6">
                      <h4 className="font-semibold text-yellow-800 mb-2">🚀 Fun Fact:</h4>
                      <p className="text-gray-700">
                        The V8 engine can execute over 10,000 simple mathematical operations in less time than 
                        it takes you to blink. That's performance!
                      </p>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/3 bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3">🔧 Engine Components</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span><strong>Parser:</strong> Reads and understands your code</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span><strong>Interpreter:</strong> Executes code immediately</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span><strong>Compiler:</strong> Optimizes frequent code</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span><strong>Memory Heap:</strong> Stores variables and objects</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span><strong>Call Stack:</strong> Tracks function calls</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Engine Visualization Toggle */}
                <div className="mb-8">
                  <div className="flex space-x-4 mb-6">
                    <button
                      onClick={() => setEngineView("overview")}
                      className={`px-4 py-2 rounded-lg font-semibold ${
                        engineView === "overview" 
                          ? "bg-blue-600 text-white" 
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      🎯 Overview
                    </button>
                    <button
                      onClick={() => setEngineView("v8")}
                      className={`px-4 py-2 rounded-lg font-semibold ${
                        engineView === "v8" 
                          ? "bg-blue-600 text-white" 
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      🏎️ V8 Deep Dive
                    </button>
                    <button
                      onClick={() => setEngineView("comparison")}
                      className={`px-4 py-2 rounded-lg font-semibold ${
                        engineView === "comparison" 
                          ? "bg-blue-600 text-white" 
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      ⚖️ Engine Comparison
                    </button>
                  </div>

                  {engineView === "overview" && (
                    <div className="bg-gray-800 text-white p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4 text-yellow-300">🏭 The Engine Assembly Line</h4>
                      <div className="grid md:grid-cols-5 gap-4 text-center">
                        <div className="bg-gray-700 p-4 rounded">
                          <div className="text-2xl mb-2">📥</div>
                          <div className="text-sm font-semibold">Input</div>
                          <div className="text-xs text-gray-400 mt-1">Your JS Code</div>
                        </div>
                        <div className="bg-gray-700 p-4 rounded">
                          <div className="text-2xl mb-2">🔍</div>
                          <div className="text-sm font-semibold">Parser</div>
                          <div className="text-xs text-gray-400 mt-1">Checks Syntax</div>
                        </div>
                        <div className="bg-gray-700 p-4 rounded">
                          <div className="text-2xl mb-2">⚡</div>
                          <div className="text-sm font-semibold">Interpreter</div>
                          <div className="text-xs text-gray-400 mt-1">Quick Execution</div>
                        </div>
                        <div className="bg-gray-700 p-4 rounded">
                          <div className="text-2xl mb-2">🚀</div>
                          <div className="text-sm font-semibold">Compiler</div>
                          <div className="text-xs text-gray-400 mt-1">Optimizes</div>
                        </div>
                        <div className="bg-gray-700 p-4 rounded">
                          <div className="text-2xl mb-2">📤</div>
                          <div className="text-sm font-semibold">Output</div>
                          <div className="text-xs text-gray-400 mt-1">Machine Code</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {engineView === "v8" && (
                    <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">🏎️ V8 Engine - The Speed King</h4>
                      <p className="mb-4 opacity-90">
                        Google's V8 engine uses sophisticated techniques to make JavaScript incredibly fast:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white bg-opacity-20 p-4 rounded">
                          <h5 className="font-bold mb-2">Hidden Classes</h5>
                          <p className="text-sm">Optimizes object property access</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-4 rounded">
                          <h5 className="font-bold mb-2">Inline Caching</h5>
                          <p className="text-sm">Remembers property locations</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-4 rounded">
                          <h5 className="font-bold mb-2">Turbofan</h5>
                          <p className="text-sm">Optimizing compiler</p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-4 rounded">
                          <h5 className="font-bold mb-2">Ignition</h5>
                          <p className="text-sm">Interpreter for fast startup</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {engineView === "comparison" && (
                    <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                      <h4 className="text-xl font-bold text-purple-800 mb-4">⚖️ Engine Performance Comparison</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-semibold">V8 (Chrome)</span>
                            <span className="text-green-600">Fastest</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{width: '95%'}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-semibold">JavaScriptCore (Safari)</span>
                            <span className="text-blue-600">Very Fast</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-semibold">SpiderMonkey (Firefox)</span>
                            <span className="text-orange-600">Fast</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-orange-600 h-2 rounded-full" style={{width: '88%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Interpreter vs Compiler */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                  Interpreter vs Compiler: The Great Teamwork
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">🗣️ The Interpreter - The Quick Translator</h3>
                    <p className="text-gray-700 mb-4">
                      An interpreter reads and executes your code line by line, immediately. It's like having 
                      a human translator who translates sentences as you speak them.
                    </p>
                    <div className="bg-white p-4 rounded border mb-4">
                      <h4 className="font-semibold text-green-700 mb-2">✅ Advantages:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Quick startup - execution begins immediately</li>
                        <li>• Easy debugging - errors are found line by line</li>
                        <li>• Platform independent - same code runs anywhere</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-red-700 mb-2">❌ Disadvantages:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Slower for repeated code</li>
                        <li>• No optimization between runs</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">🏗️ The Compiler - The Master Builder</h3>
                    <p className="text-gray-700 mb-4">
                      A compiler translates your entire code into machine language first, then executes it. 
                      It's like writing a book translation that gets published - slower to prepare but faster to read.
                    </p>
                    <div className="bg-white p-4 rounded border mb-4">
                      <h4 className="font-semibold text-green-700 mb-2">✅ Advantages:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Much faster execution after compilation</li>
                        <li>• Advanced optimizations possible</li>
                        <li>• Better performance for repetitive tasks</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-red-700 mb-2">❌ Disadvantages:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Slower startup - compilation takes time</li>
                        <li>• Platform specific - needs recompilation</li>
                        <li>• Harder to debug optimized code</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* JIT Compilation */}
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">🎯 JavaScript's Secret Weapon: JIT Compilation</h3>
                  <p className="mb-6 opacity-90 text-lg">
                    Modern JavaScript engines use <strong>Just-In-Time (JIT) compilation</strong> - the best of both worlds!
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white bg-opacity-20 p-4 rounded text-center">
                      <div className="text-3xl mb-3">1️⃣</div>
                      <h4 className="font-bold mb-2">Interpreter First</h4>
                      <p className="text-sm opacity-90">Code runs immediately with interpreter for fast startup</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-4 rounded text-center">
                      <div className="text-3xl mb-3">2️⃣</div>
                      <h4 className="font-bold mb-2">Identify Hot Code</h4>
                      <p className="text-sm opacity-90">Engine detects frequently used code paths</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-4 rounded text-center">
                      <div className="text-3xl mb-3">3️⃣</div>
                      <h4 className="font-bold mb-2">Compile & Optimize</h4>
                      <p className="text-sm opacity-90">Hot code gets compiled for maximum speed</p>
                    </div>
                  </div>

                  <div className="mt-6 bg-black bg-opacity-30 p-4 rounded">
                    <p className="text-center">
                      <strong>Result:</strong> Fast startup <em>and</em> blazing execution speed for frequently used code!
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Execution Process */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                  Step-by-Step: How Your Code Comes to Life
                </h2>

                {/* Process Navigation */}
                <div className="flex overflow-x-auto gap-2 mb-8 pb-4">
                  {["parsing", "ast", "bytecode", "execution", "optimization"].map((stage) => (
                    <button
                      key={stage}
                      onClick={() => setActiveStage(stage)}
                      className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                        activeStage === stage
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {stage === "parsing" && "📝 Parsing"}
                      {stage === "ast" && "🌳 AST"}
                      {stage === "bytecode" && "⚡ Bytecode"}
                      {stage === "execution" && "🚀 Execution"}
                      {stage === "optimization" && "🎯 Optimization"}
                    </button>
                  ))}
                </div>

                {/* Process Content */}
                <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200 min-h-64">
                  {activeStage === "parsing" && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">📝 Step 1: Parsing - Reading Your Code</h3>
                      <p className="text-gray-700 mb-4">
                        The engine first reads your JavaScript code character by character, checking for syntax errors 
                        and understanding the structure. It's like a teacher reading your essay to make sure the 
                        sentences make sense before grading it.
                      </p>
                      <div className="bg-white p-4 rounded border">
                        <p className="text-sm text-gray-600 mb-2"><strong>What happens here:</strong></p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Syntax validation - are brackets balanced?</li>
                          <li>• Tokenization - breaking code into meaningful pieces</li>
                          <li>• Early error detection</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeStage === "ast" && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">🌳 Step 2: AST - Creating the Blueprint</h3>
                      <p className="text-gray-700 mb-4">
                        The parser creates an <strong>Abstract Syntax Tree (AST)</strong> - a structured representation 
                        of your code that shows the relationships between different parts. Think of it as creating 
                        an architectural blueprint before building a house.
                      </p>
                      <div className="bg-gray-800 text-white p-4 rounded mb-4">
                        <pre className="overflow-x-auto text-sm">
                          <code>{`// Your code:
function greet(name) {
  return "Hello, " + name;
}

// The AST might look like:
{
  type: "FunctionDeclaration",
  name: "greet",
  params: [{ type: "Identifier", name: "name" }],
  body: {
    type: "BlockStatement",
    body: [{
      type: "ReturnStatement",
      argument: {
        type: "BinaryExpression",
        operator: "+",
        left: { type: "Literal", value: "Hello, " },
        right: { type: "Identifier", name: "name" }
      }
    }]
  }
}`}</code>
                        </pre>
                      </div>
                    </div>
                  )}

                  {activeStage === "bytecode" && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">⚡ Step 3: Bytecode - The Middle Language</h3>
                      <p className="text-gray-700 mb-4">
                        The AST is converted into bytecode - a compact, intermediate representation that's 
                        faster to execute than the original source code but more portable than machine code.
                      </p>
                      <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                        <p className="text-sm text-yellow-800">
                          <strong>Analogy:</strong> Bytecode is like a recipe written in a universal cooking language 
                          that any chef (JavaScript engine) can understand and execute efficiently.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeStage === "execution" && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">🚀 Step 4: Execution - Making It Happen</h3>
                      <p className="text-gray-700 mb-4">
                        The interpreter executes the bytecode line by line. At the same time, the engine's 
                        profiler watches for "hot" code paths that are executed frequently.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded border">
                          <h4 className="font-semibold text-green-800 mb-2">Interpreter Path</h4>
                          <p className="text-sm text-gray-600">Fast startup, immediate execution</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded border">
                          <h4 className="font-semibold text-blue-800 mb-2">Profiler</h4>
                          <p className="text-sm text-gray-600">Watches for frequently used code</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStage === "optimization" && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Step 5: Optimization - Turbo Boost</h3>
                      <p className="text-gray-700 mb-4">
                        When the profiler detects frequently executed code, the optimizing compiler kicks in. 
                        It creates highly optimized machine code that runs much faster than the interpreted bytecode.
                      </p>
                      <div className="bg-green-100 p-4 rounded border-l-4 border-green-500">
                        <p className="text-sm text-green-800">
                          <strong>Real example:</strong> A loop that runs 10,000 times will be detected as "hot code" 
                          and compiled to optimized machine code, making subsequent iterations much faster.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Memory Management */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                  Memory Management: The Invisible Janitor
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-4">🗃️ Memory Heap - The Storage Room</h3>
                    <p className="text-gray-700 mb-4">
                      The memory heap is where JavaScript stores objects and variables. It's a large, mostly 
                      unstructured region of memory - like a giant warehouse where you can store anything.
                    </p>
                    <div className="bg-white p-4 rounded border">
                      <p className="text-sm text-gray-600">
                        <strong>Stored in heap:</strong> Objects, arrays, functions, and complex data structures
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">📚 Call Stack - The To-Do List</h3>
                    <p className="text-gray-700 mb-4">
                      The call stack keeps track of function calls - what's executing now and what needs to 
                      happen next. It's a LIFO (Last In, First Out) structure - like a stack of books.
                    </p>
                    <div className="bg-white p-4 rounded border">
                      <p className="text-sm text-gray-600">
                        <strong>Stored in stack:</strong> Function calls, primitive values, references
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">🧹 Garbage Collection - The Cleanup Crew</h3>
                  <p className="mb-4 opacity-90">
                    JavaScript automatically manages memory through garbage collection. When objects are no 
                    longer needed, they're automatically removed from memory.
                  </p>
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <p className="text-center">
                      <strong>You never have to manually free memory in JavaScript!</strong> This automatic 
                      memory management is one of the language's biggest productivity features.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Practical Implications */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="text-center bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold mb-4">💡 How This Knowledge Makes You a Better Developer</h2>
                <p className="mb-6 opacity-90 text-lg">
                  Understanding JavaScript's internals helps you write faster, more efficient code and 
                  debug complex issues with confidence.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <div className="text-2xl mb-2">🚀</div>
                    <div className="font-semibold">Performance</div>
                    <div className="text-sm opacity-80 mt-1">Write optimized code</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <div className="text-2xl mb-2">🐛</div>
                    <div className="font-semibold">Debugging</div>
                    <div className="text-sm opacity-80 mt-1">Understand errors better</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="font-semibold">Architecture</div>
                    <div className="text-sm opacity-80 mt-1">Build better applications</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg">
                    Next: Setting Up Environment →
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition">
                    Practice: Code Optimization
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

export default HowJavaScriptWorks;
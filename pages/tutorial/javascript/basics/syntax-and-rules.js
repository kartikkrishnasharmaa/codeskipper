import { useState } from "react";
import CourseLayout from "@/components/layouts/JavascriptLayout";
import Head from "next/head";
import { motion } from "framer-motion";

const JavaScriptSyntaxAndRules = () => {
  const [activeTab, setActiveTab] = useState("basics");
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userCode, setUserCode] = useState(`// Try writing some JavaScript here
console.log("Hello, Syntax!");`);
  const [codeOutput, setCodeOutput] = useState("");
  const [syntaxErrors, setSyntaxErrors] = useState([]);

  const quizQuestions = [
    {
      question: "Which of these is a valid variable declaration?",
      options: [
        "let 123variable = 5;",
        "let variable-name = 5;",
        "let variableName = 5;",
        "let var = 5;"
      ],
      correct: 2,
      explanation: "Variable names cannot start with numbers, cannot contain hyphens, and cannot use reserved keywords like 'var'."
    },
    {
      question: "What will happen with this code: console.log(5 + '5')?",
      options: [
        "10",
        "55",
        "Error",
        "undefined"
      ],
      correct: 1,
      explanation: "JavaScript uses type coercion. When adding a number and string, it converts the number to a string and concatenates."
    },
    {
      question: "Which symbol is used for single-line comments?",
      options: [
        "<!-- -->",
        "//",
        "/* */",
        "#"
      ],
      correct: 1,
      explanation: "// is used for single-line comments, /* */ for multi-line, <!-- --> is HTML, and # is not used in JavaScript."
    },
    {
      question: "What is the correct way to check strict equality?",
      options: [
        "a = b",
        "a == b",
        "a === b",
        "a equals b"
      ],
      correct: 2,
      explanation: "=== checks for strict equality (value and type), while == performs type coercion."
    }
  ];

  const runCode = () => {
    try {
      setSyntaxErrors([]);
      const originalLog = console.log;
      let output = "";
      console.log = (...args) => {
        output += args.join(" ") + "\n";
      };
      
      // Basic syntax validation
      const errors = [];
      
      // Check for common syntax errors
      if (userCode.includes("//")) {
        // Check for missing semicolons in certain cases
        const lines = userCode.split('\n').filter(line => !line.trim().startsWith('//'));
        lines.forEach((line, index) => {
          const trimmed = line.trim();
          if (trimmed && !trimmed.endsWith(';') && !trimmed.endsWith('{') && 
              !trimmed.endsWith('}') && !trimmed.includes('//') && 
              !trimmed.startsWith('if') && !trimmed.startsWith('for') &&
              !trimmed.startsWith('while') && !trimmed.startsWith('function')) {
            errors.push(`Line ${index + 1}: Consider adding a semicolon at the end`);
          }
        });
      }
      
      // Execute the code
      eval(userCode);
      
      console.log = originalLog;
      setCodeOutput(output || "✓ Code executed successfully!");
      setSyntaxErrors(errors);
    } catch (error) {
      setCodeOutput(`❌ Error: ${error.message}`);
    }
  };

  const checkAnswer = (selectedIndex) => {
    if (selectedIndex === quizQuestions[currentQuestion].correct) {
      setQuizScore(quizScore + 1);
    }
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowQuiz(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setQuizScore(0);
    setShowQuiz(true);
  };

  return (
    <CourseLayout>
      <Head>
        <title>JavaScript Syntax & Rules: Complete Guide with Examples 2024 | Code Skipper</title>
        <meta
          name="description"
          content="Master JavaScript syntax, rules, and best practices. Learn variables, data types, operators, functions, and common pitfalls with interactive examples."
        />
        <meta
          name="keywords"
          content="javascript syntax, javascript rules, variables, data types, operators, functions, es6 syntax, javascript basics"
        />
        <meta property="og:title" content="JavaScript Syntax & Rules: Complete Guide with Examples 2024" />
        <meta
          property="og:description"
          content="Learn JavaScript syntax from ground up. Understand variables, data types, operators, and functions with practical examples and exercises."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://codeskipper.in/javascript/syntax-rules" />
        <link rel="canonical" href="https://codeskipper.in/javascript/syntax-rules" />
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
                JavaScript Syntax & Rules: Speaking JavaScript Fluently
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Learn the grammar and vocabulary of JavaScript to write clean, professional code that computers understand perfectly
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
              
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                  🎯 Why Syntax Matters: The Language of Computers
                </h2>
                
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">JavaScript Syntax: Your Programming Foundation</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                      <div className="text-4xl mb-4">🔤</div>
                      <h4 className="text-xl font-bold mb-2">Vocabulary</h4>
                      <p className="text-sm opacity-90">Keywords, operators, and symbols</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                      <div className="text-4xl mb-4">📝</div>
                      <h4 className="text-xl font-bold mb-2">Grammar</h4>
                      <p className="text-sm opacity-90">Rules for structuring code</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                      <div className="text-4xl mb-4">🎻</div>
                      <h4 className="text-xl font-bold mb-2">Punctuation</h4>
                      <p className="text-sm opacity-90">Semicolons, brackets, and commas</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Think of JavaScript syntax like learning a new spoken language. You need to know the <strong>vocabulary</strong> (keywords), 
                  <strong> grammar</strong> (structure rules), and <strong>punctuation</strong> (semicolons, brackets) to communicate effectively. 
                  Master these, and you'll write code that's not just functional, but elegant and professional.
                </p>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🎯 The Golden Rule</h4>
                  <p className="text-gray-700">
                    <strong>"JavaScript is case-sensitive and cares about every character."</strong> 
                    A single misplaced comma, missing bracket, or wrong capitalization can break your entire program. 
                    Attention to detail is everything!
                  </p>
                </div>
              </motion.div>

              {/* Navigation Tabs */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
                  📚 Explore JavaScript Syntax Topics
                </h2>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  <button
                    onClick={() => setActiveTab("basics")}
                    className={`p-4 rounded-lg border-2 transition-all transform hover:scale-105 ${
                      activeTab === "basics"
                        ? "border-blue-500 bg-blue-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-blue-300"
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-2xl mb-2 ${activeTab === "basics" ? "text-blue-600" : "text-gray-400"}`}>
                        🔤
                      </div>
                      <h3 className={`font-bold ${activeTab === "basics" ? "text-blue-800" : "text-gray-700"}`}>
                        Basics
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab("variables")}
                    className={`p-4 rounded-lg border-2 transition-all transform hover:scale-105 ${
                      activeTab === "variables"
                        ? "border-green-500 bg-green-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-green-300"
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-2xl mb-2 ${activeTab === "variables" ? "text-green-600" : "text-gray-400"}`}>
                        📦
                      </div>
                      <h3 className={`font-bold ${activeTab === "variables" ? "text-green-800" : "text-gray-700"}`}>
                        Variables
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab("datatypes")}
                    className={`p-4 rounded-lg border-2 transition-all transform hover:scale-105 ${
                      activeTab === "datatypes"
                        ? "border-purple-500 bg-purple-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-purple-300"
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-2xl mb-2 ${activeTab === "datatypes" ? "text-purple-600" : "text-gray-400"}`}>
                        🎭
                      </div>
                      <h3 className={`font-bold ${activeTab === "datatypes" ? "text-purple-800" : "text-gray-700"}`}>
                        Data Types
                      </h3>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab("operators")}
                    className={`p-4 rounded-lg border-2 transition-all transform hover:scale-105 ${
                      activeTab === "operators"
                        ? "border-orange-500 bg-orange-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-orange-300"
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-2xl mb-2 ${activeTab === "operators" ? "text-orange-600" : "text-gray-400"}`}>
                        ➕
                      </div>
                      <h3 className={`font-bold ${activeTab === "operators" ? "text-orange-800" : "text-gray-700"}`}>
                        Operators
                      </h3>
                    </div>
                  </button>
                </div>
              </motion.div>

              {/* Basic Syntax Section */}
              {activeTab === "basics" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                    🔤 Basic Syntax: The Foundation
                  </h2>

                  <div className="bg-blue-50 p-6 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">The Building Blocks of JavaScript</h3>
                    <p className="text-gray-700 mb-6">
                      Every JavaScript program is built from statements, expressions, and proper punctuation. 
                      Understanding these basics is like learning to form proper sentences before writing essays.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-blue-700 mb-3">📝 Statements</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Instructions that perform actions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Usually end with semicolons (;)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Examples: variable declarations, function calls</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-blue-700 mb-3">🎯 Expressions</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Pieces of code that produce values</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Can be used in statements</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Examples: mathematical operations, function calls</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Basic Syntax Examples */}
                  <div className="bg-white border-2 border-blue-200 rounded-lg p-6 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">💡 Basic Syntax Examples</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Statements vs Expressions</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`// STATEMENTS (perform actions)
let x = 5;                    // Variable declaration
console.log("Hello");         // Function call
if (x > 0) { /*...*/ }       // Conditional
for (let i = 0; i < 5; i++) { /*...*/ }  // Loop

// EXPRESSIONS (produce values)
5 + 3                        // Produces 8
Math.random()                // Produces random number
x > 0                        // Produces true or false
"Hello" + "World"            // Produces "HelloWorld"`}
                        </pre>
                      </div>

                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Case Sensitivity</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`// JavaScript is CASE-SENSITIVE!
let myVariable = "hello";
let myvariable = "world";  // Different variable!
let MYVARIABLE = "test";   // Another different variable

console.log(myVariable);   // "hello"
console.log(myvariable);   // "world" 
console.log(MYVARIABLE);   // "test"

// Function names are also case-sensitive
function myFunction() { }
function MyFunction() { }  // Different function!
function MYFUNCTION() { }  // Another different function`}
                        </pre>
                      </div>

                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Whitespace and Formatting</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`// JavaScript IGNORES extra whitespace (mostly)
let x=5;           // Works
let x   =   5;     // Also works
let x
=
5;                 // Still works!

// But proper formatting makes code readable:
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

// Good indentation for blocks:
if (condition) {
    console.log("Condition is true");
    // More code here...
}

// Bad (hard to read):
if(condition){console.log("True");}`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Semicolon Rules */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Semicolon Rules</h3>
                      <div className="bg-gray-800 text-white p-4 rounded mb-4">
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`// REQUIRED in some cases:
let x = 5;                    // ✓ Good
console.log("Hello");         // ✓ Good

// OPTIONAL but recommended:
x = 10                       // Works but risky
console.log("World")         // Works but risky

// AUTOMATIC SEMICOLON INSERTION (ASI)
// JavaScript adds semicolons automatically in some cases,
// but it's better to be explicit!`}
                        </pre>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Always use semicolons to end statements</li>
                        <li>• Prevents unexpected behavior from ASI</li>
                        <li>• Makes code more readable and professional</li>
                        <li>• Required in minified code</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Syntax Errors</h3>
                      <div className="bg-gray-800 text-white p-4 rounded mb-4">
                        <pre className="text-red-300 overflow-x-auto text-sm">
{`// MISSING SEMICOLONS (can cause issues)
let x = 5
[1,2,3].forEach(console.log)  // Error!

// MISMATCHED BRACKETS
if (condition {                // Missing )
    console.log("Hello")
}                              // Missing }

// WRONG QUOTES
let message = 'Hello"          // Mixed quotes
let path = 'C:\new\file'      // Unescaped backslashes

// RESERVED WORDS
let class = "math"            // 'class' is reserved`}
                        </pre>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Mismatched brackets, braces, or parentheses</li>
                        <li>• Missing or extra commas</li>
                        <li>• Using reserved keywords as variable names</li>
                        <li>• Incorrect string quotes</li>
                      </ul>
                    </div>
                  </div>

                  {/* Code Editor */}
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-center">💻 Practice Basic Syntax</h3>
                    
                    <div className="bg-gray-900 rounded-lg p-6 mb-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-green-400 font-mono">practice.js</span>
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => setUserCode(`// Try writing some JavaScript here\nconsole.log("Hello, Syntax!");`)}
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
                      <div className="bg-black bg-opacity-50 p-4 rounded mb-4">
                        <h4 className="text-yellow-300 mb-2 font-semibold">Output:</h4>
                        <pre className="text-white whitespace-pre-wrap">{codeOutput}</pre>
                      </div>
                    )}

                    {syntaxErrors.length > 0 && (
                      <div className="bg-yellow-500 bg-opacity-20 p-4 rounded">
                        <h4 className="text-yellow-300 mb-2 font-semibold">⚠️ Syntax Suggestions:</h4>
                        <ul className="text-white text-sm">
                          {syntaxErrors.map((error, index) => (
                            <li key={index}>• {error}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Variables Section */}
              {activeTab === "variables" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
                    📦 Variables: Storing Your Data
                  </h2>

                  <div className="bg-green-50 p-6 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">What Are Variables?</h3>
                    <p className="text-gray-700 mb-6">
                      Variables are like labeled containers that store data. They let you save values, reuse them, 
                      and make your code dynamic and flexible.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-white p-4 rounded border text-center">
                        <div className="text-2xl mb-3">📝</div>
                        <h4 className="font-semibold text-green-700 mb-2">var</h4>
                        <p className="text-sm text-gray-600">Function-scoped, older way</p>
                      </div>
                      <div className="bg-white p-4 rounded border text-center">
                        <div className="text-2xl mb-3">🎯</div>
                        <h4 className="font-semibold text-green-700 mb-2">let</h4>
                        <p className="text-sm text-gray-600">Block-scoped, modern</p>
                      </div>
                      <div className="bg-white p-4 rounded border text-center">
                        <div className="text-2xl mb-3">🔒</div>
                        <h4 className="font-semibold text-green-700 mb-2">const</h4>
                        <p className="text-sm text-gray-600">Constant, cannot be reassigned</p>
                      </div>
                    </div>
                  </div>

                  {/* Variable Declaration Examples */}
                  <div className="bg-white border-2 border-green-200 rounded-lg p-6 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">💡 Variable Declaration Examples</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Declaration and Assignment</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`// DECLARATION (creating the variable)
let age;
const name = "John";
var isActive;

// ASSIGNMENT (giving it a value)
age = 25;
// name = "Jane";  // Error! const cannot be reassigned
isActive = true;

// DECLARATION + ASSIGNMENT (most common)
let score = 100;
const PI = 3.14159;
var temperature = 22.5;

// MULTIPLE VARIABLES
let x = 1, y = 2, z = 3;
const MAX_SIZE = 100, MIN_SIZE = 1;`}
                        </pre>
                      </div>

                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Variable Naming Rules</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`// VALID NAMES (follow these rules)
let userName;           // camelCase (recommended)
let user_name;          // snake_case (less common)
let $price;             // Can start with $
let _private;           // Can start with _
let name2;              // Can contain numbers (not start)
let firstName;          // Descriptive and clear

// INVALID NAMES (will cause errors)
// let 2ndPlace;        // Cannot start with number
// let user-name;       // Cannot use hyphens
// let let;             // Cannot use reserved words
// let user name;       // Cannot have spaces

// GOOD vs BAD naming
let elapsedTime;        // ✓ Good - descriptive
let et;                 // ✗ Bad - unclear
let isUserLoggedIn;     // ✓ Good - boolean clarity  
let flag;               // ✗ Bad - what kind of flag?`}
                        </pre>
                      </div>

                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Scope Differences</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`// VAR (function-scoped)
function varExample() {
    if (true) {
        var functionScoped = "I'm available in entire function";
    }
    console.log(functionScoped);  // Works!
}

// LET (block-scoped) 
function letExample() {
    if (true) {
        let blockScoped = "I'm only available in this block";
    }
    // console.log(blockScoped);  // Error! Not accessible
}

// CONST (block-scoped, constant)
const API_KEY = "abc123";
// API_KEY = "xyz789";  // Error! Cannot reassign const

// But const objects can have properties modified:
const user = { name: "John" };
user.name = "Jane";     // ✓ Allowed - modifying property
// user = { name: "Bob" };  // ❌ Error - reassigning const`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Variable Comparison */}
                  <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-center">⚖️ var vs let vs const Comparison</h3>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white bg-opacity-20 rounded-lg">
                        <thead>
                          <tr className="border-b border-white border-opacity-30">
                            <th className="p-4 text-left">Feature</th>
                            <th className="p-4 text-center">var</th>
                            <th className="p-4 text-center">let</th>
                            <th className="p-4 text-center">const</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-white border-opacity-20">
                            <td className="p-4 font-semibold">Scope</td>
                            <td className="p-4 text-center">Function</td>
                            <td className="p-4 text-center">Block</td>
                            <td className="p-4 text-center">Block</td>
                          </tr>
                          <tr className="border-b border-white border-opacity-20">
                            <td className="p-4 font-semibold">Hoisting</td>
                            <td className="p-4 text-center">Yes (undefined)</td>
                            <td className="p-4 text-center">Yes (TDZ)</td>
                            <td className="p-4 text-center">Yes (TDZ)</td>
                          </tr>
                          <tr className="border-b border-white border-opacity-20">
                            <td className="p-4 font-semibold">Reassignment</td>
                            <td className="p-4 text-center">Allowed</td>
                            <td className="p-4 text-center">Allowed</td>
                            <td className="p-4 text-center">Not Allowed</td>
                          </tr>
                          <tr className="border-b border-white border-opacity-20">
                            <td className="p-4 font-semibold">Redeclaration</td>
                            <td className="p-4 text-center">Allowed</td>
                            <td className="p-4 text-center">Not Allowed</td>
                            <td className="p-4 text-center">Not Allowed</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Modern Usage</td>
                            <td className="p-4 text-center">Avoid</td>
                            <td className="p-4 text-center">Preferred for variables</td>
                            <td className="p-4 text-center">Preferred for constants</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Best Practices */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-blue-800 mb-4">✅ Variable Best Practices</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Use const by default</strong> - only use let when you need reassignment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Use descriptive names</strong> - firstName instead of fn</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Use camelCase</strong> for variable names</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Initialize variables</strong> when you declare them</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Use UPPER_CASE</strong> for constants that never change</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-purple-800 mb-4">🎯 Modern JavaScript Guidelines</h3>
                      <div className="bg-gray-800 text-white p-4 rounded mb-4">
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`// MODERN JAVASCRIPT (ES6+)
const API_URL = 'https://api.example.com';  // Constants
let isLoading = false;                      // Variables that change
// var oldWay = "avoid this";               // Don't use var

// Good examples:
const user = { name: 'John', age: 30 };    // const for objects
let counter = 0;                           // let for counters
const MAX_RETRIES = 3;                     // UPPER_CASE for true constants
let isModalOpen = false;                   // Boolean flags`}
                        </pre>
                      </div>
                      <p className="text-sm text-gray-600">
                        <strong>Rule of thumb:</strong> Start with const, use let only when you need to reassign, and avoid var entirely.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Data Types Section */}
              {activeTab === "datatypes" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
                    🎭 Data Types: The Different Kinds of Data
                  </h2>

                  <div className="bg-purple-50 p-6 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">JavaScript Data Types</h3>
                    <p className="text-gray-700 mb-6">
                      JavaScript has 7 fundamental data types (6 primitive + Object). Understanding these is crucial 
                      for working with data effectively.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-white p-3 rounded border text-center">
                        <div className="text-xl mb-2">🔤</div>
                        <div className="font-semibold text-purple-700">String</div>
                        <div className="text-xs text-gray-500">Text data</div>
                      </div>
                      <div className="bg-white p-3 rounded border text-center">
                        <div className="text-xl mb-2">🔢</div>
                        <div className="font-semibold text-purple-700">Number</div>
                        <div className="text-xs text-gray-500">Numeric data</div>
                      </div>
                      <div className="bg-white p-3 rounded border text-center">
                        <div className="text-xl mb-2">✅</div>
                        <div className="font-semibold text-purple-700">Boolean</div>
                        <div className="text-xs text-gray-500">True/False</div>
                      </div>
                      <div className="bg-white p-3 rounded border text-center">
                        <div className="text-xl mb-2">📦</div>
                        <div className="font-semibold text-purple-700">Object</div>
                        <div className="text-xs text-gray-500">Key-value pairs</div>
                      </div>
                    </div>
                  </div>

                  {/* Data Type Examples */}
                  <div className="bg-white border-2 border-purple-200 rounded-lg p-6 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">💡 Data Type Examples</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Primitive Data Types</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`// STRING (text)
let name = "John Doe";
let message = 'Hello World';
let template = \`Hello \${name}\`;  // Template literal

// NUMBER (integers and decimals)
let age = 25;
let price = 19.99;
let temperature = -5;
let bigNumber = 9007199254740991n;  // BigInt

// BOOLEAN (true/false)
let isActive = true;
let isEmpty = false;
let isGreater = 5 > 3;  // true

// UNDEFINED (declared but not assigned)
let undefinedVar;
console.log(undefinedVar);  // undefined

// NULL (intentional empty value)
let emptyValue = null;

// SYMBOL (unique identifier)
let id = Symbol("id");

// BIGINT (very large numbers)
let hugeNumber = 1234567890123456789012345678901234567890n;`}
                        </pre>
                      </div>

                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Object Data Type</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`// OBJECT (key-value pairs)
let person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "Boston"
    }
};

// ARRAY (ordered list)
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

// FUNCTION (reusable code blocks)
function greet(name) {
    return "Hello, " + name;
}

// DATE
let today = new Date();
let birthday = new Date("1990-05-15");

// REGEXP (regular expressions)
let pattern = /hello/i;`}
                        </pre>
                      </div>

                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Type Checking and Conversion</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`// TYPE CHECKING
typeof "hello"           // "string"
typeof 42               // "number"  
typeof true             // "boolean"
typeof undefined        // "undefined"
typeof null             // "object" (historical bug!)
typeof { }              // "object"
typeof [ ]              // "object"
typeof function() {}    // "function"

// TYPE CONVERSION (Explicit)
let num = "42";
Number(num)             // 42 (number)
String(123)             // "123" (string)
Boolean(0)              // false
Boolean(1)              // true

// TYPE COERCION (Implicit - be careful!)
"5" + 2                 // "52" (string)
"5" - 2                 // 3 (number)
"5" * "2"               // 10 (number)
"5" == 5                // true (loose equality)
"5" === 5               // false (strict equality)`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Type Comparison */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-green-800 mb-4">🎯 Dynamic Typing</h3>
                      <p className="text-gray-700 mb-4">
                        JavaScript is <strong>dynamically typed</strong>, meaning variables can hold any type of data, 
                        and their type can change.
                      </p>
                      <div className="bg-gray-800 text-white p-4 rounded">
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`let dynamicVariable = "Hello";    // string
console.log(typeof dynamicVariable); // "string"

dynamicVariable = 42;              // now number
console.log(typeof dynamicVariable); // "number"

dynamicVariable = true;            // now boolean  
console.log(typeof dynamicVariable); // "boolean"

dynamicVariable = { name: "John" }; // now object
console.log(typeof dynamicVariable); // "object"`}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-blue-800 mb-4">⚡ Type Coercion Rules</h3>
                      <p className="text-gray-700 mb-4">
                        JavaScript automatically converts types in certain situations. Understand these rules to avoid surprises!
                      </p>
                      <div className="bg-gray-800 text-white p-4 rounded">
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`// COMMON COERCION EXAMPLES
"5" + 2         // "52" (string concatenation)
"5" - 2         // 3 (numeric subtraction)
"5" * "2"       // 10 (numeric multiplication)
"5" == 5        // true (values equal after coercion)
"5" === 5       // false (different types)

// TRUTHY/FALSY VALUES
Boolean("")     // false
Boolean("hi")   // true
Boolean(0)      // false  
Boolean(1)      // true
Boolean(null)   // false
Boolean(undefined) // false`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Data Type Best Practices */}
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-800 mb-3">🏆 Data Type Best Practices</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 mb-2">Type Safety</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Use <code>===</code> instead of <code>==</code> for comparisons</li>
                          <li>• Check types explicitly when needed</li>
                          <li>• Be aware of truthy/falsy values in conditionals</li>
                          <li>• Validate user input types</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 mb-2">Performance</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Use appropriate data types for your use case</li>
                          <li>• Avoid unnecessary type conversions</li>
                          <li>• Use typed arrays for large numerical data</li>
                          <li>• Consider using TypeScript for large projects</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Operators Section */}
              {activeTab === "operators" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-orange-200 pb-2">
                    ➕ Operators: Performing Operations
                  </h2>

                  <div className="bg-orange-50 p-6 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold text-orange-800 mb-4">JavaScript Operators</h3>
                    <p className="text-gray-700 mb-6">
                      Operators are symbols that perform operations on values and variables. 
                      They're the verbs of the JavaScript language that make things happen.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-white p-3 rounded border text-center">
                        <div className="text-xl mb-2">➕</div>
                        <div className="font-semibold text-orange-700">Arithmetic</div>
                        <div className="text-xs text-gray-500">Math operations</div>
                      </div>
                      <div className="bg-white p-3 rounded border text-center">
                        <div className="text-xl mb-2">⚖️</div>
                        <div className="font-semibold text-orange-700">Comparison</div>
                        <div className="text-xs text-gray-500">Compare values</div>
                      </div>
                      <div className="bg-white p-3 rounded border text-center">
                        <div className="text-xl mb-2">🔗</div>
                        <div className="font-semibold text-orange-700">Logical</div>
                        <div className="text-xs text-gray-500">Combine conditions</div>
                      </div>
                      <div className="bg-white p-3 rounded border text-center">
                        <div className="text-xl mb-2">📝</div>
                        <div className="font-semibold text-orange-700">Assignment</div>
                        <div className="text-xs text-gray-500">Assign values</div>
                      </div>
                    </div>
                  </div>

                  {/* Operator Examples */}
                  <div className="bg-white border-2 border-orange-200 rounded-lg p-6 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">💡 Operator Examples</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Arithmetic Operators</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`// BASIC ARITHMETIC
let a = 10, b = 3;

a + b      // 13 (addition)
a - b      // 7 (subtraction)  
a * b      // 30 (multiplication)
a / b      // 3.333... (division)
a % b      // 1 (modulus - remainder)
a ** b     // 1000 (exponentiation)

// INCREMENT/DECREMENT
let count = 5;
count++;        // 6 (post-increment)
++count;        // 7 (pre-increment) 
count--;        // 6 (post-decrement)
--count;        // 5 (pre-decrement)

// UNARY OPERATORS
let x = 5;
+x             // 5 (positive)
-x             // -5 (negative)
+"5"           // 5 (convert to number)`}
                        </pre>
                      </div>

                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Comparison Operators</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`// EQUALITY COMPARISONS
5 == "5"        // true (loose equality - type coercion)
5 === "5"       // false (strict equality - no coercion)
5 != "5"        // false (loose inequality)
5 !== "5"       // true (strict inequality)

// RELATIONAL COMPARISONS
5 > 3           // true (greater than)
5 < 3           // false (less than)
5 >= 5          // true (greater than or equal)
5 <= 4          // false (less than or equal)

// SPECIAL CASES
null == undefined    // true
null === undefined   // false
NaN == NaN          // false (use isNaN() instead)
0 == false          // true
"" == false         // true`}
                        </pre>
                      </div>

                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Logical and Assignment Operators</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`// LOGICAL OPERATORS
true && false       // false (AND)
true || false       // true (OR)
!true              // false (NOT)

// SHORT-CIRCUIT EVALUATION
0 && "hello"        // 0 (stops at first falsy)
"hello" || "world"  // "hello" (stops at first truthy)

// ASSIGNMENT OPERATORS
let x = 10;         // basic assignment
x += 5;             // x = x + 5 (15)
x -= 3;             // x = x - 3 (12)  
x *= 2;             // x = x * 2 (24)
x /= 4;             // x = x / 4 (6)
x %= 4;             // x = x % 4 (2)

// TERNARY OPERATOR
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";  // "Yes"`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Operator Precedence */}
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-center">📊 Operator Precedence</h3>
                    <p className="text-center mb-6 opacity-90">
                      JavaScript follows specific rules about which operations happen first. 
                      Use parentheses to make your intentions clear!
                    </p>
                    
                    <div className="bg-white bg-opacity-20 p-6 rounded">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-xl font-bold mb-3">High Precedence (happens first)</h4>
                          <div className="space-y-2 text-sm">
                            <div><code>()</code> - Grouping</div>
                            <div><code>[] .</code> - Member access</div>
                            <div><code>new</code> - Object creation</div>
                            <div><code>++ --</code> - Increment/Decrement</div>
                            <div><code>! ~</code> - Logical/Bitwise NOT</div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-3">Low Precedence (happens last)</h4>
                          <div className="space-y-2 text-sm">
                            <div><code>&&</code> - Logical AND</div>
                            <div><code>||</code> - Logical OR</div>
                            <div><code>=</code> - Assignment</div>
                            <div><code>,</code> - Comma operator</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 bg-black bg-opacity-30 p-4 rounded">
                        <h5 className="text-yellow-300 mb-2">Example:</h5>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`5 + 3 * 2          // 11 (multiplication first)
(5 + 3) * 2        // 16 (parentheses change order)

let a, b;
a = b = 5;         // Both become 5 (assignment right-to-left)
a = (b = 5);       // Same as above, but clearer`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Operator Best Practices */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Operator Best Practices</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Use strict equality (===)</strong> instead of loose equality (==)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Use parentheses</strong> to make precedence clear</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Avoid side effects</strong> in complex expressions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Use descriptive variable names</strong> instead of complex expressions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Break complex operations</strong> into multiple steps</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-blue-800 mb-4">🎯 Common Operator Pitfalls</h3>
                      <div className="bg-gray-800 text-white p-4 rounded mb-4">
                        <pre className="text-red-300 overflow-x-auto text-sm">
{`// COMMON MISTAKES TO AVOID
"5" + 2 = "52"         // String concatenation, not addition
null == undefined      // true (may be unexpected)
NaN === NaN           // false (always use isNaN())
[] == false           // true (type coercion)
0 == ""               // true (type coercion)

// BETTER APPROACHES
Number("5") + 2       // 7 (explicit conversion)
null === undefined    // false (strict comparison)
isNaN(NaN)            // true (proper NaN check)
[] === false          // false (strict comparison)
0 === ""              // false (strict comparison)`}
                        </pre>
                      </div>
                      <p className="text-sm text-gray-600">
                        <strong>Remember:</strong> When in doubt, be explicit about your types and use strict comparisons!
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Interactive Quiz */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
                  🧠 Test Your Knowledge: Syntax Quiz
                </h2>

                {!showQuiz ? (
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Test Your Syntax Skills?</h3>
                    <p className="mb-6 opacity-90 text-lg">
                      Take this quick quiz to see how well you've understood JavaScript syntax and rules!
                    </p>
                    <button 
                      onClick={resetQuiz}
                      className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg text-lg"
                    >
                      Start Quiz
                    </button>
                  </div>
                ) : (
                  <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-purple-800">
                        Question {currentQuestion + 1} of {quizQuestions.length}
                      </h3>
                      <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold">
                        Score: {quizScore}/{quizQuestions.length}
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg mb-6">
                      <h4 className="text-xl font-bold text-purple-800 mb-4">
                        {quizQuestions[currentQuestion].question}
                      </h4>
                      
                      <div className="space-y-3">
                        {quizQuestions[currentQuestion].options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => checkAnswer(index)}
                            className="w-full text-left p-4 bg-white border border-purple-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 transition"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    {currentQuestion > 0 && (
                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                        <p className="text-yellow-800">
                          <strong>Previous Explanation:</strong> {quizQuestions[currentQuestion - 1].explanation}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Quick Reference */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                  📋 JavaScript Syntax Quick Reference
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">🔤 Basic Rules</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span><strong>Case-sensitive:</strong> myVar ≠ myvar ≠ MYVAR</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span><strong>Statements end with semicolons</strong> (;)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span><strong>Use camelCase</strong> for variable names</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span><strong>Comments:</strong> // single-line, /* multi-line */</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span><strong>Whitespace is ignored</strong> (except in strings)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">🎯 Best Practices</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>Use const by default</strong>, let when needed</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>Always use ===</strong> instead of ==</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>Use descriptive variable names</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>Add semicolons consistently</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>Use parentheses for clarity</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">🚀 Next Steps</h3>
                  <p className="text-gray-700 mb-4">
                    You've learned the fundamental syntax and rules of JavaScript! These are the building blocks 
                    that will help you write clean, professional code. Remember: practice makes perfect!
                  </p>
                  <div className="bg-white p-4 rounded border">
                    <p className="text-sm text-gray-600 text-center">
                      <strong>Pro Tip:</strong> The more you code, the more these rules will become second nature. 
                      Don't worry about memorizing everything at once - you'll learn through practice!
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Final CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold mb-4">🚀 Ready to Write Real JavaScript?</h2>
                <p className="mb-6 opacity-90 text-lg">
                  You've mastered the syntax and rules. Now let's put them into practice with real programming concepts!
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <div className="text-2xl mb-2">📝</div>
                    <div className="font-semibold">Syntax Mastered</div>
                    <div className="text-sm opacity-80 mt-1">Rules & structure understood</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="font-semibold">Foundations Built</div>
                    <div className="text-sm opacity-80 mt-1">Ready for advanced concepts</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <div className="text-2xl mb-2">💪</div>
                    <div className="font-semibold">Confidence Gained</div>
                    <div className="text-sm opacity-80 mt-1">Prepared for real coding</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg">
                    Next: Control Flow Statements →
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition">
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
          border: 1px solid rgba(255,255,255,0.3);
        }
      `}</style>
    </CourseLayout>
  );
};

export default JavaScriptSyntaxAndRules;
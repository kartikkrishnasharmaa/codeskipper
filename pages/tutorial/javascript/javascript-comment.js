import { useState } from "react";
import CourseLayout from "@/components/layouts/JavascriptLayout";
import Head from "next/head";
import { motion } from "framer-motion";

const CommentsInJavaScript = () => {
  const [activeTab, setActiveTab] = useState("single");
  const [showDemo, setShowDemo] = useState(false);
  const [codeQuality, setCodeQuality] = useState("without");
  const [userComment, setUserComment] = useState("// This is a sample comment");
  const [generatedComment, setGeneratedComment] = useState("");

  const generateJSDoc = () => {
    const comments = {
      function: `/**
 * Calculates the area of a rectangle
 * @param {number} width - The width of the rectangle
 * @param {number} height - The height of the rectangle
 * @returns {number} The area of the rectangle
 * @throws {Error} If width or height are negative
 * @example
 * // returns 20
 * calculateArea(4, 5);
 */`,
      class: `/**
 * Represents a user in the system
 * @class
 * @param {string} name - The user's full name
 * @param {number} age - The user's age
 * @param {string} email - The user's email address
 */`,
      variable: `/**
 * API base URL for all network requests
 * @constant {string}
 * @default
 */`
    };
    setGeneratedComment(comments.function);
  };

  const codeExamples = {
    without: `function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].price && items[i].quantity) {
      total += items[i].price * items[i].quantity;
    }
  }
  return total;
}

function validateUser(user) {
  if (!user.name || user.name.trim() === '') {
    return false;
  }
  if (!user.email || !user.email.includes('@')) {
    return false;
  }
  if (user.age < 0 || user.age > 150) {
    return false;
  }
  return true;
}`,

    with: `/**
 * Calculates the total cost of items in a cart
 * @param {Array} items - Array of item objects with price and quantity
 * @returns {number} Total cost of all items
 * @throws {Error} If items is not an array
 */
function calculateTotal(items) {
  // Validate input
  if (!Array.isArray(items)) {
    throw new Error('Items must be an array');
  }
  
  let total = 0;
  
  // Sum up price * quantity for each item
  for (let i = 0; i < items.length; i++) {
    // Skip items without proper price/quantity
    if (items[i].price && items[i].quantity) {
      total += items[i].price * items[i].quantity;
    }
  }
  
  return total;
}

/**
 * Validates user object for required fields and format
 * @param {Object} user - User object to validate
 * @returns {boolean} True if user is valid, false otherwise
 */
function validateUser(user) {
  // Check name exists and is not empty
  if (!user.name || user.name.trim() === '') {
    return false;
  }
  
  // Validate email format
  if (!user.email || !user.email.includes('@')) {
    return false;
  }
  
  // Validate age range (reasonable bounds)
  if (user.age < 0 || user.age > 150) {
    return false;
  }
  
  return true;
}`
  };

  return (
    <CourseLayout>
      <Head>
        <title>JavaScript Comments: Complete Guide with Best Practices 2024 | Code Skipper</title>
        <meta
          name="description"
          content="Master JavaScript comments: single-line, multi-line, JSDoc. Learn comment best practices, when to comment, and tools for automatic documentation."
        />
        <meta
          name="keywords"
          content="javascript comments, jsdoc, code documentation, comment best practices, single line comments, multi line comments"
        />
        <meta property="og:title" content="JavaScript Comments: Complete Guide with Best Practices 2024" />
        <meta
          property="og:description"
          content="Learn professional JavaScript commenting techniques. Write cleaner, more maintainable code with proper documentation practices."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://codeskipper.in/javascript/comments" />
        <link rel="canonical" href="https://codeskipper.in/javascript/comments" />
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
                JavaScript Comments: Your Code's Conversation with the Future
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Learn how to write comments that make your code self-documenting, maintainable, and professional
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
              
              {/* The Importance of Comments */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                  💬 Why Comments Are Your Secret Superpower
                </h2>
                
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">Comments: The Bridge Between Code and Humans</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                      <div className="text-4xl mb-4">👥</div>
                      <h4 className="text-xl font-bold mb-2">Team Communication</h4>
                      <p className="text-sm opacity-90">Explain your thinking to other developers</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                      <div className="text-4xl mb-4">🕒</div>
                      <h4 className="text-xl font-bold mb-2">Future You</h4>
                      <p className="text-sm opacity-90">Remember why you wrote code 6 months later</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                      <div className="text-4xl mb-4">📚</div>
                      <h4 className="text-xl font-bold mb-2">Documentation</h4>
                      <p className="text-sm opacity-90">Generate automatic documentation</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Think of comments as <strong>post-it notes for your code</strong>. They don't change what the code 
                  does, but they explain the "why" behind the "what". Great comments turn confusing code into 
                  an understandable story that anyone (including future you) can follow.
                </p>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🎯 The Golden Rule of Comments</h4>
                  <p className="text-gray-700">
                    <strong>"Write comments that explain why you're doing something, not what you're doing."</strong> 
                    The code already shows what it does - comments should explain the reasoning, constraints, 
                    and business logic behind it.
                  </p>
                </div>
              </motion.div>

              {/* Comment Types Navigation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
                  📝 Types of JavaScript Comments
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <button
                    onClick={() => setActiveTab("single")}
                    className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 ${
                      activeTab === "single"
                        ? "border-blue-500 bg-blue-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-blue-300"
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-4xl mb-3 ${activeTab === "single" ? "text-blue-600" : "text-gray-400"}`}>
                        🔹
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${activeTab === "single" ? "text-blue-800" : "text-gray-700"}`}>
                        Single-Line
                      </h3>
                      <p className="text-sm text-gray-600">// Quick notes • Inline explanations</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab("multi")}
                    className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 ${
                      activeTab === "multi"
                        ? "border-green-500 bg-green-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-green-300"
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-4xl mb-3 ${activeTab === "multi" ? "text-green-600" : "text-gray-400"}`}>
                        📄
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${activeTab === "multi" ? "text-green-800" : "text-gray-700"}`}>
                        Multi-Line
                      </h3>
                      <p className="text-sm text-gray-600">/* Block comments */ • Detailed explanations</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab("jsdoc")}
                    className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 ${
                      activeTab === "jsdoc"
                        ? "border-purple-500 bg-purple-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-purple-300"
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-4xl mb-3 ${activeTab === "jsdoc" ? "text-purple-600" : "text-gray-400"}`}>
                        🏷️
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${activeTab === "jsdoc" ? "text-purple-800" : "text-gray-700"}`}>
                        JSDoc
                      </h3>
                      <p className="text-sm text-gray-600">Professional documentation • API generation</p>
                    </div>
                  </button>
                </div>
              </motion.div>

              {/* Single-Line Comments */}
              {activeTab === "single" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                    🔹 Single-Line Comments: The Quick Notes
                  </h2>

                  <div className="bg-blue-50 p-6 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">What Are Single-Line Comments?</h3>
                    <p className="text-gray-700 mb-6">
                      Single-line comments start with <code>//</code> and continue to the end of the line. 
                      They're perfect for brief explanations, TODOs, and inline clarifications.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-blue-700 mb-3">✅ Perfect For</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Quick explanations of complex lines</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>TODO notes and reminders</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Debugging temporary code</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Inline parameter descriptions</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-blue-700 mb-3">🎯 Best Practices</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Keep them brief and to the point</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Place comments above the code they explain</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Use consistent spacing and formatting</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Avoid obvious comments that repeat the code</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Single-Line Examples */}
                  <div className="bg-white border-2 border-blue-200 rounded-lg p-6 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">💡 Single-Line Comment Examples</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Basic Single-Line Comments</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`// Calculate total with tax
const total = subtotal * (1 + taxRate);

// Validate user input before processing
if (!username || username.trim() === '') {
    throw new Error('Username is required');
}

// Convert temperature from Celsius to Fahrenheit
const fahrenheit = celsius * 9/5 + 32;`}
                        </pre>
                      </div>

                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">TODO and FIXME Comments</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`// TODO: Implement input validation for special characters
// TODO: Add error handling for network failures
// FIXME: This calculation is off by 1px in Firefox
// HACK: Temporary workaround for API limitation

function processData(data) {
    // TODO: Optimize this algorithm for large datasets
    // BUG: Sometimes returns NaN for empty arrays
    
    return data.map(item => item * 2);
}`}
                        </pre>
                      </div>

                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Inline Comments (Use Sparingly)</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`const config = {
    apiUrl: 'https://api.example.com',  // Base URL for all API calls
    timeout: 5000,                      // Request timeout in milliseconds
    retries: 3,                         // Number of retry attempts
    cache: true                         // Enable response caching
};

// Good: Explains the "why" behind complex logic
const result = array
    .filter(item => item.active)        // Only process active items
    .map(item => transform(item))       // Apply transformation
    .reduce((acc, curr) => acc + curr, 0);  // Sum all values`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Single-Line Do's and Don'ts */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Do's</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Explain complex business logic</strong> that isn't obvious from the code</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Document edge cases</strong> and special handling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Use TODO comments</strong> to track future improvements</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Comment temporarily</strong> when debugging complex issues</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Keep comments updated</strong> when code changes</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Don'ts</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span><strong>Don't state the obvious</strong> - code should be self-explanatory</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span><strong>Avoid outdated comments</strong> that don't match the code</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span><strong>Don't use comments</strong> as an excuse for bad variable names</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span><strong>Avoid excessive commenting</strong> - let clean code speak for itself</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span><strong>Don't commit debugging comments</strong> meant for temporary use</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-800 mb-3">🎯 Professional Insight</h3>
                    <p className="text-gray-700">
                      <strong>The best comment is no comment.</strong> Strive to write code so clear and expressive 
                      that it doesn't need comments. Use meaningful variable names, break complex operations into 
                      smaller functions, and structure your code logically. When you do need comments, make them 
                      count by explaining the "why" behind non-obvious decisions.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Multi-Line Comments */}
              {activeTab === "multi" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
                    📄 Multi-Line Comments: The Detailed Explanations
                  </h2>

                  <div className="bg-green-50 p-6 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">What Are Multi-Line Comments?</h3>
                    <p className="text-gray-700 mb-6">
                      Multi-line comments start with <code>/*</code> and end with <code>*/</code>. They can span 
                      multiple lines and are perfect for detailed explanations, function headers, and temporarily 
                      disabling code blocks.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-green-700 mb-3">✅ Ideal Uses</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Detailed function descriptions</li>
                          <li>• Algorithm explanations</li>
                          <li>• File headers and copyright notices</li>
                          <li>• Temporarily commenting out code blocks</li>
                          <li>• Complex business logic documentation</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-green-700 mb-3">🎯 Formatting Tips</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Use consistent asterisk alignment</li>
                          <li>• Start with a brief summary line</li>
                          <li>• Leave blank lines between paragraphs</li>
                          <li>• Use proper grammar and punctuation</li>
                          <li>• Keep lines under 80 characters</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Multi-Line Examples */}
                  <div className="bg-white border-2 border-green-200 rounded-lg p-6 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">💡 Multi-Line Comment Examples</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">File Header Comments</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`/*
 * User Authentication Module
 * 
 * This module handles user registration, login, and session management.
 * It includes security features like password hashing and token validation.
 * 
 * @author John Doe
 * @version 1.2.0
 * @since 2023-01-15
 * @last-modified 2024-01-20
 */
 
// Module code starts here...`}
                        </pre>
                      </div>

                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Function Header Comments</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`/*
 * Calculates compound interest over time
 * 
 * This function uses the standard compound interest formula:
 * A = P(1 + r/n)^(nt)
 * 
 * Where:
 * A = final amount
 * P = principal amount
 * r = annual interest rate (as decimal)
 * n = number of times interest compounds per year
 * t = time in years
 * 
 * @param {number} principal - Initial investment amount
 * @param {number} rate - Annual interest rate (e.g., 0.05 for 5%)
 * @param {number} years - Investment period in years
 * @param {number} compoundsPerYear - Compounding frequency (default: 12)
 * @returns {number} Final amount after interest
 */
function calculateCompoundInterest(principal, rate, years, compoundsPerYear = 12) {
    return principal * Math.pow(1 + rate / compoundsPerYear, compoundsPerYear * years);
}`}
                        </pre>
                      </div>

                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Algorithm Explanations</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`/*
 * Implements the QuickSort algorithm for efficient array sorting
 * 
 * Steps:
 * 1. Choose a pivot element (here we use the last element)
 * 2. Partition the array around the pivot
 * 3. Recursively apply to sub-arrays
 * 
 * Time Complexity: O(n log n) average, O(n²) worst-case
 * Space Complexity: O(log n) due to recursion stack
 * 
 * This implementation uses Lomuto partition scheme
 */
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition the array and get pivot index
        const pivotIndex = partition(arr, low, high);
        
        // Recursively sort elements before and after partition
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}`}
                        </pre>
                      </div>

                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Code Block Commenting (Temporary)</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`function processUserData(user) {
    // Current implementation
    const processed = validateUser(user) ? transformUser(user) : null;
    return processed;
    
    /*
    // Old implementation - keeping for reference
    if (user.status === 'active') {
        const processed = {
            ...user,
            fullName: \`\${user.firstName} \${user.lastName}\`,
            lastActive: new Date()
        };
        return processed;
    } else {
        console.warn('Inactive user skipped:', user.id);
        return null;
    }
    */
}`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Multi-Line Best Practices */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-blue-800 mb-4">🏆 Professional Formatting</h3>
                      <div className="bg-gray-800 text-white p-4 rounded mb-4">
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`/*
 * Well-formatted multi-line comment
 * 
 * This is an example of professional comment formatting:
 * - Consistent asterisk alignment
 * - Blank line between paragraphs  
 * - Proper sentence structure
 * - Clear, concise explanations
 */
 
// vs poor formatting:

/* This is a poorly
formatted multi-line comment that
   has inconsistent spacing and doesn't
        follow any structure */`}
                        </pre>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Use proper indentation and alignment</li>
                        <li>• Start each line with an asterisk</li>
                        <li>• Leave one space after the asterisk</li>
                        <li>• Keep paragraphs focused and concise</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-purple-800 mb-4">🚀 Advanced Techniques</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span><strong>Section Headers:</strong> Use comments to organize large files</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span><strong>Visual Separators:</strong> Create clear boundaries between sections</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span><strong>Change Logs:</strong> Document significant modifications</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span><strong>Architecture Notes:</strong> Explain design decisions</span>
                        </li>
                      </ul>
                      
                      <div className="bg-gray-800 text-white p-3 rounded mt-4">
                        <pre className="text-green-300 overflow-x-auto text-xs">
{`// ======================
// DATABASE OPERATIONS
// ======================

/* 
 * CHANGE LOG:
 * 2024-01-15: Added connection pooling
 * 2024-01-10: Fixed memory leak in query execution
 * 2023-12-20: Initial implementation
 */`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* JSDoc Comments */}
              {activeTab === "jsdoc" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
                    🏷️ JSDoc: Professional Documentation
                  </h2>

                  <div className="bg-purple-50 p-6 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">What is JSDoc?</h3>
                    <p className="text-gray-700 mb-6">
                      JSDoc is a markup language used to annotate JavaScript code. Using specific comment blocks 
                      with <code>@tags</code>, you can generate comprehensive documentation automatically. 
                      It's the industry standard for professional JavaScript documentation.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-purple-700 mb-3">🎯 Benefits</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Automatic documentation generation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>IDE support and IntelliSense</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Type checking and validation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Team collaboration standards</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-purple-700 mb-3">🚀 Tools & Integration</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>VS Code IntelliSense</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>JSDoc documentation generator</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>TypeScript type checking</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>ESLint JSDoc rules</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* JSDoc Examples */}
                  <div className="bg-white border-2 border-purple-200 rounded-lg p-6 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">💡 JSDoc Examples & Patterns</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Function Documentation</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`/**
 * Formats a date object into a readable string
 * @param {Date} date - The date to format
 * @param {string} [format='YYYY-MM-DD'] - The format string
 * @returns {string} Formatted date string
 * @throws {TypeError} If date is not a valid Date object
 * @example
 * // returns "2023-12-25"
 * formatDate(new Date('2023-12-25'));
 * @example  
 * // returns "25/12/2023"
 * formatDate(new Date('2023-12-25'), 'DD/MM/YYYY');
 */
function formatDate(date, format = 'YYYY-MM-DD') {
    if (!(date instanceof Date) || isNaN(date)) {
        throw new TypeError('Invalid date object');
    }
    // Implementation here...
}`}
                        </pre>
                      </div>

                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Class Documentation</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`/**
 * Represents a user in the system
 * @class
 * @param {string} name - The user's full name
 * @param {number} age - The user's age
 * @param {string} email - The user's email address
 */
class User {
    /**
     * Creates a new User instance
     * @constructor
     * @param {string} name - The user's full name
     * @param {number} age - The user's age  
     * @param {string} email - The user's email address
     */
    constructor(name, age, email) {
        /** @member {string} */
        this.name = name;
        
        /** @member {number} */
        this.age = age;
        
        /** @member {string} */
        this.email = email;
    }
    
    /**
     * Sends a welcome email to the user
     * @returns {Promise<boolean>} True if email was sent successfully
     * @throws {Error} If email service is unavailable
     */
    async sendWelcomeEmail() {
        // Implementation...
    }
}`}
                        </pre>
                      </div>

                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">Type Definitions & Typedef</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`/**
 * @typedef {Object} UserProfile
 * @property {string} id - Unique user identifier
 * @property {string} username - User's display name
 * @property {string} email - User's email address
 * @property {Array<string>} roles - User's assigned roles
 * @property {Date} createdAt - Account creation date
 */

/**
 * Updates a user's profile information
 * @param {UserProfile} profile - The user profile to update
 * @param {Object} updates - The fields to update
 * @returns {Promise<UserProfile>} Updated user profile
 */
async function updateUserProfile(profile, updates) {
    // Implementation...
}`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Common JSDoc Tags */}
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-8 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-center">🏷️ Essential JSDoc Tags</h3>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white bg-opacity-20 p-6 rounded">
                        <h4 className="text-xl font-bold mb-3">Basic Tags</h4>
                        <div className="space-y-2 text-sm">
                          <div><code>@param</code> - Function parameters</div>
                          <div><code>@returns</code> - Return value</div>
                          <div><code>@throws</code> - Possible errors</div>
                          <div><code>@example</code> - Usage examples</div>
                        </div>
                      </div>
                      <div className="bg-white bg-opacity-20 p-6 rounded">
                        <h4 className="text-xl font-bold mb-3">Type Tags</h4>
                        <div className="space-y-2 text-sm">
                          <div><code>@type</code> - Variable types</div>
                          <div><code>@typedef</code> - Custom types</div>
                          <div><code>@property</code> - Object properties</div>
                          <div><code>@enum</code> - Enumerated values</div>
                        </div>
                      </div>
                      <div className="bg-white bg-opacity-20 p-6 rounded">
                        <h4 className="text-xl font-bold mb-3">Meta Tags</h4>
                        <div className="space-y-2 text-sm">
                          <div><code>@author</code> - Code author</div>
                          <div><code>@version</code> - Version info</div>
                          <div><code>@since</code> - Introduction version</div>
                          <div><code>@deprecated</code> - Deprecated features</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* JSDoc Generator */}
                  <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
                    <h3 className="text-2xl font-bold text-yellow-800 mb-4">⚡ JSDoc Comment Generator</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-yellow-700 mb-3">Generate JSDoc Template</h4>
                        <div className="space-y-3">
                          <button 
                            onClick={() => setGeneratedComment(`/**
 * Calculates the area of a rectangle
 * @param {number} width - The width of the rectangle
 * @param {number} height - The height of the rectangle
 * @returns {number} The area of the rectangle
 * @throws {Error} If width or height are negative
 * @example
 * // returns 20
 * calculateArea(4, 5);
 */`)}
                            className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition text-sm"
                          >
                            Function Template
                          </button>
                          <button 
                            onClick={() => setGeneratedComment(`/**
 * Represents a user in the system
 * @class
 * @param {string} name - The user's full name
 * @param {number} age - The user's age
 * @param {string} email - The user's email address
 */`)}
                            className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition text-sm"
                          >
                            Class Template
                          </button>
                          <button 
                            onClick={() => setGeneratedComment(`/**
 * API base URL for all network requests
 * @constant {string}
 * @default
 */`)}
                            className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition text-sm"
                          >
                            Constant Template
                          </button>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-yellow-700 mb-3">Generated JSDoc</h4>
                        <textarea
                          value={generatedComment}
                          onChange={(e) => setGeneratedComment(e.target.value)}
                          className="w-full h-40 bg-gray-800 text-green-300 font-mono p-3 rounded border border-gray-600 resize-none focus:outline-none focus:border-yellow-500 text-sm"
                          spellCheck="false"
                        />
                        <button 
                          onClick={() => navigator.clipboard.writeText(generatedComment)}
                          className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition mt-2 text-sm"
                        >
                          Copy to Clipboard
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Interactive Comparison */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-orange-200 pb-2">
                  ⚖️ See the Difference: Commented vs Uncommented Code
                </h2>

                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <div className="flex justify-center space-x-4 mb-6">
                    <button
                      onClick={() => setCodeQuality("without")}
                      className={`px-6 py-3 rounded-lg font-semibold transition ${
                        codeQuality === "without"
                          ? "bg-red-500 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      ❌ Without Comments
                    </button>
                    <button
                      onClick={() => setCodeQuality("with")}
                      className={`px-6 py-3 rounded-lg font-semibold transition ${
                        codeQuality === "with"
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      ✅ With Comments
                    </button>
                  </div>

                  <div className="bg-gray-900 text-white p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-yellow-300 font-mono">
                        {codeQuality === "without" ? "❌ Hard to Understand" : "✅ Easy to Understand"}
                      </span>
                      <button 
                        onClick={() => navigator.clipboard.writeText(codeExamples[codeQuality])}
                        className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                      >
                        Copy Code
                      </button>
                    </div>
                    <pre className="text-green-300 overflow-x-auto text-sm leading-relaxed">
                      {codeExamples[codeQuality]}
                    </pre>
                  </div>

                  <div className="mt-4 p-4 bg-white rounded border">
                    <h4 className="font-semibold text-orange-700 mb-2">
                      {codeQuality === "without" ? "🤔 What's Wrong Here?" : "🎯 Why This Works Better"}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {codeQuality === "without" ? (
                        <>
                          <li>• No explanation of what the functions do</li>
                          <li>• Magic numbers and unclear logic</li>
                          <li>• No parameter documentation</li>
                          <li>• Difficult for other developers to understand</li>
                          <li>• Hard to maintain and modify</li>
                        </>
                      ) : (
                        <>
                          <li>• Clear function purposes explained</li>
                          <li>• Parameter types and descriptions provided</li>
                          <li>• Complex logic broken down with comments</li>
                          <li>• Error handling documented</li>
                          <li>• Easy for team collaboration</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Best Practices Summary */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                  🏆 Professional Commenting Best Practices
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-green-500 to-blue-600 text-white p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">✅ What to Comment</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        <span><strong>Business logic</strong> and domain-specific rules</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        <span><strong>Complex algorithms</strong> and their explanations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        <span><strong>API endpoints</strong> and their expected behavior</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        <span><strong>Edge cases</strong> and special handling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        <span><strong>TODO items</strong> and future improvements</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-red-500 to-orange-600 text-white p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">❌ What to Avoid</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        <span><strong>Obvious code</strong> that explains itself</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        <span><strong>Outdated comments</strong> that don't match code</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        <span><strong>Excessive commenting</strong> of simple logic</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        <span><strong>Commented-out code</strong> in production</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        <span><strong>Redundant explanations</strong> of language features</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">🎯 The Commenting Mindset</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Think of your comments as a conversation with future developers</strong> (including yourself). 
                    Good comments answer the questions: "Why was this approach chosen?" and "What problem does this solve?" 
                    rather than "What does this code do?"
                  </p>
                  <div className="bg-white p-4 rounded border">
                    <p className="text-sm text-gray-600 text-center">
                      <strong>Remember:</strong> Code tells the computer what to do. Comments tell humans why.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Interactive Comment Practice */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
                  💡 Practice: Write Your Own Comments
                </h2>

                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-center">🎮 Interactive Comment Editor</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white bg-opacity-20 p-6 rounded">
                      <h4 className="text-xl font-bold mb-3">Code to Comment</h4>
                      <div className="bg-black bg-opacity-50 p-4 rounded font-mono text-sm mb-4">
                        {`function processOrder(items, taxRate, discount) {
    let subtotal = 0;
    for (let item of items) {
        if (item.available) {
            subtotal += item.price * item.quantity;
        }
    }
    
    const tax = subtotal * taxRate;
    const discountAmount = subtotal * discount;
    const total = subtotal + tax - discountAmount;
    
    if (total < 0) return 0;
    return Math.round(total * 100) / 100;
}`}
                      </div>
                      <p className="text-sm opacity-90">
                        Try writing comments that explain the business logic and any assumptions.
                      </p>
                    </div>

                    <div className="bg-white bg-opacity-20 p-6 rounded">
                      <h4 className="text-xl font-bold mb-3">Your Comments</h4>
                      <textarea
                        value={userComment}
                        onChange={(e) => setUserComment(e.target.value)}
                        className="w-full h-40 bg-black bg-opacity-50 text-white font-mono p-4 rounded border border-purple-300 resize-none focus:outline-none focus:border-purple-500 text-sm"
                        placeholder="Write your comments here..."
                        spellCheck="false"
                      />
                      <div className="flex space-x-2 mt-3">
                        <button 
                          onClick={() => setUserComment(`/**
 * Processes an order by calculating totals with tax and discount
 * @param {Array} items - Array of order items with price, quantity, and availability
 * @param {number} taxRate - Tax rate as decimal (e.g., 0.08 for 8%)
 * @param {number} discount - Discount rate as decimal (e.g., 0.1 for 10%)
 * @returns {number} Final order total, rounded to 2 decimal places
 * @throws {Error} If items is not an array
 */`)}
                          className="flex-1 bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition text-sm"
                        >
                          Show Example
                        </button>
                        <button 
                          onClick={() => setUserComment("// This is a sample comment")}
                          className="flex-1 bg-gray-500 text-white px-3 py-2 rounded hover:bg-gray-600 transition text-sm"
                        >
                          Clear
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Final Summary */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="text-center bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold mb-4">🚀 Master the Art of JavaScript Comments</h2>
                <p className="mb-6 opacity-90 text-lg">
                  You've learned how to transform your code from a mysterious puzzle into a well-documented story. 
                  Remember: great comments make great codebases!
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <div className="text-2xl mb-2">🔹</div>
                    <div className="font-semibold">Single-Line</div>
                    <div className="text-sm opacity-80 mt-1">Quick notes & TODOs</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <div className="text-2xl mb-2">📄</div>
                    <div className="font-semibold">Multi-Line</div>
                    <div className="text-sm opacity-80 mt-1">Detailed explanations</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <div className="text-2xl mb-2">🏷️</div>
                    <div className="font-semibold">JSDoc</div>
                    <div className="text-sm opacity-80 mt-1">Professional documentation</div>
                  </div>
                </div>

                <div className="bg-white bg-opacity-20 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-4">🌟 Key Takeaways</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-left">
                    <ul className="space-y-2">
                      <li>✅ Explain why, not what</li>
                      <li>✅ Use consistent formatting</li>
                      <li>✅ Keep comments up to date</li>
                      <li>✅ Write for future developers</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>✅ Use JSDoc for professional projects</li>
                      <li>✅ Comment complex business logic</li>
                      <li>✅ Avoid obvious statements</li>
                      <li>✅ Make code self-documenting first</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg">
                    Next: JavaScript Syntax & Rules →
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
      `}</style>
    </CourseLayout>
  );
};

export default CommentsInJavaScript;
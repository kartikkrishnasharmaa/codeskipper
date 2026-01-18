import { useState } from "react";
import CourseLayout from "@/components/layouts/JavascriptLayout";
import Head from "next/head";
import { motion } from "framer-motion";

const InlineInternalExternalJS = () => {
  const [activeTab, setActiveTab] = useState("inline");
  const [showDemo, setShowDemo] = useState(false);
  const [currentExample, setCurrentExample] = useState(1);

  const examples = {
    1: {
      title: "Simple Button Click",
      inline: `<!-- Inline JS -->
<button onclick="alert('Hello from inline JS!')">
  Click Me
</button>`,
      internal: `<!-- Internal JS -->
<button id="myButton">Click Me</button>

<script>
  document.getElementById('myButton').onclick = function() {
    alert('Hello from internal JS!');
  };
</script>`,
      external: `<!-- HTML File -->
<button id="myButton">Click Me</button>
<script src="script.js"></script>

// script.js (External File)
document.getElementById('myButton').onclick = function() {
  alert('Hello from external JS!');
};`
    },
    2: {
      title: "Form Validation",
      inline: `<!-- Inline JS -->
<form onsubmit="return validateForm()">
  <input type="email" id="email">
  <button type="submit">Submit</button>
</form>

<script>
function validateForm() {
  const email = document.getElementById('email').value;
  if (!email.includes('@')) {
    alert('Please enter a valid email!');
    return false;
  }
  return true;
}
</script>`,
      internal: `<!-- Internal JS -->
<form id="myForm">
  <input type="email" id="email">
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById('myForm').onsubmit = function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
      alert('Please enter a valid email!');
      return false;
    }
    alert('Form submitted successfully!');
    return true;
  };
</script>`,
      external: `<!-- HTML File -->
<form id="myForm">
  <input type="email" id="email">
  <button type="submit">Submit</button>
</form>
<script src="validation.js"></script>

// validation.js (External File)
document.getElementById('myForm').onsubmit = function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (!email.includes('@')) {
    alert('Please enter a valid email!');
    return false;
  }
  alert('Form submitted successfully!');
  return true;
};`
    },
    3: {
      title: "Dynamic Content Update",
      inline: `<!-- Inline JS -->
<div id="content">Original Content</div>
<button onclick="document.getElementById('content').innerHTML = 'Updated Content!'">
  Update Content
</button>`,
      internal: `<!-- Internal JS -->
<div id="content">Original Content</div>
<button id="updateBtn">Update Content</button>

<script>
  let clickCount = 0;
  document.getElementById('updateBtn').onclick = function() {
    clickCount++;
    document.getElementById('content').innerHTML = 
      'Updated! Click count: ' + clickCount;
  };
</script>`,
      external: `<!-- HTML File -->
<div id="content">Original Content</div>
<button id="updateBtn">Update Content</button>
<script src="content.js"></script>

// content.js (External File)
let clickCount = 0;
document.getElementById('updateBtn').onclick = function() {
  clickCount++;
  document.getElementById('content').innerHTML = 
    'Updated! Click count: ' + clickCount;
};`
    }
  };

  return (
    <CourseLayout>
      <Head>
        <title>Inline vs Internal vs External JavaScript: Complete Guide 2024 | Code Skipper</title>
        <meta
          name="description"
          content="Learn the differences between inline, internal, and external JavaScript. Understand when to use each method with practical examples and best practices."
        />
        <meta
          name="keywords"
          content="inline javascript, internal javascript, external javascript, javascript best practices, script tag placement"
        />
        <meta property="og:title" content="Inline vs Internal vs External JavaScript: Complete 2024 Guide" />
        <meta
          property="og:description"
          content="Master JavaScript implementation methods with real examples. Learn industry standards and when to use each approach in your projects."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://codeskipper.in/javascript/inline-internal-external" />
        <link rel="canonical" href="https://codeskipper.in/javascript/inline-internal-external" />
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
                Inline vs Internal vs External JavaScript: Choosing the Right Path
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover the three ways to add JavaScript to your web pages and learn which method professional developers use - and why
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
                  🎯 The Three Musketeers of JavaScript Implementation
                </h2>
                
                <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">Why Implementation Method Matters</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                      <div className="text-4xl mb-4">⚡</div>
                      <h4 className="text-xl font-bold mb-2">Performance</h4>
                      <p className="text-sm opacity-90">Affects page load speed</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                      <div className="text-4xl mb-4">🔧</div>
                      <h4 className="text-xl font-bold mb-2">Maintainability</h4>
                      <p className="text-sm opacity-90">Easy to update and debug</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                      <div className="text-4xl mb-4">🚀</div>
                      <h4 className="text-xl font-bold mb-2">Scalability</h4>
                      <p className="text-sm opacity-90">Grows with your project</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Think of adding JavaScript to a webpage like organizing your kitchen tools. You could keep everything 
                  in one messy drawer (inline), organize them in separate containers in the same kitchen (internal), 
                  or have a dedicated tool shed outside (external). Each approach has its time and place!
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">📚 Quick Overview</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white p-3 rounded border">
                      <strong>Inline JS:</strong> JavaScript inside HTML tags
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <strong>Internal JS:</strong> JavaScript in &lt;script&gt; tags
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <strong>External JS:</strong> JavaScript in separate .js files
                    </div>
                  </div>
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
                  🛠️ Explore Each Method in Detail
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <button
                    onClick={() => setActiveTab("inline")}
                    className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 ${
                      activeTab === "inline"
                        ? "border-red-500 bg-red-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-red-300"
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-4xl mb-3 ${activeTab === "inline" ? "text-red-600" : "text-gray-400"}`}>
                        🔥
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${activeTab === "inline" ? "text-red-800" : "text-gray-700"}`}>
                        Inline JavaScript
                      </h3>
                      <p className="text-sm text-gray-600">Quick & dirty • HTML attributes</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab("internal")}
                    className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 ${
                      activeTab === "internal"
                        ? "border-yellow-500 bg-yellow-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-yellow-300"
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-4xl mb-3 ${activeTab === "internal" ? "text-yellow-600" : "text-gray-400"}`}>
                        🏠
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${activeTab === "internal" ? "text-yellow-800" : "text-gray-700"}`}>
                        Internal JavaScript
                      </h3>
                      <p className="text-sm text-gray-600">Same file • &lt;script&gt; tags</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab("external")}
                    className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 ${
                      activeTab === "external"
                        ? "border-green-500 bg-green-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-green-300"
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-4xl mb-3 ${activeTab === "external" ? "text-green-600" : "text-gray-400"}`}>
                        🌐
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${activeTab === "external" ? "text-green-800" : "text-gray-700"}`}>
                        External JavaScript
                      </h3>
                      <p className="text-sm text-gray-600">Separate files • Professional</p>
                    </div>
                  </button>
                </div>
              </motion.div>

              {/* Inline JavaScript Section */}
              {activeTab === "inline" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-red-200 pb-2">
                    🔥 Inline JavaScript: The Quick Fix
                  </h2>

                  <div className="bg-red-50 p-6 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold text-red-800 mb-4">What is Inline JavaScript?</h3>
                    <p className="text-gray-700 mb-6">
                      Inline JavaScript is code written directly inside HTML element attributes. It's the fastest 
                      way to add interactivity, but comes with significant limitations for larger projects.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-red-700 mb-3">✅ When to Use</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Quick prototypes and experiments</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Simple one-off interactions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Learning and testing concepts</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-red-700 mb-3">🚫 When to Avoid</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span>Large projects</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span>Code that needs maintenance</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span>Team collaborations</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Inline JavaScript Examples */}
                  <div className="bg-white border-2 border-red-200 rounded-lg p-6 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">💡 Common Inline JavaScript Patterns</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">onclick Attribute</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`<button onclick="alert('Button clicked!')">
  Click Me
</button>

<!-- With function call -->
<button onclick="handleClick()">
  Click Me
</button>

<script>
function handleClick() {
  alert('Button clicked via function!');
}
</script>`}
                        </pre>
                      </div>

                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">onmouseover/onmouseout</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`<div 
  onmouseover="this.style.backgroundColor='yellow'" 
  onmouseout="this.style.backgroundColor='white'"
>
  Hover over me!
</div>`}
                        </pre>
                      </div>

                      <div className="bg-gray-800 text-white p-4 rounded">
                        <h4 className="text-yellow-300 mb-3">onsubmit for Forms</h4>
                        <pre className="text-green-300 overflow-x-auto text-sm">
{`<form onsubmit="return validateForm()">
  <input type="text" id="name" required>
  <button type="submit">Submit</button>
</form>

<script>
function validateForm() {
  const name = document.getElementById('name').value;
  if (name === '') {
    alert('Name is required!');
    return false;
  }
  return true;
}
</script>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Pros and Cons */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-green-800 mb-4">👍 Advantages</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Quick Implementation:</strong> No separate files needed</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Easy to Understand:</strong> Code is right where it's used</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Good for Prototyping:</strong> Fast way to test ideas</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>No External Dependencies:</strong> Everything in one place</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-red-800 mb-4">👎 Disadvantages</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span><strong>Poor Maintainability:</strong> Hard to update and debug</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span><strong>Code Duplication:</strong> Can't reuse code easily</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span><strong>Mixes Concerns:</strong> HTML and JavaScript combined</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span><strong>Security Risks:</strong> Vulnerable to XSS attacks</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span><strong>Not Scalable:</strong> Breaks down in large projects</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-800 mb-3">🎯 Professional Advice</h3>
                    <p className="text-gray-700">
                      <strong>Use inline JavaScript sparingly.</strong> While it's great for learning and quick tests, 
                      professional developers avoid it in production code. It violates the principle of "separation of concerns" 
                      and makes your code difficult to maintain. Think of it as training wheels - helpful when you're starting, 
                      but you'll want to remove them as you become more proficient.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Internal JavaScript Section */}
              {activeTab === "internal" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-yellow-200 pb-2">
                    🏠 Internal JavaScript: The Balanced Approach
                  </h2>

                  <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold text-yellow-800 mb-4">What is Internal JavaScript?</h3>
                    <p className="text-gray-700 mb-6">
                      Internal JavaScript is code placed within <code>&lt;script&gt;</code> tags in the same HTML file. 
                      It separates your JavaScript from HTML while keeping everything in one place - perfect for 
                      small to medium projects.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-yellow-700 mb-3">✅ Perfect For</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Small to medium websites</li>
                          <li>• Single-page applications</li>
                          <li>• Learning projects</li>
                          <li>• Quick prototypes</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-yellow-700 mb-3">🎯 Best Practices</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Place scripts at end of body</li>
                          <li>• Use event listeners</li>
                          <li>• Keep JavaScript organized</li>
                          <li>• Add comments for clarity</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Internal JavaScript Structure */}
                  <div className="bg-white border-2 border-yellow-200 rounded-lg p-6 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">🏗️ Internal JavaScript Structure</h3>
                    
                    <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-yellow-300 font-mono text-sm">index.html</span>
                        <button 
                          onClick={() => {
                            const code = document.getElementById('internal-structure').textContent;
                            navigator.clipboard.writeText(code);
                            alert('Code copied to clipboard!');
                          }}
                          className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                        >
                          Copy Code
                        </button>
                      </div>
                      <pre id="internal-structure" className="text-green-300 overflow-x-auto text-sm leading-relaxed">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal JavaScript Example</title>
    <style>
        /* CSS goes here */
        .container { max-width: 800px; margin: 0 auto; padding: 20px; }
        button { padding: 10px 20px; margin: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Internal JavaScript Demo</h1>
        <button id="btn1">Button 1</button>
        <button id="btn2">Button 2</button>
        <div id="output">Click a button!</div>
    </div>

    <!-- Internal JavaScript -->
    <script>
        // Wait for DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Get DOM elements
            const btn1 = document.getElementById('btn1');
            const btn2 = document.getElementById('btn2');
            const output = document.getElementById('output');
            
            let clickCount = 0;
            
            // Add event listeners
            btn1.addEventListener('click', function() {
                clickCount++;
                output.innerHTML = \`Button 1 clicked! Total clicks: \${clickCount}\`;
                this.style.background = '#4CAF50';
                this.style.color = 'white';
            });
            
            btn2.addEventListener('click', function() {
                clickCount++;
                output.innerHTML = \`Button 2 clicked! Total clicks: \${clickCount}\`;
                this.style.background = '#2196F3';
                this.style.color = 'white';
            });
            
            // Additional functionality
            function resetCounter() {
                clickCount = 0;
                output.innerHTML = 'Counter reset! Click a button to start counting.';
                btn1.style.background = '';
                btn2.style.background = '';
            }
            
            // Add reset functionality after 10 seconds
            setTimeout(() => {
                const resetBtn = document.createElement('button');
                resetBtn.textContent = 'Reset Counter';
                resetBtn.onclick = resetCounter;
                resetBtn.style.background = '#ff9800';
                resetBtn.style.color = 'white';
                document.querySelector('.container').appendChild(resetBtn);
            }, 10000);
        });
        
        // Global function (can be called from inline JS if needed)
        function globalFunction() {
            console.log('This function is available everywhere in this file');
        }
    </script>
</body>
</html>`}
                      </pre>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-4 rounded border">
                        <h4 className="font-semibold text-blue-800 mb-3">📝 Key Features</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li><strong>DOMContentLoaded:</strong> Ensures DOM is ready</li>
                          <li><strong>Event Listeners:</strong> Modern event handling</li>
                          <li><strong>Modular Code:</strong> Organized in functions</li>
                          <li><strong>Global Scope:</strong> Functions available everywhere</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-4 rounded border">
                        <h4 className="font-semibold text-purple-800 mb-3">🚀 Advanced Tips</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Use IIFE to avoid global pollution</li>
                          <li>• Separate concerns with modules</li>
                          <li>• Add error handling with try/catch</li>
                          <li>• Use modern ES6+ features</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Script Placement */}
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-8 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-center">📍 Script Placement Matters</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white bg-opacity-20 p-6 rounded">
                        <h4 className="text-xl font-bold mb-3">❌ In Head (Blocking)</h4>
                        <div className="bg-black bg-opacity-30 p-4 rounded font-mono text-sm">
                          {`<head>
  <script>
    // This blocks page rendering!
    document.getElementById('element') // ERROR: null
  </script>
</head>
<body>
  <div id="element">Content</div>
</body>`}
                        </div>
                        <p className="text-sm opacity-90 mt-2">Script runs before DOM is ready → elements not found</p>
                      </div>

                      <div className="bg-white bg-opacity-20 p-6 rounded">
                        <h4 className="text-xl font-bold mb-3">✅ End of Body (Recommended)</h4>
                        <div className="bg-black bg-opacity-30 p-4 rounded font-mono text-sm">
                          {`<body>
  <div id="element">Content</div>
  
  <script>
    // DOM is ready!
    document.getElementById('element') // WORKS ✓
  </script>
</body>`}
                        </div>
                        <p className="text-sm opacity-90 mt-2">DOM is fully loaded → all elements available</p>
                      </div>
                    </div>
                  </div>

                  {/* Pros and Cons */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-green-800 mb-4">👍 Advantages</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Separation of Concerns:</strong> HTML and JS separated</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Better Organization:</strong> Code in one place</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Easier Debugging:</strong> All code visible in one file</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span><strong>Faster Development:</strong> No file switching</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-red-800 mb-4">👎 Disadvantages</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span><strong>Limited Reusability:</strong> Can't share across pages</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span><strong>File Size:</strong> HTML file becomes larger</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span><strong>No Caching:</strong> JavaScript can't be cached separately</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span><strong>Scalability Issues:</strong> Hard to manage in large projects</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* External JavaScript Section */}
              {activeTab === "external" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
                    🌐 External JavaScript: The Professional Standard
                  </h2>

                  <div className="bg-green-50 p-6 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">What is External JavaScript?</h3>
                    <p className="text-gray-700 mb-6">
                      External JavaScript means placing your code in separate <code>.js</code> files and linking 
                      them to your HTML using the <code>&lt;script src&gt;</code> attribute. This is the industry 
                      standard for professional web development.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-green-700 mb-3">🏆 Industry Standard</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Used by 99% of professional projects</li>
                          <li>• Recommended by all major frameworks</li>
                          <li>• Essential for team development</li>
                          <li>• Required for large applications</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-green-700 mb-3">🚀 Performance Benefits</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Browser caching</li>
                          <li>• Parallel downloading</li>
                          <li>• Code splitting</li>
                          <li>• Better compression</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Project Structure */}
                  <div className="bg-white border-2 border-green-200 rounded-lg p-6 mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">🏗️ Professional Project Structure</h3>
                    
                    <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
                      <div className="text-yellow-300 font-mono mb-4">project/</div>
                      <div className="ml-4 space-y-2">
                        <div className="text-green-300">📁 css/</div>
                        <div className="ml-4 text-blue-300">📄 style.css</div>
                        <div className="ml-4 text-blue-300">📄 responsive.css</div>
                        
                        <div className="text-green-300">📁 js/</div>
                        <div className="ml-4 text-blue-300">📄 app.js <span className="text-gray-400"># Main application</span></div>
                        <div className="ml-4 text-blue-300">📄 utils.js <span className="text-gray-400"># Helper functions</span></div>
                        <div className="ml-4 text-blue-300">📄 api.js <span className="text-gray-400"># API interactions</span></div>
                        <div className="ml-4 text-blue-300">📄 components/ <span className="text-gray-400"># Reusable components</span></div>
                        
                        <div className="text-green-300">📁 images/</div>
                        <div className="text-green-300">📄 index.html</div>
                        <div className="text-green-300">📄 about.html</div>
                        <div className="text-green-300">📄 package.json</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-4 rounded border">
                        <h4 className="font-semibold text-blue-800 mb-3">📄 HTML File (index.html)</h4>
                        <div className="bg-gray-800 text-white p-4 rounded font-mono text-sm">
{`<!DOCTYPE html>
<html>
<head>
    <title>My App</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div id="app"></div>
    
    <!-- External JavaScript -->
    <script src="js/utils.js"></script>
    <script src="js/api.js"></script>
    <script src="js/app.js"></script>
</body>
</html>`}
                        </div>
                      </div>

                      <div className="bg-purple-50 p-4 rounded border">
                        <h4 className="font-semibold text-purple-800 mb-3">⚡ JavaScript File (app.js)</h4>
                        <div className="bg-gray-800 text-white p-4 rounded font-mono text-sm">
{`// app.js - Main application logic

import { fetchData } from './api.js';
import { formatDate, validateEmail } from './utils.js';

class App {
    constructor() {
        this.init();
    }
    
    async init() {
        await this.loadData();
        this.setupEventListeners();
    }
    
    async loadData() {
        try {
            const data = await fetchData();
            this.render(data);
        } catch (error) {
            console.error('Failed to load data:', error);
        }
    }
    
    render(data) {
        // Render UI with data
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new App();
});`}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modern ES6 Modules */}
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-8 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-center">📦 Modern ES6 Modules</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white bg-opacity-20 p-6 rounded">
                        <h4 className="text-xl font-bold mb-3">math.js (Module)</h4>
                        <div className="bg-black bg-opacity-30 p-4 rounded font-mono text-sm">
{`// Export individual functions
export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

// Export default
export default class Calculator {
    static PI = 3.14159;
}`}
                        </div>
                      </div>

                      <div className="bg-white bg-opacity-20 p-6 rounded">
                        <h4 className="text-xl font-bold mb-3">app.js (Importing)</h4>
                        <div className="bg-black bg-opacity-30 p-4 rounded font-mono text-sm">
{`// Import specific functions
import { add, multiply } from './math.js';

// Import default
import Calculator from './math.js';

// Use imported code
console.log(add(2, 3)); // 5
console.log(Calculator.PI); // 3.14159`}
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-500 bg-opacity-20 p-4 rounded mt-4 text-center">
                      <p className="text-yellow-200">
                        <strong>HTML Usage:</strong> Add <code>type="module"</code> to script tag: <code>&lt;script type="module" src="app.js"&gt;&lt;/script&gt;</code>
                      </p>
                    </div>
                  </div>

                  {/* Advanced Features */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-indigo-800 mb-4">🚀 Advanced Features</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          <span><strong>Code Splitting:</strong> Load only what's needed</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          <span><strong>Tree Shaking:</strong> Remove unused code</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          <span><strong>Lazy Loading:</strong> Load code on demand</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          <span><strong>Module Bundling:</strong> Combine files efficiently</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          <span><strong>Hot Reloading:</strong> See changes instantly</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-teal-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-teal-800 mb-4">🏆 Professional Benefits</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">✓</span>
                          <span><strong>Team Collaboration:</strong> Multiple developers can work simultaneously</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">✓</span>
                          <span><strong>Version Control:</strong> Track changes to specific files</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">✓</span>
                          <span><strong>Code Reuse:</strong> Share code between projects</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">✓</span>
                          <span><strong>Better Testing:</strong> Test individual modules</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">✓</span>
                          <span><strong>Performance Optimization:</strong> Advanced caching strategies</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Best Practices */}
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-800 mb-3">🎯 External JavaScript Best Practices</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 mb-2">File Organization</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Group related functionality</li>
                          <li>• Use descriptive file names</li>
                          <li>• Separate concerns (UI, data, utils)</li>
                          <li>• Create modules for reusability</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 mb-2">Performance</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Minimize and compress files</li>
                          <li>• Use async/defer attributes</li>
                          <li>• Implement code splitting</li>
                          <li>• Leverage browser caching</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Comparison Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
                  ⚖️ The Ultimate Comparison
                </h2>

                <div className="bg-white border-2 border-purple-200 rounded-lg overflow-hidden mb-8">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-purple-500 text-white">
                        <th className="p-4 text-left">Feature</th>
                        <th className="p-4 text-center">Inline</th>
                        <th className="p-4 text-center">Internal</th>
                        <th className="p-4 text-center">External</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-gray-50">
                        <td className="p-4 font-semibold">Code Organization</td>
                        <td className="p-4 text-center text-red-500">❌ Poor</td>
                        <td className="p-4 text-center text-yellow-500">🟡 Good</td>
                        <td className="p-4 text-center text-green-500">✅ Excellent</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-semibold">Reusability</td>
                        <td className="p-4 text-center text-red-500">❌ None</td>
                        <td className="p-4 text-center text-yellow-500">🟡 Limited</td>
                        <td className="p-4 text-center text-green-500">✅ High</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="p-4 font-semibold">Maintainability</td>
                        <td className="p-4 text-center text-red-500">❌ Difficult</td>
                        <td className="p-4 text-center text-yellow-500">🟡 Moderate</td>
                        <td className="p-4 text-center text-green-500">✅ Easy</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-semibold">Performance</td>
                        <td className="p-4 text-center text-yellow-500">🟡 Mixed</td>
                        <td className="p-4 text-center text-yellow-500">🟡 Good</td>
                        <td className="p-4 text-center text-green-500">✅ Best</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="p-4 font-semibold">Team Collaboration</td>
                        <td className="p-4 text-center text-red-500">❌ Poor</td>
                        <td className="p-4 text-center text-yellow-500">🟡 Moderate</td>
                        <td className="p-4 text-center text-green-500">✅ Excellent</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-semibold">Learning Curve</td>
                        <td className="p-4 text-center text-green-500">✅ Easy</td>
                        <td className="p-4 text-center text-green-500">✅ Easy</td>
                        <td className="p-4 text-center text-yellow-500">🟡 Moderate</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-4 font-semibold">Professional Use</td>
                        <td className="p-4 text-center text-red-500">❌ Avoid</td>
                        <td className="p-4 text-center text-yellow-500">🟡 Sometimes</td>
                        <td className="p-4 text-center text-green-500">✅ Always</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-center">🎯 When to Use Each Method</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white bg-opacity-20 p-4 rounded text-center">
                      <h4 className="text-xl font-bold mb-3">Inline JS</h4>
                      <ul className="text-sm space-y-2 opacity-90">
                        <li>• Quick prototypes</li>
                        <li>• Learning experiments</li>
                        <li>• One-off interactions</li>
                        <li>• Simple demos</li>
                      </ul>
                    </div>
                    <div className="bg-white bg-opacity-20 p-4 rounded text-center">
                      <h4 className="text-xl font-bold mb-3">Internal JS</h4>
                      <ul className="text-sm space-y-2 opacity-90">
                        <li>• Small websites</li>
                        <li>• Single-page apps</li>
                        <li>• Personal projects</li>
                        <li>• Quick deployments</li>
                      </ul>
                    </div>
                    <div className="bg-white bg-opacity-20 p-4 rounded text-center">
                      <h4 className="text-xl font-bold mb-3">External JS</h4>
                      <ul className="text-sm space-y-2 opacity-90">
                        <li>• Professional projects</li>
                        <li>• Team collaborations</li>
                        <li>• Large applications</li>
                        <li>• Production websites</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Interactive Examples */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-orange-200 pb-2">
                  💡 See the Difference: Interactive Examples
                </h2>

                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-orange-800">Example: {examples[currentExample].title}</h3>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setCurrentExample(Math.max(1, currentExample - 1))}
                        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
                        disabled={currentExample === 1}
                      >
                        Previous
                      </button>
                      <button 
                        onClick={() => setCurrentExample(Math.min(3, currentExample + 1))}
                        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
                        disabled={currentExample === 3}
                      >
                        Next
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-red-700 mb-3 text-center">Inline</h4>
                      <pre className="bg-gray-800 text-green-300 p-3 rounded text-sm overflow-x-auto h-40">
                        {examples[currentExample].inline}
                      </pre>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-yellow-700 mb-3 text-center">Internal</h4>
                      <pre className="bg-gray-800 text-green-300 p-3 rounded text-sm overflow-x-auto h-40">
                        {examples[currentExample].internal}
                      </pre>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-green-700 mb-3 text-center">External</h4>
                      <pre className="bg-gray-800 text-green-300 p-3 rounded text-sm overflow-x-auto h-40">
                        {examples[currentExample].external}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button 
                    onClick={() => setShowDemo(!showDemo)}
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
                  >
                    {showDemo ? "Hide Live Demo" : "Show Live Demo"}
                  </button>
                </div>

                {showDemo && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-6 bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-center">🎮 Live Demo</h3>
                    <div className="bg-white bg-opacity-20 p-6 rounded text-center">
                      <p className="mb-4">This button uses external JavaScript to demonstrate the concepts:</p>
                      <button 
                        onClick={() => alert('This alert is triggered by external JavaScript!')}
                        className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        Click to See External JS in Action
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Final Recommendations */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold mb-4">🚀 Your JavaScript Implementation Journey</h2>
                <p className="mb-6 opacity-90 text-lg">
                  Start with inline for learning, graduate to internal for small projects, and master external 
                  for professional development. Each method has its place in your growth as a JavaScript developer!
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <div className="text-2xl mb-2">🎓</div>
                    <div className="font-semibold">Beginner Phase</div>
                    <div className="text-sm opacity-80 mt-1">Inline & Internal</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <div className="text-2xl mb-2">🚀</div>
                    <div className="font-semibold">Intermediate Phase</div>
                    <div className="text-sm opacity-80 mt-1">Internal & External</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <div className="text-2xl mb-2">🏆</div>
                    <div className="font-semibold">Professional Phase</div>
                    <div className="text-sm opacity-80 mt-1">External & Modules</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg">
                    Next: JavaScript Comments →
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

export default InlineInternalExternalJS;
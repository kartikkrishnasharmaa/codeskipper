import { useState } from "react";
import CourseLayout from "@/components/layouts/JavascriptLayout";
import Head from "next/head";
import { motion } from "framer-motion";

const HistoryOfJavaScript = () => {
  const [timelineYear, setTimelineYear] = useState(1995);

  return (
    <CourseLayout>
      <Head>
        <title>JavaScript History & Evolution: From 1995 to 2024 | Code Skipper</title>
        <meta
          name="description"
          content="Discover the fascinating journey of JavaScript - from 10-day creation to world's most popular language. Learn about key milestones, versions, and future trends."
        />
        <meta
          name="keywords"
          content="javascript history, evolution of javascript, es6, ecmascript, brendan eich, web development history"
        />
        <meta property="og:title" content="JavaScript History & Evolution: Complete Timeline Guide" />
        <meta
          property="og:description"
          content="Explore how JavaScript transformed from simple scripting to full-stack development power. Perfect for developers understanding language foundations."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://codeskipper.in/javascript/history" />
        <link rel="canonical" href="https://codeskipper.in/javascript/history" />
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
                The Incredible JavaScript Journey: From 10 Days to Global Dominance
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                How a "temporary solution" built in 10 days became the most important programming language of our time
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
              
              {/* The Birth Story */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                  The 10-Day Miracle That Changed the Web Forever
                </h2>
                
                <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4 text-lg">
                      In 1995, the web is like a beautiful library with stunning books (websites) 
                      that you can only look at, not interact with. Netscape Communications, the company behind the 
                      popular Netscape Navigator browser, realized they needed to make the web <strong>alive</strong>.
                    </p>
                    <p className="text-gray-700 mb-4">
                      They hired <strong>Brendan Eich</strong>, a talented programmer, and gave him an impossible task: 
                      <em>"Create a scripting language for the web. And you have 10 days to do it."</em>
                    </p>
                    <p className="text-gray-700">
                      What happened next was like a programming version of a superhero origin story. Brendan locked himself away, 
                      and in May 1995, emerged with a language originally called "Mocha," then "LiveScript," and finally 
                      "JavaScript" - a marketing decision that would confuse beginners for decades to come.
                    </p>
                  </div>
                  <div className="md:w-1/3 bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
                    <h4 className="font-bold text-yellow-800 text-lg mb-3">🚀 Fast Facts:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li><strong>Created:</strong> May 1995</li>
                      <li><strong>Creator:</strong> Brendan Eich</li>
                      <li><strong>First Name:</strong> Mocha</li>
                      <li><strong>Development Time:</strong> 10 days</li>
                      <li><strong>First Browser:</strong> Netscape Navigator 2.0</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-8">
                  <h4 className="font-semibold text-blue-800 mb-2">Why the Java-like Name?</h4>
                  <p className="text-gray-700">
                    Java was the "cool kid" in 1995. Netscape wanted to ride that popularity wave, so they named their 
                    new language "JavaScript" even though it had almost nothing to do with Java. It's like naming a new 
                    fruit "Apple Orange" just because apples were popular at the time!
                  </p>
                </div>
              </motion.div>

              {/* Interactive Timeline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                  The Rollercoaster Ride: JavaScript Through the Years
                </h2>

                {/* Timeline Navigation */}
                <div className="flex overflow-x-auto gap-2 mb-8 pb-4">
                  {[1995, 1996, 1997, 1999, 2005, 2009, 2015, 2016, 2020, 2023].map((year) => (
                    <button
                      key={year}
                      onClick={() => setTimelineYear(year)}
                      className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                        timelineYear === year
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>

                {/* Timeline Content */}
                <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                  {timelineYear === 1995 && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">1995 - The Birth</h3>
                      <p className="text-gray-700 mb-4">
                        <strong>Brendan Eich creates JavaScript in 10 days</strong> while working at Netscape. 
                        Originally called "Mocha," it gets renamed to "LiveScript" and finally "JavaScript" to 
                        capitalize on Java's popularity.
                      </p>
                      <div className="bg-yellow-100 p-4 rounded border-l-4 border-yellow-500">
                        <p className="text-sm text-gray-700">
                          <strong>Fun Fact:</strong> The first version was so basic it didn't even have arrays as we know them today. 
                          Developers had to use objects with number properties!
                        </p>
                      </div>
                    </div>
                  )}

                  {timelineYear === 1996 && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">1996 - Microsoft Joins the Party</h3>
                      <p className="text-gray-700 mb-4">
                        Microsoft reverse-engineered JavaScript to create "JScript" for Internet Explorer 3.0. 
                        This began the first browser wars and compatibility issues that would plague developers for years.
                      </p>
                    </div>
                  )}

                  {timelineYear === 1997 && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">1997 - Standardization Begins</h3>
                      <p className="text-gray-700 mb-4">
                        JavaScript was submitted to ECMA International, leading to the first official standard: 
                        <strong>ECMAScript 1 (ES1)</strong>. This was crucial for making JavaScript work consistently across browsers.
                      </p>
                    </div>
                  )}

                  {timelineYear === 1999 && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">1999 - ES3: The Game Changer</h3>
                      <p className="text-gray-700 mb-4">
                        <strong>ECMAScript 3</strong> introduced regular expressions, better string handling, 
                        try/catch exception handling, and more. This version became the foundation that would 
                        power the web for the next 15+ years.
                      </p>
                    </div>
                  )}

                  {timelineYear === 2005 && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">2005 - AJAX Revolution</h3>
                      <p className="text-gray-700 mb-4">
                        Google Maps and Gmail showed the world what JavaScript could really do. 
                        <strong>AJAX (Asynchronous JavaScript and XML)</strong> allowed web pages to update 
                        without reloading, creating desktop-like experiences in the browser.
                      </p>
                      <div className="bg-green-100 p-4 rounded border-l-4 border-green-500">
                        <p className="text-sm text-gray-600">
                          <strong>Impact:</strong> This was when developers stopped seeing JavaScript as just 
                          "that language for form validation" and started taking it seriously.
                        </p>
                      </div>
                    </div>
                  )}

                  {timelineYear === 2009 && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">2009 - Node.js & ES5</h3>
                      <p className="text-gray-700 mb-4">
                        Two massive developments: <strong>Node.js</strong> allowed JavaScript to run on servers, 
                        and <strong>ECMAScript 5</strong> added strict mode, JSON support, and better array methods.
                      </p>
                      <p className="text-gray-700">
                        Suddenly, JavaScript wasn't just for browsers anymore. You could build entire applications 
                        using only JavaScript - frontend and backend!
                      </p>
                    </div>
                  )}

                  {timelineYear === 2015 && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">2015 - The Modern Era: ES6</h3>
                      <p className="text-gray-700 mb-4">
                        <strong>ECMAScript 2015 (ES6)</strong> was the biggest update in JavaScript history. 
                        It introduced:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                        <li>Arrow functions <code>() =&gt; {`{}`}</code></li>
                        <li>Classes and modules</li>
                        <li>let/const variables</li>
                        <li>Template literals</li>
                        <li>Destructuring</li>
                        <li>Promises</li>
                      </ul>
                      <div className="bg-purple-100 text-gray-600 p-4 rounded border-l-4 border-purple-500">
                        <p className="text-sm">
                          <strong>Developer Reaction:</strong> "This feels like a completely new language!" - 
                          Every JavaScript developer in 2015
                        </p>
                      </div>
                    </div>
                  )}

                  {timelineYear === 2016 && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">2016 - Framework Explosion</h3>
                      <p className="text-gray-700 mb-4">
                        React, Angular, and Vue.js became mainstream, changing how we build web applications. 
                        TypeScript also started gaining significant adoption.
                      </p>
                    </div>
                  )}

                  {timelineYear === 2020 && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">2020 - ES2020 & Beyond</h3>
                      <p className="text-gray-700 mb-4">
                        JavaScript continued evolving with annual updates. ES2020 introduced:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Optional chaining <code>user?.address?.city</code></li>
                        <li>Nullish coalescing <code>??</code></li>
                        <li>BigInt for large numbers</li>
                        <li>Dynamic imports</li>
                      </ul>
                    </div>
                  )}

                  {timelineYear === 2023 && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">2023 - Present Day</h3>
                      <p className="text-gray-700 mb-4">
                        JavaScript powers over 98% of websites. It's used for:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Web applications (frontend and backend)</li>
                        <li>Mobile apps (React Native, Ionic)</li>
                        <li>Desktop apps (Electron)</li>
                        <li>Machine learning (TensorFlow.js)</li>
                        <li>Internet of Things (IoT)</li>
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Key Turning Points */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                  The "Aha!" Moments That Saved JavaScript
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                    <h4 className="text-xl font-bold text-red-800 mb-3">🚨 The Dark Ages (2000-2005)</h4>
                    <p className="text-gray-700 mb-3">
                      JavaScript was often dismissed as a "toy language" for amateur developers. 
                      Browser incompatibilities made development frustrating, and many serious 
                      programmers avoided it entirely.
                    </p>
                    <p className="text-sm text-red-600">
                      <strong>Common attitude:</strong> "Real programmers use Java or C++"
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                    <h4 className="text-xl font-bold text-green-800 mb-3">💡 The Renaissance (2005-2010)</h4>
                    <p className="text-gray-700 mb-3">
                      AJAX and libraries like jQuery made JavaScript powerful and accessible. 
                      Developers realized they could build rich, desktop-like applications in the browser.
                    </p>
                    <p className="text-sm text-green-600">
                      <strong>Turning point:</strong> Google Maps showed what was possible
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">The jQuery Revolution</h3>
                  <p className="mb-4 opacity-90">
                    Released in 2006, jQuery solved the biggest pain point: browser incompatibility. 
                    Suddenly, developers could write code that worked everywhere. It made JavaScript 
                    accessible to millions of developers who were previously intimidated.
                  </p>
                  <div className="bg-black bg-opacity-30 p-4 rounded">
                    <code className="text-yellow-300">
                      {`// Before jQuery: Complex browser-specific code\n`}
                      {`if (document.getElementById) {\n`}
                      {`  // IE way...\n`}
                      {`} else if (document.all) {\n`}
                      {`  // Netscape way...\n`}
                      {`}\n\n`}
                      {`// With jQuery: Simple and consistent\n`}
                      {`$('#myElement').hide();`}
                    </code>
                  </div>
                </div>
              </motion.div>

              {/* Modern JavaScript */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
                  JavaScript Today: More Powerful Than Anyone Imagined
                </h2>

                <div className="bg-gray-800 text-white p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-bold text-yellow-300 mb-4">🌐 The Universal Language</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-700 p-4 rounded">
                      <div className="text-3xl mb-2">98%</div>
                      <div className="text-sm">of websites use JavaScript</div>
                    </div>
                    <div className="bg-gray-700 p-4 rounded">
                      <div className="text-3xl mb-2">14M+</div>
                      <div className="text-sm">developers worldwide</div>
                    </div>
                    <div className="bg-gray-700 p-4 rounded">
                      <div className="text-3xl mb-2">2B+</div>
                      <div className="text-sm">devices running JS</div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  From its humble beginnings as a 10-day project, JavaScript has become the 
                  <strong> backbone of modern web development</strong>. It's used by companies like Google, 
                  Facebook, Netflix, and Microsoft to build applications used by billions of people.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Brendan Eich's Reflection</h4>
                  <p className="text-gray-700 italic">
                    "I think the success of JavaScript is a great example of how a simple, 
                    flexible language can evolve to meet the needs of its users. We never imagined 
                    it would become this important when we created it in those 10 days back in 1995."
                  </p>
                </div>
              </motion.div>

              {/* Lesson and Next Steps */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold mb-4">The Journey Continues...</h2>
                <p className="mb-6 opacity-90 text-lg">
                  JavaScript's story teaches us that great things often start small. What began as 
                  a "quick fix" now powers the digital world. And the best part? <strong>You're part of this story too.</strong>
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1">
                    Next: JavaScript Features & Advantages →
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition">
                    Practice Exercise: Timeline Quiz
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

export default HistoryOfJavaScript;
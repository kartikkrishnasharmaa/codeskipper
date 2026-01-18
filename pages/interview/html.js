import { useState } from "react";
import Layout from '@/components/layouts/InterviewLayout';
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHtml5, FaCode, FaLaptop, FaMobile, FaSearch, FaRocket } from 'react-icons/fa';

const HtmlInterview = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  // HTML Interview Questions Data
const interviewQuestions = {
  basic: [
    {
      question: "What is HTML and what is its role in web development?",
      answer: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structural foundation of a website, similar to how a building's framework defines its structure. HTML uses elements and tags to define content like headings, paragraphs, images, links, and forms. While CSS handles styling and JavaScript adds interactivity, HTML remains the essential skeleton that holds everything together."
    },
    {
      question: "Explain the difference between HTML elements and tags.",
      answer: "HTML tags are the opening and closing markers that define an element, while HTML elements are the complete package including the tags and the content between them. For example: <p>This is a paragraph</p> - Here, <p> and </p> are tags, and the entire thing including the content is the paragraph element."
    },
    {
      question: "What are HTML attributes and provide some common examples?",
      answer: "HTML attributes provide additional information about elements and are always specified in the opening tag. Common attributes include: 'id' for unique identification, 'class' for styling, 'src' for image sources, 'href' for links, 'alt' for alternative text, 'title' for tooltips, and 'style' for inline CSS. Attributes help modify element behavior and appearance."
    },
    {
      question: "What is the purpose of the DOCTYPE declaration?",
      answer: "The DOCTYPE declaration (<!DOCTYPE html>) tells the web browser which version of HTML the page is written in. In modern web development, it ensures the browser renders the page in standards mode, providing consistent rendering across different browsers. It's not an HTML tag but an instruction to the browser about the document type."
    },
    {
      question: "Explain the difference between <div> and <span> elements.",
      answer: "Both <div> and <span> are container elements, but they serve different purposes. <div> is a block-level element used to group larger sections of content and creates a line break before and after. <span> is an inline element used to style or manipulate smaller portions of text within a block-level element without disrupting the flow."
    },
    {
      question: "What are semantic HTML elements and why are they important?",
      answer: "Semantic HTML elements clearly describe their meaning to both browser and developer. Examples include <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer>. They improve accessibility for screen readers, enhance SEO by helping search engines understand content structure, make code more readable, and provide better context for developers."
    },
    {
      question: "How does the browser process an HTML document?",
      answer: "The browser processes HTML documents through several steps: 1) Parsing the HTML to create DOM (Document Object Model), 2) Loading external resources like CSS and images, 3) Creating CSSOM (CSS Object Model), 4) Combining DOM and CSSOM to form Render Tree, 5) Layout calculation for element positions, and 6) Painting the actual pixels on screen. This process is known as critical rendering path."
    },
    {
      question: "What is the difference between <ul> and <ol> elements?",
      answer: "<ul> creates an unordered list with bullet points, while <ol> creates an ordered list with sequential numbers or letters. Both use <li> for list items. Use <ul> when the order doesn't matter (like features list) and <ol> when sequence is important (like instructions or rankings)."
    },
    {
      question: "How do you create a hyperlink in HTML?",
      answer: "Use the <a> anchor tag with the 'href' attribute: <a href='https://example.com'>Visit Example</a>. You can link to external websites, internal pages, email addresses (mailto:), phone numbers (tel:), or specific sections within the same page using fragment identifiers (#section)."
    },
    {
      question: "What is the purpose of the alt attribute in images?",
      answer: "The alt attribute provides alternative text for images when they cannot be displayed. It's crucial for: 1) Accessibility - screen readers read alt text to visually impaired users, 2) SEO - search engines use it to understand image content, 3) User experience - shows text when images fail to load, and 4) Legal compliance - required by web accessibility standards."
    },
    {
      question: "Explain the difference between <b> and <strong> tags.",
      answer: "Both make text bold visually, but semantically they're different. <b> is purely presentational - it just makes text bold without implying importance. <strong> indicates that the text has strong importance or urgency. Screen readers may emphasize <strong> content, while <b> gets no special treatment. Similarly, <i> is for stylistic italic, while <em> indicates emphasized text."
    },
    {
      question: "What are void elements in HTML?",
      answer: "Void elements are HTML elements that cannot have any content and don't require a closing tag. They are self-closing. Common void elements include: <img>, <br>, <hr>, <input>, <meta>, <link>, and <source>. In XHTML, they're written with a trailing slash like <img />, but in HTML5 the slash is optional."
    },
    {
      question: "How do you create a table in HTML?",
      answer: "HTML tables are created using <table> element with <tr> for table rows, <td> for table data cells, and <th> for header cells. Additional elements include <thead> for header section, <tbody> for main content, <tfoot> for footer, and <caption> for table description. Example: <table><tr><th>Name</th><th>Age</th></tr><tr><td>John</td><td>25</td></tr></table>"
    },
    {
      question: "What is the purpose of the form element?",
      answer: "The <form> element creates an interactive form for user input. Key attributes include: 'action' (URL to submit data), 'method' (GET or POST), 'enctype' (encoding type for file uploads). Forms contain input elements like <input>, <textarea>, <select>, <button> that collect user data for processing on the server or client-side."
    },
    {
      question: "Explain the different types of input elements.",
      answer: "Common input types include: 'text' for single-line text, 'password' for masked input, 'email' for email validation, 'number' for numeric input, 'date' for date picker, 'checkbox' for multiple selections, 'radio' for single selection, 'file' for file uploads, 'submit' for form submission, and 'button' for custom buttons. HTML5 introduced many new types like 'url', 'tel', 'color', 'range'."
    }
  ],
  intermediate: [
    {
      question: "Explain the HTML5 document structure with proper semantic elements.",
      answer: `A proper HTML5 document structure uses semantic elements for better organization:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <nav><!-- Navigation links --></nav>
    </header>
    <main>
        <article>
            <section><!-- Content sections --></section>
        </article>
        <aside><!-- Sidebar content --></aside>
    </main>
    <footer><!-- Footer content --></footer>
</body>
</html>

This structure improves accessibility, SEO, and code maintainability.`
    },
    {
      question: "What are data attributes and how are they useful?",
      answer: "Data attributes (data-*) allow us to store extra information in HTML elements without affecting presentation or semantics. They're accessed via JavaScript using element.dataset.property or CSS using attr() function. For example: <div data-user-id='123' data-role='admin'> can store user information that JavaScript can access without making server requests. They're perfect for storing element-specific data that doesn't need visual representation."
    },
    {
      question: "Explain the difference between localStorage, sessionStorage, and cookies.",
      answer: "localStorage persists data until explicitly cleared, with ~5MB storage limit. sessionStorage lasts only for the browser session and clears when tab closes, also ~5MB. Cookies have ~4KB limit, are sent with every HTTP request, and can have expiration dates. Use localStorage for long-term client storage, sessionStorage for temporary session data, and cookies for server communication and authentication."
    },
    {
      question: "What is the purpose of the viewport meta tag and why is it crucial for responsive design?",
      answer: `The viewport meta tag <meta name="viewport" content="width=device-width, initial-scale=1.0"> controls how a webpage is displayed on mobile devices. Without it, mobile browsers render pages at typical desktop screen width and then scale them down, making content appear tiny. This tag ensures the page width matches the device width and sets the initial zoom level, forming the foundation for responsive web design.`
    },
    {
      question: "How do you optimize HTML for better SEO?",
      answer: "Key HTML SEO optimizations include: 1) Using proper semantic structure with <header>, <main>, <article>, etc. 2) Adding meaningful <title> and <meta description> tags 3) Using heading tags (<h1> to <h6>) hierarchically 4) Providing alt attributes for images 5) Creating clean URL structures 6) Using schema markup 7) Ensuring fast loading times 8) Making site mobile-friendly 9) Using canonical tags to avoid duplicate content 10) Creating XML sitemaps."
    },
    {
      question: "Explain the difference between async and defer attributes in script tags.",
      answer: "Both async and defer load scripts without blocking HTML parsing, but they differ in execution timing. async scripts execute immediately after download, potentially out of order. defer scripts execute in order after HTML parsing completes, just before DOMContentLoaded. Use async for independent scripts (analytics), defer for scripts that depend on DOM, and neither for scripts that must run immediately for page rendering."
    },
    {
      question: "What are web workers and when would you use them?",
      answer: "Web Workers run JavaScript in background threads separate from the main execution thread, preventing UI blocking during heavy computations. They can't directly manipulate DOM but communicate with main thread via messages. Use Web Workers for: image processing, large data calculations, cryptography, syntax highlighting, or any CPU-intensive tasks that would otherwise freeze the user interface."
    },
    {
      question: "What is the difference between GET and POST methods in forms?",
      answer: "GET appends form data to the URL as query parameters, has length limitations, is cached by browsers, and should be used for safe operations like searches. POST sends data in the request body, has no size limitations, is not cached, and should be used for destructive operations like creating/updating data. GET is idempotent (same request multiple times has same effect), while POST is not."
    },
    {
      question: "How do you implement responsive images in HTML5?",
      answer: "Use the <picture> element with multiple <source> elements for different screen sizes and the <img> as fallback. Example: <picture><source media='(min-width: 800px)' srcset='large.jpg'><source media='(min-width: 400px)' srcset='medium.jpg'><img src='small.jpg' alt='description'></picture>. Also use srcset and sizes attributes for resolution switching: <img srcset='small.jpg 400w, large.jpg 800w' sizes='(max-width: 600px) 400px, 800px' src='fallback.jpg'>"
    },
    {
      question: "What are ARIA attributes and why are they important?",
      answer: "ARIA (Accessible Rich Internet Applications) attributes enhance accessibility for dynamic content and complex UI components. Key attributes include: aria-label for element descriptions, aria-hidden to hide from screen readers, aria-expanded for toggle states, aria-required for form fields, and role to define element purpose. They bridge accessibility gaps when semantic HTML isn't sufficient, especially for custom widgets and JavaScript-enhanced interfaces."
    },
    {
      question: "Explain the purpose of the <canvas> element.",
      answer: "<canvas> provides a drawing surface for creating graphics, animations, and game visuals using JavaScript. It's resolution-dependent and ideal for: data visualization, photo manipulation, game development, and real-time video processing. Unlike SVG (vector-based, DOM-managed), canvas is bitmap-based and requires manual rendering. Use getContext('2d') for 2D graphics or getContext('webgl') for 3D rendering."
    },
    {
      question: "What is the difference between <iframe> and <object> elements?",
      answer: "<iframe> embeds another HTML document within the current page, commonly used for videos, maps, or external content. <object> embeds external resources like PDFs, Flash, or images. <iframe> is better for full HTML documents, while <object> is more versatile for various media types. Both can pose security risks, so use sandbox attribute for <iframe> and validate embedded content."
    },
    {
      question: "How do you create accessible forms?",
      answer: "Key accessibility practices: 1) Use <label> with for attribute matching input id 2) Group related inputs with <fieldset> and <legend> 3) Provide clear error messages 4) Use aria-describedby for additional instructions 5) Ensure proper tab order 6) Use required attribute with aria-required 7) Provide autocomplete attributes 8) Use appropriate input types 9) Ensure sufficient color contrast 10) Test with screen readers."
    },
    {
      question: "What is the purpose of the <template> element?",
      answer: "<template> contains HTML fragments that aren't rendered immediately but can be instantiated later using JavaScript. The content is inert until activated - scripts don't run, images don't load, and it's not visible. It's perfect for: reusable component templates, client-side rendering, and dynamic content generation. Use template.content.cloneNode(true) to activate and insert the template content."
    },
    {
      question: "Explain the difference between physical and logical tags in HTML.",
      answer: "Physical tags define visual appearance regardless of context (like <b> for bold, <i> for italic). Logical tags convey meaning and let browsers decide presentation based on context (like <strong> for importance, <em> for emphasis). Modern best practice favors logical tags for better accessibility, SEO, and separation of concerns, allowing CSS to handle presentation while HTML handles semantics."
    }
  ],
  advanced: [
    {
      question: "Explain the Shadow DOM and its practical applications.",
      answer: "Shadow DOM is a browser technology that enables encapsulation for HTML and CSS. It allows hidden DOM trees to be attached to elements in the regular DOM tree, providing style and markup encapsulation. This is fundamental to Web Components. Practical applications include: creating reusable components with isolated styles, building widget libraries, implementing complex UI elements that don't leak styles, and developing framework-agnostic components."
    },
    {
      question: "What is the Accessibility Tree and how does HTML contribute to it?",
      answer: "The Accessibility Tree is a modified version of the DOM that assistive technologies (screen readers) use. HTML contributes through: semantic elements (<nav>, <button>), ARIA attributes (aria-label, role), proper heading structure, form labels, alt text for images, and keyboard navigation support. Well-structured HTML automatically creates a rich Accessibility Tree, while poor HTML requires extensive ARIA attributes to compensate."
    },
    {
      question: "How do you implement lazy loading for images and iframes?",
      answer: `For modern browsers, use the native loading attribute: <img src="image.jpg" loading="lazy" alt="description">. For broader support, implement Intersection Observer API:

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));

This significantly improves initial page load performance.`
    },
    {
      question: "Explain the Critical Rendering Path and how to optimize it.",
      answer: "The Critical Rendering Path is the sequence of steps browsers take to render content: 1) DOM construction 2) CSSOM construction 3) Render Tree 4) Layout 5) Paint. Optimization strategies include: minimizing render-blocking CSS/JS, leveraging browser caching, compressing resources, using efficient CSS selectors, minimizing DOM depth, implementing code splitting, and using CSS containment for complex layouts."
    },
    {
      question: "What are HTML Web Components and how do they differ from traditional components?",
      answer: "HTML Web Components are custom HTML elements created using Web Components standards: Custom Elements, Shadow DOM, and HTML Templates. Unlike framework components (React, Vue), they're native to browsers, framework-agnostic, and have better performance. They enable true component encapsulation and reusability across different projects and frameworks, though they lack the rich ecosystem of JavaScript frameworks."
    },
    {
      question: "How do you implement real-time communication in HTML5?",
      answer: "HTML5 provides several real-time communication APIs: WebSockets for full-duplex communication (ideal for chat, gaming), Server-Sent Events for one-way server-to-client updates (news feeds, notifications), and WebRTC for peer-to-peer audio/video communication. Choose based on requirements: WebSockets for interactive apps, SSE for live updates, WebRTC for media streaming and P2P data channels."
    },
    {
      question: "Explain the difference between repaint and reflow in browser rendering.",
      answer: "Repaint occurs when visual changes happen that don't affect layout (color, visibility changes). Reflow (layout) happens when changes affect element geometry and position, forcing the browser to recalculate layout. Reflow is more expensive and can trigger additional reflows in child/parent elements. Optimize by: batching DOM changes, using transform/opacity for animations (they don't trigger reflow), and avoiding forced synchronous layouts in JavaScript."
    },
    {
      question: "What is the Microdata specification and how is it used?",
      answer: "Microdata is a HTML5 specification for nesting structured metadata within existing content. It uses itemscope, itemtype, and itemprop attributes to mark up information like people, events, products, etc. This structured data helps search engines understand page content better and can lead to rich snippets in search results. Example: <div itemscope itemtype='http://schema.org/Person'><span itemprop='name'>John Doe</span></div>"
    },
    {
      question: "How do you implement offline functionality with HTML5?",
      answer: "Use the Application Cache (AppCache) or Service Workers for offline functionality. Service Workers are more modern and powerful: they act as a proxy between the app and network, enabling offline access, background sync, and push notifications. Implement by: 1) Registering a service worker 2) Installing and caching assets 3) Intercepting fetch events 4) Managing cache strategies (cache-first, network-first, etc.)."
    },
    {
      question: "What is the difference between SVG and Canvas?",
      answer: "SVG is vector-based, uses DOM, is resolution-independent, and better for interactive graphics with fewer elements. Canvas is bitmap-based, uses immediate mode rendering, is resolution-dependent, and better for complex animations, games, or image processing. SVG is accessible and SEO-friendly, while Canvas requires manual accessibility implementation. Choose SVG for scalable UI elements, Canvas for performance-intensive graphics."
    },
    {
      question: "Explain the Content Security Policy (CSP) and how to implement it.",
      answer: "CSP is a security layer that helps prevent XSS attacks by specifying which content sources are allowed. Implement via HTTP header or meta tag: <meta http-equiv='Content-Security-Policy' content='default-src self; script-src https://trusted.cdn.com; style-src self unsafe-inline;'>. Policies define allowed sources for scripts, styles, images, fonts, etc. CSP can block inline scripts/styles, eval(), and restrict resource loading to trusted domains only."
    },
    {
      question: "What are the performance implications of deep DOM trees?",
      answer: "Deep DOM trees negatively impact performance by: 1) Increasing memory usage 2) Slowing down style recalculation 3) Making DOM queries slower 4) Increasing reflow/repaint costs 5) Reducing JavaScript execution speed. Optimize by: keeping DOM depth minimal, using CSS containment, avoiding deeply nested flex/grid layouts, using virtual DOM for large lists, and implementing efficient update strategies."
    },
    {
      question: "How do you implement internationalization (i18n) in HTML?",
      answer: "Key i18n features: 1) Use lang attribute on <html> element 2) Mark up bidirectional text with <bdi> and dir attribute 3) Use <ruby> for phonetic annotations 4) Implement language switching 5) Format numbers, dates, and currencies appropriately 6) Use lang attribute on specific elements for language changes 7) Provide proper character encoding with UTF-8 8) Consider RTL (right-to-left) layouts for languages like Arabic and Hebrew."
    },
    {
      question: "What is the difference between the dataset property and getAttribute?",
      answer: "dataset provides access to data-* attributes as camelCase properties (element.dataset.userId), while getAttribute accesses the exact attribute name (element.getAttribute('data-user-id')). dataset automatically converts kebab-case to camelCase and only works with data-* attributes. getAttribute works with any attribute but returns strings. dataset is more convenient for data-* attributes, while getAttribute is more versatile for all attributes."
    },
    {
      question: "Explain the importance of the tabindex attribute.",
      answer: "tabindex controls keyboard navigation order and focusability: tabindex='0' includes element in natural tab order, tabindex='-1' makes element focusable programmatically but not via tab, positive values create custom tab order (avoid these). Proper tabindex is crucial for accessibility, ensuring all interactive elements are reachable via keyboard and logical navigation order is maintained for screen reader users."
    }
  ]
};

  const stats = [
    { number: "98%", text: "of websites use HTML" },
    { number: "100+", text: "HTML elements available" },
    { number: "1993", text: "HTML first introduced" },
    { number: "HTML5", text: "Current standard" }
  ];

  return (
    <Layout>
     
    
<Head>
  {/* Basic SEO */}
  <title>HTML Interview Questions & Answers 2024 | Code Skipper</title>
  <meta
    name="description"
    content="Comprehensive collection of HTML interview questions for web developers. Prepare for HTML5, semantic HTML, web storage, and advanced HTML concepts interview questions."
  />
  <meta
    name="keywords"
    content="HTML interview questions, HTML5 interview, web development interview, frontend interview, HTML coding questions, semantic HTML, web storage interview, HTML5 features, web components, accessibility HTML"
  />
  <meta name="author" content="Kartik Sharma" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Open Graph / Social Media */}
  <meta property="og:title" content="HTML Interview Questions & Answers 2024 | Code Skipper" />
  <meta
    property="og:description"
    content="Master HTML interviews with our comprehensive question bank. Covering basic to advanced HTML concepts, semantic elements, and modern web standards."
  />
  <meta property="og:image" content="https://codeskipper.in/Images/logo.png" />
  <meta property="og:url" content="https://codeskipper.in/interview-questions/html" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Code Skipper" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="HTML Interview Questions & Answers 2024 | Code Skipper" />
  <meta
    name="twitter:description"
    content="Prepare for HTML interviews with 45+ questions covering basic to advanced concepts. Learn HTML5, semantic markup, web storage, and modern web standards."
  />
  <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />
  <meta name="twitter:creator" content="@codeskipper" />

  {/* Technical SEO */}
  <link rel="canonical" href="https://codeskipper.in/interview-questions/html" />
  <link rel="icon" href="/Images/favicon.ico" />
  <link rel="apple-touch-icon" href="/Images/logo.png" />
  
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#FF6B35" />
  <meta name="language" content="en" />
  <meta name="revisit-after" content="7 days" />

  {/* Additional Meta Tags */}
  <meta name="subject" content="HTML Interview Questions and Answers" />
  <meta name="classification" content="Web Development, Programming, Interview Preparation" />
  <meta name="topic" content="HTML Interview Questions" />
  <meta name="summary" content="Comprehensive HTML interview questions collection for web developers" />
  
  {/* Structured Data for SEO */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "HTML Interview Questions & Answers 2024",
        "description": "Comprehensive collection of HTML interview questions covering basic to advanced concepts for web developers",
        "author": {
          "@type": "Person",
          "name": "Kartik Sharma"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Code Skipper",
          "logo": {
            "@type": "ImageObject",
            "url": "https://codeskipper.in/Images/logo.png"
          }
        },
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString().split('T')[0],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://codeskipper.in/interview-questions/html"
        },
        "articleSection": "Web Development Interview Questions",
        "keywords": "HTML interview questions, HTML5, web development, frontend interview",
        "inLanguage": "en",
        "educationalLevel": "Beginner to Advanced"
      })
    }}
  />
</Head>


      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center py-12"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-orange-500 p-4 rounded-full shadow-lg">
                <FaHtml5 className="text-6xl text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              HTML Interview Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the foundation of web development with comprehensive HTML interview questions 
              covering basic concepts to advanced modern web standards.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.text}</div>
              </div>
            ))}
          </motion.div>

          {/* Difficulty Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab("basic")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "basic"
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <FaCode className="inline mr-2" />
                Basic Level
              </button>
              <button
                onClick={() => setActiveTab("intermediate")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "intermediate"
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <FaLaptop className="inline mr-2" />
                Intermediate
              </button>
              <button
                onClick={() => setActiveTab("advanced")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "advanced"
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <FaRocket className="inline mr-2" />
                Advanced
              </button>
            </div>

            {/* Questions Section */}
            <div className="space-y-6">
              {interviewQuestions[activeTab].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-800 pr-4">
                        {index + 1}. {item.question}
                      </h3>
                      <svg
                        className={`w-5 h-5 text-orange-500 transform transition-transform duration-300 ${
                          openQuestion === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {openQuestion === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      <div className="p-6 bg-gray-50">
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tips Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Pro Tips for HTML Interviews
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <FaSearch className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Understand Semantic HTML</h3>
                  <p className="text-gray-600">Interviewers highly value knowledge of semantic elements and their impact on accessibility and SEO.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaMobile className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Focus on Performance</h3>
                  <p className="text-gray-600">Be prepared to discuss HTML optimization techniques and their impact on page loading times.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <FaCode className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Practice Code Examples</h3>
                  <p className="text-gray-600">Be ready to write clean, well-structured HTML code during technical assessments.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <FaRocket className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Know Modern Standards</h3>
                  <p className="text-gray-600">Stay updated with HTML5 features, web components, and emerging web standards.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center py-8"
          >
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready for More Interview Prep?</h2>
              <p className="mb-6 opacity-90">
                Continue your preparation with our comprehensive collection of interview questions 
                covering all web technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/interview">
                  <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition duration-300">
                    Browse All Technologies
                  </button>
                </Link>
      
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HtmlInterview;
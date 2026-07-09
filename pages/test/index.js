import { useState, useEffect, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import SimpleLayout from "@/components/SimpleLayout";
import { useRouter } from "next/router";

// ─── Icons (inline SVGs for performancee) ──────────────────────────────────────
const Icons = {
    networking: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
        </svg>
    ),
    programming: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
    ),
    dsa: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
    ),
    dbms: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
    ),
    os: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    ),
    webdev: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
        </svg>
    ),
    cybersecurity: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
    ),
    cloud: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
    ),
    ai: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
    ),
    ml: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    se: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
    ),
    architecture: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    ),
    search: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    ),
    close: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    ),
    filter: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
    ),
    trophy: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    clock: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    book: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    ),
};

// ─── Subject Data ──────────────────────────────────────────────────────────────
const MCQS_SUBJECTS = [
    // ── Computer Science ──
    {
        id: 1,
        name: "Computer Networking",
        category: "Computer Science",
        link: "/test/networking",
        description: "OSI model, TCP/IP, routing, switching & network protocols.",
        icon: "networking",
        difficulty: "Intermediate",
        color: "from-blue-500 to-cyan-400",
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-700",
    },
    {
        id: 2,
        name: "Data Structures & Algorithms",
        category: "Computer Science",
        link: "/test/dsa",
        description: "Arrays, trees, graphs, sorting, searching & complexity.",
        icon: "dsa",
        difficulty: "Advanced",
        color: "from-purple-500 to-indigo-400",
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-700",
    },
    {
        id: 3,
        name: "Database Management Systems",
        category: "Computer Science",
        link: "/test/dbms",
        description: "SQL, normalization, transactions, indexing & NoSQL.",
        icon: "dbms",
        difficulty: "Intermediate",
        color: "from-emerald-500 to-teal-400",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        text: "text-emerald-700",
    },
    {
        id: 4,
        name: "Operating Systems",
        category: "Computer Science",
        link: "/test/os",
        description: "Processes, memory, file systems, concurrency & virtualization.",
        icon: "os",
        difficulty: "Intermediate",
        color: "from-amber-500 to-orange-400",
        bg: "bg-amber-50",
        border: "border-amber-200",
        text: "text-amber-700",
    },
    {
        id: 5,
        name: "Computer Architecture",
        category: "Computer Science",
        link: "/test/architecture",
        description: "CPU, pipelining, memory hierarchy, I/O & parallel systems.",
        icon: "architecture",
        difficulty: "Advanced",
        color: "from-rose-500 to-pink-400",
        bg: "bg-rose-50",
        border: "border-rose-200",
        text: "text-rose-700",
    },

    // ── Programming ──
    {
        id: 6,
        name: "Programming Fundamentals",
        category: "Programming",
        link: "/test/programming",
        description: "Variables, loops, functions, OOP & error handling.",
        icon: "programming",
        difficulty: "Beginner",
        color: "from-sky-500 to-blue-400",
        bg: "bg-sky-50",
        border: "border-sky-200",
        text: "text-sky-700",
    },

    // ── Web Development ──
    {
        id: 7,
        name: "Web Development",
        category: "Web Development",
        link: "/test/webdev",
        description: "HTML, CSS, JavaScript, React, Node.js & performance.",
        icon: "webdev",
        difficulty: "Intermediate",
        color: "from-fuchsia-500 to-pink-400",
        bg: "bg-fuchsia-50",
        border: "border-fuchsia-200",
        text: "text-fuchsia-700",
    },

    // ── Data Science ──
    {
        id: 8,
        name: "Artificial Intelligence",
        category: "Data Science",
        link: "/test/ai",
        description: "Search, logic, planning, NLP, robotics & ethics.",
        icon: "ai",
        difficulty: "Advanced",
        color: "from-violet-500 to-purple-400",
        bg: "bg-violet-50",
        border: "border-violet-200",
        text: "text-violet-700",
    },
    {
        id: 9,
        name: "Machine Learning",
        category: "Data Science",
        link: "/test/ml",
        description: "Regression, classification, clustering, neural networks & LLMs.",
        icon: "ml",
        difficulty: "Advanced",
        color: "from-indigo-500 to-blue-400",
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        text: "text-indigo-700",
    },

    // ── Cybersecurity ──
    {
        id: 10,
        name: "Cybersecurity",
        category: "Cybersecurity",
        link: "/test/cybersecurity",
        description: "Cryptography, network security, malware, risk & compliance.",
        icon: "cybersecurity",
        difficulty: "Intermediate",
        color: "from-red-500 to-rose-400",
        bg: "bg-red-50",
        border: "border-red-200",
        text: "text-red-700",
    },

    // ── Cloud Computing ──
    {
        id: 11,
        name: "Cloud Computing",
        category: "Cloud Computing",
        link: "/test/cloud",
        description: "AWS, Azure, GCP, virtualization, containers & serverless.",
        icon: "cloud",
        difficulty: "Intermediate",
        color: "from-cyan-500 to-sky-400",
        bg: "bg-cyan-50",
        border: "border-cyan-200",
        text: "text-cyan-700",
    },

    // ── Software Engineering ──
    {
        id: 12,
        name: "Software Engineering",
        category: "Software Engineering",
        link: "/test/se",
        description: "SDLC, agile, design patterns, testing & DevOps.",
        icon: "se",
        difficulty: "Intermediate",
        color: "from-teal-500 to-emerald-400",
        bg: "bg-teal-50",
        border: "border-teal-200",
        text: "text-teal-700",
    },
];

// ─── Helper: category order ──────────────────────────────────────────────────
const CATEGORY_ORDER = [
    "Computer Science",
    "Programming",
    "Web Development",
    "Data Science",
    "Cybersecurity",
    "Cloud Computing",
    "Software Engineering",
];

// ─── Component ──────────────────────────────────────────────────────────────
export default function OnlineTestPage() {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Get unique categories in a defined order
    const categories = useMemo(() => {
        const unique = [...new Set(MCQS_SUBJECTS.map((s) => s.category))];
        return CATEGORY_ORDER.filter((c) => unique.includes(c));
    }, []);

    // Filter subjects
    const filteredSubjects = useMemo(() => {
        let result = MCQS_SUBJECTS;
        if (selectedCategory) {
            result = result.filter((s) => s.category === selectedCategory);
        }
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase().trim();
            result = result.filter(
                (s) =>
                    s.name.toLowerCase().includes(q) ||
                    s.description.toLowerCase().includes(q) ||
                    s.category.toLowerCase().includes(q)
            );
        }
        return result;
    }, [selectedCategory, searchQuery]);

    // Get icon component by name
    const getIcon = (name) => Icons[name] || Icons.programming;

    // Stats
    const totalTests = MCQS_SUBJECTS.length;
    const totalQuestions = MCQS_SUBJECTS.reduce((acc, s) => acc + s.questions, 0);

    // ─── Structured Data (JSON-LD) ──────────────────────────────────────────
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Computer Science Quiz & Test Collection | Code Skipper",
        "description": "Practice your computer science knowledge with our curated collection of multiple-choice quizzes across networking, programming, DSA, DBMS, and more.",
        "url": "https://codeskipper.in/test",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": MCQS_SUBJECTS.map((subject, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "Course",
                    "name": subject.name,
                    "description": subject.description,
                    "url": `https://codeskipper.in${subject.link}`,
                    "educationalLevel": subject.difficulty,
                    "numberOfItems": subject.questions,
                    "about": {
                        "@type": "Thing",
                        "name": subject.category,
                    },
                },
            })),
        },
        "publisher": {
            "@type": "Organization",
            "name": "Code Skipper",
            "logo": {
                "@type": "ImageObject",
                "url": "https://codeskipper.in/Images/logo.png",
            },
        },
    };

    // ─── Render ──────────────────────────────────────────────────────────────
    return (
        <>
            <Head>
                <title>Online Computer Science Tests & Quizzes | Code Skipper</title>
                <meta
                    name="description"
                    content="Test your computer science knowledge with our free online quizzes. Practice networking, programming, DSA, DBMS, OS, AI, ML & more. Track your progress and improve your skills."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#1e293b" />
                <meta charSet="UTF-8" />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="computer science quiz, online test, networking quiz, programming test, DSA practice, DBMS questions, OS quiz, AI test, ML quiz, web development test, cybersecurity quiz, cloud computing test, software engineering quiz, Code Skipper, codeskipper.in"
                />
                <link rel="canonical" href="https://codeskipper.in/test" />

                {/* Open Graph */}
                <meta property="og:title" content="Online Computer Science Tests & Quizzes | Code Skipper" />
                <meta
                    property="og:description"
                    content="Test your computer science knowledge with our free online quizzes. Practice networking, programming, DSA, DBMS, OS, AI, ML & more."
                />
                <meta property="og:image" content="https://codeskipper.in/Images/logo.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="150" />
                <meta property="og:image:height" content="150" />
                <meta property="og:url" content="https://codeskipper.in/test" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Code Skipper" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Online Computer Science Tests & Quizzes | Code Skipper" />
                <meta
                    name="twitter:description"
                    content="Test your computer science knowledge with our free online quizzes. Practice networking, programming, DSA, DBMS, OS, AI, ML & more."
                />
                <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />

                {/* JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />

                {/* Preconnect for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </Head>

            <SimpleLayout>
                <main
                    className="min-h-screen py-8 px-4 sm:px-6 lg:px-8"
                    role="main"
                    aria-label="Online Test Collection"
                >
                    <div className="max-w-7xl mx-auto">
                        {/* ─── Hero Section ────────────────────────────────── */}
                        <section
                            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 shadow-2xl mb-10"
                            aria-labelledby="hero-title"
                        >
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

                            <div className="relative px-6 py-12 sm:py-16 lg:px-10 lg:py-20 text-center">
                                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/10">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                                    </span>
                                    <span className="text-xs font-medium text-white/80 tracking-wide">
                                        {totalTests} Tests · {totalQuestions} Questions
                                    </span>
                                </div>

                                <h1
                                    id="hero-title"
                                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
                                >
                                    <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                                        Challenge Your Mind
                                    </span>
                                    <br />
                                    <span className="text-white/90">Computer Science Quiz Adventure</span>
                                </h1>

                                <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/70 leading-relaxed">
                                    Practice with our curated collection of multiple-choice quizzes.
                                    Track your progress and master every subject — from networking to AI.
                                </p>

                                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
                                    <span className="inline-flex items-center gap-1.5 text-white/60 bg-white/5 rounded-full px-3 py-1 border border-white/5">
                                        {Icons.trophy}
                                        <span>50+ Questions Each</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 text-white/60 bg-white/5 rounded-full px-3 py-1 border border-white/5">
                                        {Icons.clock}
                                        <span>Timed Practice</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 text-white/60 bg-white/5 rounded-full px-3 py-1 border border-white/5">
                                        {Icons.book}
                                        <span>12 Subjects</span>
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* ─── Controls: Search + Filter ──────────────────── */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                            {/* Search */}
                            <div className="relative w-full sm:w-80">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                    {Icons.search}
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search subjects..."
                                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all"
                                    aria-label="Search for test subjects"
                                    role="searchbox"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                                        aria-label="Clear search"
                                    >
                                        {Icons.close}
                                    </button>
                                )}
                            </div>

                            {/* Category filter (desktop) */}
                            <div className="hidden md:flex flex-wrap items-center gap-2">
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${!selectedCategory
                                        ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                                        : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                                        }`}
                                    aria-label="Clear category filter"
                                    aria-current={!selectedCategory ? "page" : undefined}
                                >
                                    All
                                </button>
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${selectedCategory === category
                                            ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                                            : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                                            }`}
                                        aria-label={`Filter by ${category}`}
                                        aria-current={selectedCategory === category ? "page" : undefined}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            {/* Mobile filter toggle */}
                            <div className="md:hidden w-full sm:w-auto">
                                <button
                                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-2xl text-slate-700 font-medium hover:bg-slate-50 transition-all shadow-sm"
                                    aria-expanded={isFilterOpen}
                                    aria-controls="mobile-filter-menu"
                                >
                                    {Icons.filter}
                                    <span>Filter</span>
                                    {selectedCategory && (
                                        <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-blue-100 text-blue-700 rounded-full">
                                            1
                                        </span>
                                    )}
                                </button>

                                {isFilterOpen && (
                                    <div
                                        id="mobile-filter-menu"
                                        className="mt-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-xl grid grid-cols-2 gap-2"
                                        role="menu"
                                    >
                                        <button
                                            onClick={() => { setSelectedCategory(null);
                                                setIsFilterOpen(false); }}
                                            className={`text-sm font-medium px-3 py-2 rounded-xl transition-all ${!selectedCategory
                                                ? "bg-blue-600 text-white shadow-sm"
                                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                                }`}
                                            role="menuitem"
                                        >
                                            All
                                        </button>
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => { setSelectedCategory(category);
                                                    setIsFilterOpen(false); }}
                                                className={`text-sm font-medium px-3 py-2 rounded-xl transition-all ${selectedCategory === category
                                                    ? "bg-blue-600 text-white shadow-sm"
                                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                                    }`}
                                                role="menuitem"
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* ─── Active filter indicator ────────────────────── */}
                        {selectedCategory && (
                            <div className="flex items-center gap-2 mb-4 text-sm text-slate-600">
                                <span className="font-medium">Filtered by:</span>
                                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
                                    {selectedCategory}
                                    <button
                                        onClick={() => setSelectedCategory(null)}
                                        className="hover:text-blue-900 transition-colors"
                                        aria-label="Clear filter"
                                    >
                                        {Icons.close}
                                    </button>
                                </span>
                            </div>
                        )}

                        {/* ─── Results count ──────────────────────────────── */}
                        <div className="flex items-center justify-between mb-5">
                            <p className="text-sm text-slate-500 font-medium" aria-live="polite">
                                {filteredSubjects.length} {filteredSubjects.length === 1 ? "test" : "tests"} available
                                {searchQuery && ` matching “${searchQuery}”`}
                            </p>
                        </div>

                        {/* ─── Subject Grid ────────────────────────────────── */}
                        {filteredSubjects.length === 0 ? (
                            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-sm">
                                <div className="text-5xl mb-4">🔍</div>
                                <h3 className="text-xl font-semibold text-slate-800">No tests found</h3>
                                <p className="text-slate-500 mt-1">
                                    Try adjusting your search or filter criteria.
                                </p>
                                <button
                                    onClick={() => { setSearchQuery("");
                                        setSelectedCategory(null); }}
                                    className="mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        ) : (
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                                role="list"
                            >
                                {filteredSubjects.map((subject) => {
                                    const IconComponent = getIcon(subject.icon);
                                    return (
                                        <Link
                                            key={subject.id}
                                            href={subject.link}
                                            className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-3xl"
                                            role="listitem"
                                        >
                                            <div
                                                className={`h-full bg-white rounded-3xl border ${subject.border} shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1.5`}
                                            >
                                                <div className={`p-5 ${subject.bg} border-b ${subject.border}`}>
                                                    <div className="flex items-start justify-between">
                                                        <div className={`p-2.5 rounded-2xl bg-white/80 shadow-sm text-${subject.text} group-hover:scale-105 transition-transform duration-300`}>
                                                            <span className="block w-7 h-7">{IconComponent}</span>
                                                        </div>
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${subject.bg} ${subject.text} border ${subject.border}`}>
                                                            {subject.difficulty}
                                                        </span>
                                                    </div>
                                                    <h3 className={`mt-3 text-lg font-bold ${subject.text} group-hover:underline underline-offset-2 transition-all`}>
                                                        {subject.name}
                                                    </h3>
                                                    <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                                                        {subject.description}
                                                    </p>
                                                </div>
                                                <div className="px-5 py-3 flex items-center justify-between text-xs text-slate-500">
                                                    <span className="flex items-center gap-1.5">
                                                        {Icons.book}
                                                        {subject.questions} Questions
                                                    </span>
                                                    <span className="flex items-center gap-1.5 text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-200">
                                                        Start Test
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        )}

                    </div>
                </main>
            </SimpleLayout>
        </>
    );
}
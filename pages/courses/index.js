import { useState, useEffect } from "react";
import Head from "next/head";
import coursesData from "../data/courses";
import SimpleLayout from "@/components/SimpleLayout";
import {
  FaClock,
  FaUsers,
  FaGraduationCap,
  FaChartLine,
  FaCheck,
  FaTimes,
  FaWhatsapp,
  FaRupeeSign,
  FaCertificate,
  FaFire,
  FaBolt,
  FaStar,
  FaBook,
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaDatabase,
  FaRobot,
  FaCloud,
  FaShieldAlt,
  FaProjectDiagram,
  FaHandshake,
  FaCalendarCheck,
  FaUserTie,
  FaVideo,
  FaFileCode,
  FaQuestionCircle
} from "react-icons/fa";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(coursesData[0].category);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectedCategory = coursesData.find(
    (cat) => cat.category === activeCategory
  );

  const openWhatsApp = (message) => {
    const phone = "+91905758560"; // Your WhatsApp number
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const openCourseModal = (course) => {
    setLoading(true);
    setSelectedCourse(course);
    
    // Simulate API call delay
    setTimeout(() => {
      setModalOpen(true);
      setLoading(false);
      document.body.style.overflow = 'hidden';
    }, 300);
  };

  const closeCourseModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setSelectedCourse(null);
    }, 300);
    document.body.style.overflow = 'auto';
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalOpen]);

  return (
    <>
      {/* Enhanced SEO */}
      <Head>
        <title>Industry-Ready Live Online Courses | Master Web Development, Data Analytics & Mobile Apps</title>
        <meta
          name="description"
          content="Join 5000+ students in mastering industry-relevant skills with our certified online courses. Learn Web Development, Data Analytics, Mobile App Development with live projects, mentorship, and placement assistance."
        />
        <meta name="keywords" content="online courses, full stack web development, data analytics, react native, nextjs, frontend developer, backend developer, mobile app development, certified courses, placement assistance, learn to code, coding bootcamp" />
        <meta name="author" content="Codeskipper Academy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Industry-Ready Online Courses | Master Web Dev, Data Analytics & Mobile Apps" />
        <meta property="og:description" content="Join 5000+ students in mastering industry-relevant skills with our certified online courses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codeskipper.in/courses" />
        <meta property="og:image" content="https://codeskipper.in/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industry-Ready Online Courses" />
        <meta name="twitter:description" content="Master in-demand tech skills with project-based learning" />
        <meta name="twitter:image" content="https://codeskipper.in/twitter-image.jpg" />
        <link rel="canonical" href="https://codeskipper.in/courses" />
        
        {/* JSON-LD Structured Data for Courses */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Codeskipper Academy",
              "description": "Online tech education platform offering industry-relevant courses",
              "url": "https://codeskipper.in",
              "logo": "https://codeskipper.in/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "contact@codeskipper.in"
              },
              "sameAs": [
                "https://facebook.com/codeskipper",
                "https://twitter.com/codeskipper",
                "https://linkedin.com/company/codeskipper"
              ],
              "offers": {
                "@type": "Offer",
                "category": "Online Courses",
                "availability": "https://schema.org/InStock"
              },
              "course": coursesData.flatMap(category => 
                category.courses.map(course => ({
                  "@type": "Course",
                  "name": course.title,
                  "description": course.description,
                  "provider": {
                    "@type": "Organization",
                    "name": "Codeskipper Academy"
                  },
                  "educationalCredentialAwarded": "Certificate of Completion",
                  "timeToComplete": course.duration,
                  "offers": {
                    "@type": "Offer",
                    "price": course.discountPrice,
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock"
                  }
                }))
              )
            })
          }}
        />
      </Head>

      <SimpleLayout>
        <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 px-4 py-8 md:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-6xl mx-auto text-center mb-12">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <FaCertificate className="text-blue-600" /> 
                <span>Certified Industry-Ready Courses</span>
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Launch Your Tech Career <span className="text-blue-600">in 6 Months</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Learn from industry experts with hands-on projects, 1:1 mentorship, and dedicated placement support. 
                Join 5000+ successful alumni working at top tech companies.
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mb-12">
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaUsers className="text-3xl text-blue-600" />
                  <div className="text-3xl font-bold text-gray-900">5000+</div>
                </div>
                <div className="text-gray-600 font-medium">Students Trained</div>
              </div>
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaChartLine className="text-3xl text-green-600" />
                  <div className="text-3xl font-bold text-gray-900">94%</div>
                </div>
                <div className="text-gray-600 font-medium">Placement Rate</div>
              </div>
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaHandshake className="text-3xl text-purple-600" />
                  <div className="text-3xl font-bold text-gray-900">250+</div>
                </div>
                <div className="text-gray-600 font-medium">Hiring Partners</div>
              </div>
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaUserTie className="text-3xl text-orange-600" />
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                </div>
                <div className="text-gray-600 font-medium">Mentor Support</div>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Choose Your <span className="text-blue-600">Learning Path</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Select from our industry-vetted courses designed to get you job-ready
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {coursesData.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${activeCategory === cat.category
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl"
                      : "bg-white text-gray-700 shadow-lg hover:shadow-xl"
                    }`}
                >
                  <span className="text-xl">{cat.icon}</span>
                  <span>{cat.category}</span>
                  {cat.isHot && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      <FaFire />
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Courses Grid */}
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {selectedCategory.courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100"
                  onClick={() => openCourseModal(course)}
                >
                  <div className="relative">
                    <div className="h-56 bg-gradient-to-r from-blue-500 to-blue-600 relative overflow-hidden">
                      <img
                        src={course.image}
                        alt={`Learn ${course.title} - Codeskipper Academy`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1">
                        <FaFire /> Limited Seats
                      </span>
                      {course.isTrending && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1">
                          <FaBolt /> Trending
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-4 right-4">
                      {course.isCertified && (
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-2 rounded-full flex items-center gap-1">
                          <FaCertificate /> Certified
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <FaGraduationCap className="text-blue-500" />
                          <span>{course.level || 'Beginner Friendly'}</span>
                        </div>
                      </div>
                      {course.rating && (
                        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
                          <FaStar className="text-yellow-500" />
                          <span className="font-bold text-gray-900">{course.rating}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-5 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-5">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-blue-500" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaUsers className="text-green-500" />
                        <span>{course.enrolled.toLocaleString()}+ Enrolled</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-5">
                      <div>
                        <div className="flex items-center gap-2">
                          <FaRupeeSign className="text-gray-700" />
                          <span className="text-2xl font-bold text-gray-900">
                            {course.discountPrice.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <span className="line-through">₹{course.price.toLocaleString()}</span>
                          <span className="text-green-600 font-semibold ml-2">
                            Save {Math.round((1 - course.discountPrice / course.price) * 100)}%
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">EMI Starting at</div>
                        <div className="font-bold text-gray-900">
                          ₹{Math.round(course.discountPrice / 12).toLocaleString()}/mo
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openCourseModal(course);
                        }}
                        className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <FaBook /> Details
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openWhatsApp(course.whatsappMsg);
                        }}
                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                      >
                        <FaWhatsapp /> Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-6xl mx-auto my-16">
            <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your Career?
                </h2>
                <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
                  Get personalized guidance from our career experts and start your journey today
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => openWhatsApp("Hi, I'm interested in your courses. Can I get more details?")}
                    className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-3"
                  >
                    <FaWhatsapp className="text-xl" />
                    Book Free Career Consultation
                  </button>
                  <button
                    onClick={() => openWhatsApp("Hi, I'd like to talk to a counselor about course options")}
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-3"
                  >
                    <FaQuestionCircle className="text-xl" />
                    Talk to Counselor
                  </button>
                </div>
                <p className="mt-6 text-sm opacity-80">
                  ⚡ Limited seats available for next batch | 100% Placement Assistance
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Loading Overlay */}
        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-700 font-semibold">Loading course details...</p>
            </div>
          </div>
        )}

        {/* Course Details Modal */}
        {modalOpen && selectedCourse && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
              onClick={closeCourseModal}
            />
            
            {/* Modal Content */}
            <div className="relative min-h-screen flex items-center justify-center p-4">
              <div className={`relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 ${modalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                {/* Modal Header */}
                <div className="sticky top-0 z-10 bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      {selectedCourse.category === 'Web Development' && <FaLaptopCode className="w-6 h-6 text-blue-600" />}
                      {selectedCourse.category === 'Data Analytics' && <FaDatabase className="w-6 h-6 text-blue-600" />}
                      {selectedCourse.category === 'Mobile Development' && <FaMobileAlt className="w-6 h-6 text-blue-600" />}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedCourse.title}</h2>
                      <p className="text-gray-600 text-sm">{selectedCourse.tagline}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeCourseModal}
                    className="p-3 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Close modal"
                  >
                    <FaTimes className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="overflow-y-auto max-h-[calc(90vh-290px)]">
                  <div className="p-6">
                    {/* Course Hero */}
                    <div className="relative mb-8 rounded-xl overflow-hidden">
                      <img
                        src={selectedCourse.image}
                        alt={`${selectedCourse.title} Course - Codeskipper`}
                        className="w-full h-72 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Complete Program Includes:</h3>
                        <div className="flex flex-wrap gap-3">
                          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm flex items-center gap-2">
                            <FaCertificate /> Industry Certificate
                          </span>
                          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm flex items-center gap-2">
                            <FaProjectDiagram /> 5+ Real Projects
                          </span>
                          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm flex items-center gap-2">
                            <FaHandshake /> Placement Assistance
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <FaClock className="w-5 h-5 text-blue-600" />
                          <h3 className="font-semibold text-gray-900">Duration</h3>
                        </div>
                        <p className="text-gray-700 font-medium">{selectedCourse.duration}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <FaGraduationCap className="w-5 h-5 text-green-600" />
                          <h3 className="font-semibold text-gray-900">Level</h3>
                        </div>
                        <p className="text-gray-700 font-medium">{selectedCourse.level || 'Beginner to Advanced'}</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <FaChartLine className="w-5 h-5 text-purple-600" />
                          <h3 className="font-semibold text-gray-900">Placement Rate</h3>
                        </div>
                        <p className="text-gray-700 font-medium">94% Success Rate</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <FaCalendarCheck className="w-5 h-5 text-orange-600" />
                          <h3 className="font-semibold text-gray-900">Next Batch</h3>
                        </div>
                        <p className="text-gray-700 font-medium">15th Jan 2024</p>
                      </div>
                    </div>

                    {/* Detailed Description */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                        <FaBook className="text-blue-600" />
                        Course Overview
                      </h3>
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {selectedCourse.detailedDescription || selectedCourse.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="flex items-start gap-3">
                            <FaCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-gray-900">Prerequisites</h4>
                              <p className="text-gray-600">Basic computer knowledge, no coding experience required</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <FaCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-gray-900">Ideal For</h4>
                              <p className="text-gray-600">Students, Working Professionals, Career Changers</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Curriculum */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                        <FaCode className="text-blue-600" />
                        What You'll Learn
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedCourse.curriculum?.map((item, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <FaCheck className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                        <FaStar className="text-yellow-500" />
                        Course Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                          { icon: <FaVideo />, text: "Live Interactive Sessions", color: "text-red-500" },
                          { icon: <FaFileCode />, text: "Industry Projects", color: "text-green-500" },
                          { icon: <FaUserTie />, text: "1:1 Mentorship", color: "text-purple-500" },
                          { icon: <FaHandshake />, text: "Placement Assistance", color: "text-blue-500" },
                          { icon: <FaCertificate />, text: "Certificate of Completion", color: "text-orange-500" },
                          { icon: <FaCloud />, text: "Lifetime Access", color: "text-cyan-500" }
                        ].map((feature, index) => (
                          <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                            <div className={`text-xl ${feature.color}`}>
                              {feature.icon}
                            </div>
                            <span className="text-gray-700 font-medium">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 text-white">
                      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">Special Offer</h3>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="text-4xl font-bold flex items-center">
                              <FaRupeeSign className="w-6 h-6" />
                              {selectedCourse.discountPrice.toLocaleString()}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-gray-300 line-through text-lg">
                                ₹{selectedCourse.price.toLocaleString()}
                              </span>
                              <span className="text-green-400 font-bold">
                                Save ₹{(selectedCourse.price - selectedCourse.discountPrice).toLocaleString()} ({Math.round((1 - selectedCourse.discountPrice / selectedCourse.price) * 100)}% OFF)
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm">
                            EMI options available starting at ₹{Math.round(selectedCourse.discountPrice / 12).toLocaleString()}/month
                          </p>
                          <div className="mt-4 flex items-center gap-2 text-sm">
                            <FaClock className="text-yellow-400" />
                            <span>Offer ends in 5 days</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-4">
                          <button
                            onClick={() => openWhatsApp(selectedCourse.whatsappMsg)}
                            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                          >
                            <FaWhatsapp className="text-xl" />
                            Enroll Now & Get Started
                          </button>
                          <button
                            onClick={() => openWhatsApp("I need more information about " + selectedCourse.title)}
                            className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-3"
                          >
                            <FaQuestionCircle className="text-xl" />
                            Talk to Counselor
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </SimpleLayout>
    </>
  );
}
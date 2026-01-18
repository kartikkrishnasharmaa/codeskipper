// pages/support.js
import { motion } from 'framer-motion';
import {
  FaHeart,
  FaHandHoldingHeart,
  FaRocket,
  FaUsers,
  FaGraduationCap,
  FaCode,
  FaCopy,
  FaCheckCircle,
  FaShare,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaQrcode,
  FaMobileAlt,
  FaShieldAlt,
  FaAward,
  FaLightbulb
} from 'react-icons/fa';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import SimpleLayout from '@/components/SimpleLayout';

export default function SupportCodeSkipper() {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareOnWhatsApp = () => {
    const text = `Support CodeSkipper - India's leading coding education platform! UPI ID: ${upiId}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
     <Head>
  {/* Basic SEO */}
  <title>Support CodeSkipper.in | Help Us Educate 50,000+ Students</title>
  <meta
    name="description"
    content="Support CodeSkipper.in in our mission to provide free coding education for students. Your donation helps us reach 50,000+ learners and improve our tutorials, projects, and learning tools."
  />
  <meta
    name="keywords"
    content="support, donate, contribute, coding education, help students, UPI payment, CodeSkipper donations, sponsor coding education"
  />
  <meta name="author" content="Kartik Sharma" />

  {/* Open Graph / Social Media */}
  <meta property="og:title" content="Support CodeSkipper.in | Help Us Educate 50,000+ Students" />
  <meta
    property="og:description"
    content="Join us in supporting CodeSkipper.in — your donation helps provide free coding education to thousands of learners and improve digital literacy."
  />
  <meta property="og:image" content="https://codeskipper.in/Images/logo.png" />
  <meta property="og:url" content="https://codeskipper.in/main/donate" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="CodeSkipper.in" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Support CodeSkipper.in | Help Us Educate 50,000+ Students" />
  <meta
    name="twitter:description"
    content="Contribute to CodeSkipper.in’s mission to make coding education free and accessible for everyone."
  />
  <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />
  <meta name="twitter:site" content="@CodeSkipper" />

  {/* Technical SEO */}
  <link rel="canonical" href="https://codeskipper.in/main/donate" />
  <link rel="icon" href="/Images/favicon.ico" />
  <meta name="robots" content="index, follow" />

  {/* Structured Data / Schema Markup */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Support CodeSkipper.in",
        "url": "https://codeskipper.in/main/donate",
        "description":
          "Support CodeSkipper.in in our mission to provide free coding education. Your donations help us reach 50,000+ students across India.",
        "publisher": {
          "@type": "Organization",
          "name": "CodeSkipper.in",
          "url": "https://codeskipper.in",
          "logo": {
            "@type": "ImageObject",
            "url": "https://codeskipper.in/Images/logo.png"
          },
          "sameAs": [
            "https://www.facebook.com/CodeSkipper",
            "https://twitter.com/CodeSkipper",
            "https://www.instagram.com/CodeSkipper.in"
          ]
        },
        "potentialAction": {
          "@type": "DonateAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://codeskipper.in/main/donate"
          },
          "recipient": {
            "@type": "Organization",
            "name": "CodeSkipper.in"
          }
        }
      })
    }}
  />
</Head>

      <SimpleLayout>
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50">
          {/* Hero Section */}
          <section className="pt-24 pb-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-pink-600/5 transform skew-y-3 scale-125"></div>
            <div className="max-w-7xl mx-auto relative">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-block mb-6"
                >
                  <span className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg flex items-center justify-center">
                    <FaHeart className="mr-2" />
                    Make a Difference
                  </span>
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                  Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">CodeSkipper</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Help us continue providing free, quality coding education to thousands of students across India.
                  Your support fuels our mission to make coding education accessible to everyone.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Why Support Section */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Your Support Matters</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Every contribution helps us reach more students and create better learning resources
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {impactAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all border border-red-100"
                  >
                    <div className="text-4xl text-red-600 mb-4 flex justify-center">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{area.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Payment Methods Section */}
          <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Support Us via UPI</h2>
                <p className="text-xl text-gray-600">Quick, secure, and 100% goes towards our mission</p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* UPI ID Section */}
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="text-center mb-8">
                    <FaMobileAlt className="text-5xl text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Direct UPI Transfer</h3>
                    <p className="text-gray-600">Use any UPI app to send your support</p>
                  </div>

                  {/* UPI ID Display */}
                  <div className="bg-gray-100 p-6 rounded-xl mb-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-2">Send to UPI ID:</div>
                      
                      <motion.button
                        onClick={copyToClipboard}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center mx-auto"
                      >
                        {copied ? (
                          <>
                            <FaCheckCircle className="mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <FaCopy className="mr-2" />
                            Copy UPI ID
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <FaShieldAlt className="text-green-500 mr-2" />
                      Secure payment through UPI
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaAward className="text-blue-500 mr-2" />
                      Instant confirmation
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaHeart className="text-red-500 mr-2" />
                      100% goes to education
                    </div>
                  </div>
                </motion.div>

                {/* QR Code Section */}
                <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="text-center mb-8">
                    <FaQrcode className="text-5xl text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Scan QR Code</h3>
                    <p className="text-gray-600">Use your UPI app to scan and pay</p>
                  </div>

                  {/* QR Code Display */}
                  <div className="bg-white p-6 rounded-xl border-2 border-dashed border-gray-300 mb-6">
                    <div className="text-center">
                      <div className="w-64 h-64 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        {/* Replace with your actual QR code image */}
                        <div className="text-center">
                          <div className="text-6xl text-gray-400 mb-2">
                            <FaQrcode />
                          </div>
                          <p className="text-gray-500 text-sm">QR Code Image</p>
                          <p className="text-gray-400 text-xs mt-1">
                            <Image src="/Images/subject/qrcode.jpeg" alt="QR Code" width={256} height={256} />
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="text-center">
                    <motion.button
                      onClick={() => setShowQR(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      View Full Size QR
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-yellow-800 mb-4 flex items-center">
                  <FaLightbulb className="mr-2" />
                  How to Pay via UPI
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {paymentSteps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold text-yellow-800 mb-2">{step.title}</h4>
                      <p className="text-yellow-700 text-sm">{step.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Impact Stories */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Your Impact in Action</h2>
                <p className="text-xl text-gray-600">See how contributions have helped students succeed</p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {successStories.map((story, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl border border-green-100"
                  >
                    <div className="text-green-600 text-4xl mb-4">{story.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{story.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{story.description}</p>
                    <div className="mt-4 text-2xl font-bold text-green-600">{story.impact}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Share Section */}
          <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <FaShare className="text-5xl mx-auto mb-6 text-purple-200" />
                <h2 className="text-4xl font-bold mb-6">Spread the Word</h2>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                  Can't contribute financially? Help us by sharing our mission with others who might be able to support.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <motion.button
                    onClick={shareOnWhatsApp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center"
                  >
                    <FaWhatsapp className="mr-2" />
                    Share on WhatsApp
                  </motion.button>

                  <motion.button
                    onClick={() => {
                      const text = `Support CodeSkipper - Helping thousands of students learn coding for free! UPI: ${upiId}`;
                      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
                      window.open(url, '_blank');
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors flex items-center"
                  >
                    <FaTwitter className="mr-2" />
                    Share on Twitter
                  </motion.button>

                  <motion.button
                    onClick={() => {
                      const text = `I'm supporting CodeSkipper.in in their mission to provide free coding education. Consider contributing too! UPI: ${upiId}`;
                      const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://codeskipper.in')}&summary=${encodeURIComponent(text)}`;
                      window.open(url, '_blank');
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <FaLinkedin className="mr-2" />
                    Share on LinkedIn
                  </motion.button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <h3 className="text-2xl font-bold mb-4">Other Ways to Support</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div className="flex items-start">
                      <FaGraduationCap className="text-purple-300 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Become a Mentor</h4>
                        <p className="text-purple-200 text-sm">Share your knowledge with students</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaCode className="text-purple-300 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Contribute Content</h4>
                        <p className="text-purple-200 text-sm">Help create learning resources</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <FaHandHoldingHeart className="text-5xl text-red-500 mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Together, We Can Educate Thousands
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
                  Your support, no matter how small, makes a huge difference in a student's learning journey.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={copyToClipboard}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-red-700 hover:to-pink-700 transition-colors shadow-lg flex items-center justify-center"
                  >
                    <FaCopy className="mr-2" />
                    Copy UPI ID
                  </motion.button>

                  <motion.button
                    onClick={shareOnWhatsApp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center"
                  >
                    <FaShare className="mr-2" />
                    Share with Friends
                  </motion.button>
                </div>

             
              </motion.div>
            </div>
          </section>

          {/* QR Code Modal */}
          {showQR && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowQR(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white p-8 rounded-2xl max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Scan QR Code</h3>
                  <div className="bg-gray-100 p-6 rounded-xl mb-4">
                    {/* Replace with your actual QR code image */}
                    <div className="w-64 h-64 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <FaQrcode className="text-6xl mx-auto mb-2" />
                        <Image src="/Images/subject/qrcode.jpeg" alt="QR Code" width={276} height={256} />

                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">Use any UPI app to scan this code</p>
                  <p className="text-sm text-gray-500">UPI ID: {upiId}</p>
                  <motion.button
                    onClick={() => setShowQR(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </SimpleLayout>
    </>
  );
}

// Data Arrays
const impactAreas = [
  {
    icon: <FaGraduationCap />,
    title: "Free Education",
    description: "Keep our core learning resources free for all students, regardless of their financial background"
  },
  {
    icon: <FaCode />,
    title: "Better Content",
    description: "Create high-quality tutorials, projects, and learning materials for emerging technologies"
  },
  {
    icon: <FaRocket />,
    title: "Platform Development",
    description: "Improve our coding tools, interactive features, and user experience for better learning"
  },
  {
    icon: <FaUsers />,
    title: "Community Growth",
    description: "Expand our mentorship programs and community support for students"
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App",
    description: "Develop mobile applications to make learning accessible on-the-go"
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description: "Build AI-powered features and advanced learning tools for personalized education"
  }
];

const paymentSteps = [
  {
    title: "Open UPI App",
    description: "Open Google Pay, PhonePe, Paytm, or any UPI app"
  },
  {
    title: "Enter UPI ID",
    description: "Paste or type: 9057508560@ptaxis"
  },
  {
    title: "Send Any Amount",
    description: "Any amount helps - from ₹10 to ₹10,000"
  }
];

const successStories = [
  {
    icon: "🎓",
    title: "Placement Success",
    description: "500+ students got placed in tech companies with our free interview preparation",
    impact: "500+ Jobs"
  },
  {
    icon: "💻",
    title: "Projects Built",
    description: "Students created 1000+ real-world projects using our free resources and guidance",
    impact: "1000+ Projects"
  },
  {
    icon: "🌍",
    title: "Students Reached ",
    description: "Provided free coding education to students from 500+ colleges across India",
    impact: "50,000+ Students"
  }
];

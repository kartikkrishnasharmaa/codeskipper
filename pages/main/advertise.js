// pages/advertise.js
import { motion } from 'framer-motion';
import {
  FaChartLine,
  FaUsers,
  FaBullseye,
  FaAd,
  FaMoneyBillWave,
  FaMobileAlt,
  FaDesktop,
  FaSearch,
  FaRocket,
  FaHandshake,
  FaStar,
  FaCalendarAlt,
  FaShieldAlt,
  FaFileContract,
  FaCheckCircle,
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaRupeeSign
} from 'react-icons/fa';
import Head from 'next/head';
import SimpleLayout from '@/components/SimpleLayout';


export default function AdvertiseWithUs() {
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
  <title>Advertise With CodeSkipper.in | Reach 50,000+ Coding Students</title>
  <meta
    name="description"
    content="Partner with CodeSkipper.in to reach 50,000+ active coding students. Affordable advertising starting from ₹100. Display ads, sponsored content, and custom partnerships."
  />
  <meta
    name="keywords"
    content="advertising, sponsor, partnership, coding education ads, student audience, tech advertising, CodeSkipper advertising"
  />
  <meta name="author" content="Kartik Sharma" />

  {/* Open Graph / Social Media */}
  <meta property="og:title" content="Advertise With CodeSkipper.in | Reach 50,000+ Coding Students" />
  <meta
    property="og:description"
    content="Partner with CodeSkipper.in to reach 50,000+ active coding students. Affordable ad packages, sponsored posts, and brand collaborations."
  />
  <meta property="og:image" content="https://codeskipper.in/Images/logo.png" />
  <meta property="og:url" content="https://codeskipper.in/main/advertise" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="CodeSkipper.in" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Advertise With CodeSkipper.in | Reach 50,000+ Coding Students" />
  <meta
    name="twitter:description"
    content="Grow your brand with CodeSkipper.in — advertise to a focused community of 50,000+ coding learners and professionals."
  />
  <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />
  <meta name="twitter:site" content="@CodeSkipper" />

  {/* Technical SEO */}
  <link rel="canonical" href="https://codeskipper.in/main/advertise" />
  <link rel="icon" href="/Images/favicon.ico" />
  <meta name="robots" content="index, follow" />

  {/* Structured Data / Schema Markup */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Advertise With CodeSkipper.in",
        "url": "https://codeskipper.in/main/advertise",
        "description": "Partner with CodeSkipper.in to reach 50,000+ active coding students through affordable advertising options and sponsored collaborations.",
        "publisher": {
          "@type": "Organization",
          "name": "CodeSkipper.in",
          "url": "https://codeskipper.in",
          "logo": {
            "@type": "ImageObject",
            "url": "https://codeskipper.in/Images/logo.png"
          },
          "audience": {
            "@type": "PeopleAudience",
            "audienceType": "Coding Students and Developers",
            "geographicArea": {
              "@type": "Country",
              "name": "India"
            },
            "numberOfEmployees": "5"
          }
        }
      })
    }}
  />
</Head>

      <SimpleLayout>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
          {/* Hero Section */}
          <section className="pt-24 pb-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 transform skew-y-3 scale-125"></div>
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
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                    Starting from just ₹100
                  </span>
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                  Advertise With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">CodeSkipper</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Connect with India's most passionate coding students and tech enthusiasts.
                  Affordable advertising solutions starting from just ₹100. Reach 50,000+ active learners.
                </p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
                >
                  <motion.a
                    href="mailto:kartik.thedeveloper@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center"
                  >
                    <FaEnvelope className="mr-2" />
                    Email Us Now
                  </motion.a>
                  <motion.a
                    href="#pricing"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center"
                  >
                    <FaRupeeSign className="mr-2" />
                    View Pricing
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Why Advertise Section */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose CodeSkipper?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Tap into India's fastest-growing community of coding enthusiasts and future tech leaders
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {whyAdvertise.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all border border-blue-100"
                  >
                    <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    <div className="mt-4 text-2xl font-bold text-blue-600">{item.stat}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Audience Demographics */}
          <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Audience</h2>
                <p className="text-xl text-gray-600">Highly engaged students ready to explore new opportunities</p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-bold text-gray-800 mb-8">Student Demographics</h3>
                  <div className="space-y-6">
                    {demographics.map((demo, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <div className="text-3xl text-blue-600 mr-6">
                          {demo.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-800 mb-2">{demo.title}</h4>
                          <p className="text-gray-600">{demo.description}</p>
                        </div>
                        <div className="text-2xl font-bold text-blue-600 ml-4">
                          {demo.percentage}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Audience Insights</h3>
                  <div className="space-y-4">
                    {insights.map((insight, index) => (
                      <div key={index} className="flex items-start">
                        <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{insight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                    <h4 className="font-semibold text-blue-800 mb-3">Perfect For Advertising:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {perfectFor.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          <span className="text-blue-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Advertising Solutions - Updated Pricing Section */}
          <section id="pricing" className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Affordable Advertising Plans</h2>
                <p className="text-xl text-gray-600">Flexible pricing starting from just ₹100. Contact us for custom packages.</p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {adOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className={`border-2 rounded-2xl p-8 hover:shadow-xl transition-all ${option.featured
                        ? 'border-blue-500 bg-blue-50 relative'
                        : 'border-gray-200 bg-white'
                      }`}
                  >
                    {option.featured && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-4xl text-blue-600 mb-4">{option.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{option.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {option.features.map((item, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center mt-auto">
                      <div className="text-3xl font-bold text-gray-800 mb-2">{option.price}</div>
                      <div className="text-gray-500 text-sm mb-4">{option.note}</div>
                      <motion.a
                        href={`mailto:kartik.thedeveloper@gmail.com?subject=Advertising Inquiry - ${option.title}&body=Hello, I'm interested in the ${option.title} package starting at ${option.price}. Please send me more details.`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center"
                      >
                        Get Details
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Custom Plan */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold mb-4">Need a Custom Plan?</h3>
                <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                  We understand every business has unique needs. Contact us for tailored advertising solutions
                  that match your specific goals and budget requirements.
                </p>
                <motion.a
                  href="mailto:kartik.thedeveloper@gmail.com?subject=Custom Advertising Plan Request&body=Hello, I'd like to discuss a custom advertising plan for my business. Please contact me with more information."
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  <FaHandshake className="mr-2" />
                  Discuss Custom Plan
                </motion.a>
              </motion.div>
            </div>
          </section>

          {/* Success Metrics */}
          <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
                <p className="text-xl text-blue-100">See what our advertising partners achieve</p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
              >
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                  >
                    <div className="text-3xl font-bold mb-2">{metric.value}</div>
                    <div className="text-blue-100">{metric.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Testimonials */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 grid md:grid-cols-2 gap-8"
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center space-x-1 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>
                    <p className="text-blue-100 italic mb-4">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-blue-200 text-sm">{testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Contact Section - Replaced Form */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <FaEnvelope className="text-5xl text-blue-600 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Contact us directly for pricing details, available ad slots, and custom advertising solutions.
                  We'll respond within 24 hours with a personalized proposal.
                </p>

                <div className="bg-blue-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Contact Information</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div className="text-center">
                      <FaEnvelope className="text-3xl text-blue-600 mx-auto mb-3" />
                      <div className="font-semibold text-gray-800">Email Us</div>
                      <a
                        href="mailto:kartik.thedeveloper@gmail.com"
                        className="text-blue-600 hover:text-blue-700 break-all"
                      >
                        kartik.thedeveloper@gmail.com
                      </a>
                    </div>
                    <div className="text-center">
                      <FaWhatsapp className="text-3xl text-green-500 mx-auto mb-3" />
                      <div className="font-semibold text-gray-800">WhatsApp</div>
                      <div className="text-gray-600">Business Inquiries</div>
                    </div>
                    <div className="text-center">
                      <FaCalendarAlt className="text-3xl text-purple-600 mx-auto mb-3" />
                      <div className="font-semibold text-gray-800">Response Time</div>
                      <div className="text-gray-600">Within 24 Hours</div>
                    </div>
                  </div>
                </div>

                <motion.a
                  href="mailto:kartik.thedeveloper@gmail.com?subject=Advertising Inquiry - CodeSkipper.in&body=Hello, I'm interested in advertising on CodeSkipper.in. Please send me more information about available options and pricing."
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-colors shadow-lg inline-flex items-center"
                >
                  <FaRocket className="mr-2" />
                  Send Email Inquiry
                </motion.a>

                <p className="text-gray-500 mt-4">
                  We'll provide detailed media kit, available ad slots, and custom pricing based on your requirements.
                </p>
              </motion.div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600">Everything you need to know about advertising with us</p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </div>
      </SimpleLayout>
    </>
  );
}

// Data Arrays
const whyAdvertise = [
  {
    icon: <FaUsers />,
    title: "Targeted Audience",
    description: "Reach students actively learning coding and building tech careers",
    stat: "50K+ Students"
  },
  {
    icon: <FaBullseye />,
    title: "High Engagement",
    description: "Students spend 45+ minutes daily on learning and practice",
    stat: "45+ mins/day"
  },
  {
    icon: <FaChartLine />,
    title: "Proven ROI",
    description: "Average 3.2% CTR and 15% conversion rate for relevant offers",
    stat: "3.2% CTR"
  },
  {
    icon: <FaMobileAlt />,
    title: "Multi-Platform",
    description: "Reach users across web, mobile apps, and social channels",
    stat: "3 Platforms"
  }
];

const demographics = [
  {
    icon: <FaUsers />,
    title: "College Students",
    description: "Undergraduates pursuing computer science and engineering",
    percentage: "68%"
  },
  {
    icon: <FaCalendarAlt />,
    title: "Working Professionals",
    description: "IT professionals upskilling and career changers",
    percentage: "22%"
  },
  {
    icon: <FaSearch />,
    title: "Job Seekers",
    description: "Students preparing for campus placements and interviews",
    percentage: "85%"
  },
  {
    icon: <FaRocket />,
    title: "Career Focused",
    description: "Users actively building projects and portfolios",
    percentage: "92%"
  }
];

const insights = [
  "85% are actively preparing for tech interviews",
  "Average time spent: 45 minutes per session",
  "92% engage with practical coding content",
  "78% are interested in tech products and services",
  "65% make online purchases monthly"
];

const perfectFor = [
  "Coding Courses",
  "Tech Products",
  "Programming Tools",
  "Online Certifications",
  "Laptops & Hardware",
  "Developer Tools",
  "Tech Books",
  "Internship Programs",
  "Job Portals",
  "Coding Bootcamps"
];

const adOptions = [
  {
    icon: <FaAd />,
    title: "Basic Display Ads",
    description: "Simple banner advertisements on strategic pages across our platform",
    features: [
      "Multiple ad sizes available",
      "Strategic page placements",
      "Basic targeting options",
      "30-day campaign minimum"
    ],
    price: "Starting at ₹100",
    note: "Perfect for small businesses",
    featured: false
  },
  {
    icon: <FaFileContract />,
    title: "Sponsored Content",
    description: "Native articles and educational content featuring your brand",
    features: [
      "Native content integration",
      "Social media promotion",
      "Detailed performance analytics",
      "Content creation support"
    ],
    price: "Starting at ₹500",
    note: "Most effective for engagement",
    featured: true
  },
  {
    icon: <FaEnvelope />,
    title: "Premium Packages",
    description: "Custom advertising solutions with maximum visibility and targeting",
    features: [
      "Multiple ad formats",
      "Advanced targeting",
      "Priority placement",
      "Dedicated account manager"
    ],
    price: "Starting at ₹1,000",
    note: "Custom packages available",
    featured: false
  }
];

const metrics = [
  { value: "50,000+", label: "Monthly Active Users" },
  { value: "45 mins", label: "Average Session Duration" },
  { value: "3.2%", label: "Average CTR" },
  { value: "15%", label: "Conversion Rate" }
];

const testimonials = [
  {
    quote: "Advertising with CodeSkipper helped us reach genuine coding enthusiasts. The conversion rate exceeded our expectations by 40%.",
    author: "Rajesh Kumar",
    position: "Marketing Head, CodingMaster Pro"
  },
  {
    quote: "The sponsored content integration was seamless. Students genuinely engaged with our educational material, leading to high-quality leads.",
    author: "Priya Sharma",
    position: "CEO, DevCourses India"
  }
];

const faqs = [
  {
    question: "What is the minimum advertising budget?",
    answer: "We offer advertising solutions starting from just ₹100 for basic display ads. Contact us for detailed pricing based on your specific requirements."
  },
  {
    question: "How do I get started with advertising?",
    answer: "Simply email us at kartik.thedeveloper@gmail.com with your requirements. We'll respond within 24 hours with available options and pricing details."
  },
  {
    question: "Can I target specific student segments?",
    answer: "Yes! We offer targeting by programming language interest, skill level, geographical location, and learning goals to ensure your message reaches the right audience."
  },
  {
    question: "What ad formats do you support?",
    answer: "We support display banners, native content, newsletter sponsorships, dedicated landing pages, and custom partnership opportunities. Contact us for details."
  }
];